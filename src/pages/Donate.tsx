import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useToast } from "../hooks/use-toast";
import SerbianCross from "@/components/SerbianCross";

const Donate: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleDonation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank You for Your Donation",
      description: "Your support helps maintain our church and its ministries.",
      duration: 5000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t("donate.title")}
            </h1>
            <p className="text-xl">
              Подржите нашу црквену заједницу и помозите нам да наставимо нашу
              духовну мисију.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                Donation Options
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue">
                    Уплата на банковни рачун (Bankgiro)
                  </h3>
                  <p className="mb-4">
                    Можете извршити директан банковни трансфер на рачун цркве.
                    Све донације се користе за одржавање цркве, верске службе и
                    програме заједнице.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <p>
                      <strong>Број рачуна:</strong> 822 - 2705
                    </p>
                    {/* <p>
                      <strong>IBAN:</strong> SE45 3000 0000 0330 0123 4567
                    </p>
                    <p>
                      <strong>BIC/SWIFT:</strong> NDEASESS
                    </p> */}
                    <p className="mt-2 text-sm text-gray-600">
                      Молимо Вас да у пољу за референцу упишете Ваше име и
                      назнаку "Прилог"
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl mb-4 text-orthodox-blue">
                    SWISH Уплата
                  </h3>
                  <p className="mb-4">
                    За брзе и једноставне донације, користите SWISH да бисте их
                    директно пребацили на наш црквени рачун:
                  </p>

                  <div className="bg-gray-50 p-6 rounded-md text-center">
                    <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-orthodox-blue border-dashed flex items-center justify-center text-orthodox-blue text-sm font-medium">
                        <div className="text-center">
                          <div className="text-2xl mb-2">📱</div>
                          <div>SWISH QR Code</div>
                          <div className="text-xs mt-1">
                            Scan with SWISH app
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 font-medium text-orthodox-blue">
                      SWISH Broj: 123 668 65 70
                    </p>
                    <p className="text-sm text-gray-600">
                      Молимо Вас да у поруци упишете Ваше име и назнаку "Прилог"
                    </p>
                  </div>
                </div>
              </div>

              <div className="ornament mb-8">
                <SerbianCross size={32} className="text-orthodox-gold" />
              </div>

              <h3 className="font-serif text-xl mb-4 text-orthodox-blue">
                Остали начини да подржимо нашу цркву
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2 text-orthodox-blue">
                    {/* Volunteer Your Time */}
                  </h4>
                  <p className="mb-4">
                    Позивамо све који желе да помогну нашу цркву – кроз
                    одржавање, појање у хору или друге врсте доприноса. Ваше
                    време и дарови су велики благослов нашој парохији.
                  </p>
                  <a
                    href="/contact"
                    className="text-orthodox-blue hover:text-orthodox-gold underline"
                  >
                    Контактирајте нас да бисте волонтирали →
                  </a>
                </div>

                {/* <div>
                  <h4 className="font-semibold mb-2 text-orthodox-blue">
                    Donate Items
                  </h4>
                  <p className="mb-4">
                    We gratefully accept donations of liturgical items, icons,
                    religious books, and church supplies. We also collect items
                    for our community outreach programs including food for local
                    families and clothing for those in need.
                  </p>
                  <a
                    href="/contact"
                    className="text-orthodox-blue hover:text-orthodox-gold underline"
                  >
                    Contact us about item donations →
                  </a>
                </div> */}
              </div>

              {/* <div className="mt-8 p-4 bg-orthodox-cream rounded-lg">
                <h4 className="font-semibold mb-2 text-orthodox-blue">
                  Memorial Donations
                </h4>
                <p className="text-sm">
                  Honor the memory of loved ones through memorial donations.
                  These gifts help preserve our church for future generations
                  while keeping the memory of the departed alive in our prayers.
                </p>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
