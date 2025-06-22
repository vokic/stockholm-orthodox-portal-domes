import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Calendar } from "lucide-react";

const EventsPage: React.FC = () => {
  const { t } = useLanguage();

  // Sample events data
  const events = [
    {
      date: "May 10, 2025",
      name: "Parish Feast Day",
      time: "10:00 - 13:00",
      description:
        "Annual celebration of our parish patron saint. The Divine Liturgy will be followed by a procession and a festive meal.",
      location: "Church and Parish Hall",
    },
    {
      date: "May 15, 2025",
      name: "Community Lunch",
      time: "12:00 - 14:00",
      description:
        "Fellowship and community building after Divine Liturgy. Everyone is welcome to join for food and conversation.",
      location: "Parish Hall",
    },
    {
      date: "May 22, 2025",
      name: "Bible Study",
      time: "19:00 - 20:30",
      description:
        "Weekly Bible study and discussion group, currently focusing on the Gospel of John.",
      location: "Church Library",
    },
    {
      date: "May 25, 2025",
      name: "Youth Group Meeting",
      time: "16:00 - 18:00",
      description:
        "Monthly gathering for teenagers and young adults. Activities, discussions, and refreshments.",
      location: "Parish Hall",
    },
    {
      date: "June 5, 2025",
      name: "Iconography Workshop",
      time: "10:00 - 15:00",
      description:
        "Learn about the tradition of Orthodox icons and try your hand at creating one with guidance from a professional iconographer.",
      location: "Parish Hall",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t("events.title")}
            </h1>
          </div>
        </div>

        {/* Events Calendar Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <div className="flex items-center mb-6">
                <Calendar className="text-orthodox-blue mr-2" size={24} />
                <h2 className="text-2xl font-serif text-orthodox-blue">
                  {t("events.calendar")}
                </h2>
              </div>

              {events.length > 0 ? (
                <div className="divide-y">
                  {events.map((event, index) => (
                    <div key={index} className="py-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{event.name}</h3>
                        <div className="bg-orthodox-blue text-white px-3 py-1 rounded text-sm mt-1 md:mt-0">
                          {event.date}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <p className="text-gray-700 mb-3">
                            {event.description}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:gap-6">
                            <p>
                              <strong>Time:</strong> {event.time}
                            </p>
                            <p>
                              <strong>Location:</strong> {event.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-center md:justify-end items-center">
                          <button className="btn-primary text-sm">
                            Add to Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-600">
                  {t("events.noEvents")}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Community Activities Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                Community Activities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-orthodox-gold bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-orthodox-gold">🕯️</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Sunday School</h3>
                  <p>
                    Weekly classes for children to learn about the Orthodox
                    faith and traditions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orthodox-gold bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-orthodox-gold">📖</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Bible Study</h3>
                  <p>
                    Regular scripture study and discussion groups for adults of
                    all ages.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orthodox-gold bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-orthodox-gold">🍲</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Charity Outreach</h3>
                  <p>
                    Preparing meals and collecting donations for local homeless
                    shelters.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="mb-4">
                  Want to get involved? We welcome volunteers for all our
                  community activities!
                </p>
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
