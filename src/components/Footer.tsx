import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { Pencil, Info, Facebook, Instagram } from "lucide-react";
import SerbianCross from "./SerbianCross";
import HolidayPopup from "./HolidayPopup";
import { fetchEvents, Event } from "../services/eventService";

interface FooterProps {
  onHolidayPopupOpen?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHolidayPopupOpen }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [showHolidayPopup, setShowHolidayPopup] = useState(false);

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

  const handlePopupOpen = () => {
    setShowHolidayPopup(true);
  };

  const handleAddressClick = () => {
    const address = "Bägerstavägen 68, 120 47 Enskede Gård, Stockholm, Sweden";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <footer className="bg-orthodox-blue text-white pt-10 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">
              {t("footer.aboutUs")}
            </h3>
            <p className="mb-4">{t("footer.description")}</p>
            <div className="text-orthodox-gold text-3xl">
              <SerbianCross size={32} className="text-orthodox-gold" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              <li>{t("footer.svetaLiturgija1")}</li>
              {/* <li>{t("footer.svetaLiturgija2")}</li>
              <li>{t("footer.svetaLiturgija3")}</li> */}
              <li>
                <Link
                  to="/calendar"
                  className="text-orthodox-gold hover:underline"
                >
                  {t("footer.calendarLink")} &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orthodox-gold">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>{t("footer.address")}:</strong>{" "}
                <button
                  onClick={handleAddressClick}
                  className="text-white hover:text-orthodox-gold transition-colors underline"
                >
                  {t("footer.addressValue")}
                </button>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-orthodox-gold hover:underline"
                >
                  {t("footer.ostaleKontaktInformacije")} &rarr;
                </Link>
              </li>

              {/* <li>
                <strong>{t("footer.phone")}:</strong>{" "}
                <a
                  href={`tel:${(t("footer.phoneValue") || "").replace(
                    /\s+/g,
                    ""
                  )}`}
                  className="text-white hover:text-orthodox-gold transition-colors underline"
                >
                  {t("footer.phoneValue")}
                </a>
              </li> */}
              {/* <li>
                <strong>{t("footer.email")}:</strong>{" "}
                <a
                  href={`mailto:${t("footer.emailValue")}`}
                  className="text-white hover:text-orthodox-gold transition-colors underline"
                >
                  {t("footer.emailValue")}
                </a>
              </li> */}

              <li className="pt-3">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100069273553241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orthodox-gold hover:text-white transition-colors"
                    aria-label={t("aria.facebook")}
                  >
                    <Facebook size={30} strokeWidth={1.5} absoluteStrokeWidth />
                  </a>
                  <a
                    href="https://www.instagram.com/spcstockholm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orthodox-gold hover:text-white transition-colors"
                    aria-label={t("aria.instagram")}
                  >
                    <Instagram
                      size={30}
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-300 text-center">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} {t("footer.copyright")} {t("footer.rights")}.
            <a
              href="https://be.contentful.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orthodox-gold transition-colors"
              aria-label={t("footer.editContent")}
            >
              <Pencil size={14} />
            </a>
            <button
              onClick={handlePopupOpen}
              className="text-gray-300 hover:text-orthodox-gold transition-colors ml-1"
              aria-label={t("footer.holidayPopupOpenLabel")}
              disabled={eventsLoading || !upcomingEvent}
              style={{
                cursor:
                  eventsLoading || !upcomingEvent ? "not-allowed" : "pointer",
                opacity: eventsLoading || !upcomingEvent ? 0.5 : 1,
              }}
            >
              <Info size={14} />
            </button>
          </p>
          {showHolidayPopup && upcomingEvent && (
            <HolidayPopup
              open={showHolidayPopup}
              onOpenChange={setShowHolidayPopup}
              event={upcomingEvent}
            />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
