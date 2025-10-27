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

          <div className="space-y-8">
            {/* First Parish */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="md:w-1/3">
                <img
                  src="/images/arsenije.webp"
                  alt={t("about.priest1.imageAlt")}
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => onImageClick("/images/arsenije.webp")}
                />
              </div>

              <div className="md:w-2/3 text-left">
                {/* <p className="font-semibold mb-1">Свештеник:</p> */}
                <p className="mb-1">Протојереј - ставрофор</p>
                <p className="mb-1 text-lg font-semibold">Арсеније Гардовић</p>
                <a
                  href={`tel:${t("priests.father1.phone")}`}
                  className="text-blue-600 hover:underline"
                >
                  {t("priests.father1.phone")}
                </a>

                <h3 className="text-xl font-serif mb-2 mt-3">
                  I ПАРОХИЈА СТОКХОЛМСКА
                </h3>
                <p className="mb-4">
                  У састав Прве парохије улазе следеће општине и делови града:
                </p>
                <ol className="list-decimal list-inside pl-2 space-y-1">
                  <li>Märsta</li>
                  <li>Upplands Väsby</li>
                  <li>Sollentuna</li>
                  <li>Lidingö</li>
                  <li>Sundbyberg</li>
                  <li>Huddinge</li>
                  <li>Skärholmen</li>
                  <li>Spånga-Tensta</li>
                  <li>Hägersten</li>
                  <li>Kungsholmen</li>
                  <li>Maria-Gamla stan</li>
                  <li>Farsta</li>
                  <li>Älvsjö</li>
                </ol>
              </div>
            </div>

            {/* Second Parish */}
            <div className="flex flex-col md:flex-row-reverse gap-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="md:w-1/3">
                <img
                  src="/images/dusan.webp"
                  alt={t("about.priest2.imageAlt")}
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => onImageClick("/images/dusan.webp")}
                />
              </div>

              <div className="md:w-2/3 text-left">
                {/* <p className="font-semibold mb-1">Свештеник:</p> */}
                <p className="mb-1">Протојереј - ставрофор</p>
                <p className="mb-1 text-lg font-semibold">Душан Д. Раковић</p>
                <a
                  href={`tel:${t("priests.father2.phone")}`}
                  className="text-blue-600 hover:underline"
                >
                  {t("priests.father2.phone")}
                </a>

                <h3 className="text-xl font-serif mb-2 mt-3">
                  II ПАРОХИЈА СТОКХОЛМСКА
                </h3>
                <p className="mb-4">
                  У састав Друге парохије улазе следеће општине и делови града:
                </p>
                <ol className="list-decimal list-inside pl-2 space-y-1">
                  <li>Solna</li>
                  <li>Täby</li>
                  <li>Vallentuna</li>
                  <li>Haninge</li>
                  <li>Nacka </li>
                  <li>Tyresö</li>
                  <li>Rinkeby</li>
                  <li>Kista</li>
                  <li>Enskede-Årsta</li>
                  <li>Liljeholmen</li>
                  <li>Norrmalm</li>
                </ol>
              </div>
            </div>

            {/* Third Parish */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="md:w-1/3">
                <img
                  src="/images/dimitrije.webp"
                  alt="Father Nikola portrait"
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => onImageClick("/images/dimitrije.webp")}
                />
              </div>

              <div className="md:w-2/3 text-left">
                {/* <p className="font-semibold mb-1">Свештеник:</p> */}
                <p className="mb-1">Протојереј</p>
                <p className="mb-1 text-lg font-semibold">Димитрије Раковић</p>
                <a
                  href={`tel:${t("priests.father3.phone")}`}
                  className="text-blue-600 hover:underline"
                >
                  {t("priests.father3.phone")}
                </a>

                <h3 className="text-xl font-serif mb-2 mt-3">
                  III ПАРОХИЈА СТОКХОЛМСКА
                </h3>
                <p className="mb-4">
                  У састав Треће парохије улазе следеће општине и делови града:
                </p>
                <ol className="list-decimal list-inside pl-2 space-y-1">
                  <li>Värmdö </li>
                  <li>Järfälla</li>
                  <li>Botkyrka</li>
                  <li>Danderyd</li>
                  <li>Hässelby-Vällingby</li>
                  <li>Katarina-Sofia</li>
                  <li>Skarpnäck</li>
                  <li>Vantör</li>
                  <li>Östermalm</li>
                  <li>Bromma</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPriests;
