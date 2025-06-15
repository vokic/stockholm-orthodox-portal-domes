
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
    } else if (node.nodeType === 'unordered-list') {
      const listItems = node.content ? node.content.map(processNode).join('') : '';
      return `<ul>${listItems}</ul>`;
    } else if (node.nodeType === 'ordered-list') {
      const listItems = node.content ? node.content.map(processNode).join('') : '';
      return `<ol>${listItems}</ol>`;
    } else if (node.nodeType === 'list-item') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<li>${content}</li>`;
    } else if (node.nodeType === 'heading-1') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<h1>${content}</h1>`;
    } else if (node.nodeType === 'heading-2') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<h2>${content}</h2>`;
    } else if (node.nodeType === 'heading-3') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<h3>${content}</h3>`;
    } else if (node.nodeType === 'heading-4') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<h4>${content}</h4>`;
    } else if (node.nodeType === 'heading-5') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<h5>${content}</h5>`;
    } else if (node.nodeType === 'heading-6') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<h6>${content}</h6>`;
    } else if (node.nodeType === 'hyperlink') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      const url = node.data?.uri || '#';
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-orthodox-blue hover:text-orthodox-gold underline">${content}</a>`;
    } else if (node.nodeType === 'blockquote') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return `<blockquote>${content}</blockquote>`;
    } else if (node.nodeType === 'hr') {
      return '<hr>';
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

      // Handle description - convert rich text to HTML
      let description = '';
      if (item.fields.description) {
        if (typeof item.fields.description === 'string') {
          description = item.fields.description;
        } else if (item.fields.description.content) {
          description = convertRichTextToHtml(item.fields.description);
        }
      }

      return {
        id: item.sys.id,
        title: item.fields.title || 'Service Announcement',
        content: content,
        description: description,
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
            <h3 className="text-xl font-serif text-orthodox-blue mb-3">{announcement.title}</h3>
            {announcement.description && (
              <div 
                className="prose prose-sm max-w-none text-gray-600 mb-3 prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4 prose-strong:font-bold prose-em:italic prose-a:text-orthodox-blue prose-a:underline hover:prose-a:text-orthodox-gold"
                dangerouslySetInnerHTML={{ __html: announcement.description }}
              />
            )}
            <div 
              className="prose prose-sm max-w-none text-gray-700 prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4 prose-strong:font-bold prose-em:italic prose-a:text-orthodox-blue prose-a:underline hover:prose-a:text-orthodox-gold"
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAnnouncements;
