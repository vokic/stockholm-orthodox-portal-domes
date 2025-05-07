
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CombinedEventsSchedule from '../components/CombinedEventsSchedule';
import PriestMessage from '../components/PriestMessage';
import DonationSection from '../components/DonationSection';
import HolidayPopup from '../components/HolidayPopup';
import Map from '../components/Map';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  // Holiday service information for the popup
  const holidayService = {
    title: "Feast of Saint Sava",
    date: "January 27, 2026",
    time: "10:00 - 12:30",
    description: "Join us for the Divine Liturgy celebrating Saint Sava, the first Archbishop of Serbia and our church's patron saint. Following the service, there will be a festive meal in the parish hall."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Service & Events Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
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
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">{t('home.visitUs')}</h3>
                <p className="mb-4">{t('home.location')}</p>
                <div className="aspect-video rounded overflow-hidden">
                  <Map />
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">{t('home.contactInfo')}</h3>
                <p className="mb-2">{t('home.phone')}</p>
                <p className="mb-2">{t('home.email')}</p>
                <p className="mb-4">{t('home.officeHours')}</p>
                <Link to="/contact" className="btn-primary inline-block mt-2">{t('home.contactUs')}</Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Donation Section */}
        <DonationSection />
      </main>
      
      <Footer />
      
      {/* Holiday popup */}
      <HolidayPopup holidayService={holidayService} />
    </div>
  );
};

export default HomePage;
