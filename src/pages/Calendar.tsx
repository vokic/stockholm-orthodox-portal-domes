
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const CalendarPage: React.FC = () => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<'services' | 'events' | 'all'>('all');
  
  // Sample service schedule data
  const regularServices = [
    {
      day: 'Sunday',
      name: 'Divine Liturgy',
      time: '10:00 - 12:00',
      description: 'The main weekly worship service of the Orthodox Church.',
    },
    {
      day: 'Saturday',
      name: 'Vespers',
      time: '18:00 - 19:00',
      description: 'Evening prayer service that begins the liturgical day.',
    },
    {
      day: 'Wednesday',
      name: 'Akathist',
      time: '19:00 - 20:00',
      description: 'A hymn of praise dedicated to a saint, Christ, or the Theotokos.',
    },
  ];
  
  // Sample special services for upcoming month
  const specialServices = [
    {
      date: 'May 21, 2025',
      name: 'Feast of Saints Constantine and Helen',
      time: '09:00 - 11:00',
      type: 'service'
    },
    {
      date: 'June 2, 2025',
      name: 'Feast of the Ascension',
      time: '09:00 - 11:00',
      type: 'service'
    },
    {
      date: 'June 12, 2025',
      name: 'Feast of Pentecost',
      time: '09:00 - 11:00',
      type: 'service'
    },
  ];
  
  // Sample events data
  const events = [
    {
      date: 'May 10, 2025',
      name: 'Parish Feast Day',
      time: '10:00 - 13:00',
      description: 'Annual celebration of our parish patron saint. The Divine Liturgy will be followed by a procession and a festive meal.',
      location: 'Church and Parish Hall',
      type: 'event'
    },
    {
      date: 'May 15, 2025',
      name: 'Community Lunch',
      time: '12:00 - 14:00',
      description: 'Fellowship and community building after Divine Liturgy. Everyone is welcome to join for food and conversation.',
      location: 'Parish Hall',
      type: 'event'
    },
    {
      date: 'May 22, 2025',
      name: 'Bible Study',
      time: '19:00 - 20:30',
      description: 'Weekly Bible study and discussion group, currently focusing on the Gospel of John.',
      location: 'Church Library',
      type: 'event'
    },
    {
      date: 'May 25, 2025',
      name: 'Youth Group Meeting',
      time: '16:00 - 18:00',
      description: 'Monthly gathering for teenagers and young adults. Activities, discussions, and refreshments.',
      location: 'Parish Hall',
      type: 'event'
    },
    {
      date: 'June 5, 2025',
      name: 'Iconography Workshop',
      time: '10:00 - 15:00',
      description: 'Learn about the tradition of Orthodox icons and try your hand at creating one with guidance from a professional iconographer.',
      location: 'Parish Hall',
      type: 'event'
    },
  ];
  
  // Combine all items for display
  const allItems = [...specialServices, ...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  const filteredItems = view === 'all' 
    ? allItems 
    : view === 'services' 
      ? specialServices 
      : events;

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
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4">
                      <TabsTrigger 
                        value="all" 
                        onClick={() => setView('all')}
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger 
                        value="services" 
                        onClick={() => setView('services')}
                      >
                        Services
                      </TabsTrigger>
                      <TabsTrigger 
                        value="events" 
                        onClick={() => setView('events')}
                      >
                        Events
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="mt-0">
                      <h2 className="text-2xl font-serif mb-4">Upcoming Services & Events</h2>
                      {filteredItems.length > 0 ? (
                        <div className="divide-y">
                          {filteredItems.map((item, index) => (
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
                              <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                              {item.type === 'event' && (
                                <>
                                  <p className="text-gray-700 mb-2">{(item as any).description}</p>
                                  <p className="text-sm text-gray-600"><strong>Location:</strong> {(item as any).location}</p>
                                </>
                              )}
                              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                                {item.type === 'service' ? 'Service' : 'Event'}
                              </span>
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
                              <p className="text-gray-700 mb-2">{event.description}</p>
                              <p className="text-sm text-gray-600"><strong>Location:</strong> {event.location}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">No events currently scheduled.</p>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalendarPage;
