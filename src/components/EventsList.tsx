import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Calendar } from "lucide-react";

const EventsList: React.FC = () => {
  const { t } = useLanguage();

  // Sample events data
  const events = [
    {
      date: "05. 10, 2025",
      name: "Parish Feast Day",
      description: "Annual celebration of our parish patron saint.",
    },
    {
      date: "05. 15, 2025",
      name: "Community Lunch",
      description: "Fellowship and community building after Divine Liturgy.",
    },
    {
      date: "05. 22, 2025",
      name: "Bible Study",
      description: "Weekly Bible study and discussion group.",
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center mb-4 text-orthodox-blue">
        <Calendar className="mr-2" size={20} />
        <h3 className="font-serif">{t("home.upcomingEvents")}</h3>
      </div>

      <ul className="divide-y">
        {events.map((event, index) => (
          <li key={index} className="py-3">
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="font-semibold">{event.name}</p>
            <p className="text-gray-600">{event.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <a
          href="/events"
          className="text-orthodox-blue hover:text-orthodox-gold"
        >
          {t("events.calendar")} →
        </a>
      </div>
    </div>
  );
};

export default EventsList;
