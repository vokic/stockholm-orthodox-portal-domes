
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CalendarHero from '../components/calendar/CalendarHero';
import CalendarFilters from '../components/calendar/CalendarFilters';
import AllEventsView from '../components/calendar/AllEventsView';
import FilteredEventsView from '../components/calendar/FilteredEventsView';
import { useCalendarData } from '../hooks/useCalendarData';

const CalendarPage: React.FC = () => {
  const [view, setView] = useState<'all' | 'service' | 'event' | 'slava'>('all');
  const [showPastEvents, setShowPastEvents] = useState<boolean>(false);
  
  const { events, loading, formatDate, formatMonthYear, getFilteredEvents } = useCalendarData();
  const filteredEvents = getFilteredEvents(view, showPastEvents);

  console.log('Current view:', view);
  console.log('Show past events:', showPastEvents);
  console.log('Filtered events:', filteredEvents);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CalendarHero />

        <section className="section">
          <div className="container-custom">
            <div className="card">
              <CalendarFilters
                view={view}
                onViewChange={setView}
                showPastEvents={showPastEvents}
                onShowPastEventsChange={setShowPastEvents}
              />
              
              <Tabs value={view} onValueChange={(value) => setView(value as any)}>
                <TabsContent value="all" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">All Events</h2>
                  <AllEventsView
                    events={filteredEvents}
                    loading={loading}
                    formatDate={formatDate}
                    formatMonthYear={formatMonthYear}
                    totalEventsCount={events.length}
                  />
                </TabsContent>
                
                <TabsContent value="service" className="mt-0">
                  <FilteredEventsView
                    events={filteredEvents}
                    loading={loading}
                    formatDate={formatDate}
                    eventType="service"
                    title="Special Services"
                  />
                </TabsContent>
                
                <TabsContent value="event" className="mt-0">
                  <FilteredEventsView
                    events={filteredEvents}
                    loading={loading}
                    formatDate={formatDate}
                    eventType="event"
                    title="Community Events"
                  />
                </TabsContent>

                <TabsContent value="slava" className="mt-0">
                  <FilteredEventsView
                    events={filteredEvents}
                    loading={loading}
                    formatDate={formatDate}
                    eventType="slava"
                    title="Serbian Slavas"
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CalendarPage;
