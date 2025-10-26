import React from "react";
import { useLanguage } from "../context/LanguageContext";

const ParishesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-orthodox-cream">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
            {
              t(
                "Парохије"
              ) /* Add this translation key or replace with static text */
            }
          </h2>

          <div className="max-w-4xl mx-auto mb-8">
            <section>
              <h3 className="font-semibold text-lg mb-4 mt-6 text-left">
                I ПАРОХИЈА СТОКХОЛМСКА
              </h3>
              <p>
                У састав Прве парохије улазе следеће општине и делови града:
              </p>
              <ol className="list-decimal list-inside pl-6 mb-4 space-y-1">
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
              <p>
                <strong>Свештеник:</strong>
                <br />
                Протојереј-ставрофор Арсеније Гардовић
                <br />
                Моб.тел. 073 717 14 61
              </p>
            </section>

            {/* Repeat for II and III parishes with same ol class */}
            <section>
              <hr />
              <h3 className="font-semibold text-lg mb-4 mt-6 text-left">
                II ПАРОХИЈА СТОКХОЛМСКА
              </h3>
              <p>
                У састав Друге парохије улазе следеће општине и делови града:
              </p>
              <ol className="list-decimal list-inside pl-6 mb-4 space-y-1">
                <li>Solna</li>
                <li>Täby</li>
                <li>Vallentuna</li>
                <li>Haninge</li>
                <li>Nacka </li>
                <li>Tyresö</li>
                <li>Rinkeby</li>
                <li>Kista </li>
                <li>Enskede-Årsta</li>
                <li>Liljeholmen</li>
                <li>Norrmalm</li>
              </ol>
              <p>
                <strong>Свештеник:</strong>
                <br />
                Протојереј – ставрофор Душан Д. Раковић
                <br />
                Моб.тел. 073 501 66 95
              </p>
            </section>

            <section>
              <hr />
              <h3 className="font-semibold text-lg mb-4 mt-6 text-left">
                III ПАРОХИЈА СТОКХОЛМСКА
              </h3>
              <p>
                У састав Треће парохије улазе следеће општине и делови града:
              </p>
              <ol className="list-decimal list-inside pl-6 mb-4 space-y-1">
                <li>Värmdö</li>
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
              <p>
                <strong>Свештеник:</strong>
                <br />
                Јереј Димитрије Раковић
                <br />
                Моб.тел. 073 023 67 70
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParishesSection;
