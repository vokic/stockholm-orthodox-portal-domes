import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getLatestArticles } from "../data/blogData";

const LatestArticles: React.FC = () => {
  const { t } = useLanguage();
  const [articles, setArticles] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    getLatestArticles(3).then((data) => {
      if (mounted) {
        setArticles(data || []);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Function to format date properly
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-400">
        {t("loading") || "Loading articles..."}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div
          key={article.id}
          className="card hover:shadow-lg transition-shadow"
        >
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
              <span>{formatDate(article.date)}</span>
            </div>
            <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 italic">
                {/* By {article.author} */}
              </span>
              <Link
                to={`/articles/${article.id}`}
                className="text-orthodox-blue hover:text-orthodox-gold font-medium"
              >
                {t("home.readMore") || "Read More"} →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestArticles;
