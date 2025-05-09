
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LatestArticles: React.FC = () => {
  const { t } = useLanguage();
  
  // Sample articles data - showing only top 3 newest
  const articles = [
    {
      id: 1,
      title: t('articles.article1.title'),
      excerpt: t('articles.article1.excerpt'),
      date: t('articles.article1.date'),
      author: t('articles.article1.author'),
      category: 'texts',
      imageUrl: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
    },
    {
      id: 2,
      title: t('articles.article2.title'),
      excerpt: t('articles.article2.excerpt'),
      date: t('articles.article2.date'),
      author: t('articles.article2.author'),
      category: 'texts',
      imageUrl: 'https://images.unsplash.com/photo-1594822381845-2bbeaaa21ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    },
    {
      id: 3,
      title: t('articles.article3.title'),
      excerpt: t('articles.article3.excerpt'),
      date: t('articles.article3.date'),
      author: t('articles.article3.author'),
      category: 'happenings',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div key={article.id} className="card hover:shadow-lg transition-shadow">
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <img 
              src={article.imageUrl} 
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
            <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{t('articles.by')} {article.author}</span>
              <Link to={`/clanci/${article.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
                {t('articles.readMore')} →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestArticles;
