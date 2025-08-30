import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface AboutPriestsProps {
  onImageClick: (imageSrc: string) => void;
}

const AboutPriests: React.FC<AboutPriestsProps> = ({ onImageClick }) => {
  const { t } = useLanguage();

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t("about.priests")}
          </h2>

          {/* Three Priests - Horizontal Card Layout */}
          <div className="space-y-8">
            {/* First Priest */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg"
                  alt={t("about.priest1.imageAlt")}
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => onImageClick("/placeholder.svg")}
                />
              </div>

              <div className="md:w-2/3">
                <h3 className="text-xl font-serif mb-3">
                  {t("about.priest1.name")}
                </h3>

                <p className="mb-3">
                  Father Milos has been serving our parish community for over 15
                  years, bringing wisdom and compassion to all who seek
                  spiritual guidance. His dedication to Orthodox traditions and
                  modern pastoral care has made him a beloved figure in our
                  community.
                </p>
                <p className="mb-3">
                  With a doctorate in Theology from the University of Belgrade,
                  he specializes in liturgical studies and has authored several
                  articles on Orthodox spirituality.
                </p>

                <div className="mt-4 p-3 bg-orthodox-gold bg-opacity-10 rounded-lg">
                  <p className="font-medium text-orthodox-blue">Contact:</p>
                  <p>
                    <a
                      href="tel:+46701234567"
                      className="text-orthodox-blue underline hover:text-orthodox-gold transition-colors"
                    >
                      +46 70 123 45 67
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Second Priest - Shorter text */}
            <div className="flex flex-col md:flex-row-reverse gap-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg"
                  alt={t("about.priest2.imageAlt")}
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => onImageClick("/placeholder.svg")}
                />
              </div>

              <div className="md:w-2/3">
                <h3 className="text-xl font-serif mb-3">
                  {t("about.priest2.name")}
                </h3>

                <p className="mb-3">
                  Father Stefan joined our parish five years ago and brings
                  fresh energy to our spiritual community.
                </p>

                <div className="mt-4 p-3 bg-orthodox-gold bg-opacity-10 rounded-lg">
                  <p className="font-medium text-orthodox-blue">Contact:</p>
                  <p>
                    <a
                      href="tel:+46702345678"
                      className="text-orthodox-blue underline hover:text-orthodox-gold transition-colors"
                    >
                      +46 70 234 56 78
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Third Priest - Longer text */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg"
                  alt="Father Nikola portrait"
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => onImageClick("/placeholder.svg")}
                />
              </div>

              <div className="md:w-2/3">
                <h3 className="text-xl font-serif mb-3">
                  Father Nikola Petrović
                </h3>

                <p className="mb-3">
                  Father Nikola brings over 20 years of monastic experience to
                  our parish, having served at the Hilandar Monastery on Mount
                  Athos before joining our community. His deep spiritual insight
                  and contemplative approach enrich our liturgical life in ways
                  that touch the hearts of all who encounter his wisdom.
                </p>
                <p className="mb-3">
                  As our senior confessor, he provides spiritual counseling and
                  guidance to parishioners seeking deeper understanding of
                  Orthodox mystical traditions and prayer life. His extensive
                  knowledge of patristic literature and Byzantine theology makes
                  him an invaluable resource for those pursuing advanced
                  spiritual development.
                </p>
                <p className="mb-3">
                  Father Nikola also leads our monastery retreat programs and
                  has established strong connections with Orthodox communities
                  across Europe. His multilingual abilities allow him to serve
                  our diverse international congregation with particular
                  expertise in Church Slavonic and ancient Greek liturgical
                  traditions.
                </p>
                <p className="mb-3">
                  Beyond his pastoral duties, he is actively involved in
                  interfaith dialogue and has published numerous scholarly
                  articles on Eastern Orthodox theology and spirituality in both
                  Serbian and Swedish academic journals.
                </p>

                <div className="mt-4 p-3 bg-orthodox-gold bg-opacity-10 rounded-lg">
                  <p className="font-medium text-orthodox-blue">Contact:</p>
                  <p>
                    <a
                      href="tel:+46703456789"
                      className="text-orthodox-blue underline hover:text-orthodox-gold transition-colors"
                    >
                      +46 70 345 67 89
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPriests;
