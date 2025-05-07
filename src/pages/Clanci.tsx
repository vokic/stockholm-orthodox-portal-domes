
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
  
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: 'Understanding the Divine Liturgy',
      excerpt: 'The Divine Liturgy is the primary worship service of the Orthodox Church. Learn about its meaning and significance for Orthodox Christians.',
      date: 'April 20, 2025',
      author: 'Father Nicholas',
      category: 'texts',
      imageUrl: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
    },
    {
      id: 2,
      title: 'Icons in Orthodox Worship',
      excerpt: 'Icons are not merely religious art but windows into heaven. Discover the theological significance of icons in Orthodox spirituality.',
      date: 'April 12, 2025',
      author: 'Father Nicholas',
      category: 'texts',
      imageUrl: 'https://images.unsplash.com/photo-1594822381845-2bbeaaa21ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    },
    {
      id: 3,
      title: 'Parish Summer Festival Recap',
      excerpt: 'Our annual summer festival was a great success! See photos and read about all the activities and delicious food that was shared.',
      date: 'March 25, 2025',
      author: 'Parish Council',
      category: 'happenings',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 4,
      title: 'Orthodox Education for Children',
      excerpt: 'Teaching the next generation about our faith is crucial. Read about our Sunday School program and how you can get involved.',
      date: 'March 10, 2025',
      author: 'Education Committee',
      category: 'community',
      imageUrl: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 5,
      title: 'The Life of Sveti Sava',
      excerpt: 'Learn about the remarkable life and legacy of Sveti Sava, the patron saint of our church and first Archbishop of Serbia.',
      date: 'February 27, 2025',
      author: 'Father Nicholas',
      category: 'history',
      imageUrl: 'https://images.unsplash.com/photo-1581337204873-1a38e3b8d49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 6,
      title: 'New Church Roof Construction Project',
      excerpt: 'We are excited to announce the start of our church roof renovation project. Learn about the timeline, funding, and how you can help.',
      date: 'February 15, 2025',
      author: 'Building Committee',
      category: 'news',
      imageUrl: 'https://images.unsplash.com/photo-1596806931387-a13d736b2c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
    {
      id: 7,
      title: 'Traditional Serbian Slava Customs',
      excerpt: 'The Slava is a unique Serbian Orthodox tradition honoring a family's patron saint. Discover the rituals and meanings behind this important custom.',
      date: 'February 5, 2025',
      author: 'Cultural Heritage Committee',
      category: 'history',
      imageUrl: 'https://images.unsplash.com/photo-1577215288662-090a88cc2bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    },
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
              Članci
            </h1>
            <p className="text-lg">Vesti, događaji, tekstovi i sadržaj iz naše zajednice</p>
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
                    {category === 'all' ? 'Sve' : 
                     category === 'news' ? 'Vesti' : 
                     category === 'happenings' ? 'Događaji' : 
                     category === 'texts' ? 'Tekstovi' : 
                     category === 'community' ? 'Zajednica' : 'Istorija'}
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
                        {article.category === 'news' ? 'Vesti' : 
                         article.category === 'happenings' ? 'Događaji' : 
                         article.category === 'texts' ? 'Tekstovi' : 
                         article.category === 'community' ? 'Zajednica' : 'Istorija'}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link to={`/clanci/${article.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
                        Pročitaj više →
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
