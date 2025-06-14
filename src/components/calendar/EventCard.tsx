
import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Event } from '../../services/eventService';

interface EventCardProps {
  event: Event;
  formatDate: (dateString: string) => string;
}

const EventCard: React.FC<EventCardProps> = ({ event, formatDate }) => {
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
      
      {/* Location and Tag Pill - location on left, tag on right */}
      <div className="flex items-center justify-between w-full mt-2">
        {event.location && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
        )}
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
          {getEventTypeLabel(event.type)}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
