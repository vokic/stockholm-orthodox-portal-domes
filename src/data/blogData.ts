
// Blog Contentful fetching

import { fetchContentfulEntries, resolveContentfulAsset } from "../lib/contentful";

// Define types you expect from Contentful
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: any;
  date: string;
  author: string;
  category?: string;
  pinned?: boolean;
  imageUrl?: string;
  images?: string[]; // Array of all images
}

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
      console.log('No blog posts found or empty response');
      return [];
    }
    
    console.log('Fetched blog posts:', data.items.length);
    console.log('Raw data:', data);
    
    const posts = data.items.map((entry: any) => {
      const fields = entry.fields || {};
      let imageUrl = undefined;
      let images: string[] = [];
      
      console.log('Processing entry:', entry.sys.id, 'Fields:', fields);
      
      // Handle the image field - it's an array of asset links
      const imageField = fields.image;
      
      if (imageField && Array.isArray(imageField) && imageField.length > 0) {
        // Get all images from the array
        images = imageField.map((imageLink: any) => {
          if (imageLink.sys && imageLink.sys.id) {
            const resolvedUrl = resolveContentfulAsset(data.includes, imageLink.sys.id);
            console.log('Resolved image URL:', resolvedUrl);
            if (resolvedUrl && !resolvedUrl.startsWith("http")) {
              return `https:${resolvedUrl}`;
            }
            return resolvedUrl;
          }
          return null;
        }).filter(Boolean);
        
        // Set the first image as the main image URL
        imageUrl = images[0];
      } else {
        console.log('No image field found for entry:', entry.sys.id);
      }
      
      const post = {
        id: entry.sys.id,
        title: fields.title || 'Untitled',
        excerpt: fields.excerpt || '',
        content: fields.content,
        date: fields.date || new Date().toISOString().split('T')[0],
        author: fields.author || 'Unknown',
        category: fields.category,
        pinned: fields.pinned || false,
        imageUrl,
        images,
      };
      
      console.log('Final post object:', post);
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

export const getBlogPost = async (id: string) => {
  const posts = await getBlogPosts();
  return posts.find((p) => p.id === id);
};

export const getLatestArticles = async (limit: number = 3) => {
  const posts = await getBlogPosts();
  return posts.slice(0, limit);
};
