import React from "react";
import { Separator } from "@/components/ui/separator";
import { Event } from "../../services/eventService";
import EventCard from "./EventCard";
import MonthHeader from "./MonthHeader";

interface AllEventsViewProps {
  events: Event[];
  loading: boolean;
  formatDate: (dateString: string) => string;
  formatMonthYear: (dateString: string) => string;
  totalEventsCount: number;
}

const AllEventsView: React.FC<AllEventsViewProps> = ({
  events,
  loading,
  formatDate,
  formatMonthYear,
  totalEventsCount,
}) => {
  const groupEventsByMonth = (events: Event[]) => {
    const grouped: { [key: string]: Event[] } = {};
    events.forEach((event) => {
      if (event.date) {
        const monthYear = formatMonthYear(event.date);
        if (!grouped[monthYear]) {
          grouped[monthYear] = [];
        }
        grouped[monthYear].push(event);
      }
    });

    const sortedGrouped: { [key: string]: Event[] } = {};
    Object.keys(grouped)
      .sort((a, b) => {
        const dateA = new Date(a + " 1");
        const dateB = new Date(b + " 1");
        return dateA.getTime() - dateB.getTime();
      })
      .forEach((key) => {
        sortedGrouped[key] = grouped[key];
      });

    return sortedGrouped;
  };

  const groupedEvents = groupEventsByMonth(events);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-400">Loading events...</div>
    );
  }

  if (Object.keys(groupedEvents).length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-serif mb-4">All Events</h2>
        <p className="text-gray-600">No events to display.</p>
        <p className="text-sm text-gray-500 mt-2">
          Total events loaded: {totalEventsCount}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* <h2 className="text-2xl font-serif mb-4">All Events</h2>
      {Object.entries(groupedEvents).map(([monthYear, monthEvents], monthIndex) => (
        <div key={monthYear}>
          {monthIndex > 0 && <Separator className="my-8" />}
          <div className="mb-6">
            <MonthHeader monthYear={monthYear} />
            <div className="divide-y pl-4">
              {monthEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  formatDate={formatDate} 
                />
              ))}
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default AllEventsView;
