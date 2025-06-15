
import React from 'react';
import { fetchContentfulEntries } from '../../lib/contentful';
import { useQuery } from '@tanstack/react-query';

interface ServiceAnnouncement {
  id: string;
  title: string;
  content: string;
  description?: string;
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
        description: item.fields.description || '',
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-serif">Obavestenje</h2>
          <span className="text-sm text-gray-600">Datum Objave: Loading...</span>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-gray-600">Loading announcements...</div>
        </div>
      </div>
    );
  }

  if (!announcements.length) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif">Obavestenje</h2>
        <span className="text-sm text-gray-600 font-medium">
          Datum Objave: {new Date(announcements[0]?.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })} {new Date(announcements[0]?.publishedDate).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div 
            key={announcement.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-serif text-orthodox-blue">{announcement.title}</h3>
              <div className="text-sm text-gray-500 ml-4 flex-shrink-0">
                {new Date(announcement.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} {new Date(announcement.publishedDate).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
            {announcement.description && (
              <p className="text-gray-600 mb-3 italic">{announcement.description}</p>
            )}
            <div 
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAnnouncements;
