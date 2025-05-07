
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PriestMessage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
        Our Priests
      </h3>
      
      {/* First Priest */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/4 flex flex-col items-center mb-4 md:mb-0">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt="Father Nicholas" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-center">Father Nicholas Petrovic</p>
        </div>
        
        <div className="md:w-3/4">
          <p className="mb-4 italic">
            "Dear brothers and sisters in Christ,
          </p>
          <p className="mb-4">
            It is with joy that I welcome you to our parish website. Our church is a spiritual home for Orthodox Christians in Stockholm, where we gather to worship God and support each other on our spiritual journey.
          </p>
          <p className="mb-4">
            Whether you are a long-time member, a visitor, or someone curious about Orthodox Christianity, we invite you to join us for our services and community events.
          </p>
          <p>
            May God bless you and your families.
          </p>
          <p className="mt-4 text-right font-serif italic">- Father Nicholas</p>
        </div>
      </div>
      
      {/* Second Priest */}
      <div className="flex flex-col md:flex-row gap-6 border-t border-gray-200 pt-8">
        <div className="md:w-1/4 flex flex-col items-center mb-4 md:mb-0">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
            <img 
              src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
              alt="Father Alexander" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-center">Father Alexander Ivanovic</p>
        </div>
        
        <div className="md:w-3/4">
          <p className="mb-4 italic">
            "Beloved faithful,
          </p>
          <p className="mb-4">
            I am grateful to serve the Orthodox community in Stockholm alongside Father Nicholas. As we journey together in faith, I encourage you to participate fully in the life of our parish.
          </p>
          <p className="mb-4">
            Our church offers not only worship services but also educational programs, pastoral care, and community outreach. Please feel free to approach me with questions about our faith or spiritual guidance.
          </p>
          <p>
            Christ's peace be with you all.
          </p>
          <p className="mt-4 text-right font-serif italic">- Father Alexander</p>
        </div>
      </div>
    </div>
  );
};

export default PriestMessage;
