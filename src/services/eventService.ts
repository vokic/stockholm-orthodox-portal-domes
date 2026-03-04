import { fetchContentfulEntries } from "../lib/contentful";

interface ContentfulRichTextMark {
  type: string;
}

interface ContentfulRichTextNode {
  nodeType: string;
  value?: string;
  marks?: ContentfulRichTextMark[];
  content?: ContentfulRichTextNode[];
  data?: { uri?: string };
}

interface ContentfulRichText {
  content: ContentfulRichTextNode[];
}

interface ContentfulEntry {
  sys: { id: string };
  fields: {
    title?: string;
    name?: string;
    description?: string | ContentfulRichText;
    dateTime?: string;
    date?: string;
    time?: string;
    location?: string;
    type?: "service" | "event" | "slava";
    highlight?: boolean;
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "service" | "event" | "slava";
  highlight?: boolean;
}

// Helper function to convert Contentful rich text to HTML
const convertRichTextToHtml = (richTextObj: ContentfulRichText): string => {
  if (!richTextObj || !richTextObj.content) {
    return "";
  }

  const processNode = (node: ContentfulRichTextNode): string => {
    if (node.nodeType === "text") {
      let text = node.value || "";

      // Apply formatting based on marks
      if (node.marks && node.marks.length > 0) {
        node.marks.forEach((mark: ContentfulRichTextMark) => {
          switch (mark.type) {
            case "bold":
              text = `<strong>${text}</strong>`;
              break;
            case "italic":
              text = `<em>${text}</em>`;
              break;
            case "underline":
              text = `<u>${text}</u>`;
              break;
          }
        });
      }

      return text;
    } else if (node.nodeType === "paragraph") {
      const content = node.content
        ? node.content.map(processNode).join("")
        : "";
      return `<p>${content}</p>`;
    } else if (node.nodeType === "hyperlink") {
      const content = node.content
        ? node.content.map(processNode).join("")
        : "";
      const url = node.data?.uri || "#";
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-orthodox-blue hover:text-orthodox-gold underline">${content}</a>`;
    } else if (node.content && Array.isArray(node.content)) {
      return node.content.map(processNode).join("");
    }

    return "";
  };

  return richTextObj.content.map(processNode).join("");
};

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const data = await fetchContentfulEntries("eventModel");

    if (!data || !Array.isArray(data.items)) {
      return [];
    }

    return data.items.map((item: ContentfulEntry) => {
      // Parse dateTime field if it exists
      let date = "";
      let time = "";

      if (item.fields.dateTime) {
        const dateTimeObj = new Date(item.fields.dateTime);
        date = dateTimeObj.toISOString().split("T")[0]; // YYYY-MM-DD format
        time = dateTimeObj.toLocaleTimeString("sr-RS", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      } else {
        // Fallback to separate date and time fields if dateTime doesn't exist
        date = item.fields.date || "";
        time = item.fields.time || "";
      }

      // Handle description - convert rich text to HTML
      let description = "";
      if (item.fields.description) {
        if (typeof item.fields.description === "string") {
          description = item.fields.description;
        } else if (item.fields.description.content) {
          // Convert rich text object to HTML
          description = convertRichTextToHtml(item.fields.description);
        } else {
          description = "";
        }
      }

      const event = {
        id: item.sys.id,
        title: item.fields.title || item.fields.name || "Untitled Event",
        description: description,
        date: date,
        time: time,
        location: item.fields.location || "",
        type: item.fields.type || "event",
        highlight: item.fields.highlight || false,
      };

      return event;
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
