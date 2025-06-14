import React from 'react';
import { Event } from '../../services/eventService';
import EventsList from './EventsList';
import { Separator } from "@/components/ui/separator";
import MonthHeader from './MonthHeader';

interface FilteredEventsViewProps {
  events: Event[];
  loading: boolean;
  formatDate: (dateString: string) => string;
  eventType: 'service' | 'event' | 'slava';
  title: string;
  // Accept optional formatMonthYear if provided by props (for header formatting)
  formatMonthYear?: (dateString: string) => string;
}

// Helper function to group events by month
const groupEventsByMonth = (events: Event[], formatMonthYear: (dateString: string) => string) => {
  const grouped: { [key: string]: Event[] } = {};
  events.forEach(event => {
    if (event.date) {
      const monthYear = formatMonthYear(event.date);
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(event);
    }
  });

  // Sort grouped events by month/year
  const sortedGrouped: { [key: string]: Event[] } = {};
  Object.keys(grouped)
    .sort((a, b) => {
      const dateA = new Date(a + ' 1');
      const dateB = new Date(b + ' 1');
      return dateA.getTime() - dateB.getTime();
    })
    .forEach(key => {
      sortedGrouped[key] = grouped[key];
    });

  return sortedGrouped;
};

const FilteredEventsView: React.FC<FilteredEventsViewProps> = ({
  events,
  loading,
  formatDate,
  formatMonthYear,
  eventType,
  title
}) => {
  if (loading) {
    return <div className="text-center py-10 text-gray-400">Loading {eventType}s...</div>;
  }

  // We'll use the passed formatMonthYear or default fallback
  const formatMonthYearFallback = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };
  const monthHeaderFn = formatMonthYear || formatMonthYearFallback;

  // Group the filtered events by month/year
  const groupedEvents = groupEventsByMonth(events, monthHeaderFn);

  // If there are no events, keep the legacy message
  if (Object.keys(groupedEvents).length === 0) {
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
    <div>
      <h2 className="text-2xl font-serif mb-4">{title}</h2>
      {/* Insert month grouping */}
      {Object.entries(groupedEvents).map(([monthYear, monthEvents], monthIndex) => (
        <div key={monthYear}>
          {monthIndex > 0 && <Separator className="my-8" />}
          <div className="mb-6">
            <MonthHeader monthYear={monthYear} />
            <EventsList
              events={monthEvents}
              formatDate={formatDate}
              eventType={eventType}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredEventsView;
