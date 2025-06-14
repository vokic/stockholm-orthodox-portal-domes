import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { CalendarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resolveContentfulAsset, fetchContentfulEntries } from '../lib/contentful';

const ClanciPage: React.FC = () => {
  const { t } = useLanguage();

  // Allow the user to pick/test a content type ID, and keep track of fetch results and errors
  const [contentTypeId, setContentTypeId] = useState('blogPost');
  const [data, setData] = useState<any>(null); // Raw Contentful API response
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // On contentTypeId change, fetch Contentful data
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

  // Parse to display articles if possible
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
        imageUrl,
      };
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-8">
          <div className="container-custom">
            <h1 className="text-2xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              Contentful Test: Blog List
            </h1>
            <div className="flex flex-col gap-2 mb-4 bg-orthodox-gold/10 p-4 rounded">
              <label className="font-semibold text-orthodox-gold">
                Contentful Content Type ID:
                <input
                  className="ml-2 p-1 border border-gray-300 rounded"
                  type="text"
                  value={contentTypeId}
                  onChange={e => setContentTypeId(e.target.value)}
                />
              </label>
              <span className="text-xs text-gray-600">
                Tip: Check your Contentful model's API ID in Contentful → Content model
              </span>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container-custom">
            {loading && <div className="py-4 text-gray-500 text-center">Loading...</div>}

            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
                <b>Contentful Error:</b> {error}
              </div>
            )}

            {!loading && !error && data && (
              <>
                <div className="mb-2 p-2 text-xs bg-gray-100 rounded break-all">
                  <b>Raw Contentful API Response:</b>
                  <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
                </div>
                <div className="mb-4 font-bold">
                  Found {data.items?.length ?? 0} item(s).
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.length === 0 ? (
                    <div className="col-span-full text-center text-gray-600">
                      No articles found for <code>{contentTypeId}</code>.
                    </div>
                  ) : (
                    articles.map((article) => (
                      <div key={article.id} className="card hover:shadow-lg transition-shadow">
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
                            <span className="text-sm text-gray-500">By {article.author || '-'}</span>
                            {article.category && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                                {article.category}
                              </span>
                            )}
                          </div>
                          {/* You can link to details page if desired */}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClanciPage;
