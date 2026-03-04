import React from "react";
import { Separator } from "@/components/ui/separator";
import { Event } from "../../services/eventService";
import EventCard from "./EventCard";
import MonthHeader from "./MonthHeader";
import { useLanguage } from "@/context/LanguageContext";
import { format } from "date-fns";
import { sr } from "date-fns/locale"; // Import Serbian locale

interface AllEventsViewProps {
  events: Event[];
  loading: boolean;
  formatDate: (dateString: string) => string;
  formatMonthYear: (dateString: string) => string;
  totalEventsCount: number;
  view: "all" | "service" | "event" | "slava";
}

const AllEventsView: React.FC<AllEventsViewProps> = ({
  events,
  loading,
  formatDate,
  formatMonthYear,
  totalEventsCount,
}) => {
  const { t } = useLanguage();

  const groupEventsByMonth = (events: Event[]) => {
    const grouped: { [key: string]: Event[] } = {};
    events.forEach((event) => {
      if (event.date) {
        const date = new Date(event.date);
        const month = date
          .toLocaleDateString("en-US", { month: "long" })
          .toLowerCase();
        const year = date.getFullYear();

        // Translate the month
        const translatedMonth = t(`months.${month}`);
        const monthYear = `${translatedMonth} ${year}`;

        if (!grouped[monthYear]) {
          grouped[monthYear] = [];
        }
        grouped[monthYear].push(event);
      }
    });

    const sortedGrouped: { [key: string]: Event[] } = {};
    Object.keys(grouped)
      .sort((a, b) => {
        // Parse back to compare dates
        const parseMonthYear = (str: string) => {
          const parts = str.split(" ");
          const year = parseInt(parts[parts.length - 1]);
          // Get original English month name for comparison
          const translatedMonth = parts.slice(0, -1).join(" ");
          // Find the month index by checking all translations
          let monthIndex = 0;
          for (let i = 0; i < 12; i++) {
            const date = new Date(2000, i, 1);
            const englishMonth = date
              .toLocaleDateString("en-US", { month: "long" })
              .toLowerCase();
            if (t(`months.${englishMonth}`) === translatedMonth) {
              monthIndex = i;
              break;
            }
          }
          return new Date(year, monthIndex, 1);
        };

        return parseMonthYear(a).getTime() - parseMonthYear(b).getTime();
      })
      .forEach((key) => {
        sortedGrouped[key] = grouped[key];
      });

    return sortedGrouped;
  };

  const groupedEvents = groupEventsByMonth(events);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-400">{t("allEvents.loading")}</div>
    );
  }

  if (Object.keys(groupedEvents).length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-serif mb-4">{t("allEvents.title")}</h2>
        <p className="text-gray-600">{t("allEvents.noEvents")}</p>
        {/*         <p className="text-sm text-gray-500 mt-2">
          Total events loaded: {totalEventsCount}
        </p> */}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-serif mb-4">{t("events.sviDogadjaji")}</h2>
      {Object.entries(groupedEvents).map(
        ([monthYear, monthEvents], monthIndex) => (
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
        )
      )}
    </div>
  );
};

export default AllEventsView;
