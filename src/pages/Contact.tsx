
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../hooks/use-toast';
import Map from '../components/Map';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We will respond as soon as possible.",
      duration: 5000,
    });
    // In a real application, this would submit the form data to a server
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('nav.contact')}
            </h1>
          </div>
        </div>

        {/* Contact Information and Form Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="card">
                <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">Address</h3>
                    <p>Birger Jarlsgatan 98</p>
                    <p>114 20 Stockholm</p>
                    <p>Sweden</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">Phone</h3>
                    <p>Main Office: +46 8 123 456 78</p>
                    <p>Father Nicholas: +46 8 123 456 79</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">Email</h3>
                    <p>General Inquiries: info@orthodoxstockholm.se</p>
                    <p>Father Nicholas: father.nicholas@orthodoxstockholm.se</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">Office Hours</h3>
                    <p>Monday to Friday: 9:00 - 16:00</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed (Join us for Liturgy)</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="card">
                <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                Find Us
              </h2>
              
              <Map />
              
              <div className="mt-6">
                <h3 className="font-serif text-lg mb-2 text-orthodox-blue">Directions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>By Public Transport:</strong> 5-minute walk from Östermalmstorg metro station.</li>
                  <li><strong>By Bus:</strong> Bus routes 4 and 72 stop close to the church.</li>
                  <li><strong>By Car:</strong> Limited parking available on Birger Jarlsgatan.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
