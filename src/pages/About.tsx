
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('about.title')}
            </h1>
          </div>
        </div>

        {/* History Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.history')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="mb-4">
                    The Orthodox Church in Stockholm was founded in 1985 by a small group of Orthodox faithful who had immigrated to Sweden. What started as small prayer gatherings in members' homes grew into a vibrant parish community.
                  </p>
                  <p className="mb-4">
                    In 1992, the community purchased its current building, a historic structure dating back to the early 20th century, which was consecrated as an Orthodox church after extensive renovations.
                  </p>
                  <p className="mb-4">
                    Today, our parish serves Orthodox Christians from various ethnic backgrounds, including Greek, Russian, Serbian, Romanian, and Swedish converts, reflecting the diverse nature of Orthodoxy in Stockholm.
                  </p>
                  
                  <div className="ornament">☦</div>
                  
                  <p className="mb-4">
                    Our church is adorned with traditional iconography painted by local and international iconographers, following the Byzantine tradition. The interior features a hand-carved wooden iconostasis imported from Greece in 2005.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1518224071898-d1642604e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt="Church History" 
                    className="rounded-lg w-full"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1541331913542-3e775ab48a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt="Church Interior" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Priest Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.priest')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt="Father Nicholas" 
                    className="rounded-lg w-full"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-serif mb-3">Father Nicholas Papadopoulos</h3>
                  
                  <p className="mb-4">
                    Father Nicholas was ordained to the priesthood in 1998 after completing his theological studies at St. Vladimir's Orthodox Theological Seminary in the United States.
                  </p>
                  <p className="mb-4">
                    Prior to leading our parish, Father Nicholas served communities in Greece and the United Kingdom. He has been our parish priest since 2010.
                  </p>
                  <p className="mb-4">
                    Father Nicholas is fluent in English, Greek, and Swedish, and is continuing to learn Serbian to better serve our diverse community. He is known for his warm pastoral approach and dedication to Orthodox education.
                  </p>
                  <p>
                    His vision for our parish focuses on preserving Orthodox traditions while making them accessible to all generations and cultural backgrounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Community Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.community')}
              </h2>
              
              <p className="mb-4">
                Our parish community is diverse and vibrant, composed of Orthodox Christians from various cultural backgrounds. We are united by our shared faith and commitment to living the Orthodox way of life in Stockholm.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">150+</div>
                  <p>Families</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">15+</div>
                  <p>Nationalities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">35+</div>
                  <p>Years of Service</p>
                </div>
              </div>
              
              <p className="mb-4">
                We offer a range of ministries and activities beyond worship services, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Sunday School for children of all ages</li>
                <li>Youth group for teenagers and young adults</li>
                <li>Bible study and catechism classes</li>
                <li>Charitable outreach to the local community</li>
                <li>Cultural events celebrating Orthodox traditions</li>
                <li>Fellowship meals after Sunday services</li>
              </ul>
              
              <p>
                Whether you are a lifelong Orthodox Christian or simply curious about the Orthodox faith, we welcome you to visit us and become part of our community.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
