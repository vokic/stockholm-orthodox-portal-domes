
import React from 'react';

const regularServices = [
  {
    day: 'Sunday',
    name: 'Divine Liturgy',
    time: '10:00 AM',
    description: 'Main service in Serbian and English every Sunday.',
  },
  {
    day: 'Saturday',
    name: 'Vespers',
    time: '5:00 PM',
    description: 'Evening prayers before major feasts and on Saturdays.',
  },
  {
    day: 'Wednesday',
    name: 'Akathist',
    time: '7:00 PM',
    description: 'Midweek prayer service.',
  },
];

const RegularServicesTable: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-serif mb-4">Regular Services</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 text-white rounded-lg shadow border-l-4 border-orthodox-gold">
              <th className="px-4 py-3 text-left font-bold text-white text-lg font-serif first:rounded-l-lg last:rounded-r-lg">Day</th>
              <th className="px-4 py-3 text-left font-bold text-white text-lg font-serif">Service</th>
              <th className="px-4 py-3 text-left font-bold text-white text-lg font-serif">Time</th>
              <th className="px-4 py-3 text-left font-bold text-white text-lg font-serif">Description</th>
            </tr>
          </thead>
          <tbody>
            {regularServices.map((service, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="px-4 py-3 font-medium">{service.day}</td>
                <td className="px-4 py-3">{service.name}</td>
                <td className="px-4 py-3">{service.time}</td>
                <td className="px-4 py-3">{service.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegularServicesTable;

