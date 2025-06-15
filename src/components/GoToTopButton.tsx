
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollBehavior } from '../hooks/useScrollBehavior';

const GoToTopButton: React.FC = () => {
  const { showGoToTop } = useScrollBehavior();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showGoToTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`
        fixed bottom-6 right-6 z-40 
        bg-orthodox-blue hover:bg-orthodox-blue/90 
        text-white shadow-lg
        transition-all duration-300 ease-in-out
        ${showGoToTop ? 'animate-fade-in' : 'animate-fade-out'}
      `}
      aria-label="Go to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};

export default GoToTopButton;
