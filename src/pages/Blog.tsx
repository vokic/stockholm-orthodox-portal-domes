import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CalendarIcon } from 'lucide-react';
import { getBlogPosts, BlogPost } from '../data/blogData';

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const posts = await getBlogPosts();
        setArticles(posts);
      } catch (e: any) {
        setError(e?.message || 'Failed to load articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-8">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <h1 className="text-2xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              Članci / Blog
            </h1>
          </div>
        </div>

        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            {loading && (
              <div className="py-4 text-gray-500 text-center">Loading...</div>
            )}

            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
                <b>Greška iz Contentful API-ja:</b> {error}
              </div>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.length === 0 ? (
                  <div className="col-span-full text-center text-gray-600">
                    Nema pronađenih članaka.
                  </div>
                ) : (
                  articles.map((article) => (
                    <div
                      key={article.id}
                      className={`card hover:shadow-lg transition-shadow relative ${
                        article.pinned ? "bg-orthodox-gold/20" : ""
                      }`}
                    >
                      {/* Optionally, you can add a subtle "Featured" badge, but as requested, only gold background */}
                      <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-100">
                        {article.imageUrl ? (
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="flex items-center justify-center h-full text-gray-400">
                            No image
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <CalendarIcon size={16} />
                          <span>{article.date}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 italic">
                            By {article.author || "-"}
                          </span>
                          {article.category && (
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                              {article.category}
                            </span>
                          )}
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

export default Blog;
