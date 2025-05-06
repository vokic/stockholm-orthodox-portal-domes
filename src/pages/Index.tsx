
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceSchedule from '../components/ServiceSchedule';
import EventsList from '../components/EventsList';
import PriestMessage from '../components/PriestMessage';
import DonationSection from '../components/DonationSection';
import HolidayPopup from '../components/HolidayPopup';

const HomePage: React.FC = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceSchedule />
              <EventsList />
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
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">Visit Us</h3>
                <p className="mb-4">Birger Jarlsgatan 98, 114 20 Stockholm</p>
                <div className="aspect-video bg-gray-200 rounded overflow-hidden">
                  {/* This would be a map in a real implementation */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    Map placeholder
                  </div>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">Contact</h3>
                <p className="mb-2"><strong>Phone:</strong> +46 8 123 456 78</p>
                <p className="mb-2"><strong>Email:</strong> info@svetisava-stockholm.se</p>
                <p className="mb-4"><strong>Office Hours:</strong> Monday to Friday, 9:00 - 16:00</p>
                <Link to="/contact" className="btn-primary inline-block mt-2">Contact Us</Link>
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
