
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { History } from 'lucide-react';

interface CalendarFiltersProps {
  view: 'all' | 'service' | 'event' | 'slava';
  onViewChange: (value: 'all' | 'service' | 'event' | 'slava') => void;
  showPastEvents: boolean;
  onShowPastEventsChange: (value: boolean) => void;
}

const CalendarFilters: React.FC<CalendarFiltersProps> = ({
  view,
  onViewChange,
  showPastEvents,
  onShowPastEventsChange
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Tabs value={view} onValueChange={(value) => onViewChange(value as any)}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="service">Services</TabsTrigger>
          <TabsTrigger value="event">Events</TabsTrigger>
          <TabsTrigger value="slava">Slavas</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <Toggle
        pressed={showPastEvents}
        onPressedChange={onShowPastEventsChange}
        aria-label="Toggle past events"
        className="flex items-center gap-2"
      >
        <History size={16} />
        <span className="text-sm">Past Events</span>
      </Toggle>
    </div>
  );
};

export default CalendarFilters;
