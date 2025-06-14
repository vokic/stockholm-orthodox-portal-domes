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
            <p className="text-xl">Support our church community and help us continue our spiritual mission. Your generous donations help maintain our beautiful church, support our ministries, and serve our community.</p>
          </div>
        </div>

        {/* Bank Transfer and SWISH Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                Donation Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Bank Transfer Information */}
                <div>
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue">Bank Transfer Details</h3>
                  <p className="mb-4">You can make a direct bank transfer to our church account. All donations are used for church maintenance, religious services, and community programs.</p>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p><strong>Bank:</strong> Nordea Bank</p>
                    <p><strong>Account Name:</strong> Orthodox Church of Saint Sava</p>
                    <p><strong>Account Number:</strong> 3300 12 34567</p>
                    <p><strong>IBAN:</strong> SE45 3000 0000 0330 0123 4567</p>
                    <p><strong>BIC/SWIFT:</strong> NDEASESS</p>
                    <p className="mt-2 text-sm text-gray-600">Please include your name and "Donation to Saint Sava Church" in the reference field.</p>
                  </div>
                </div>

                {/* SWISH QR Code */}
                <div>
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue">SWISH Payment</h3>
                  <p className="mb-4">For quick and easy donations, use SWISH to transfer directly to our church account:</p>
                  
                  <div className="bg-gray-50 p-6 rounded-md text-center">
                    <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-orthodox-blue border-dashed flex items-center justify-center text-orthodox-blue text-sm font-medium">
                        <div className="text-center">
                          <div className="text-2xl mb-2">📱</div>
                          <div>SWISH QR Code</div>
                          <div className="text-xs mt-1">Scan with SWISH app</div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 font-medium text-orthodox-blue">SWISH Number: 070-123 45 67</p>
                    <p className="text-sm text-gray-600">Include "Donation Saint Sava" in the message</p>
                  </div>
                </div>
              </div>
              
              <div className="ornament mb-8">☦</div>
              
              {/* Other Ways to Support */}
              <h3 className="font-serif text-xl mb-4 text-orthodox-blue">Other Ways to Support Our Church</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2 text-orthodox-blue">Volunteer Your Time</h4>
                  <p className="mb-4">
                    We welcome volunteers to help with church maintenance, liturgical assistance, choir participation, Sunday school teaching, and organizing community events. Your time and talents are precious gifts to our parish family.
                  </p>
                  <a href="/contact" className="text-orthodox-blue hover:text-orthodox-gold underline">Contact us to volunteer →</a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-orthodox-blue">Donate Items</h4>
                  <p className="mb-4">
                    We gratefully accept donations of liturgical items, icons, religious books, and church supplies. We also collect items for our community outreach programs including food for local families and clothing for those in need.
                  </p>
                  <a href="/contact" className="text-orthodox-blue hover:text-orthodox-gold underline">Contact us about item donations →</a>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orthodox-cream rounded-lg">
                <h4 className="font-semibold mb-2 text-orthodox-blue">Memorial Donations</h4>
                <p className="text-sm">
                  Honor the memory of loved ones through memorial donations. These gifts help preserve our church for future generations while keeping the memory of the departed alive in our prayers.
                </p>
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
