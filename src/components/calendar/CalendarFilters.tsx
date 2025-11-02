import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { History } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CalendarFiltersProps {
  view: "all" | "service" | "event" | "slava";
  onViewChange: (value: "all" | "service" | "event" | "slava") => void;
  showPastEvents: boolean;
  onShowPastEventsChange: (value: boolean) => void;
}

const CalendarFilters: React.FC<CalendarFiltersProps> = ({
  view,
  onViewChange,
  showPastEvents,
  onShowPastEventsChange,
}) => {
  const { t } = useLanguage();
  return (
    <div className="flex items-center justify-between mb-4">
      <Tabs
        value={view}
        onValueChange={(value) =>
          onViewChange(value as "all" | "service" | "event" | "slava")
        }
      >
        <TabsList>
          <TabsTrigger value="all"> {t("events.all")}</TabsTrigger>
          <TabsTrigger value="service">{t("events.service")}</TabsTrigger>
          <TabsTrigger value="event">{t("events.event")}</TabsTrigger>
          <TabsTrigger value="slava">{t("events.slava")}</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* <Toggle
        pressed={showPastEvents}
        onPressedChange={onShowPastEventsChange}
        aria-label="Toggle past events"
        className="flex items-center gap-2"
      >
        <History size={16} />
        <span className="text-sm">Past Events</span>
      </Toggle> */}
    </div>
  );
};

export default CalendarFilters;
