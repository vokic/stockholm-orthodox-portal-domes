import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const CalendarPage: React.FC = () => {
  const { t } = useLanguage();
  const [view, setView] = useState<'services' | 'events' | 'slava' | 'all'>('all');
  
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
    {
      date: 'July 15, 2025',
      name: 'Mid-Summer Prayer Service',
      time: '18:00 - 19:00',
      type: 'service'
    },
    {
      date: 'August 20, 2025',
      name: 'Transfiguration of the Lord',
      time: '09:00 - 11:00',
      type: 'service'
    }
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
    {
      date: 'July 25, 2025',
      name: 'Parish Picnic',
      time: '13:00 - 17:00',
      description: 'Annual parish picnic with games, food, and fellowship for all ages.',
      location: 'Local Park (Details TBD)',
      type: 'event'
    },
  ];
  
  // Serbian slavas (saint feast days)
  const slavas = [
    {
      date: 'May 6, 2025',
      name: 'Sveti Đorđe (Saint George)',
      time: '09:00 - 11:00',
      description: 'Celebration of Saint George, patron saint of many Serbian families. Special liturgy and blessing of kolach and wheat.',
      location: 'Church',
      type: 'slava'
    },
    {
      date: 'May 21, 2025',
      name: 'Sveti Konstantin i Jelena',
      time: '09:00 - 11:00',
      description: 'Feast of Saints Constantine and Helen, celebrated by many Serbian Orthodox families.',
      location: 'Church',
      type: 'slava'
    },
    {
      date: 'July 12, 2025',
      name: 'Sveti Petar i Pavle',
      time: '09:00 - 11:00',
      description: 'Feast of Saints Peter and Paul, one of the most celebrated slavas in Serbian tradition.',
      location: 'Church',
      type: 'slava'
    },
    {
      date: 'August 2, 2025',
      name: 'Sveti Ilija (Saint Elijah)',
      time: '09:00 - 11:00',
      description: 'Celebration of Saint Elijah, patron saint of thunder and lightning, celebrated by many families.',
      location: 'Church',
      type: 'slava'
    },
    {
      date: 'September 14, 2025',
      name: 'Krstovdan (Exaltation of the Holy Cross)',
      time: '09:00 - 11:00',
      description: 'Celebration of the Exaltation of the Holy Cross.',
      location: 'Church',
      type: 'slava'
    },
    {
      date: 'October 27, 2025',
      name: 'Sveta Petka (Saint Paraskeva)',
      time: '09:00 - 11:00',
      description: 'Feast of Saint Paraskeva, a highly venerated saint.',
      location: 'Church',
      type: 'slava'
    },
    {
      date: 'November 8, 2025',
      name: 'Sveti Dimitrije',
      time: '09:00 - 11:00',
      description: 'Feast of Saint Dimitrius, celebrated by numerous Serbian Orthodox families.',
      location: 'Church',
      type: 'slava'
    },
    {
      date: 'December 19, 2025',
      name: 'Sveti Nikola (Saint Nicholas)',
      time: '09:00 - 11:00',
      description: 'Celebration of Saint Nicholas, one of the most beloved saints and patron of many Serbian families.',
      location: 'Church',
      type: 'slava'
    },
  ];
  
  // Combine all items for display
  const allItems = [...specialServices, ...events, ...slavas].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  // This variable is used by other tabs, so we keep its logic.
  // For the 'all' tab, we will use `allItems` directly for grouping.
  const filteredItems = view === 'all' 
    ? allItems 
    : view === 'services' 
      ? specialServices 
      : view === 'events'
        ? events
        : slavas;

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
              <Tabs defaultValue="all" onValueChange={(value) => setView(value as any)}>
                <TabsList className="mb-4">
                  <TabsTrigger 
                    value="all"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger 
                    value="services"
                  >
                    Services
                  </TabsTrigger>
                  <TabsTrigger 
                    value="events"
                  >
                    Events
                  </TabsTrigger>
                  <TabsTrigger 
                    value="slava"
                  >
                    Slava
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Upcoming Services, Events & Slavas</h2>
                  {(() => {
                    if (allItems.length === 0) {
                      return <p className="text-gray-600">No upcoming items to display.</p>;
                    }

                    // Group items by month and year
                    const groupedByMonth: { [key: string]: typeof allItems } = allItems.reduce((acc, item) => {
                      const date = new Date(item.date);
                      // Using 'en-US' locale for month names to ensure consistent keys for grouping
                      const monthYear = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
                      if (!acc[monthYear]) {
                        acc[monthYear] = [];
                      }
                      acc[monthYear].push(item);
                      return acc;
                    }, {});

                    // Sort months chronologically
                    const sortedMonths = Object.keys(groupedByMonth).sort((a, b) => {
                      const dateA = new Date(groupedByMonth[a][0].date);
                      const dateB = new Date(groupedByMonth[b][0].date);
                      return dateA.getTime() - dateB.getTime();
                    });

                    return sortedMonths.map((monthYear, monthIndex) => (
                      <React.Fragment key={monthYear}>
                        <h3 className="text-xl font-semibold font-serif mt-6 mb-3 text-orthodox-blue">{monthYear}</h3>
                        <div className="divide-y divide-gray-200">
                          {groupedByMonth[monthYear].map((item, itemIdx) => (
                            <div key={`${item.name}-${item.date}-${itemIdx}`} className="py-4">
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
                              <h4 className="text-lg font-semibold mb-1">{item.name}</h4>
                              {(item.type === 'event' || item.type === 'slava') && (item as any).description && (
                                <p className="text-gray-700 mb-2">{(item as any).description}</p>
                              )}
                              {(item.type === 'event' || item.type === 'slava') && (item as any).location && (
                                <p className="text-sm text-gray-600"><strong>Location:</strong> {(item as any).location}</p>
                              )}
                              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-orthodox-gold bg-opacity-20 text-orthodox-blue">
                                {item.type === 'service' ? 'Service' : item.type === 'event' ? 'Event' : 'Slava'}
                              </span>
                            </div>
                          ))}
                        </div>
                        {monthIndex < sortedMonths.length - 1 && <Separator className="my-8 border-gray-300" />}
                      </React.Fragment>
                    ));
                  })()}
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
                  {/* Using specialServices directly here as it's the correct filtered list for this tab */}
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
                  {/* Using events directly here */}
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

                <TabsContent value="slava" className="mt-0">
                  <h2 className="text-2xl font-serif mb-4">Serbian Slavas</h2>
                  {/* Using slavas directly here */}
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
                          <p className="text-gray-700 mb-2">{slava.description}</p>
                          <p className="text-sm text-gray-600"><strong>Location:</strong> {slava.location}</p>
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
