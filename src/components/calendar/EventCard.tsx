
import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Event } from '../../services/eventService';

interface EventCardProps {
  event: Event;
  formatDate: (dateString: string) => string;
}

const EventCard: React.FC<EventCardProps> = ({ event, formatDate }) => {
  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <CalendarIcon size={18} className="text-orthodox-blue" />
          <span className="font-medium">{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-orthodox-blue" />
          <span>{event.time || 'Time TBD'}</span>
        </div>
      </div>
      <h4 className="text-xl font-semibold mb-1">{event.title}</h4>
      {event.description && (
        <p className="text-gray-700 mb-2">{event.description}</p>
      )}
      {event.location && (
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <MapPin size={16} />
          <span>{event.location}</span>
        </div>
      )}
      <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
        {event.type === 'service' ? 'Service' : event.type === 'event' ? 'Event' : 'Slava'}
      </span>
    </div>
  );
};

export default EventCard;
