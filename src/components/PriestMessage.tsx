
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PriestMessage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
        {t('priests.title')}
      </h3>
      
      {/* First Priest */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/4 flex flex-col items-center mb-4 md:mb-0">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt={t('priests.father1.name')} 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-center">{t('priests.father1.name')}</p>
        </div>
        
        <div className="md:w-3/4">
          <p className="mb-4 italic">
            "{t('priests.father1.greeting')}"
          </p>
          <p className="mb-4">
            {t('priests.father1.message1')}
          </p>
          <p className="mb-4">
            {t('priests.father1.message2')}
          </p>
          <p>
            {t('priests.father1.blessing')}
          </p>
          <p className="mt-4 text-right font-serif italic">{t('priests.father1.signature')}</p>
        </div>
      </div>
      
      {/* Second Priest */}
      <div className="flex flex-col md:flex-row gap-6 border-t border-gray-200 pt-8">
        <div className="md:w-1/4 flex flex-col items-center mb-4 md:mb-0">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
            <img 
              src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
              alt={t('priests.father2.name')} 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-center">{t('priests.father2.name')}</p>
        </div>
        
        <div className="md:w-3/4">
          <p className="mb-4 italic">
            "{t('priests.father2.greeting')}"
          </p>
          <p className="mb-4">
            {t('priests.father2.message1')}
          </p>
          <p className="mb-4">
            {t('priests.father2.message2')}
          </p>
          <p>
            {t('priests.father2.blessing')}
          </p>
          <p className="mt-4 text-right font-serif italic">{t('priests.father2.signature')}</p>
        </div>
      </div>
    </div>
  );
};

export default PriestMessage;
