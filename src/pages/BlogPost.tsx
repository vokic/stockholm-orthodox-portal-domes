import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon } from 'lucide-react';
import { getBlogPost, BlogPost } from '../data/blogData';
import { format } from 'date-fns';

const BlogPostPage: React.FC = () => {
  const { t } = useLanguage();
  const { slugOrId } = useParams<{ slugOrId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slugOrId) return;
    
    let mounted = true;
    getBlogPost(slugOrId).then((data) => {
      if (mounted) {
        setPost(data || null);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, [slugOrId]);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch {
      return dateString;
    }
  };

  const renderContent = (content: any) => {
    if (!content) return '';
    
    console.log('Rendering content:', content);
    
    // Handle Contentful rich text format
    if (content.content && Array.isArray(content.content)) {
      const processNode = (node: any): string => {
        if (!node) return '';
        
        if (node.nodeType === 'paragraph' && node.content) {
          const paragraphText = node.content
            .map((textNode: any) => {
              if (textNode.nodeType === 'text') {
                let text = textNode.value || '';
                
                // Handle text marks (bold, italic, underline, etc.)
                if (textNode.marks && Array.isArray(textNode.marks)) {
                  textNode.marks.forEach((mark: any) => {
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
                      case 'code':
                        text = `<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">${text}</code>`;
                        break;
                    }
                  });
                }
                
                return text;
              }
              
              // Handle hyperlinks
              if (textNode.nodeType === 'hyperlink') {
                const linkText = textNode.content
                  .map((linkContentNode: any) => {
                    if (linkContentNode.nodeType === 'text') {
                      let text = linkContentNode.value || '';
                      
                      // Apply marks to link text as well
                      if (linkContentNode.marks && Array.isArray(linkContentNode.marks)) {
                        linkContentNode.marks.forEach((mark: any) => {
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
                    }
                    return '';
                  })
                  .join('');
                
                const uri = textNode.data?.uri || '#';
                return `<a href="${uri}" class="text-orthodox-blue hover:text-orthodox-gold underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
              }
              
              return '';
            })
            .join('');
          return paragraphText ? `<p class="mb-4">${paragraphText}</p>` : '';
        }
        
        if (node.nodeType === 'heading-1' && node.content) {
          const headingText = node.content
            .map((textNode: any) => textNode.value || '')
            .join('');
          return headingText ? `<h1 class="text-3xl font-bold mb-4">${headingText}</h1>` : '';
        }
        
        if (node.nodeType === 'heading-2' && node.content) {
          const headingText = node.content
            .map((textNode: any) => textNode.value || '')
            .join('');
          return headingText ? `<h2 class="text-2xl font-bold mb-3">${headingText}</h2>` : '';
        }
        
        if (node.nodeType === 'unordered-list' && node.content) {
          const listItems = node.content
            .map((listItem: any) => {
              if (listItem.nodeType === 'list-item' && listItem.content) {
                const itemText = listItem.content
                  .map((paragraph: any) => processNode(paragraph))
                  .join('');
                return `<li>${itemText.replace(/<\/?p[^>]*>/g, '')}</li>`;
              }
              return '';
            })
            .filter(Boolean)
            .join('');
          return listItems ? `<ul class="list-disc pl-6 mb-4">${listItems}</ul>` : '';
        }
        
        return '';
      };
      
      const renderedContent = content.content
        .map(processNode)
        .filter(Boolean)
        .join('');
      
      console.log('Final rendered content:', renderedContent);
      return renderedContent;
    }
    
    // Fallback for other content formats
    return typeof content === 'string' ? content : '';
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-10 text-gray-400">
            {t('loading') || 'Loading article...'}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-10 text-gray-600">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <Link to="/articles" className="text-orthodox-blue hover:text-orthodox-gold">
              ← Back to all Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Prepare gallery images from the blog post
  const galleryImages = post.images ? post.images.map((imageUrl, index) => ({
    src: imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`,
    alt: `${post.title} - Image ${index + 1}`,
    size: 'medium' as const
  })) : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={post.imageUrl || "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop"}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop";
            }}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container-custom text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CalendarIcon size={16} />
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="section">
          <div className="container-custom max-w-4xl">
            <div className="card">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
              
              {/* Gallery Section */}
              {galleryImages.length > 0 && (
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-xl font-serif font-bold text-orthodox-blue mb-4">Gallery</h3>
                  <Gallery images={galleryImages} className="mb-6" />
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t">
                <Link to="/articles" className="text-orthodox-blue hover:text-orthodox-gold">
                  ← Back to all Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
