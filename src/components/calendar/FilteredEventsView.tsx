
import React from 'react';
import { Event } from '../../services/eventService';
import EventsList from './EventsList';
import RegularServicesTable from './RegularServicesTable';

interface FilteredEventsViewProps {
  events: Event[];
  loading: boolean;
  formatDate: (dateString: string) => string;
  eventType: 'service' | 'event' | 'slava';
  title: string;
}

const FilteredEventsView: React.FC<FilteredEventsViewProps> = ({
  events,
  loading,
  formatDate,
  eventType,
  title
}) => {
  if (loading) {
    return <div className="text-center py-10 text-gray-400">Loading {eventType}s...</div>;
  }

  return (
    <div>
      {eventType === 'service' && <RegularServicesTable />}
      
      <h2 className="text-2xl font-serif mb-4">{title}</h2>
      <EventsList 
        events={events} 
        formatDate={formatDate} 
        eventType={eventType} 
      />
    </div>
  );
};

export default FilteredEventsView;
