
import React from 'react';
import { fetchContentfulEntries } from '../../lib/contentful';
import { useQuery } from '@tanstack/react-query';

interface ServiceAnnouncement {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
}

const convertRichTextToHtml = (richTextObj: any): string => {
  if (!richTextObj || !richTextObj.content) {
    return '';
  }
  
  const processNode = (node: any): string => {
    if (node.nodeType === 'text') {
      let text = node.value;
      
      // Apply formatting based on marks
      if (node.marks && node.marks.length > 0) {
        node.marks.forEach((mark: any) => {
          switch (mark.type) {
            case 'bold':
              text = `<strong>${text}</strong>`;
              break;
            case 'italic':
              text = `<em>${text}</em>`;
              break;
            case 'underline':
              text = `<u>${text}</u>`;
              break;
          }
        });
      }
      
      return text;
    } else if (node.nodeType === 'paragraph') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<p>${content}</p>`;
    } else if (node.nodeType === 'hyperlink') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      const url = node.data?.uri || '#';
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-orthodox-blue hover:text-orthodox-gold underline">${content}</a>`;
    } else if (node.content && Array.isArray(node.content)) {
      return node.content.map(processNode).join('');
    }
    
    return '';
  };
  
  return richTextObj.content.map(processNode).join('');
};

const fetchServiceAnnouncements = async (): Promise<ServiceAnnouncement[]> => {
  try {
    const data = await fetchContentfulEntries('obavestenje');
    
    if (!data || !Array.isArray(data.items)) {
      return [];
    }

    return data.items.map((item: any) => {
      console.log('Processing announcement entry:', item.sys.id, 'Fields:', item.fields);
      
      // Handle content - convert rich text to HTML
      let content = '';
      if (item.fields.content) {
        if (typeof item.fields.content === 'string') {
          content = item.fields.content;
        } else if (item.fields.content.content) {
          content = convertRichTextToHtml(item.fields.content);
        }
      }

      return {
        id: item.sys.id,
        title: item.fields.title || 'Service Announcement',
        content: content,
        publishedDate: item.fields.publishedDate || item.sys.createdAt
      };
    }).sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  } catch (error) {
    console.error('Error fetching service announcements:', error);
    return [];
  }
};

const ServiceAnnouncements: React.FC = () => {
  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ['serviceAnnouncements'],
    queryFn: fetchServiceAnnouncements,
  });

  if (isLoading) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-serif mb-4">Service Announcements</h2>
        <div className="bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 rounded-lg border-l-4 border-orthodox-gold p-6">
          <div className="text-white">Loading announcements...</div>
        </div>
      </div>
    );
  }

  if (!announcements.length) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-serif mb-4">Service Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div 
            key={announcement.id}
            className="bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 rounded-lg border-l-4 border-orthodox-gold p-6"
          >
            <div className="text-white">
              <h3 className="text-xl font-serif mb-3">{announcement.title}</h3>
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: announcement.content }}
              />
              <div className="text-sm text-gray-300 mt-4">
                Published: {new Date(announcement.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAnnouncements;
