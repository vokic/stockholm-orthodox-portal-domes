
// Blog Contentful fetching

import { fetchContentfulEntries, resolveContentfulAsset } from "../lib/contentful";

interface ContentfulRichTextNode {
  nodeType: string;
  value?: string;
  marks?: { type: string }[];
  content?: ContentfulRichTextNode[];
  data?: Record<string, unknown>;
}

interface ContentfulRichText {
  nodeType: string;
  content: ContentfulRichTextNode[];
}

interface ContentfulAssetLink {
  sys: { id: string };
}

interface ContentfulBlogEntry {
  sys: { id: string };
  fields: {
    title?: string;
    slug?: string;
    excerpt?: string;
    content?: ContentfulRichText;
    date?: string;
    author?: string;
    category?: string;
    pinned?: boolean;
    image?: ContentfulAssetLink[];
  };
}

// Define types you expect from Contentful
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: ContentfulRichText;
  date: string;
  author: string;
  category?: string;
  pinned?: boolean;
  imageUrl?: string;
  images?: string[];
}

// Helper function to generate URL-friendly slugs
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Fetch all blog posts from Contentful, sorted by pinned first, then by latest date descending
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    // Try both content type IDs to match what you have in Contentful
    let data;
    try {
      data = await fetchContentfulEntries('blogPost');
    } catch (e) {
      // If blogPost doesn't exist, try blogPostModel
      data = await fetchContentfulEntries('blogPostModel');
    }
    
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
      return [];
    }
    
    const posts = data.items.map((entry: ContentfulBlogEntry) => {
      const fields = entry.fields || {};
      let imageUrl = undefined;
      let images: string[] = [];

      // Handle the image field - it's an array of asset links
      const imageField = fields.image;

      if (imageField && Array.isArray(imageField) && imageField.length > 0) {
        // Get all images from the array
        images = imageField.map((imageLink: ContentfulAssetLink) => {
          if (imageLink.sys && imageLink.sys.id) {
            const resolvedUrl = resolveContentfulAsset(data.includes, imageLink.sys.id);
            if (resolvedUrl && !resolvedUrl.startsWith("http")) {
              return `https:${resolvedUrl}`;
            }
            return resolvedUrl;
          }
          return null;
        }).filter(Boolean);
        
        // Set the first image as the main image URL
        imageUrl = images[0];
      }
      
      const title = fields.title || 'Untitled';
      const post = {
        id: entry.sys.id,
        slug: fields.slug || generateSlug(title), // Use Contentful slug if available, otherwise generate from title
        title,
        excerpt: fields.excerpt || '',
        content: fields.content,
        date: fields.date || new Date().toISOString().split('T')[0],
        author: fields.author || 'Unknown',
        category: fields.category,
        pinned: fields.pinned || false,
        imageUrl,
        images,
      };
      
      return post;
    });
    
    // Sort by pinned first, then by date descending
    return posts.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (e) {
    console.error('Error fetching blog posts:', e);
    return [];
  }
};

export const getBlogPost = async (slugOrId: string) => {
  const posts = await getBlogPosts();
  // Try to find by slug first, then by ID for backward compatibility
  return posts.find((p) => p.slug === slugOrId || p.id === slugOrId);
};

export const getLatestArticles = async (limit: number = 3) => {
  const posts = await getBlogPosts();
  return posts.slice(0, limit);
};
