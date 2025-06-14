
import { strapiAPI, StrapiEvent } from '../lib/strapi';

// Fallback data (existing static data)
const fallbackRegularServices = [
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

const fallbackSpecialServices = [
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

const fallbackEvents = [
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

const fallbackSlavas = [
  {
    date: 'May 6, 2025',
    name: 'Sveti Đorđe (Saint George)',
    time: '09:00 - 11:00',
    description: 'Celebration of Saint George, patron saint of many Serbian families. Special liturgy and blessing of kolach and wheat.',
    location: 'Church',
    type: 'slava' as const
  },
];

// Transform Strapi event to match existing interface
const transformStrapiEvent = (strapiEvent: StrapiEvent) => ({
  date: new Date(strapiEvent.attributes.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  name: strapiEvent.attributes.name,
  time: strapiEvent.attributes.time,
  type: strapiEvent.attributes.type,
  description: strapiEvent.attributes.description || '',
  location: strapiEvent.attributes.location || '',
});

// Get events from Strapi by type
export const getEventsByType = async (type: 'service' | 'event' | 'slava') => {
  try {
    const response = await strapiAPI.getEvents(`filters[type][$eq]=${type}&sort=date:asc`);
    return response.data.map(transformStrapiEvent);
  } catch (error) {
    console.warn(`Failed to fetch ${type}s from Strapi, using fallback data:`, error);
    switch (type) {
      case 'service': return fallbackSpecialServices;
      case 'event': return fallbackEvents;
      case 'slava': return fallbackSlavas;
      default: return [];
    }
  }
};

// Get all events from Strapi
export const getAllEvents = async () => {
  try {
    const response = await strapiAPI.getEvents();
    return response.data.map(transformStrapiEvent);
  } catch (error) {
    console.warn('Failed to fetch events from Strapi, using fallback data:', error);
    return [...fallbackSpecialServices, ...fallbackEvents, ...fallbackSlavas];
  }
};

// Export existing functions with Strapi integration
export const regularServices = fallbackRegularServices;

// These need to be synchronous for existing usage, so we return the fallback data
export const specialServices = fallbackSpecialServices;
export const events = fallbackEvents;
export const slavas = fallbackSlavas;

// Combine all items and sort by date
export const getAllCalendarItems = async () => {
  try {
    const allEvents = await getAllEvents();
    return allEvents.sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } catch (error) {
    console.warn('Failed to get all calendar items:', error);
    return [...fallbackSpecialServices, ...fallbackEvents, ...fallbackSlavas]
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
};

// Get next N upcoming events
export const getUpcomingEvents = async (limit: number = 10) => {
  try {
    const today = new Date();
    const allItems = await getAllCalendarItems();
    
    return allItems
      .filter(item => new Date(item.date) >= today)
      .slice(0, limit);
  } catch (error) {
    console.warn('Failed to get upcoming events:', error);
    const today = new Date();
    return [...fallbackSpecialServices, ...fallbackEvents, ...fallbackSlavas]
      .filter(item => new Date(item.date) >= today)
      .slice(0, limit);
  }
};
