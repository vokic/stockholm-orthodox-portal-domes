
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
    const data = await fetchContentfulEntries('blogPost');
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
      return [];
    }
    const posts = data.items.map((entry: any) => {
      const fields = entry.fields || {};
      let imageUrl = undefined;
      if (fields.image && fields.image.sys && fields.image.sys.id) {
        imageUrl = resolveContentfulAsset(data.includes, fields.image.sys.id);
        if (imageUrl && !imageUrl.startsWith("http")) imageUrl = `https:${imageUrl}`;
      }
      return {
        id: entry.sys.id,
        title: fields.title,
        excerpt: fields.excerpt,
        content: fields.content,
        date: fields.date,
        author: fields.author,
        category: fields.category,
        imageUrl,
      };
    });
    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
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
