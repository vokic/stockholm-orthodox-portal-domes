import React from "react";
import DOMPurify from "dompurify";
import { Calendar as CalendarIcon, Clock, MapPin, Star } from "lucide-react";
import { Event } from "../../services/eventService";
import { useLanguage } from "@/context/LanguageContext";

interface EventsListProps {
  events: Event[];
  formatDate: (dateString: string) => string;
  eventType?: "service" | "event" | "slava";
}

const EventsList: React.FC<EventsListProps> = ({
  events,
  formatDate,
  eventType,
}) => {
  const { t } = useLanguage();

  const getEventTypeLabel = (type: string) => {
    return t(`events.${type}`); // Use translation!
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "service":
        return "bg-blue-100 text-blue-800";
      case "event":
        return "bg-green-100 text-green-800";
      case "slava":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (events.length === 0) {
    return <p className="text-gray-600">{t("events.noEvents")}</p>;
  }

  return (
    <div className="divide-y">
      {events.map((event) => {
        const itemClasses = event.highlight
          ? "py-4 border-l-4 border-orthodox-gold bg-gradient-to-r from-yellow-100 via-yellow-50 to-orange-50 pl-4 pr-4 rounded-r-lg shadow-md border border-yellow-200"
          : "py-4";

        return (
          <div key={event.id} className={itemClasses}>
            {event.highlight && (
              <div className="flex items-center gap-1 mb-2">
                <Star
                  size={16}
                  className="text-orthodox-gold fill-orthodox-gold"
                />
                <span className="text-sm font-medium text-orthodox-gold">
                  {t("events.highlited")}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <CalendarIcon size={18} className="text-orthodox-blue" />
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-orthodox-blue" />
                <span>{event.time || t("timeTBD")}</span>
              </div>
            </div>

            <h3
              className={`text-xl font-semibold mb-1 ${
                event.highlight ? "text-orthodox-blue" : ""
              }`}
            >
              {event.title}
            </h3>

            {event.description && (
              <div
                className="text-gray-700 mb-2 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.description) }}
              />
            )}

            <div className="flex items-center justify-between w-full mt-2">
              {event.location && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              )}
              <div className="flex-shrink-0">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(
                    event.type
                  )}`}
                >
                  {getEventTypeLabel(event.type)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;
