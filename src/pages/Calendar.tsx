import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { fetchEvents, Event } from '../services/eventService';

const regularServices = [
  {
    day: 'Sunday',
    name: 'Divine Liturgy',
    time: '10:00 AM',
    description: 'Main service in Serbian and English every Sunday.',
  },
  {
    day: 'Saturday',
    name: 'Vespers',
    time: '5:00 PM',
    description: 'Evening prayers before major feasts and on Saturdays.',
  },
  {
    day: 'Wednesday',
    name: 'Akathist',
    time: '7:00 PM',
    description: 'Midweek prayer service.',
  },
];

const CalendarPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [view, setView] = useState<'all' | 'services' | 'events' | 'slava'>('all');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    
    fetchEvents().then((data) => {
      if (mounted) {
        setEvents(data || []);
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

  const filteredEvents = view === 'all' 
    ? events 
    : events.filter(event => event.type === view);

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
    return grouped;
  };

  const groupedEvents = groupEventsByMonth(filteredEvents);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('calendar.title')}
            </h1>
            <p className="text-lg md:text-xl text-white opacity-80 mb-2">
              Stay informed about our services, events, and celebrations.
            </p>
          </div>
        </div>

        {/* Calendar Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <Tabs value={view} onValueChange={(value) => setView(value as any)}>
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="slava">Slavas</TabsTrigger>
                </TabsList>
                
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
                            <div className="bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 text-white rounded-lg px-6 py-4 mb-6 shadow-lg border-l-4 border-orthodox-gold">
                              <h3 className="text-2xl font-serif font-bold flex items-center justify-center text-white">
                                <CalendarIcon size={24} className="mr-3 text-orthodox-gold" />
                                <span className="text-white">{monthYear}</span>
                              </h3>
                            </div>
                            <div className="divide-y pl-4">
                              {monthEvents.map((event) => (
                                <div key={event.id} className="py-4">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <CalendarIcon size={18} className="text-orthodox-blue" />
                                      <span className="font-medium">{formatDate(event.date)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock size={18} className="text-orthodox-blue" />
                                      <span>{event.time || 'Time TBD'}</span>
                                    </div>
                                  </div>
                                  <h4 className="text-xl font-semibold mb-1">{event.title}</h4>
                                  {event.description && (
                                    <p className="text-gray-700 mb-2">{event.description}</p>
                                  )}
                                  {event.location && (
                                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                                      <MapPin size={16} />
                                      <span>{event.location}</span>
                                    </div>
                                  )}
                                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                                    {event.type === 'service' ? 'Service' : event.type === 'event' ? 'Event' : 'Slava'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No events to display.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="services" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif mb-4">Regular Services</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-orthodox-blue text-white">
                            <th className="px-4 py-2 text-left">Day</th>
                            <th className="px-4 py-2 text-left">Service</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {regularServices.map((service, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                              <td className="px-4 py-3 font-medium">{service.day}</td>
                              <td className="px-4 py-3">{service.name}</td>
                              <td className="px-4 py-3">{service.time}</td>
                              <td className="px-4 py-3">{service.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-serif mb-4">Special Services</h2>
                  {loading ? (
                    <div className="text-center py-10 text-gray-400">Loading services...</div>
                  ) : filteredEvents.filter(e => e.type === 'service').length > 0 ? (
                    <div className="divide-y">
                      {filteredEvents.filter(e => e.type === 'service').map((event) => (
                        <div key={event.id} className="py-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <CalendarIcon size={18} className="text-orthodox-blue" />
                              <span className="font-medium">{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-orthodox-blue" />
                              <span>{event.time || 'Time TBD'}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          {event.description && <p className="text-gray-700">{event.description}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No special services currently scheduled.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="events" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Community Events</h2>
                  {loading ? (
                    <div className="text-center py-10 text-gray-400">Loading events...</div>
                  ) : filteredEvents.filter(e => e.type === 'event').length > 0 ? (
                    <div className="divide-y">
                      {filteredEvents.filter(e => e.type === 'event').map((event) => (
                        <div key={event.id} className="py-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <CalendarIcon size={18} className="text-orthodox-blue" />
                              <span className="font-medium">{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-orthodox-blue" />
                              <span>{event.time || 'Time TBD'}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                          <p className="text-gray-700 mb-2">{event.description}</p>
                          {event.location && (
                            <p className="text-sm text-gray-600">
                              <strong>Location:</strong> {event.location}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No events currently scheduled.</p>
                  )}
                </TabsContent>

                <TabsContent value="slava" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Serbian Slavas</h2>
                  {loading ? (
                    <div className="text-center py-10 text-gray-400">Loading slavas...</div>
                  ) : filteredEvents.filter(e => e.type === 'slava').length > 0 ? (
                    <div className="divide-y">
                      {filteredEvents.filter(e => e.type === 'slava').map((event) => (
                        <div key={event.id} className="py-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <CalendarIcon size={18} className="text-orthodox-blue" />
                              <span className="font-medium">{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-orthodox-blue" />
                              <span>{event.time || 'Time TBD'}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                          <p className="text-gray-700 mb-2">{event.description}</p>
                          {event.location && (
                            <p className="text-sm text-gray-600">
                              <strong>Location:</strong> {event.location}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No slavas currently scheduled.</p>
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
