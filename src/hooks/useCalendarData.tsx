import { useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "../context/LanguageContext";
import { fetchEvents, Event } from "../services/eventService";

export const useCalendarData = () => {
  const { language, t } = useLanguage();
  
  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  // Sort events by date (oldest first) with useMemo
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [events]);

  // Function to format date based on current language
  const formatDate = useCallback((dateString: string) => {
    if (!dateString) return t("dateTBD");
    const date = new Date(dateString);
    const isSerbian = language === "sr_cyr" || language === "sr_lat";
    const locale = isSerbian ? "sr-RS" : "sv-SE";

    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [language]);

  // Function to format month/year header based on current language
  const formatMonthYear = useCallback((dateString: string) => {
    if (!dateString) return t("dateTBD");
    const date = new Date(dateString);
    const isSerbian = language === "sr_cyr" || language === "sr_lat";
    const locale = isSerbian ? "sr-RS" : "sv-SE";

    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
    });
  }, [language]);

  // Filter events based on view and past events toggle
  const getFilteredEvents = useCallback((
    view: "all" | "service" | "event" | "slava",
    showPastEvents: boolean
  ) => {
    let filtered =
      view === "all" ? sortedEvents : sortedEvents.filter((event) => event.type === view);

    if (!showPastEvents) {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const todayTimestamp = today.getTime();

      filtered = filtered.filter((event) => {
        if (!event.date) return false;

        const eventDate = new Date(event.date);
        const normalizedEventDate = new Date(
          eventDate.getFullYear(),
          eventDate.getMonth(),
          eventDate.getDate()
        );

        return normalizedEventDate.getTime() >= todayTimestamp;
      });
    }

    return filtered;
  }, [sortedEvents]);

  return {
    events: sortedEvents,
    loading: isLoading,
    error,
    formatDate,
    formatMonthYear,
    getFilteredEvents,
  };
};
