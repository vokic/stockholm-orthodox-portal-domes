
import { useState, useEffect } from 'react';

export const useScrollBehavior = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show go-to-top button after scrolling 300px
      setShowGoToTop(currentScrollY > 300);
      
      // Auto-hide navbar logic
      if (currentScrollY < 50) {
        // Always show navbar at top
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar when scrolling down (after 100px)
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // Show navbar when scrolling up
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  return { showGoToTop, showNavbar };
};
