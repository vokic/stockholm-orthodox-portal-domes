import React from "react";
import { fetchContentfulEntries } from "../../lib/contentful";
import { useQuery } from "@tanstack/react-query";

interface ServiceAnnouncement {
  id: string;
  title: string;
  content: string;
  description?: string;
  publishedDate: string;
}

const convertRichTextToHtml = (richTextObj: any): string => {
  if (!richTextObj || !richTextObj.content) {
    return "";
  }

  const processNode = (node: any): string => {
    // Handle MaxDepthReached scenarios
    if (node._type === "MaxDepthReached" || !node.nodeType) {
      return "";
    }

    if (node.nodeType === "text") {
      let text = node.value || "";

      // Apply formatting based on marks
      if (node.marks && node.marks.length > 0) {
        node.marks.forEach((mark: any) => {
          if (mark.type && typeof mark.type === "string") {
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
          }
        });
      }

      return text;
    } else if (node.nodeType === "paragraph") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      // Only wrap in <p> if there's actual content, otherwise add line break
      return content.trim()
        ? `<p style="margin-bottom: 12px; line-height: 1.4;">${content}</p>`
        : '<br style="margin-bottom: 12px;">';
    } else if (node.nodeType === "unordered-list") {
      const listItems =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<ul style="list-style-type: disc; margin-left: 20px; padding-left: 0; margin-bottom: 12px; line-height: 1.4;">${listItems}</ul>`;
    } else if (node.nodeType === "ordered-list") {
      const listItems =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<ol style="list-style-type: decimal; margin-left: 20px; padding-left: 0; margin-bottom: 12px; line-height: 1.4;">${listItems}</ol>`;
    } else if (node.nodeType === "list-item") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<li style="margin-bottom: 6px;">${content}</li>`;
    } else if (node.nodeType === "heading-1") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<h1 style="margin-bottom: 12px; line-height: 1.3;">${content}</h1>`;
    } else if (node.nodeType === "heading-2") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<h2 style="margin-bottom: 12px; line-height: 1.3;">${content}</h2>`;
    } else if (node.nodeType === "heading-3") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<h3 style="margin-bottom: 12px; line-height: 1.3;">${content}</h3>`;
    } else if (node.nodeType === "heading-4") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<h4 style="margin-bottom: 12px; line-height: 1.3;">${content}</h4>`;
    } else if (node.nodeType === "heading-5") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<h5 style="margin-bottom: 12px; line-height: 1.3;">${content}</h5>`;
    } else if (node.nodeType === "heading-6") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<h6 style="margin-bottom: 12px; line-height: 1.3;">${content}</h6>`;
    } else if (node.nodeType === "hyperlink") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      let url = "#";
      if (node.data && node.data.uri) {
        if (typeof node.data.uri === "string") {
          url = node.data.uri;
        } else if (
          node.data.uri.value &&
          typeof node.data.uri.value === "string"
        ) {
          url = node.data.uri.value;
        }
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-orthodox-blue hover:text-orthodox-gold underline">${content}</a>`;
    } else if (node.nodeType === "blockquote") {
      const content =
        node.content && Array.isArray(node.content)
          ? node.content.map(processNode).join("")
          : "";
      return `<blockquote style="margin-bottom: 12px; line-height: 1.4;">${content}</blockquote>`;
    } else if (node.nodeType === "hr") {
      return '<hr style="margin: 12px 0;">';
    } else if (node.content && Array.isArray(node.content)) {
      return node.content.map(processNode).join("");
    }

    return "";
  };

  return richTextObj.content.map(processNode).join("");
};

const fetchServiceAnnouncements = async (): Promise<ServiceAnnouncement[]> => {
  try {
    const data = await fetchContentfulEntries("obavestenje");

    if (!data || !Array.isArray(data.items)) {
      return [];
    }

    return data.items
      .map((item: any) => {
        console.log(
          "Processing announcement entry:",
          item.sys.id,
          "Fields:",
          item.fields
        );

        // Handle content - convert rich text to HTML
        let content = "";
        if (item.fields.content) {
          if (typeof item.fields.content === "string") {
            content = item.fields.content;
          } else if (item.fields.content.content) {
            content = convertRichTextToHtml(item.fields.content);
          }
        }

        // Handle description - convert rich text to HTML
        let description = "";
        if (item.fields.description) {
          if (typeof item.fields.description === "string") {
            description = item.fields.description;
          } else if (item.fields.description.content) {
            description = convertRichTextToHtml(item.fields.description);
          }
        }

        return {
          id: item.sys.id,
          title: item.fields.title || "Service Announcement",
          content: content,
          description: description,
          publishedDate: item.fields.publishedDate || item.sys.createdAt,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
      );
  } catch (error) {
    console.error("Error fetching service announcements:", error);
    return [];
  }
};

const ServiceAnnouncements: React.FC = () => {
  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["serviceAnnouncements"],
    queryFn: fetchServiceAnnouncements,
  });

  if (isLoading) {
    return (
      <section className="section">
        <div className="container-custom">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue text-center">Obaveštenje</h2>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="text-gray-600">Loading announcements...</div>
          </div>
        </div>
      </section>
    );
  }

  // Don't render anything if no announcements
  if (!announcements.length) {
    return null;
  }

  // Only show the first announcement (latest one)
  const announcement = announcements[0];

  return (
    <section className="section">
      <div className="container-custom">
        {/* Title outside the card, centered */}
        <h2 className="text-2xl font-serif mb-6 text-orthodox-blue text-center">Obaveštenje</h2>
        
        {/* Single card with uniform styling */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
          <h3 className="text-xl font-serif text-orthodox-blue mb-4">
            {announcement.title}
          </h3>
          {announcement.description && (
            <div
              className="text-gray-600 mb-4 pb-3 border-b border-gray-100"
              dangerouslySetInnerHTML={{ __html: announcement.description }}
            />
          )}
          <div
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />
        </div>
        
        {/* Date below the card, to the right */}
        <div className="mt-4 text-right">
          <span className="text-sm text-gray-600 font-medium italic">
            Datum Objave:{" "}
            {new Date(announcement.publishedDate).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}{" "}
            {new Date(announcement.publishedDate).toLocaleTimeString(
              "en-US",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServiceAnnouncements;
