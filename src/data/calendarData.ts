
// Sample service schedule data
export const regularServices = [
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
export const specialServices = [
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
export const events = [
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

// Serbian slavas (saint feast days)
export const slavas = [
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

// Combine all items and sort by date
export const getAllCalendarItems = () => {
  const allItems = [...specialServices, ...events, ...slavas].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  return allItems;
};

// Get next N upcoming events
export const getUpcomingEvents = (limit: number = 10) => {
  const today = new Date();
  const allItems = getAllCalendarItems();
  
  return allItems
    .filter(item => new Date(item.date) >= today)
    .slice(0, limit);
};
