
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const AboutCommunityStats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t("about.community")}
          </h2>

          <p className="mb-4">{t("about.communityText.p1")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orthodox-gold mb-2">
                150+
              </div>
              <p>{t("about.communityText.families")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orthodox-gold mb-2">
                15+
              </div>
              <p>{t("about.communityText.nationalities")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orthodox-gold mb-2">
                35+
              </div>
              <p>{t("about.communityText.years")}</p>
            </div>
          </div>

          <p className="mb-4">{t("about.communityText.p2")}</p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{t("about.communityText.activities.sunday")}</li>
            <li>{t("about.communityText.activities.youth")}</li>
            <li>{t("about.communityText.activities.bible")}</li>
            <li>{t("about.communityText.activities.charity")}</li>
            <li>{t("about.communityText.activities.cultural")}</li>
            <li>{t("about.communityText.activities.fellowship")}</li>
          </ul>

          <p>{t("about.communityText.p3")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCommunityStats;
