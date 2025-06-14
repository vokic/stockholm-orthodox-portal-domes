
// Static calendar data - no API calls
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

const specialServices = [
  {
    date: 'May 21, 2025',
    name: 'Feast of Saints Constantine and Helen',
    time: '09:00 - 11:00',
    type: 'service' as const
  },
  {
    date: 'June 2, 2025',
    name: 'Feast of the Ascension',
    time: '09:00 - 11:00',
    type: 'service' as const
  },
  {
    date: 'June 12, 2025',
    name: 'Feast of Pentecost',
    time: '09:00 - 11:00',
    type: 'service' as const
  },
];

const events = [
  {
    date: 'May 10, 2025',
    name: 'Parish Feast Day',
    time: '10:00 - 13:00',
    description: 'Annual celebration of our parish patron saint. The Divine Liturgy will be followed by a procession and a festive meal.',
    location: 'Church and Parish Hall',
    type: 'event' as const
  },
  {
    date: 'May 15, 2025',
    name: 'Community Lunch',
    time: '12:00 - 14:00',
    description: 'Fellowship and community building after Divine Liturgy. Everyone is welcome to join for food and conversation.',
    location: 'Parish Hall',
    type: 'event' as const
  },
];

const slavas = [
  {
    date: 'May 6, 2025',
    name: 'Sveti Đorđe (Saint George)',
    time: '09:00 - 11:00',
    description: 'Celebration of Saint George, patron saint of many Serbian families. Special liturgy and blessing of kolach and wheat.',
    location: 'Church',
    type: 'slava' as const
  },
];

// Synchronous functions - no async/await needed
export const getEventsByType = (type: 'service' | 'event' | 'slava') => {
  switch (type) {
    case 'service': return specialServices;
    case 'event': return events;
    case 'slava': return slavas;
    default: return [];
  }
};

export const getAllEvents = () => {
  return [...specialServices, ...events, ...slavas];
};

export const getAllCalendarItems = () => {
  const allItems = [...specialServices, ...events, ...slavas];
  return allItems.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

export const getUpcomingEvents = (limit: number = 10) => {
  const today = new Date();
  const allItems = getAllCalendarItems();
  
  return allItems
    .filter(item => new Date(item.date) >= today)
    .slice(0, limit);
};

// Export static data
export { regularServices, specialServices, events, slavas };
