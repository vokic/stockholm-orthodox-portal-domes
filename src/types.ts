
// Blog post type
export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

// Event type
export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
}
