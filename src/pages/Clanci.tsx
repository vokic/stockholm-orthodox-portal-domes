
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { CalendarIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClanciPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Article categories
  const categories = ['all', 'news', 'happenings', 'texts', 'community', 'history'];
  
  // Sample articles data with proper church images
  const articles = [
    {
      id: 1,
      title: 'Understanding the Divine Liturgy',
      excerpt: 'The Divine Liturgy is the central worship service of the Orthodox Church, where the faithful gather to participate in the Eucharist. Learn about its deep theological significance and the beautiful structure that has remained unchanged for centuries.',
      date: 'December 10, 2024',
      author: 'Father Nicholas',
      category: 'texts',
      imageUrl: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80',
    },
    {
      id: 2,
      title: 'Icons: Windows to Heaven',
      excerpt: 'Orthodox icons are not merely religious art but sacred windows into the heavenly realm. Discover the theological significance of iconography and how these sacred images aid in prayer and contemplation.',
      date: 'December 5, 2024',
      author: 'Father Nicholas',
      category: 'texts',
      imageUrl: 'https://images.unsplash.com/photo-1594822381845-2bbeaaa21ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1335&q=80',
    },
    {
      id: 3,
      title: 'Annual Parish Feast Day Celebration',
      excerpt: 'Our parish celebrated the feast of Saint Sava with great joy and fellowship. The Divine Liturgy was followed by a traditional Serbian meal and cultural program featuring folk dancing and music.',
      date: 'January 27, 2024',
      author: 'Parish Council',
      category: 'happenings',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 4,
      title: 'Orthodox Sunday School Program',
      excerpt: 'Teaching the faith to the next generation is one of our most important ministries. Our Sunday School provides children with a solid foundation in Orthodox Christianity through engaging lessons and activities.',
      date: 'November 15, 2024',
      author: 'Education Committee',
      category: 'community',
      imageUrl: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 5,
      title: 'The Legacy of Saint Sava',
      excerpt: 'Saint Sava, the first Archbishop of Serbia and patron saint of our church, established the Serbian Orthodox Church and promoted education and literacy. His legacy continues to inspire Orthodox Christians worldwide.',
      date: 'January 27, 2024',
      author: 'Father Nicholas',
      category: 'history',
      imageUrl: 'https://images.unsplash.com/photo-1581337204873-1a38e3b8d49b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 6,
      title: 'Church Restoration Project Update',
      excerpt: 'Thanks to the generous donations from our parish community, the church restoration project is progressing well. New iconography has been installed, and the altar area has been beautifully renovated.',
      date: 'October 20, 2024',
      author: 'Building Committee',
      category: 'news',
      imageUrl: 'https://images.unsplash.com/photo-1596806931387-a13d736b2c55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 7,
      title: 'The Serbian Orthodox Slava Tradition',
      excerpt: 'The Slava is a unique Serbian Orthodox tradition where families honor their patron saint annually. This beautiful custom strengthens family bonds and maintains connection to our Orthodox heritage.',
      date: 'September 10, 2024',
      author: 'Cultural Heritage Committee',
      category: 'history',
      imageUrl: 'https://images.unsplash.com/photo-1577215288662-090a88cc2bac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 8,
      title: 'Youth Group Pilgrimage to Mount Athos',
      excerpt: 'Our youth group recently completed a spiritual pilgrimage to Mount Athos, the Holy Mountain. This transformative experience deepened their faith and understanding of monastic life.',
      date: 'August 25, 2024',
      author: 'Youth Ministry',
      category: 'community',
      imageUrl: 'https://images.unsplash.com/photo-1515923152115-758a6b16f35e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    }
  ];
  
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
              {t('articles.title')}
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
                    {t(`articles.filter.${category}`)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
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
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {article.author}</span>
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                        {t(`articles.filter.${article.category}`)}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link to={`/clanci/${article.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
                        {t('articles.readMore')} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClanciPage;
