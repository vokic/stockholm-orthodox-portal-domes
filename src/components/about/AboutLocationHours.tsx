
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Clock, MapPin } from "lucide-react";
import Map from "../Map";

const AboutLocationHours: React.FC = () => {
  const { t } = useLanguage();

  // Working hours data
  const workingHours = [
    { day: t("about.hours.mondayFriday"), hours: "09:00 - 16:00" },
    { day: t("about.hours.saturday"), hours: "09:00 - 19:00" },
    { day: t("about.hours.sunday"), hours: "09:00 - 14:00" },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2 flex items-center gap-2">
            <MapPin className="text-orthodox-gold" />
            {t("about.locationHours.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
                <Clock className="text-orthodox-gold" />
                {t("about.locationHours.openingHours")}
              </h3>

              <div className="bg-orthodox-cream p-6 rounded-lg mb-6">
                <ul className="space-y-4">
                  {workingHours.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className="bg-orthodox-gold bg-opacity-20 px-3 py-1 rounded text-orthodox-blue">
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-serif mb-4">
                {t("about.locationHours.contactInfo")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">
                    {t("about.locationHours.address")}:
                  </span>
                  <span>{t("about.locationHours.addressValue")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">
                    {t("about.locationHours.phone")}:
                  </span>
                  <span>{t("about.locationHours.phoneValue")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">
                    {t("about.locationHours.email")}:
                  </span>
                  <span>{t("about.locationHours.emailValue")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">
                    {t("about.locationHours.priest")}:
                  </span>
                  <span>{t("about.locationHours.priestValue")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-4">
                {t("about.locationHours.findUs")}
              </h3>
              <p className="mb-4">{t("about.locationHours.findUsText")}</p>

              {/* Map Component */}
              <Map className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocationHours;
