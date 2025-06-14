

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts, BlogPost } from '../data/blogData';
import { format } from 'date-fns';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ['all', 'news', 'events', 'texts', 'community', 'history'];

  useEffect(() => {
    let mounted = true;
    getBlogPosts().then((data) => {
      if (mounted) {
        setPosts(data || []);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, []);

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category?.toLowerCase() === selectedCategory.toLowerCase());

  const getCategoryDisplayName = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'all': return 'All';
      case 'news': return 'News';
      case 'events': return 'Events';
      case 'texts': return 'Texts';
      case 'community': return 'Community';
      case 'history': return 'History';
      default: return category?.charAt(0).toUpperCase() + category?.slice(1) || 'Other';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch {
      return dateString;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('nav.blog') || 'Članci / Blog'}
            </h1>
            <p className="text-white">{t('home.churchDescription')}</p>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="bg-orthodox-cream">
          <div className="container-custom py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-orthodox-gold text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {getCategoryDisplayName(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="section">
          <div className="container-custom">
            {loading ? (
              <div className="text-center py-10 text-gray-400">
                {t('loading') || 'Loading articles...'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length === 0 ? (
                  <div className="col-span-full text-center text-gray-600">
                    {t('noArticles') || 'No articles found.'}
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <div key={post.id} className="card hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={post.imageUrl || "/placeholder.svg"} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <CalendarIcon size={16} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">By {post.author}</span>
                          {post.category && (
                            <div className="flex items-center gap-1 text-sm text-orthodox-blue bg-orthodox-gold/10 px-2 py-1 rounded-full">
                              <Tag size={14} />
                              <span>{getCategoryDisplayName(post.category)}</span>
                            </div>
                          )}
                        </div>
                        <Link 
                          to={`/clanci/${post.id}`}
                          className="text-orthodox-blue hover:text-orthodox-gold font-medium text-left inline-block"
                        >
                          {t('readMore') || 'Read More'} →
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

