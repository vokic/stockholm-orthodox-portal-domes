
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutSvetiSava: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t('about.svetiSava.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1581337204873-1a38e3b8d49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
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
  );
};

export default AboutSvetiSava;
