import React from "react";
import { useLanguage } from "../context/LanguageContext";

const PriestMessage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
        {t("home.priests.title")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Priest */}
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
              <img
                src="/images/dusan.webp"
                alt={t("priests.father1.name")}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-center text-sm">
              {t("priests.father1.name")}
            </p>
            <p className="text-center text-sm">{t("priests.father1.title")}</p>
          </div>

          <div className="text-sm">
            <p className="text-center mb-3">{t("priests.father1.greeting")}</p>
            {/* <p className="mb-3 italic">"{t("priests.father1.greeting")}"</p> */}
            <p className="text-center text-sm">
              <a
                href={`tel:${t("priests.father1.phone")}`}
                className="text-blue-600 hover:underline"
              >
                {t("priests.father1.phone")}
              </a>
            </p>

            {/* <p className="mb-3">{t("priests.father1.message1")}</p>
            <p>{t("priests.father1.blessing")}</p>
            <p className="mt-3 text-right font-serif italic text-xs">
              {t("priests.father1.signature")}
            </p> */}
          </div>
        </div>

        {/* Second Priest */}
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
              <img
                src="/images/arsenije.webp"
                alt={t("priests.father2.name")}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-center text-sm">
              {t("priests.father2.name")}
            </p>
            <p className="text-center text-sm">{t("priests.father2.title")}</p>
          </div>

          <div className="text-sm">
            <p className="text-center mb-3">{t("priests.father2.greeting")}</p>
            {/* <p className="mb-3 italic">"{t("priests.father2.greeting")}"</p> */}
            <p className="text-center text-sm">
              <a
                href={`tel:${t("priests.father2.phone")}`}
                className="text-blue-600 hover:underline"
              >
                {t("priests.father1.phone")}
              </a>
            </p>

            {/* <p className="mb-3">{t("priests.father2.message1")}</p>
            <p>{t("priests.father2.blessing")}</p>
            <p className="mt-3 text-right font-serif italic text-xs">
              {t("priests.father2.signature")}
            </p> */}
          </div>
        </div>

        {/* Third Priest */}
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
              <img
                src="/placeholder.svg"
                alt="Father Stefan Marković"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-center text-sm">
              {t("priests.father3.name")}
            </p>
            <p className="text-center text-sm">{t("priests.father3.title")}</p>
          </div>

          <div className="text-sm">
            <p className="text-center mb-3">{t("priests.father3.greeting")}</p>
            {/* <p className="mb-3 italic">"{t("priests.father3.greeting")}"</p> */}
            <p className="text-center text-sm">
              <a
                href={`tel:${t("priests.father3.phone")}`}
                className="text-blue-600 hover:underline"
              >
                {t("priests.father1.phone")}
              </a>
            </p>

            {/* <p className="mb-3">{t("priests.father3.message1")}</p>
            <p>{t("priests.father3.blessing")}</p>
            <p className="mt-3 text-right font-serif italic text-xs">
              {t("priests.father3.signature")}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriestMessage;
