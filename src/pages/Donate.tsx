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

        {/* Donation Options Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('donate.options')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* One-time Donation */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue text-center">One-time Donation</h3>
                  <p className="text-center mb-6">Support our church with a single donation of any amount.</p>
                  <button className="btn-primary w-full">Donate Now</button>
                </div>
                
                {/* Monthly Support */}
                <div className="bg-orthodox-cream border border-orthodox-gold rounded-lg p-6 shadow-md">
                  <div className="bg-orthodox-gold text-white text-xs font-bold uppercase px-3 py-1 rounded absolute -mt-9 ml-6">
                    Recommended
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue text-center">Monthly Support</h3>
                  <p className="text-center mb-6">Become a regular supporter with monthly donations.</p>
                  <button className="btn-secondary w-full">Become a Supporter</button>
                </div>
                
                {/* Memorial Donation */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue text-center">Memorial Donation</h3>
                  <p className="text-center mb-6">Make a donation in memory of a loved one.</p>
                  <button className="btn-primary w-full">Donate in Memoriam</button>
                </div>
              </div>
              
              <div className="ornament mt-12 mb-8">☦</div>
              
              {/* Bank Transfer Information */}
              <div className="mb-12">
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
        
        {/* Donation Form Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                Online Donation Form
              </h2>
              
              <form onSubmit={handleDonation} className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Select Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <button type="button" className="border border-gray-300 rounded py-2 hover:bg-gray-50">$25</button>
                    <button type="button" className="border border-gray-300 rounded py-2 hover:bg-gray-50">$50</button>
                    <button type="button" className="border border-gray-300 rounded py-2 hover:bg-gray-50">$100</button>
                    <button type="button" className="border border-gray-300 rounded py-2 hover:bg-gray-50">$250</button>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="mr-2">$</span>
                    <input 
                      type="number" 
                      className="w-full p-2 border border-gray-300 rounded" 
                      placeholder="Other amount"
                      min="1"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Donation Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="general">General Support</option>
                    <option value="building">Building Maintenance</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="education">Religious Education</option>
                    <option value="memorial">In Memory Of</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Personal Information</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="p-2 border border-gray-300 rounded" 
                      required 
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="p-2 border border-gray-300 rounded" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-2 border border-gray-300 rounded" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Make this a monthly recurring donation</span>
                  </label>
                </div>
                
                <div className="mb-6">
                  <textarea 
                    placeholder="Optional message" 
                    className="w-full p-2 border border-gray-300 rounded" 
                    rows={3}
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" className="btn-primary w-full py-3 text-lg">
                    {t('donate.button')}
                  </button>
                  <p className="text-center mt-4 text-sm text-gray-600">
                    {t('donate.thanks')}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonatePage;
