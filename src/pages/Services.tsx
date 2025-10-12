import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import SerbianCross from "@/components/SerbianCross";

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  // Sample service schedule data
  const regularServices = [
    {
      day: "Sunday",
      name: "Divine Liturgy",
      time: "10:00 - 12:00",
      description: "The main weekly worship service of the Orthodox Church.",
    },
    {
      day: "Saturday",
      name: "Vespers",
      time: "18:00 - 19:00",
      description: "Evening prayer service that begins the liturgical day.",
    },
    {
      day: "Wednesday",
      name: "Akathist",
      time: "19:00 - 20:00",
      description:
        "A hymn of praise dedicated to a saint, Christ, or the Theotokos.",
    },
  ];

  // Sample special services for upcoming month
  const specialServices = [
    {
      date: "May 21, 2025",
      name: "Feast of Saints Constantine and Helen",
      time: "09:00 - 11:00",
    },
    {
      date: "June 2, 2025",
      name: "Feast of the Ascension",
      time: "09:00 - 11:00",
    },
    {
      date: "June 12, 2025",
      name: "Feast of Pentecost",
      time: "09:00 - 11:00",
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
              {t("services.schedule")}
            </h1>
          </div>
        </div>

        {/* Regular Services Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t("services.schedule")}
              </h2>

              <div className="mb-8">
                <p className="mb-4">
                  Our church offers regular services throughout the week. All
                  services are celebrated in multiple languages to accommodate
                  our diverse community.
                </p>
                <p className="mb-6">
                  After Sunday Divine Liturgy, we invite everyone to join us for
                  fellowship and refreshments in the church hall.
                </p>

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
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="px-4 py-3 font-medium">
                            {service.day}
                          </td>
                          <td className="px-4 py-3">{service.name}</td>
                          <td className="px-4 py-3">{service.time}</td>
                          <td className="px-4 py-3">{service.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="ornament">
                <SerbianCross size={32} className="text-orthodox-gold" />
              </div>

              <h3 className="text-xl font-serif mb-4 text-orthodox-blue">
                {t("services.specialServices")}
              </h3>

              <p className="mb-4">
                In addition to our regular services, we celebrate feast days and
                other special occasions according to the Orthodox calendar.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orthodox-blue text-white">
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Feast/Service</th>
                      <th className="px-4 py-2 text-left">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specialServices.map((service, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : ""}
                      >
                        <td className="px-4 py-3 font-medium">
                          {service.date}
                        </td>
                        <td className="px-4 py-3">{service.name}</td>
                        <td className="px-4 py-3">{service.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Service Information Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  What to Expect
                </h3>

                <p className="mb-4">
                  Orthodox services are rich in tradition, with ancient hymns,
                  incense, and icons playing important roles in the worship
                  experience.
                </p>

                <p className="mb-4">If you're new to Orthodox worship:</p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Feel free to sit if you need to during the service</li>
                  <li>You're welcome to observe if you're not Orthodox</li>
                  <li>
                    Communion is reserved for baptized Orthodox Christians
                  </li>
                  <li>Modest dress is appropriate</li>
                  <li>
                    Don't worry about "doing everything right" - we're happy
                    you're here
                  </li>
                </ul>

                <p>
                  If you have any questions, our greeters at the entrance will
                  be happy to help you.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  Confession and Personal Prayer
                </h3>

                <p className="mb-4">
                  Confession is available by appointment with Father Nicholas.
                  Please contact him directly to arrange a suitable time.
                </p>

                <p className="mb-4">
                  The church is open for personal prayer during the following
                  hours:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>
                    <strong>Monday to Friday:</strong> 09:00 - 13:00 and 17:00 -
                    18:00
                  </li>
                  <li>
                    <strong>Saturday:</strong> 08:00 - 14:00
                  </li>
                  <li>
                    <strong>Sunday:</strong> 08:00 - 14:00
                  </li>
                </ul>

                <p>
                  For prayer requests, please fill out a form at the candle desk
                  or contact the church office.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
