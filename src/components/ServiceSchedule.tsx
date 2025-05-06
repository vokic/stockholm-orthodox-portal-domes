
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar } from 'lucide-react';

const ServiceSchedule: React.FC = () => {
  const { t } = useLanguage();

  // Sample service schedule data
  const services = [
    {
      day: 'Sunday',
      name: 'Divine Liturgy',
      time: '10:00 - 12:00',
    },
    {
      day: 'Saturday',
      name: 'Vespers',
      time: '18:00 - 19:00',
    },
    {
      day: 'Wednesday',
      name: 'Akathist',
      time: '19:00 - 20:00',
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center mb-4 text-orthodox-blue">
        <Calendar className="mr-2" size={20} />
        <h3 className="font-serif">{t('home.upcomingServices')}</h3>
      </div>
      
      <ul className="divide-y">
        {services.map((service, index) => (
          <li key={index} className="py-3 flex justify-between">
            <div>
              <p className="font-semibold">{service.day}</p>
              <p>{service.name}</p>
            </div>
            <div className="text-right">
              <p>{service.time}</p>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-4">
        <a href="/services" className="text-orthodox-blue hover:text-orthodox-gold">
          {t('services.calendar')} →
        </a>
      </div>
    </div>
  );
};

export default ServiceSchedule;
