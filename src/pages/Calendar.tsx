import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { regularServices, specialServices, events, slavas, getAllCalendarItems } from '../data/calendarData';

const CalendarPage: React.FC = () => {
  const { t } = useLanguage();
  const [view, setView] = useState<'services' | 'events' | 'slava' | 'all'>('all');
  
  // Combine all items for display
  const allItems = getAllCalendarItems();
  
  const filteredItems = view === 'all' 
    ? allItems 
    : view === 'services' 
      ? specialServices 
      : view === 'events'
        ? events
        : slavas;

  // Group items by month for the "All" tab
  const groupItemsByMonth = (items: any[]) => {
    const grouped: { [key: string]: any[] } = {};
    
    items.forEach(item => {
      const date = new Date(item.date);
      const monthYear = date.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      });
      
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(item);
    });
    
    return grouped;
  };

  const groupedItems = groupItemsByMonth(allItems);

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
          </div>
        </div>

        {/* Calendar Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <Tabs value={view} onValueChange={(value) => setView(value as any)}>
                <TabsList className="mb-4">
                  <TabsTrigger value="all">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="services">
                    Services
                  </TabsTrigger>
                  <TabsTrigger value="events">
                    Events
                  </TabsTrigger>
                  <TabsTrigger value="slava">
                    Slava
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">All Services, Events & Slavas</h2>
                  {Object.keys(groupedItems).length > 0 ? (
                    <div>
                      {Object.entries(groupedItems).map(([monthYear, items], monthIndex) => (
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
                              {items.map((item, index) => (
                                <div key={index} className="py-4">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <CalendarIcon size={18} className="text-orthodox-blue" />
                                      <span className="font-medium">{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock size={18} className="text-orthodox-blue" />
                                      <span>{item.time}</span>
                                    </div>
                                  </div>
                                  <h4 className="text-xl font-semibold mb-1">{item.name}</h4>
                                  {(item.type === 'event' || item.type === 'slava') && (
                                    <>
                                      <p className="text-gray-700 mb-2">{(item as any).description}</p>
                                      <p className="text-sm text-gray-600"><strong>Location:</strong> {(item as any).location}</p>
                                    </>
                                  )}
                                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                                    {item.type === 'service' ? 'Service' : item.type === 'event' ? 'Event' : 'Slava'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No upcoming items to display.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="services" className="mt-0">
                  {/* This content will be shown when selecting the Services tab */}
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
                  {specialServices.length > 0 ? (
                    <div className="divide-y">
                      {specialServices.map((service, index) => (
                        <div key={index} className="py-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <CalendarIcon size={18} className="text-orthodox-blue" />
                              <span className="font-medium">{service.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-orthodox-blue" />
                              <span>{service.time}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold">{service.name}</h3>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No special services currently scheduled.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="events" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Community Events</h2>
                  {events.length > 0 ? (
                    <div className="divide-y">
                      {events.map((event, index) => (
                        <div key={index} className="py-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <CalendarIcon size={18} className="text-orthodox-blue" />
                              <span className="font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-orthodox-blue" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{event.name}</h3>
                          <p className="text-gray-700 mb-2">{(event as any).description}</p>
                          <p className="text-sm text-gray-600"><strong>Location:</strong> {(event as any).location}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No events currently scheduled.</p>
                  )}
                </TabsContent>

                <TabsContent value="slava" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Serbian Slavas</h2>
                  {slavas.length > 0 ? (
                    <div className="divide-y">
                      {slavas.map((slava, index) => (
                        <div key={index} className="py-4">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <CalendarIcon size={18} className="text-orthodox-blue" />
                              <span className="font-medium">{slava.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-orthodox-blue" />
                              <span>{slava.time}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{slava.name}</h3>
                          <p className="text-gray-700 mb-2">{(slava as any).description}</p>
                          <p className="text-sm text-gray-600"><strong>Location:</strong> {(slava as any).location}</p>
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
