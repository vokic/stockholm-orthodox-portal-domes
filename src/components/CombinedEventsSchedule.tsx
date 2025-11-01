import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchEvents, Event } from "../services/eventService";
import { format } from "date-fns";

const CombinedEventsSchedule: React.FC = () => {
  const { t } = useLanguage();
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    fetchEvents()
      .then((events) => {
        if (mounted) {
          // Filter to get upcoming events (next 5)
          const today = new Date();
          const upcoming = events
            .filter((event) => event.date && new Date(event.date) >= today)
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
            .slice(0, 5);

          setUpcomingEvents(upcoming);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error loading events:", error);
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "Date TBD";
    try {
      return format(new Date(dateString), "dd.MM.yyyy.");
    } catch {
      return dateString;
    }
  };

  const getEventTypeLabel = (type: string) => {
    return t(`events.${type}`);
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

  if (loading) {
    return (
      <div className="card text-center py-8 text-gray-400">
        <Calendar size={32} className="mx-auto mb-2" />
        {t("home.loadingEvents")}
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-orthodox-blue">
          {/* <Calendar className="mr-2" size={24} />
          <h3 className="text-xl font-serif">{t("home.upcomingEvents")}</h3> */}
        </div>
        <Link
          to="/calendar"
          className="text-orthodox-blue hover:text-orthodox-gold text-sm font-medium"
        >
          {t("home.viewAll")}
        </Link>
      </div>

      {upcomingEvents.length > 0 ? (
        <div className="space-y-4">
          {upcomingEvents.map((event) => {
            const eventClasses = event.highlight
              ? "border-l-4 border-orthodox-gold py-3 bg-gradient-to-r from-yellow-100 via-yellow-50 to-orange-50 rounded-r shadow-md border border-yellow-200"
              : "border-l-4 border-orthodox-gold py-3 bg-gray-50 rounded-r";

            return (
              <div key={event.id} className={eventClasses}>
                <div className="px-4">
                  {event.highlight && (
                    <div className="flex items-center gap-1 mb-2">
                      <Star
                        size={14}
                        className="text-orthodox-gold fill-orthodox-gold"
                      />
                      <span className="text-xs font-medium text-orthodox-gold">
                        {t("events.highlited")}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <div className="flex items-center gap-2 mb-1 sm:mb-0">
                      <Calendar size={16} className="text-orthodox-blue" />
                      <span className="font-medium text-orthodox-blue">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-orthodox-blue" />
                      <span className="text-sm">
                        {event.time || "Time TBD"}
                      </span>
                    </div>
                  </div>

                  <h4
                    className={`font-semibold text-lg mb-1 ${
                      event.highlight ? "text-orthodox-blue" : ""
                    }`}
                  >
                    {event.title}
                  </h4>

                  {event.description && (
                    <div
                      className="text-gray-600 text-sm mb-2 line-clamp-2 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />
                  )}

                  <div className="flex items-center justify-between mr-2">
                    {event.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                    )}

                    <div className="flex-shrink-0">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(
                          event.type
                        )}`}
                      >
                        {getEventTypeLabel(event.type)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-600">
          <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
          <p>{t("home.noUpcomingEvents")}</p>
        </div>
      )}

      <div className="mt-6 text-center">
        <Link to="/calendar" className="btn-primary inline-block">
          {t("home.viewFullCalendar")}
        </Link>
      </div>
    </div>
  );
};

export default CombinedEventsSchedule;
