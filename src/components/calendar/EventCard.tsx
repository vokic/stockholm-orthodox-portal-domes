import React from "react";
import { Calendar as CalendarIcon, Clock, MapPin, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { format } from "date-fns";

const EventCard = ({ event }) => {
  const { t, language } = useLanguage();
  const translatedType = t(`events.${event.type}`);

  const formatDate = (dateString: string) => {
    if (!dateString) return "Date TBD";
    try {
      return format(new Date(dateString), "dd.MM.yyyy.");
    } catch {
      return dateString;
    }
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

  const cardClasses = event.highlight
    ? "py-4 border-l-4 border-orthodox-gold bg-gradient-to-r from-yellow-100 via-yellow-50 to-orange-50 pl-4 pr-4 rounded-r-lg shadow-md border border-yellow-200"
    : "py-4";

  return (
    <div className={cardClasses} key={`${event.id}-${language}`}>
      {event.highlight && (
        <div className="flex items-center gap-1 mb-2">
          <Star size={16} className="text-orthodox-gold fill-orthodox-gold" />
          <span className="text-sm font-medium text-orthodox-gold">
            {t("events.highlited")}
          </span>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <CalendarIcon size={18} className="text-orthodox-blue" />
          <span className="font-medium">{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-orthodox-blue" />
          <span>{event.time || "Time TBD"}</span>
        </div>
      </div>

      <h4
        className={`text-xl font-semibold mb-1 ${
          event.highlight ? "text-orthodox-blue" : ""
        }`}
      >
        {event.title}
      </h4>

      {event.description && (
        <div
          className="text-gray-700 mb-2 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: event.description }}
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
            {translatedType}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
