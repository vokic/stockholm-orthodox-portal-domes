
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { CalendarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts, BlogPost } from '../data/blogData';

const ClanciPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Dynamically build category list from fetched articles
  const categories = React.useMemo(() => {
    const base = ['all'];
    const cats = Array.from(new Set(articles.map(a => a.category).filter(Boolean)));
    return [...base, ...cats];
  }, [articles]);

  useEffect(() => {
    let mounted = true;
    getBlogPosts().then(posts => {
      if (mounted) {
        setArticles(posts || []);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, []);

  const filteredArticles = selectedCategory && selectedCategory !== 'all'
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('articles.title') || "ČLANCI"}
            </h1>
            <p className="text-lg">{t('articles.subtitle')}</p>
          </div>
        </div>

        {/* Articles Content */}
        <section className="section">
          <div className="container-custom">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategory === category || (category === 'all' && !selectedCategory)
                        ? 'bg-orthodox-gold text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } transition-colors`}
                  >
                    {t(`articles.filter.${category}`) || (category.charAt(0).toUpperCase() + category.slice(1))}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="text-center py-10 text-gray-400">{t('loading') || 'Loading articles...'}</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length === 0 ? (
                  <div className="col-span-full text-center text-gray-600">
                    {t('noArticles') || 'No articles found.'}
                  </div>
                ) : (
                  filteredArticles.map((article) => (
                    <div key={article.id} className="card hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={article.imageUrl || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <CalendarIcon size={16} />
                          <span>{article.date}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {article.author}</span>
                          {article.category && (
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                              {t(`articles.filter.${article.category}`) || article.category}
                            </span>
                          )}
                        </div>
                        <div className="mt-4">
                          <Link to={`/clanci/${article.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
                            {t('articles.readMore') || 'Read More'} →
                          </Link>
                        </div>
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

export default ClanciPage;
