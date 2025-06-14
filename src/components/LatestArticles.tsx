
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLatestArticles } from '../data/blogData';

const LatestArticles: React.FC = () => {
  const { t } = useLanguage();
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const latestArticles = await getLatestArticles(3);
        setArticles(latestArticles);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card animate-pulse">
            <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-16 bg-gray-200 rounded mb-4"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

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
