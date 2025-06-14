
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface MonthHeaderProps {
  monthYear: string;
}

const MonthHeader: React.FC<MonthHeaderProps> = ({ monthYear }) => {
  return (
    <div className="bg-gradient-to-r from-orthodox-blue to-orthodox-blue/80 text-white rounded-lg px-6 py-4 mb-6 shadow-lg border-l-4 border-orthodox-gold">
      <h3 className="text-2xl font-serif font-bold flex items-center justify-center text-white">
        <CalendarIcon size={24} className="mr-3 text-orthodox-gold" />
        <span className="text-white">{monthYear}</span>
      </h3>
    </div>
  );
};

export default MonthHeader;
