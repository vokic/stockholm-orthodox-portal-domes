import React from "react";

const regularServices = [
  {
    day: "Недеља, субота, празник:",
    //name: "Divine Liturgy",
    time: "9:00 ч",
    //description: "Main service in Serbian and English every Sunday.",
  },
  {
    day: "Свакидашње јутрење: ",
    // name: "Vespers",
    time: "9:00 ч",
    //description: "Evening prayers before major feasts and on Saturdays.",
  },
  {
    day: "Свакидашње вечерње:",
    //name: "Akathist",
    time: "17:00 ч",
    //description: "Midweek prayer service.",
  },
];

const RegularServicesTable: React.FC = () => {
  const lastUpdated = "2024-06-15";

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif">Света литургија</h2>
        <span className="text-sm text-gray-600">
          Osveženo:{" "}
          {new Date(lastUpdated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <div className="overflow-x-auto bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 rounded-lg border-l-4 border-orthodox-gold">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-white">
              <th className="px-6 py-4 text-left font-bold text-lg font-serif">
                Дан
              </th>
              {/* <th className="px-6 py-4 text-left font-bold text-lg font-serif">
                Служба
              </th> */}
              <th className="px-6 py-4 text-left font-bold text-lg font-serif">
                Време
              </th>
              {/* <th className="px-6 py-4 text-left font-bold text-lg font-serif">Description</th> */}
            </tr>
          </thead>
          <tbody className="bg-white">
            {regularServices.map((service, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="px-6 py-3 font-medium">{service.day}</td>
                {/* <td className="px-6 py-3">{service.name}</td> */}
                <td className="px-6 py-3">{service.time}</td>
                {/* <td className="px-6 py-3">{service.description}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegularServicesTable;
