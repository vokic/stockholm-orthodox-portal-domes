
import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Event } from '../../services/eventService';

interface EventsListProps {
  events: Event[];
  formatDate: (dateString: string) => string;
  eventType?: 'services' | 'events' | 'slava';
}

const EventsList: React.FC<EventsListProps> = ({ events, formatDate, eventType }) => {
  // Fix the filtering logic - map the prop values to actual event types
  const getFilterType = (eventType?: string) => {
    switch (eventType) {
      case 'services':
        return 'service';
      case 'events':
        return 'event';
      case 'slava':
        return 'slava';
      default:
        return null;
    }
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

  const filterType = getFilterType(eventType);
  // Remove the extra filtering here since events are already filtered in Calendar.tsx
  const filteredEvents = events;

  console.log('EventsList - eventType prop:', eventType); // Debug log
  console.log('EventsList - filterType:', filterType); // Debug log
  console.log('EventsList - received events:', events); // Debug log

  if (filteredEvents.length === 0) {
    const message = eventType === 'services' 
      ? 'No special services currently scheduled.'
      : eventType === 'events'
      ? 'No events currently scheduled.'
      : eventType === 'slava'
      ? 'No slavas currently scheduled.'
      : 'No events to display.';
    
    return <p className="text-gray-600">{message}</p>;
  }

  return (
    <div className="divide-y">
      {filteredEvents.map((event) => (
        <div key={event.id} className="py-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <CalendarIcon size={18} className="text-orthodox-blue" />
              <span className="font-medium">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-orthodox-blue" />
              <span>{event.time || 'Time TBD'}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
          {event.description && <p className="text-gray-700 mb-2">{event.description}</p>}
          
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
      ))}
    </div>
  );
};

export default EventsList;
