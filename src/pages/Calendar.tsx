import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CalendarHero from "../components/calendar/CalendarHero";
import CalendarFilters from "../components/calendar/CalendarFilters";
import AllEventsView from "../components/calendar/AllEventsView";
import FilteredEventsView from "../components/calendar/FilteredEventsView";
import RegularServicesTable from "../components/calendar/RegularServicesTable";
import ServiceAnnouncements from "../components/calendar/ServiceAnnouncements";
import { useCalendarData } from "../hooks/useCalendarData";
import { useLanguage } from "@/context/LanguageContext";

const Calendar: React.FC = () => {
  const { t } = useLanguage();
  const [view, setView] = useState<"all" | "service" | "event" | "slava">(
    "all"
  );
  const [showPastEvents, setShowPastEvents] = useState<boolean>(false);

  const { events, loading, error, formatDate, formatMonthYear, getFilteredEvents } =
    useCalendarData();
  const filteredEvents = getFilteredEvents(view, showPastEvents);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CalendarHero />
        <ServiceAnnouncements />

        <section className="section">
          <div className="container-custom">
            <div className="card mb-6">
              <RegularServicesTable />
            </div>

            <div className="card">
              <CalendarFilters
                view={view}
                onViewChange={setView}
                showPastEvents={showPastEvents}
                onShowPastEventsChange={setShowPastEvents}
              />

              <Tabs
                value={view}
                onValueChange={(value) => setView(value as any)}
              >
                <TabsContent value="all" className="mt-0">
                  {error ? (
                    <div className="text-center py-8 text-red-600">
                      {t("calendar.errorLoadingEvents") || "Error loading events. Please try again later."}
                    </div>
                  ) : (
                    <AllEventsView
                      events={filteredEvents}
                      loading={loading}
                      formatDate={formatDate}
                      formatMonthYear={formatMonthYear}
                      totalEventsCount={events.length}
                      view={view}
                    />
                  )}
                </TabsContent>

                <TabsContent value="service" className="mt-0">
                  {error ? (
                    <div className="text-center py-8 text-red-600">
                      {t("calendar.errorLoadingEvents") || "Error loading events. Please try again later."}
                    </div>
                  ) : (
                    <FilteredEventsView
                      events={filteredEvents}
                      loading={loading}
                      formatDate={formatDate}
                      formatMonthYear={formatMonthYear}
                      eventType="service"
                      title={t("events.crkveneSluzbe")}
                    />
                  )}
                </TabsContent>

                <TabsContent value="event" className="mt-0">
                  {error ? (
                    <div className="text-center py-8 text-red-600">
                      {t("calendar.errorLoadingEvents") || "Error loading events. Please try again later."}
                    </div>
                  ) : (
                    <FilteredEventsView
                      events={filteredEvents}
                      loading={loading}
                      formatDate={formatDate}
                      formatMonthYear={formatMonthYear}
                      eventType="event"
                      title={t("events.crkveniDogadjaji")}
                    />
                  )}
                </TabsContent>

                <TabsContent value="slava" className="mt-0">
                  {error ? (
                    <div className="text-center py-8 text-red-600">
                      {t("calendar.errorLoadingEvents") || "Error loading events. Please try again later."}
                    </div>
                  ) : (
                    <FilteredEventsView
                      events={filteredEvents}
                      loading={loading}
                      formatDate={formatDate}
                      formatMonthYear={formatMonthYear}
                      eventType="slava"
                      title={t("events.srpskeSlave")}
                    />
                  )}
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

export default Calendar;
