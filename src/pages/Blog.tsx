
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Divine Liturgy',
      excerpt: 'The Divine Liturgy is the primary worship service of the Orthodox Church. Learn about its meaning and significance for Orthodox Christians.',
      date: 'April 20, 2025',
      author: 'Father Nicholas',
      category: 'faith',
      imageUrl: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
    },
    {
      id: 2,
      title: 'Icons in Orthodox Worship',
      excerpt: 'Icons are not merely religious art but windows into heaven. Discover the theological significance of icons in Orthodox spirituality.',
      date: 'April 12, 2025',
      author: 'Father Nicholas',
      category: 'faith',
      imageUrl: 'https://images.unsplash.com/photo-1594822381845-2bbeaaa21ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    },
    {
      id: 3,
      title: 'Parish Summer Festival Recap',
      excerpt: 'Our annual summer festival was a great success! See photos and read about all the activities and delicious food that was shared.',
      date: 'March 25, 2025',
      author: 'Parish Council',
      category: 'community',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 4,
      title: 'Orthodox Education for Children',
      excerpt: 'Teaching the next generation about our faith is crucial. Read about our Sunday School program and how you can get involved.',
      date: 'March 10, 2025',
      author: 'Education Committee',
      category: 'education',
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
  ];
  
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
              {t('blog.title')}
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
                      src={post.imageUrl} 
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
                      <Link to={`/blog/${post.id}`} className="text-orthodox-blue hover:text-orthodox-gold font-medium">
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
