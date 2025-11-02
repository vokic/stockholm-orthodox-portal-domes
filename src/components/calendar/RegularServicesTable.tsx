import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const RegularServicesTable: React.FC = () => {
  const { t } = useLanguage();

  const regularServices = [
    {
      day: t("calendar.table.time1"),
      time: "8:00",
    },
    {
      day: t("calendar.table.time2"),
      time: "9:00",
    },
    {
      day: t("calendar.table.time3"),
      time: "9:00",
    },
    {
      day: t("calendar.table.time4"),
      time: "17:00",
    },
  ];

  const lastUpdated = "2024-06-15";

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif">{t("calendar.title")}</h2>
      </div>

      <div className="overflow-x-auto bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 rounded-lg border-l-4 border-b-1 border-r-1 border-orthodox-gold">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="text-white">
              <th className="px-6 py-4 text-left font-bold text-lg font-serif">
                {t("calendar.table.name")}
              </th>
              <th className="px-6 py-4 text-left font-bold text-lg font-serif">
                {t("calendar.table.time")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {regularServices.map((service, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="px-6 py-3 font-medium">{service.day}</td>
                <td className="px-6 py-3">{service.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegularServicesTable;
