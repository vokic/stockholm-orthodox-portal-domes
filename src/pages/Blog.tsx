
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ['all', 'faith', 'community', 'education', 'history'];
  
  const filteredPosts = selectedCategory && selectedCategory !== 'all' 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              DESAVANJA/VESTI
            </h1>
          </div>
        </div>

        {/* Blog Content */}
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
              {filteredPosts.map((post) => (
                <div key={post.id} className="card hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <CalendarIcon size={16} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-orthodox-blue">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link to={`/desavanja/${post.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
                        Read More →
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

export default BlogPage;
