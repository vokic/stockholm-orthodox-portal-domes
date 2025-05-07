
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
                  {t('contact.info')}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">{t('contact.address.title')}</h3>
                    <p>{t('contact.address.line1')}</p>
                    <p>{t('contact.address.line2')}</p>
                    <p>{t('contact.address.line3')}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">{t('contact.phone.title')}</h3>
                    <p>{t('contact.phone.main')}</p>
                    <p>{t('contact.phone.priest')}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">{t('contact.email.title')}</h3>
                    <p>{t('contact.email.general')}</p>
                    <p>{t('contact.email.priest')}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">{t('contact.hours.title')}</h3>
                    <p>{t('contact.hours.weekdays')}</p>
                    <p>{t('contact.hours.saturday')}</p>
                    <p>{t('contact.hours.sunday')}</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="card">
                <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  {t('contact.form.title')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">{t('contact.form.subject')}</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">{t('contact.form.message')}</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full">
                      {t('contact.form.submit')}
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
                {t('contact.findus')}
              </h2>
              
              <Map />
              
              <div className="mt-6">
                <h3 className="font-serif text-lg mb-2 text-orthodox-blue">{t('contact.directions.title')}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('about.directions.public')}</li>
                  <li>{t('about.directions.bus')}</li>
                  <li>{t('about.directions.car')}</li>
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
