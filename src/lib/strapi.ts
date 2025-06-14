
// Strapi API configuration and utilities
const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.REACT_APP_STRAPI_API_TOKEN || '';

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiArticle {
  id: number;
  attributes: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
    category: string;
    imageUrl?: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface StrapiEvent {
  id: number;
  attributes: {
    name: string;
    date: string;
    time: string;
    type: 'service' | 'event' | 'slava';
    description?: string;
    location?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

class StrapiAPI {
  private baseUrl: string;
  private token: string;

  constructor() {
    this.baseUrl = STRAPI_URL;
    this.token = STRAPI_API_TOKEN;
  }

  private async fetchFromStrapi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}/api${endpoint}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Strapi API error:', error);
      throw error;
    }
  }

  async getArticles(filters?: string): Promise<StrapiResponse<StrapiArticle[]>> {
    const query = filters ? `?${filters}` : '?populate=*&sort=publishedAt:desc';
    return this.fetchFromStrapi<StrapiResponse<StrapiArticle[]>>(`/articles${query}`);
  }

  async getArticle(id: number): Promise<StrapiResponse<StrapiArticle>> {
    return this.fetchFromStrapi<StrapiResponse<StrapiArticle>>(`/articles/${id}?populate=*`);
  }

  async getEvents(filters?: string): Promise<StrapiResponse<StrapiEvent[]>> {
    const query = filters ? `?${filters}` : '?populate=*&sort=date:asc';
    return this.fetchFromStrapi<StrapiResponse<StrapiEvent[]>>(`/events${query}`);
  }

  async getEvent(id: number): Promise<StrapiResponse<StrapiEvent>> {
    return this.fetchFromStrapi<StrapiResponse<StrapiEvent>>(`/events/${id}?populate=*`);
  }
}

export const strapiAPI = new StrapiAPI();
