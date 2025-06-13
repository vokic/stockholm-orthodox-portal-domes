
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutPriests: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t('about.priests')}
          </h2>
          
          {/* First Priest */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt={t('about.priest1.imageAlt')} 
                className="rounded-lg w-full"
              />
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-xl font-serif mb-3">{t('about.priest1.name')}</h3>
              
              <p className="mb-4">
                {t('about.priest1.p1')}
              </p>
              <p className="mb-4">
                {t('about.priest1.p2')}
              </p>
              <p className="mb-4">
                {t('about.priest1.p3')}
              </p>
              <p>
                {t('about.priest1.p4')}
              </p>
            </div>
          </div>
          
          {/* Second Priest */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                alt={t('about.priest2.imageAlt')} 
                className="rounded-lg w-full"
              />
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-xl font-serif mb-3">{t('about.priest2.name')}</h3>
              
              <p className="mb-4">
                {t('about.priest2.p1')}
              </p>
              <p className="mb-4">
                {t('about.priest2.p2')}
              </p>
              <p className="mb-4">
                {t('about.priest2.p3')}
              </p>
              <p>
                {t('about.priest2.p4')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPriests;
