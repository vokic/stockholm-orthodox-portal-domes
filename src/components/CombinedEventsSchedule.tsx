
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getUpcomingEvents } from '../data/calendarData';

const CombinedEventsSchedule: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Get first 5 upcoming events from all calendar data (services, events, slavas)
  const upcomingEvents = getUpcomingEvents(5);

  // Function to format date based on current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const isSerbian = language === 'sr_cyr' || language === 'sr_lat';
    const locale = isSerbian ? 'sr-RS' : 'en-US';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'service':
        return 'Service';
      case 'event':
        return 'Event';
      case 'slava':
        return 'Slava';
      default:
        return 'Event';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'bg-blue-100 text-blue-800';
      case 'event':
        return 'bg-green-100 text-green-800';
      case 'slava':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-orthodox-blue">
          <Calendar className="mr-2" size={24} />
          <h3 className="text-xl font-serif">{t('home.upcomingEvents')}</h3>
        </div>
        <Link 
          to="/calendar" 
          className="text-orthodox-blue hover:text-orthodox-gold text-sm font-medium"
        >
          View All →
        </Link>
      </div>
      
      {upcomingEvents.length > 0 ? (
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-l-4 border-orthodox-gold pl-4 py-3 bg-gray-50 rounded-r">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <div className="flex items-center gap-2 mb-1 sm:mb-0">
                  <Calendar size={16} className="text-orthodox-blue" />
                  <span className="font-medium text-orthodox-blue">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-orthodox-blue" />
                  <span className="text-sm">{event.time}</span>
                </div>
              </div>
              
              <h4 className="font-semibold text-lg mb-1">{event.name}</h4>
              
              {(event as any).description && (
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {(event as any).description}
                </p>
              )}
              
              <div className="flex items-center justify-between">
                {(event as any).location && (
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{(event as any).location}</span>
                  </div>
                )}
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                  {getEventTypeLabel(event.type)}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-600">
          <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
          <p>No upcoming events scheduled.</p>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <Link 
          to="/calendar" 
          className="btn-primary inline-block"
        >
          View Full Calendar
        </Link>
      </div>
    </div>
  );
};

export default CombinedEventsSchedule;
