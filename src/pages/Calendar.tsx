
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { History } from 'lucide-react';
import { fetchEvents, Event } from '../services/eventService';
import CalendarHero from '../components/calendar/CalendarHero';
import RegularServicesTable from '../components/calendar/RegularServicesTable';
import EventCard from '../components/calendar/EventCard';
import EventsList from '../components/calendar/EventsList';
import MonthHeader from '../components/calendar/MonthHeader';

const CalendarPage: React.FC = () => {
  const { language } = useLanguage();
  const [view, setView] = useState<'all' | 'service' | 'event' | 'slava'>('all');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPastEvents, setShowPastEvents] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    
    fetchEvents().then((data) => {
      if (mounted) {
        console.log('Fetched events:', data); // Debug log
        
        // Sort all events by date (oldest first)
        const sortedEvents = (data || []).sort((a, b) => {
          if (!a.date && !b.date) return 0;
          if (!a.date) return 1;
          if (!b.date) return -1;
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        
        setEvents(sortedEvents);
        setLoading(false);
      }
    }).catch((error) => {
      console.error('Error loading events:', error);
      if (mounted) {
        setLoading(false);
      }
    });
    
    return () => { mounted = false; };
  }, []);

  // Filter events based on current view and past events toggle
  const getFilteredEvents = () => {
    let filtered = view === 'all' ? events : events.filter(event => event.type === view);
    
    if (!showPastEvents) {
      const today = new Date();
      const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      
      filtered = filtered.filter(event => {
        if (!event.date) return false;
        const eventDate = new Date(event.date);
        return eventDate >= currentMonth;
      });
    }
    
    return filtered;
  };

  const filteredEvents = getFilteredEvents();

  console.log('Current view:', view); // Debug log
  console.log('Show past events:', showPastEvents); // Debug log
  console.log('Filtered events:', filteredEvents); // Debug log

  // Function to format date based on current language
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Date TBD';
    const date = new Date(dateString);
    const isSerbian = language === 'sr_cyr' || language === 'sr_lat';
    const locale = isSerbian ? 'sr-RS' : 'en-US';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to format month/year header based on current language
  const formatMonthYear = (dateString: string) => {
    if (!dateString) return 'Date TBD';
    const date = new Date(dateString);
    const isSerbian = language === 'sr_cyr' || language === 'sr_lat';
    const locale = isSerbian ? 'sr-RS' : 'en-US';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long'
    });
  };

  // Group events by month for the "All" tab
  const groupEventsByMonth = (events: Event[]) => {
    const grouped: { [key: string]: Event[] } = {};
    events.forEach(event => {
      if (event.date) {
        const monthYear = formatMonthYear(event.date);
        if (!grouped[monthYear]) {
          grouped[monthYear] = [];
        }
        grouped[monthYear].push(event);
      }
    });
    
    // Sort grouped events by month/year
    const sortedGrouped: { [key: string]: Event[] } = {};
    Object.keys(grouped)
      .sort((a, b) => {
        // Parse the month/year strings to compare dates
        const dateA = new Date(a + ' 1'); // Add day to make it a valid date
        const dateB = new Date(b + ' 1');
        return dateA.getTime() - dateB.getTime();
      })
      .forEach(key => {
        sortedGrouped[key] = grouped[key];
      });
    
    return sortedGrouped;
  };

  const groupedEvents = groupEventsByMonth(filteredEvents);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CalendarHero />

        <section className="section">
          <div className="container-custom">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <Tabs value={view} onValueChange={(value) => setView(value as any)}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="service">Services</TabsTrigger>
                    <TabsTrigger value="event">Events</TabsTrigger>
                    <TabsTrigger value="slava">Slavas</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <Toggle
                  pressed={showPastEvents}
                  onPressedChange={setShowPastEvents}
                  aria-label="Toggle past events"
                  className="flex items-center gap-2"
                >
                  <History size={16} />
                  <span className="text-sm">Past Events</span>
                </Toggle>
              </div>
              
              <Tabs value={view} onValueChange={(value) => setView(value as any)}>
                <TabsContent value="all" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">All Events</h2>
                  {loading ? (
                    <div className="text-center py-10 text-gray-400">Loading events...</div>
                  ) : Object.keys(groupedEvents).length > 0 ? (
                    <div>
                      {Object.entries(groupedEvents).map(([monthYear, monthEvents], monthIndex) => (
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
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600">No events to display.</p>
                      <p className="text-sm text-gray-500 mt-2">Total events loaded: {events.length}</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="service" className="mt-0">
                  <RegularServicesTable />
                  
                  <h2 className="text-2xl font-serif mb-4">Special Services</h2>
                  {loading ? (
                    <div className="text-center py-10 text-gray-400">Loading services...</div>
                  ) : (
                    <EventsList 
                      events={filteredEvents} 
                      formatDate={formatDate} 
                      eventType="service" 
                    />
                  )}
                </TabsContent>
                
                <TabsContent value="event" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Community Events</h2>
                  {loading ? (
                    <div className="text-center py-10 text-gray-400">Loading events...</div>
                  ) : (
                    <EventsList 
                      events={filteredEvents} 
                      formatDate={formatDate} 
                      eventType="event" 
                    />
                  )}
                </TabsContent>

                <TabsContent value="slava" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Serbian Slavas</h2>
                  {loading ? (
                    <div className="text-center py-10 text-gray-400">Loading slavas...</div>
                  ) : (
                    <EventsList 
                      events={filteredEvents} 
                      formatDate={formatDate} 
                      eventType="slava" 
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

export default CalendarPage;
