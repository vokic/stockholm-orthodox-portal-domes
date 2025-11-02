import React from "react";
import { Event } from "../../services/eventService";
import EventsList from "./EventsList";
import { Separator } from "@/components/ui/separator";
import MonthHeader from "./MonthHeader";
import { useLanguage } from "@/context/LanguageContext";
import { format } from "date-fns";
import { sr } from "date-fns/locale"; // Import Serbian locale

interface FilteredEventsViewProps {
  events: Event[];
  loading: boolean;
  eventType: "service" | "event" | "slava";
  title: string;
}

const groupEventsByMonth = (events: Event[]) => {
  const grouped: { [key: string]: Event[] } = {};
  events.forEach((event) => {
    if (event.date) {
      // Use Serbian locale here
      const monthYear = format(new Date(event.date), "MMMM yyyy", {
        locale: sr,
      });
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

const FilteredEventsView: React.FC<FilteredEventsViewProps> = ({
  events,
  loading,
  eventType,
  title,
}) => {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    if (!dateString) return "Date TBD";
    try {
      return format(new Date(dateString), "dd.MM.yyyy.");
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-400">
        {/* Loading {eventType}s... */}
        ...
      </div>
    );
  }

  const groupedEvents = groupEventsByMonth(events);

  if (Object.keys(groupedEvents).length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-serif mb-4">{title}</h2>
        <p className="text-gray-600">{t("events.noEvents")}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-serif mb-4">{title}</h2>
      {Object.entries(groupedEvents).map(
        ([monthYear, monthEvents], monthIndex) => (
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
        )
      )}
    </div>
  );
};

export default FilteredEventsView;
