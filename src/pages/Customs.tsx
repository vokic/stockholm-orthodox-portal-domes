
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomsPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sample customs articles data
  const customsArticles = [
    {
      id: 1,
      title: 'Orthodox Easter Traditions',
      excerpt: 'Learn about the rich Orthodox Easter traditions, from the Paschal candles to the red eggs symbolizing new life and resurrection.',
      date: 'April 25, 2025',
      author: 'Father Nicholas',
      category: 'holidays',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'The Symbolism of Iconography',
      excerpt: 'Discover the deep theology and symbolism behind Orthodox iconography and why icons are often called "windows to heaven".',
      date: 'April 18, 2025',
      author: 'Father Alexander',
      category: 'symbolism',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Fasting in Orthodox Tradition',
      excerpt: 'Understanding the practice and spiritual benefits of fasting periods in the Orthodox Church throughout the liturgical year.',
      date: 'March 30, 2025',
      author: 'Father Nicholas',
      category: 'practices',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'The Meaning of Baptism',
      excerpt: 'Explore the deep significance of Orthodox baptism as both a sacrament and a mystical participation in Christ\'s death and resurrection.',
      date: 'March 15, 2025',
      author: 'Father Alexander',
      category: 'sacraments',
      imageUrl: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'The Role of Godparents',
      excerpt: 'Learn about the important spiritual responsibilities of Orthodox godparents and their lifelong commitment to their godchildren.',
      date: 'February 27, 2025',
      author: 'Father Nicholas',
      category: 'family',
      imageUrl: '/placeholder.svg',
    },
  ];
  
  const categories = ['all', 'holidays', 'symbolism', 'practices', 'sacraments', 'family'];
  
  const filteredArticles = selectedCategory && selectedCategory !== 'all' 
    ? customsArticles.filter(article => article.category === selectedCategory)
    : customsArticles;

  // Function to format date properly
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              OBICAJI
            </h1>
            <p className="text-xl max-w-3xl">
              Discover the rich traditions and customs of Orthodox Christianity that have been preserved through generations.
            </p>
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
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
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
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 italic">By {article.author}</span>
                      <Link to={`/customs/${article.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
                        {t('readMore') || 'Read More'} →
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

export default CustomsPage;
