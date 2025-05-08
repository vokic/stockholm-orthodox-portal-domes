
import React from 'react';

interface SerbianCrossProps {
  className?: string;
  size?: number;
}

const SerbianCross: React.FC<SerbianCrossProps> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Main cross */}
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
      
      {/* C and small c's representing the Serbian four C's */}
      <path d="M7 7C7 6.44772 7.44772 6 8 6H9C9.55228 6 10 6.44772 10 7V8C10 8.55228 9.55228 9 9 9H8C7.44772 9 7 8.55228 7 8V7Z" />
      <path d="M14 7C14 6.44772 14.44772 6 15 6H16C16.55228 6 17 6.44772 17 7V8C17 8.55228 16.55228 9 16 9H15C14.44772 9 14 8.55228 14 8V7Z" />
      <path d="M7 15C7 14.4477 7.44772 14 8 14H9C9.55228 14 10 14.4477 10 15V16C10 16.5523 9.55228 17 9 17H8C7.44772 17 7 16.5523 7 16V15Z" />
      <path d="M14 15C14 14.4477 14.44772 14 15 14H16C16.55228 14 17 14.4477 17 15V16C17 16.5523 16.55228 17 16 17H15C14.44772 17 14 16.5523 14 16V15Z" />
    </svg>
  );
};

export default SerbianCross;
