import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  
  // In a real application, this would fetch data from an API
  // For now, we'll use dummy data
  const post = {
    id: parseInt(id || '1'),
    title: 'Understanding the Divine Liturgy',
    content: `
      <p>The Divine Liturgy is the primary worship service of the Orthodox Church. It is a beautiful and profound experience that connects us with the heavenly worship and brings us into communion with God.</p>
      
      <p>The service is divided into two main parts: the Liturgy of the Word, which includes readings from Scripture, and the Liturgy of the Faithful, which culminates in the reception of Holy Communion.</p>
      
      <p>Throughout the service, the priest, deacon, and choir lead the faithful in prayers, hymns, and responses that have been used by Orthodox Christians for centuries. The incense, icons, and ceremonial movements all contribute to an atmosphere of reverence and awe before the holy mysteries.</p>
      
      <p>The Divine Liturgy is not merely a historical reenactment but a living participation in the eternal worship of heaven. As we gather together as the Body of Christ, we join with the angels and saints in offering praise to God.</p>
      
      <p>For newcomers to Orthodoxy, the Divine Liturgy may seem complex and unfamiliar at first. However, with regular attendance and a willingness to learn, the beauty and depth of this sacred service become increasingly apparent and meaningful.</p>
      
      <p>We invite everyone to join us for Divine Liturgy on Sundays at 10:00 AM. Whether you are a lifelong Orthodox Christian or simply curious about our faith, you are welcome to experience this ancient and transformative form of worship.</p>
    `,
    date: 'April 20, 2025',
    author: 'Father Nicholas',
    category: 'faith',
    imageUrl: '/placeholder.svg',
    // Enhanced gallery images for the blog post
    galleryImages: [
      {
        src: '/placeholder.svg',
        alt: 'Orthodox church iconostasis with golden icons',
        size: 'large' as const
      },
      {
        src: '/placeholder.svg',
        alt: 'Divine Liturgy ceremony with congregation',
        size: 'medium' as const
      },
      {
        src: '/placeholder.svg',
        alt: 'Church altar with beautiful Orthodox decorations',
        size: 'small' as const
      },
      {
        src: '/placeholder.svg',
        alt: 'Traditional Orthodox wedding ceremony',
        size: 'medium' as const
      },
      {
        src: '/placeholder.svg',
        alt: 'Church choir during Divine Liturgy',
        size: 'large' as const
      },
      {
        src: '/placeholder.svg',
        alt: 'Orthodox baptism with holy water',
        size: 'small' as const
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container-custom text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CalendarIcon size={16} />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="section">
          <div className="container-custom max-w-4xl">
            <div className="card">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Gallery Section */}
              {post.galleryImages && post.galleryImages.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-orthodox-blue">
                    Gallery
                  </h3>
                  <Gallery 
                    images={post.galleryImages} 
                    masonry={true}
                    className="mb-8"
                  />
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t">
                <Link to="/clanci" className="text-orthodox-blue hover:text-orthodox-gold">
                  ← Back to all Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
