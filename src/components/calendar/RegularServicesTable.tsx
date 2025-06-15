
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
  // You can update this date when the services schedule changes
  const lastUpdated = '2024-06-15';

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif">Regular Services</h2>
        <span className="text-sm text-gray-600">
          Updated on: {new Date(lastUpdated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 text-white rounded-lg border-l-4 border-orthodox-gold">
              <th className="px-6 py-4 text-left font-bold text-lg font-serif rounded-l-lg">Day</th>
              <th className="px-6 py-4 text-left font-bold text-lg font-serif">Service</th>
              <th className="px-6 py-4 text-left font-bold text-lg font-serif">Time</th>
              <th className="px-6 py-4 text-left font-bold text-lg font-serif rounded-r-lg">Description</th>
            </tr>
          </thead>
          <tbody>
            {regularServices.map((service, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="px-6 py-3 font-medium">{service.day}</td>
                <td className="px-6 py-3">{service.name}</td>
                <td className="px-6 py-3">{service.time}</td>
                <td className="px-6 py-3">{service.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegularServicesTable;
