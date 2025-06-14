
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CombinedEventsSchedule from '../components/CombinedEventsSchedule';
import PriestMessage from '../components/PriestMessage';
import DonationSection from '../components/DonationSection';
import HolidayPopup from '../components/HolidayPopup';
import Map from '../components/Map';
import LatestArticles from '../components/LatestArticles';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [showHolidayPopup, setShowHolidayPopup] = useState(false);
  
  // Holiday service information for the popup
  const holidayService = {
    title: t('home.holidayPopup.title'),
    date: t('home.holidayPopup.date'),
    time: t('home.holidayPopup.time'),
    description: t('home.holidayPopup.description')
  };

  // Automatic popup logic with conditions
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenHolidayPopup');
    const isFirstVisit = !hasSeenPopup;
    
    // Show popup automatically only if user hasn't seen it in this session
    // and after a small delay to not be too intrusive
    if (isFirstVisit) {
      const timer = setTimeout(() => {
        setShowHolidayPopup(true);
        sessionStorage.setItem('hasSeenHolidayPopup', 'true');
      }, 2000); // 2 second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Latest Articles Section */}
        <section className="section">
          <div className="container-custom">
            <h2 className="text-2xl font-serif mb-6 text-orthodox-blue text-center">{t('home.latestArticles')}</h2>
            <LatestArticles />
            <div className="text-center mt-6">
              <Link to="/clanci" className="btn-primary inline-block">{t('home.viewAllArticles')}</Link>
            </div>
          </div>
        </section>
        
        {/* Service & Events Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <h2 className="text-2xl font-serif mb-6 text-orthodox-blue text-center">{t('home.upcomingEvents')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <CombinedEventsSchedule />
            </div>
          </div>
        </section>
        
        {/* Priest's Message Section */}
        <section className="section">
          <div className="container-custom">
            <PriestMessage />
          </div>
        </section>
        
        {/* Info Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">Visit Our Church</h3>
                <p className="mb-4">Located in the heart of Stockholm, our church welcomes all who seek spiritual guidance and community fellowship. Join us for Divine Liturgy every Sunday and experience the beauty of Orthodox worship.</p>
                <div className="mb-4">
                  <p className="font-semibold">Address:</p>
                  <p>Storgatan 15, 114 51 Stockholm, Sweden</p>
                </div>
                <div className="aspect-video rounded overflow-hidden">
                  <Map />
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>+46 8 123 456 78</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>info@svetisava-stockholm.se</p>
                  </div>
                  <div>
                    <p className="font-semibold">Office Hours:</p>
                    <p>Tuesday - Friday: 10:00 - 16:00<br />Saturday: 09:00 - 12:00</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orthodox-blue bg-opacity-10 rounded">
                  <p className="text-sm">The Orthodox Church of Saint Sava serves the Serbian Orthodox community in Stockholm and welcomes all Orthodox Christians and those interested in learning about our faith.</p>
                </div>
                <Link to="/contact" className="btn-primary inline-block mt-4">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Donation Section */}
        <DonationSection />
      </main>
      
      <Footer onHolidayPopupOpen={() => setShowHolidayPopup(true)} />
      
      {/* Holiday popup */}
      <HolidayPopup 
        holidayService={holidayService} 
        open={showHolidayPopup}
        onOpenChange={setShowHolidayPopup}
      />
    </div>
  );
};

export default HomePage;
