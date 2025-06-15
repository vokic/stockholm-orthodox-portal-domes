
import { fetchContentfulEntries } from '../lib/contentful';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'service' | 'event' | 'slava';
  highlight?: boolean;
}

// Helper function to extract plain text from Contentful rich text
const extractTextFromRichText = (richTextObj: any): string => {
  if (!richTextObj || !richTextObj.content) {
    return '';
  }
  
  let text = '';
  
  const processNode = (node: any): void => {
    if (node.nodeType === 'text') {
      text += node.value;
    } else if (node.content && Array.isArray(node.content)) {
      node.content.forEach(processNode);
    }
  };
  
  richTextObj.content.forEach(processNode);
  return text.trim();
};

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const data = await fetchContentfulEntries('eventModel');
    
    if (!data || !Array.isArray(data.items)) {
      return [];
    }

    return data.items.map((item: any) => {
      console.log('Processing event entry:', item.sys.id, 'Fields:', item.fields);
      
      // Parse dateTime field if it exists
      let date = '';
      let time = '';
      
      if (item.fields.dateTime) {
        const dateTimeObj = new Date(item.fields.dateTime);
        date = dateTimeObj.toISOString().split('T')[0]; // YYYY-MM-DD format
        time = dateTimeObj.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        });
      } else {
        // Fallback to separate date and time fields if dateTime doesn't exist
        date = item.fields.date || '';
        time = item.fields.time || '';
      }

      // Handle description - extract text from rich text format
      let description = '';
      if (item.fields.description) {
        if (typeof item.fields.description === 'string') {
          description = item.fields.description;
        } else if (item.fields.description.content) {
          // Extract plain text from rich text object
          console.log('Description is rich text object:', item.fields.description);
          description = extractTextFromRichText(item.fields.description);
        } else {
          description = '';
        }
      }

      const event = {
        id: item.sys.id,
        title: item.fields.title || item.fields.name || 'Untitled Event',
        description: description,
        date: date,
        time: time,
        location: item.fields.location || '',
        type: item.fields.type || 'event',
        highlight: item.fields.highlight || false
      };

      console.log('Final event object:', event);
      return event;
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};
