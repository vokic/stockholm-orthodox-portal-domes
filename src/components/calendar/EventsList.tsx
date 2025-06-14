
import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Event } from '../../services/eventService';

interface EventsListProps {
  events: Event[];
  formatDate: (dateString: string) => string;
  eventType?: 'service' | 'event' | 'slava';
}

const EventsList: React.FC<EventsListProps> = ({ events, formatDate, eventType }) => {
  const filteredEvents = eventType ? events.filter(e => e.type === eventType) : events;

  if (filteredEvents.length === 0) {
    const message = eventType === 'service' 
      ? 'No special services currently scheduled.'
      : eventType === 'event'
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
