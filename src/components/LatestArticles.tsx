
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLatestArticles } from '../data/blogData';

const LatestArticles: React.FC = () => {
  const { t } = useLanguage();
  const articles = getLatestArticles(3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div key={article.id} className="card hover:shadow-lg transition-shadow">
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <img 
              src="/placeholder.svg" 
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
              <span className="text-sm text-gray-500">By {article.author}</span>
              <Link to={`/clanci/${article.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestArticles;
