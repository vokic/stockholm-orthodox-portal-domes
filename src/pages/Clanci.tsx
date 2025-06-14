import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { CalendarIcon } from 'lucide-react';
import { resolveContentfulAsset, fetchContentfulEntries } from '../lib/contentful';

const ClanciPage: React.FC = () => {
  const { t } = useLanguage();

  const contentTypeId = 'blogPostModel';
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetchContentfulEntries(contentTypeId)
      .then((response) => {
        setLoading(false);
        setData(response);
      })
      .catch((e) => {
        setLoading(false);
        setData(null);
        setError(e?.message || 'Unknown error.');
      });
  }, [contentTypeId]);

  let articles: any[] = [];
  if (data && data.items) {
    articles = data.items.map((entry: any) => {
      const fields = entry.fields || {};
      let imageUrl = undefined;
      if (fields.image && fields.image.sys && fields.image.sys.id) {
        imageUrl = resolveContentfulAsset(data.includes, fields.image.sys.id);
        if (imageUrl && !imageUrl.startsWith("http")) imageUrl = `https:${imageUrl}`;
      }
      return {
        id: entry.sys?.id ?? '',
        title: fields.title,
        excerpt: fields.excerpt,
        date: fields.date,
        author: fields.author,
        category: fields.category,
        pinned: fields.pinned,
        imageUrl,
      };
    });

    // Sort articles: pinned posts first, then by date descending
    articles.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

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
            {loading && <div className="py-4 text-gray-500 text-center">Loading...</div>}

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
                      className={`card hover:shadow-lg transition-shadow relative ${article.pinned ? 'bg-green-200' : ''}`}
                    >
                      <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-100">
                        {article.imageUrl ? (
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="flex items-center justify-center h-full text-gray-400">No image</span>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <CalendarIcon size={16} />
                          <span>{article.date}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 italic">By {article.author || '-'}</span>
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

export default ClanciPage;
