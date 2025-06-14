
import { strapiAPI, StrapiArticle } from '../lib/strapi';

// Fallback data (existing static data)
const fallbackBlogPosts = [
  {
    id: 1,
    title: 'Understanding the Divine Liturgy',
    excerpt: 'The Divine Liturgy is the primary worship service of the Orthodox Church. Learn about its meaning and significance for Orthodox Christians.',
    date: 'April 20, 2025',
    author: 'Father Nicholas',
    category: 'faith',
    imageUrl: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
  },
  {
    id: 2,
    title: 'Icons in Orthodox Worship',
    excerpt: 'Icons are not merely religious art but windows into heaven. Discover the theological significance of icons in Orthodox spirituality.',
    date: 'April 12, 2025',
    author: 'Father Nicholas',
    category: 'faith',
    imageUrl: 'https://images.unsplash.com/photo-1594822381845-2bbeaaa21ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  },
  {
    id: 3,
    title: 'Parish Summer Festival Recap',
    excerpt: 'Our annual summer festival was a great success! See photos and read about all the activities and delicious food that was shared.',
    date: 'March 25, 2025',
    author: 'Parish Council',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
  },
  {
    id: 4,
    title: 'Orthodox Education for Children',
    excerpt: 'Teaching the next generation about our faith is crucial. Read about our Sunday School program and how you can get involved.',
    date: 'March 10, 2025',
    author: 'Education Committee',
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    title: 'The Life of Sveti Sava',
    excerpt: 'Learn about the remarkable life and legacy of Sveti Sava, the patron saint of our church and first Archbishop of Serbia.',
    date: 'February 27, 2025',
    author: 'Father Nicholas',
    category: 'history',
    imageUrl: 'https://images.unsplash.com/photo-1581337204873-1a38e3b8d49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  },
];

// Transform Strapi article to match existing interface
const transformStrapiArticle = (strapiArticle: StrapiArticle) => ({
  id: strapiArticle.id,
  title: strapiArticle.attributes.title,
  excerpt: strapiArticle.attributes.excerpt,
  date: new Date(strapiArticle.attributes.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  author: strapiArticle.attributes.author,
  category: strapiArticle.attributes.category,
  imageUrl: strapiArticle.attributes.imageUrl || '/placeholder.svg',
});

// Get blog posts from Strapi or fallback to static data
export const getBlogPosts = async () => {
  try {
    const response = await strapiAPI.getArticles('filters[published][$eq]=true');
    return response.data.map(transformStrapiArticle);
  } catch (error) {
    console.warn('Failed to fetch articles from Strapi, using fallback data:', error);
    return fallbackBlogPosts;
  }
};

// Get blog post by ID from Strapi or fallback
export const getBlogPost = async (id: number) => {
  try {
    const response = await strapiAPI.getArticle(id);
    return transformStrapiArticle(response.data);
  } catch (error) {
    console.warn('Failed to fetch article from Strapi, using fallback data:', error);
    return fallbackBlogPosts.find(post => post.id === id);
  }
};

// Get the latest N articles
export const getLatestArticles = async (limit: number = 3) => {
  try {
    const posts = await getBlogPosts();
    return posts.slice(0, limit);
  } catch (error) {
    console.warn('Failed to fetch latest articles:', error);
    return fallbackBlogPosts.slice(0, limit);
  }
};

// Export fallback data for compatibility
export const blogPosts = fallbackBlogPosts;
