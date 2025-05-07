
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CombinedEventsSchedule: React.FC = () => {
  const { t } = useLanguage();

  // Sample combined service and events data
  const items = [
    {
      type: 'service',
      day: 'Sunday',
      name: 'Divine Liturgy',
      time: '10:00 - 12:00',
      date: 'Every Sunday'
    },
    {
      type: 'event',
      date: 'May 10, 2025',
      name: 'Parish Feast Day',
      description: 'Annual celebration of our parish patron saint.'
    },
    {
      type: 'service',
      day: 'Saturday',
      name: 'Vespers',
      time: '18:00 - 19:00',
      date: 'Every Saturday'
    },
    {
      type: 'event',
      date: 'May 15, 2025',
      name: 'Community Lunch',
      description: 'Fellowship and community building after Divine Liturgy.'
    },
    {
      type: 'service',
      day: 'Wednesday',
      name: 'Akathist',
      time: '19:00 - 20:00',
      date: 'Every Wednesday'
    },
    {
      type: 'event',
      date: 'May 22, 2025',
      name: 'Bible Study',
      description: 'Weekly Bible study and discussion group.'
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center mb-4 text-orthodox-blue">
        <Calendar className="mr-2" size={20} />
        <h3 className="font-serif">Upcoming Services & Events</h3>
      </div>
      
      <ul className="divide-y">
        {items.map((item, index) => (
          <li key={index} className="py-3">
            {item.type === 'service' ? (
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{item.day}</p>
                  <p>{item.name}</p>
                </div>
                <div className="text-right">
                  <p>{item.time}</p>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-600">{item.date}</p>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            )}
            <div className="mt-1">
              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                {item.type === 'service' ? 'Service' : 'Event'}
              </span>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-4">
        <Link to="/calendar" className="text-orthodox-blue hover:text-orthodox-gold">
          View Full Calendar →
        </Link>
      </div>
    </div>
  );
};

export default CombinedEventsSchedule;
