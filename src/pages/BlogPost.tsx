
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
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    let mounted = true;
    getBlogPost(id).then((data) => {
      if (mounted) {
        setPost(data || null);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, [id]);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch {
      return dateString;
    }
  };

  const renderContent = (content: any) => {
    if (!content) return '';
    
    // Handle Contentful rich text format
    if (content.content && Array.isArray(content.content)) {
      return content.content
        .map((node: any) => {
          if (node.nodeType === 'paragraph' && node.content) {
            return node.content
              .map((textNode: any) => textNode.value || '')
              .join('');
          }
          return '';
        })
        .filter((text: string) => text.trim())
        .map((paragraph: string, index: number) => `<p>${paragraph}</p>`)
        .join('');
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
            <Link to="/clanci" className="text-orthodox-blue hover:text-orthodox-gold">
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
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
              
              {/* Gallery Section */}
              {galleryImages.length > 0 && (
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-xl font-serif font-bold text-orthodox-blue mb-4">Gallery</h3>
                  <Gallery images={galleryImages} className="mb-6" />
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t">
                <Link to="/clanci" className="text-orthodox-blue hover:text-orthodox-gold">
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
