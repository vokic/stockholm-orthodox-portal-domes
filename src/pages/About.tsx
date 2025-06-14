import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin } from 'lucide-react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import ParishTodaySection from "../components/ParishTodaySection";
import OurMissionSection from "../components/OurMissionSection";
import OurCommunitySection from "../components/OurCommunitySection";

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  // Working hours data
  const workingHours = [
    { day: t('about.hours.mondayFriday'), hours: '09:00 - 16:00' },
    { day: t('about.hours.saturday'), hours: '09:00 - 19:00' },
    { day: t('about.hours.sunday'), hours: '09:00 - 14:00' }
  ];

  // Church Now gallery images
  const churchNowImages = [
    {
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      alt: 'Church exterior modern'
    },
    {
      src: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop',
      alt: 'Church from a distance'
    },
    {
      src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      alt: 'People gathering at church grounds'
    },
    {
      src: '/placeholder.svg',
      alt: 'Recent community Christmas celebration'
    },
    {
      src: '/placeholder.svg',
      alt: 'Modern church events interior'
    },
    {
      src: '/placeholder.svg',
      alt: 'Congregation in worship'
    },
    {
      src: '/placeholder.svg',
      alt: 'Baptism in recent years'
    },
    {
      src: '/placeholder.svg',
      alt: 'Recent Pascha celebration'
    },
    {
      src: '/placeholder.svg',
      alt: 'Current year youth group activity'
    }
  ];

  // Old photos gallery images
  const oldPhotosImages = [
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      alt: 'Historic church construction in 1950s'
    },
    {
      src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop',
      alt: 'First Orthodox service in Stockholm 1960'
    },
    {
      src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop',
      alt: 'Church community gathering 1965'
    },
    {
      src: '/placeholder.svg',
      alt: 'Blessing of the foundation stone 1958'
    },
    {
      src: '/placeholder.svg',
      alt: 'First Easter celebration 1962'
    },
    {
      src: '/placeholder.svg',
      alt: 'Community volunteers building interior 1970'
    },
    {
      src: '/placeholder.svg',
      alt: 'Historic church wedding ceremony 1975'
    },
    {
      src: '/placeholder.svg',
      alt: 'Installation of church bells 1963'
    },
    {
      src: '/placeholder.svg',
      alt: 'First baptism ceremony 1961'
    }
  ];

  // Interior gallery images
  const interiorImages = [
    {
      src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop',
      alt: 'Main altar with golden iconostasis'
    },
    {
      src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop',
      alt: 'Orthodox church interior with dome'
    },
    {
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      alt: 'Beautiful church architecture details'
    },
    {
      src: '/placeholder.svg',
      alt: 'Holy icons on the iconostasis'
    },
    {
      src: '/placeholder.svg',
      alt: 'Church nave with wooden pews'
    },
    {
      src: '/placeholder.svg',
      alt: 'Sanctuary area with holy table'
    },
    {
      src: '/placeholder.svg',
      alt: 'Choir area with church books'
    },
    {
      src: '/placeholder.svg',
      alt: 'Candle stand with prayer candles'
    },
    {
      src: '/placeholder.svg',
      alt: 'Church ceiling with religious paintings'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16" style={{ backgroundImage: "url('/placeholder.svg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container-custom rounded-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('about.title')}
            </h1>
            <p className="text-lg mt-2">{t('about.intro')}</p>
          </div>
        </div>

        {/* About Our Church (using about.intro) - this is already in the Hero section above */}

        {/* Parish Today Section */}
        <ParishTodaySection />

        {/* Our Mission Section */}
        <OurMissionSection />

        {/* Our Community Section */}
        <OurCommunitySection />

        {/* Gallery Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.gallery.title')}
              </h2>
              
              {/* Church Now Section */}
              <div className="mb-12">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue">Church Now</h3>
                <p className="text-gray-600 mb-6">A glimpse of our church in present day—our building, community life and ongoing events.</p>
                <Gallery images={churchNowImages} />
              </div>
              
              {/* Old Photos Section */}
              <div className="mb-12">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue">Old Photos</h3>
                <p className="text-gray-600 mb-6">Historical moments from our church's founding and early years in Stockholm.</p>
                <Gallery images={oldPhotosImages} />
              </div>
              
              {/* Interior Section */}
              <div>
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue">Interior</h3>
                <p className="text-gray-600 mb-6">The sacred spaces within our church where we gather for worship and prayer.</p>
                <Gallery images={interiorImages} />
              </div>
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
                    src="/placeholder.svg" 
                    alt={t('about.gallery.churchHistory')} 
                    className="rounded-lg w-full"
                  />
                  <img 
                    src="/placeholder.svg" 
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
                    src="/placeholder.svg" 
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
              
              {/* First Priest - Left Side */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-1">
                  <img 
                    src="/placeholder.svg" 
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
              
              {/* Second Priest - Right Side (Mirrored) */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3 md:order-1">
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
                
                <div className="md:col-span-1 md:order-2">
                  <img 
                    src="/placeholder.svg" 
                    alt={t('about.priest2.imageAlt')} 
                    className="rounded-lg w-full"
                  />
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
