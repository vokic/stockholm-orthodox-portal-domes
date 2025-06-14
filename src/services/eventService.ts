
import { fetchContentfulEntries } from '../lib/contentful';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'service' | 'event' | 'slava';
}

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const data = await fetchContentfulEntries('eventModel');
    
    if (!data || !Array.isArray(data.items)) {
      return [];
    }

    return data.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title || item.fields.name || 'Untitled Event',
      description: item.fields.description || '',
      date: item.fields.date || '',
      time: item.fields.time || '',
      location: item.fields.location || '',
      type: item.fields.type || 'event'
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};
