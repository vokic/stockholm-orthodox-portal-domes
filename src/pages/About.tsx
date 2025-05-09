
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin } from 'lucide-react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  // Working hours data
  const workingHours = [
    { day: t('about.hours.mondayFriday'), hours: '09:00 - 16:00' },
    { day: t('about.hours.saturday'), hours: '09:00 - 19:00' },
    { day: t('about.hours.sunday'), hours: '09:00 - 14:00' }
  ];

  // Gallery images with size variations for collage effect
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1518224071898-d1642604e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: t('about.gallery.churchInterior'),
      size: 'large' as 'large'
    },
    {
      src: 'https://images.unsplash.com/photo-1541331913542-3e775ab48a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      alt: t('about.gallery.churchIcons'),
      size: 'small' as 'small'
    },
    {
      src: 'https://images.unsplash.com/photo-1594905883965-ba245250c1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: t('about.gallery.churchExterior'),
      size: 'medium' as 'medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1614351636041-21b1dffe76a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: t('about.gallery.churchBellTower'),
      size: 'small' as 'small'
    },
    {
      src: 'https://images.unsplash.com/photo-1629111963021-146f7e4651f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: t('about.gallery.churchDome'),
      size: 'medium' as 'medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: t('about.gallery.cathedralInterior'),
      size: 'small' as 'small'
    }
  ];

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
        
        {/* Gallery Section - Top position with collage style */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.gallery.title')}
              </h2>
              
              <Gallery images={galleryImages} />
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.history')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="mb-4">
                    {t('about.historyText.p1')}
                  </p>
                  <p className="mb-4">
                    {t('about.historyText.p2')}
                  </p>
                  <p className="mb-4">
                    {t('about.historyText.p3')}
                  </p>
                  
                  <div className="ornament">☦</div>
                  
                  <p className="mb-4">
                    {t('about.historyText.p4')}
                  </p>
                  
                  <p className="mb-4">
                    {t('about.historyText.p5')}
                  </p>
                  
                  <p className="mb-4">
                    {t('about.historyText.p6')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1518224071898-d1642604e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt={t('about.gallery.churchHistory')} 
                    className="rounded-lg w-full"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1541331913542-3e775ab48a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt={t('about.gallery.churchInterior')} 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sveti Sava Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.svetiSava.title')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1581337204873-1a38e3b8d49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt={t('about.svetiSava.imageAlt')} 
                    className="rounded-lg w-full"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-serif mb-3">{t('about.svetiSava.subtitle')}</h3>
                  
                  <p className="mb-4">
                    {t('about.svetiSava.p1')}
                  </p>
                  <p className="mb-4">
                    {t('about.svetiSava.p2')}
                  </p>
                  <p className="mb-4">
                    {t('about.svetiSava.p3')}
                  </p>
                  <p className="mb-4">
                    {t('about.svetiSava.p4')}
                  </p>
                  <p>
                    {t('about.svetiSava.p5')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Priests Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.priests')}
              </h2>
              
              {/* First Priest */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt={t('about.priest1.imageAlt')} 
                    className="rounded-lg w-full"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-serif mb-3">{t('about.priest1.name')}</h3>
                  
                  <p className="mb-4">
                    {t('about.priest1.p1')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest1.p2')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest1.p3')}
                  </p>
                  <p>
                    {t('about.priest1.p4')}
                  </p>
                </div>
              </div>
              
              {/* Second Priest */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt={t('about.priest2.imageAlt')} 
                    className="rounded-lg w-full"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-serif mb-3">{t('about.priest2.name')}</h3>
                  
                  <p className="mb-4">
                    {t('about.priest2.p1')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest2.p2')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest2.p3')}
                  </p>
                  <p>
                    {t('about.priest2.p4')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location and Working Hours Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2 flex items-center gap-2">
                <MapPin className="text-orthodox-gold" /> 
                {t('about.locationHours.title')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
                    <Clock className="text-orthodox-gold" /> 
                    {t('about.locationHours.openingHours')}
                  </h3>
                  
                  <div className="bg-orthodox-cream p-6 rounded-lg mb-6">
                    <ul className="space-y-4">
                      {workingHours.map((item, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                          <span className="font-medium">{item.day}</span>
                          <span className="bg-orthodox-gold bg-opacity-20 px-3 py-1 rounded text-orthodox-blue">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-serif mb-4">{t('about.locationHours.contactInfo')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.address')}:</span>
                      <span>{t('about.locationHours.addressValue')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.phone')}:</span>
                      <span>{t('about.locationHours.phoneValue')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.email')}:</span>
                      <span>{t('about.locationHours.emailValue')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.priest')}:</span>
                      <span>{t('about.locationHours.priestValue')}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif mb-4">{t('about.locationHours.findUs')}</h3>
                  <p className="mb-4">
                    {t('about.locationHours.findUsText')}
                  </p>
                  
                  {/* Map Component */}
                  <Map className="mt-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Community Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.community')}
              </h2>
              
              <p className="mb-4">
                {t('about.communityText.p1')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">150+</div>
                  <p>{t('about.communityText.families')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">15+</div>
                  <p>{t('about.communityText.nationalities')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">35+</div>
                  <p>{t('about.communityText.years')}</p>
                </div>
              </div>
              
              <p className="mb-4">
                {t('about.communityText.p2')}
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t('about.communityText.activities.sunday')}</li>
                <li>{t('about.communityText.activities.youth')}</li>
                <li>{t('about.communityText.activities.bible')}</li>
                <li>{t('about.communityText.activities.charity')}</li>
                <li>{t('about.communityText.activities.cultural')}</li>
                <li>{t('about.communityText.activities.fellowship')}</li>
              </ul>
              
              <p>
                {t('about.communityText.p3')}
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
