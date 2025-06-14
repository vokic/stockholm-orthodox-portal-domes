
import { fetchContentfulEntries } from "../lib/contentful";

export interface EventItem {
  date: string;
  name: string;
  time: string;
  type: "service" | "event" | "slava";
  description?: string;
  location?: string;
}

// Fetch events of a given type from Contentful
export const getEventsByType = async (type: "service" | "event" | "slava"): Promise<EventItem[]> => {
  let modelName = "";
  switch (type) {
    case "service":
      modelName = "specialService";
      break;
    case "event":
      modelName = "event";
      break;
    case "slava":
      modelName = "slava";
      break;
    default:
      return [];
  }
  try {
    const data = await fetchContentfulEntries(modelName);
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
      return [];
    }
    // Map to local structure
    return data.items.map((item: any) => ({
      date: item.fields?.date,
      name: item.fields?.name,
      time: item.fields?.time,
      type, // Set according to the call
      description: item.fields?.description,
      location: item.fields?.location,
    }));
  } catch (e) {
    return [];
  }
};

// Compose all events from all models
export const getAllEvents = async (): Promise<EventItem[]> => {
  const types: ("service" | "event" | "slava")[] = ["service", "event", "slava"];
  const all = (await Promise.all(types.map(getEventsByType))).flat();
  return all;
};

export const getAllCalendarItems = async (): Promise<EventItem[]> => {
  const items = await getAllEvents();
  // Remove entries missing 'date', and sort
  return items
    .filter(item => !!item.date)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getUpcomingEvents = async (limit: number = 10): Promise<EventItem[]> => {
  const allItems = await getAllCalendarItems();
  const today = new Date();
  return allItems.filter(item => new Date(item.date) >= today).slice(0, limit);
};
