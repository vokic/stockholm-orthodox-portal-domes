
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
  imageUrl?: string;
}

// Fetch all blog posts from Contentful, sorted by latest date descending
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
      
      console.log('Processing entry:', entry.sys.id, 'Fields:', fields);
      
      // Try multiple image field names that might exist in Contentful
      const imageField = fields.image || fields.coverImage || fields.featuredImage || fields.thumbnail;
      
      if (imageField) {
        console.log('Found image field:', imageField);
        
        if (imageField.sys && imageField.sys.id) {
          imageUrl = resolveContentfulAsset(data.includes, imageField.sys.id);
          console.log('Resolved image URL:', imageUrl);
          if (imageUrl && !imageUrl.startsWith("http")) {
            imageUrl = `https:${imageUrl}`;
          }
        } else if (typeof imageField === 'string') {
          // Direct URL
          imageUrl = imageField.startsWith('http') ? imageField : `https:${imageField}`;
        }
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
        imageUrl,
      };
      
      console.log('Final post object:', post);
      return post;
    });
    
    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
