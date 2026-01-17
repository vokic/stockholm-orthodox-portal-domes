import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CombinedEventsSchedule from "../components/CombinedEventsSchedule";
import PriestMessage from "../components/PriestMessage";
import DonationSection from "../components/DonationSection";
import HolidayPopup from "../components/HolidayPopup";
import Map from "../components/Map";
import LatestArticles from "../components/LatestArticles";
import ServiceAnnouncements from "../components/calendar/ServiceAnnouncements";
import GoToTopButton from "../components/GoToTopButton";
import { useLanguage } from "../context/LanguageContext";
import { fetchEvents, Event } from "../services/eventService";
import { ExternalLink } from "lucide-react";

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [showHolidayPopup, setShowHolidayPopup] = useState(false);

  // POPUP CONTROL: Change this to false to disable the popup completely
  const POPUP_ENABLED = false;

  // Fetch events using React Query
  const { data: events = [], isLoading: eventsLoading } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  // Calculate upcoming event with useMemo
  const upcomingEvent = useMemo(() => {
    if (!events.length) return null;
    
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);

    // Find the first upcoming event within the next 30 days
    return events
      .filter((event) => {
        if (!event.date) return false;
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= thirtyDaysFromNow;
      })
      .sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )[0] || null;
  }, [events]);

  // Automatic popup logic with conditions - now controlled by POPUP_ENABLED flag
  React.useEffect(() => {
    if (!POPUP_ENABLED) return; // Exit early if popup is disabled

    const hasSeenPopup = sessionStorage.getItem("hasSeenHolidayPopup");
    const isFirstVisit = !hasSeenPopup;

    // Show popup automatically only if:
    // 1. Popup is enabled
    // 2. User hasn't seen it in this session
    // 3. There's an upcoming event within 30 days
    // 4. Events have finished loading
    if (isFirstVisit && !eventsLoading && upcomingEvent) {
      const timer = setTimeout(() => {
        setShowHolidayPopup(true);
        sessionStorage.setItem("hasSeenHolidayPopup", "true");
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, [eventsLoading, upcomingEvent, POPUP_ENABLED]);

  const handleGetDirections = () => {
    const address = "Bägerstavägen 68, 120 47 Enskede Gård, Stockholm, Sweden";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <HeroSection />

        {/* Service Announcements Section - Added below hero */}
        <ServiceAnnouncements />

        {/* Latest Articles Section */}
        <section className="section">
          <div className="container-custom">
            <h2 className="text-2xl font-serif mb-6 text-orthodox-blue text-center">
              {t("home.latestArticles")}
            </h2>
            <LatestArticles />
            <div className="text-center mt-6">
              <Link to="/articles" className="btn-primary inline-block">
                {t("home.viewAllArticles")}
              </Link>
            </div>
          </div>
        </section>

        {/* Service & Events Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <h2 className="text-2xl font-serif mb-6 text-orthodox-blue text-center">
              {t("home.upcomingEvents")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <CombinedEventsSchedule />
            </div>
          </div>
        </section>

        {/* Priest's Message Section */}
        {/* <section className="section">
          <div className="container-custom">
            <PriestMessage />
          </div>
        </section> */}

        {/* Info Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Text content */}
                <div>
                  <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
                    {t("home.visitOurChurch")}
                  </h3>
                  <p className="mb-4">{t("home.visitOurChurchIntro")}</p>
                  <div className="mb-4">
                    <p className="font-semibold">{t("home.addressLabel")}</p>
                    <p>{t("home.address")}</p>
                    <button
                      onClick={handleGetDirections}
                      className="flex items-center gap-2 mt-2 text-orthodox-blue hover:text-orthodox-gold transition-colors duration-150 underline"
                    >
                      <ExternalLink size={16} />
                      {t("home.getDirections")}
                    </button>
                  </div>

                  <div className="mt-4 p-3 bg-orthodox-blue bg-opacity-10 rounded">
                    <p className="text-sm">{t("home.churchIntro")}</p>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="btn-primary inline-block mt-4"
                    >
                      {t("home.contactUs")}
                    </Link>
                  </div>
                </div>

                {/* Right side - Map */}
                <div className="rounded overflow-hidden flex justify-center items-center">
                  <Map className="h-72 sm:h-96 w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <DonationSection />
      </main>

      <Footer
        onHolidayPopupOpen={() => POPUP_ENABLED && setShowHolidayPopup(true)}
      />

      {/* Holiday popup - only render if enabled and there's an upcoming event */}
      {POPUP_ENABLED && upcomingEvent && (
        <HolidayPopup
          event={upcomingEvent}
          open={showHolidayPopup}
          onOpenChange={setShowHolidayPopup}
        />
      )}

      {/* Go to top button */}
      <GoToTopButton />
    </div>
  );
};

export default HomePage;
