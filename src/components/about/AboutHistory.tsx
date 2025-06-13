
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutHistory: React.FC = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default AboutHistory;
