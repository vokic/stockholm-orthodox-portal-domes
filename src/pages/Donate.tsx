import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../hooks/use-toast';

const DonatePage: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleDonation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank You for Your Donation",
      description: "Your support helps maintain our church and its ministries.",
      duration: 5000,
    });
    // In a real application, this would process the donation
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('donate.title')}
            </h1>
            <p className="text-xl">{t('donate.text')}</p>
          </div>
        </div>

        {/* Bank Transfer and SWISH Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('donate.options')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Bank Transfer Information */}
                <div>
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue">Bank Transfer Details</h3>
                  <p className="mb-4">You can make a direct bank transfer to our church account:</p>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p><strong>Bank:</strong> Nordea Bank</p>
                    <p><strong>Account Name:</strong> Orthodox Church in Stockholm</p>
                    <p><strong>Account Number:</strong> 1234-5678-9012</p>
                    <p><strong>IBAN:</strong> SE45 5000 0000 0583 9825 7466</p>
                    <p><strong>BIC/SWIFT:</strong> NDEASESS</p>
                    <p className="mt-2 text-sm text-gray-600">Please include your name and "Donation" in the reference field.</p>
                  </div>
                </div>

                {/* SWISH QR Code */}
                <div>
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue">SWISH Payment</h3>
                  <p className="mb-4">Scan the QR code below to donate via SWISH:</p>
                  
                  <div className="bg-gray-50 p-6 rounded-md text-center">
                    <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
                      {/* QR Code placeholder - in a real app, this would be generated */}
                      <div className="w-48 h-48 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-sm">
                        SWISH QR Code
                        <br />
                        Phone: 0701234567
                      </div>
                    </div>
                    <p className="mt-4 font-medium">SWISH Number: 070-123 45 67</p>
                    <p className="text-sm text-gray-600">Include "Donation" in the message</p>
                  </div>
                </div>
              </div>
              
              <div className="ornament mb-8">☦</div>
              
              {/* Other Ways to Support */}
              <h3 className="font-serif text-xl mb-4 text-orthodox-blue">Other Ways to Support</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Volunteer Your Time</h4>
                  <p className="mb-4">
                    We always need volunteers to help with various aspects of church operations and events. 
                    Whether it's helping with maintenance, assisting with liturgical needs, or organizing events, your time is valuable to us.
                  </p>
                  <a href="/contact" className="text-orthodox-blue hover:text-orthodox-gold underline">Contact us to volunteer →</a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Donate Items</h4>
                  <p className="mb-4">
                    Our church welcomes donations of liturgical items, icons, books, and other resources that support our worship and educational activities.
                    We also collect non-perishable food items and clothing for our community outreach programs.
                  </p>
                  <a href="/contact" className="text-orthodox-blue hover:text-orthodox-gold underline">Contact us about item donations →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonatePage;
