
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

  const filterType = getFilterType(eventType);
  const filteredEvents = filterType ? events.filter(e => e.type === filterType) : events;

  console.log('EventsList - eventType prop:', eventType); // Debug log
  console.log('EventsList - filterType:', filterType); // Debug log
  console.log('EventsList - filteredEvents:', filteredEvents); // Debug log

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
          {event.location && (
            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {event.location}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventsList;
