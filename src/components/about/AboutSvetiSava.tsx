import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface AboutSvetiSavaProps {
  onImageClick: (imageSrc: string) => void;
}

const AboutSvetiSava: React.FC<AboutSvetiSavaProps> = ({ onImageClick }) => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
            {t("about.svetiSava.title")}
          </h2>

          {/* Text content in centered column */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-serif mb-6">
              {t("about.svetiSava.subtitle1")}
            </h3>
            <p className="mb-6 ">{t("about.svetiSava.p1a")}</p>
            <p className="mb-6 ">{t("about.svetiSava.p1b")}</p>
            <p className="mb-6 ">{t("about.svetiSava.p1c")}</p>

            <h3 className="text-xl font-serif mb-6">
              {t("about.svetiSava.subtitle2")}
            </h3>
            <p className="mb-6 ">{t("about.svetiSava.p2a")}</p>
            <p className="mb-6 ">{t("about.svetiSava.p2b")}</p>
            <p className="mb-6 ">{t("about.svetiSava.p2c")}</p>

            <h3 className="text-xl font-serif mb-6">
              {t("about.svetiSava.subtitle3")}
            </h3>
            <p className="mb-6 ">{t("about.svetiSava.p3a")}</p>
            <p className="mb-6 ">{t("about.svetiSava.p3b")}</p>

            <h3 className="text-xl font-serif mb-6">
              {t("about.svetiSava.subtitle4")}
            </h3>
            <p className="mb-6 ">{t("about.svetiSava.p4a")}</p>
            <p className="mb-6 ">{t("about.svetiSava.p4b")}</p>

            <h3 className="text-xl font-serif mb-6">
              {t("about.svetiSava.subtitle5")}
            </h3>
            <p className="mb-6 ">{t("about.svetiSava.p5a")}</p>
            <p className="mb-6 ">{t("about.svetiSava.p5b")}</p>

            <h3 className="text-xl font-serif mb-6">
              {t("about.svetiSava.subtitle6")}
            </h3>
            <p className="mb-6">{t("about.svetiSava.p6a")}</p>
            <p className="">{t("about.svetiSava.p6a")}</p>
          </div>

          {/* Images in symmetric grid with proper aspect ratio */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex justify-center">
              <img
                src="/images/about/sveti-sava-1.jpg"
                alt={t("about.svetiSava.image1Alt")}
                className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm h-80 object-cover"
                onClick={() => onImageClick("/images/about/sveti-sava-1.jpg")}
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/about/sveti-sava-2.jpg"
                alt={t("about.svetiSava.image2Alt")}
                className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm h-80 object-cover"
                onClick={() => onImageClick("/images/about/sveti-sava-2.jpg")}
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/about/sveti-sava-3.jpg"
                alt={t("about.svetiSava.image3Alt")}
                className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm h-80 object-cover"
                onClick={() => onImageClick("/images/about/sveti-sava-3.jpg")}
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/about/sveti-sava-4.jpg"
                alt={t("about.svetiSava.image3Alt")}
                className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm h-80 object-cover"
                onClick={() => onImageClick("/images/about/sveti-sava-4.jpg")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSvetiSava;
