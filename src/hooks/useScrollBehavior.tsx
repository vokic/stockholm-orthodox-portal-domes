
import { useState, useEffect, useRef } from 'react';

export const useScrollBehavior = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show go-to-top button after scrolling 300px
      setShowGoToTop(currentScrollY > 300);
      
      // Auto-hide navbar logic
      if (currentScrollY < 50) {
        // Always show navbar at top
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        // Hide navbar when scrolling down (after 100px)
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollYRef.current) {
        // Show navbar when scrolling up
        setShowNavbar(true);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    // Use requestAnimationFrame for better performance
    let rafId: number;
    const throttledHandleScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []); // Empty dependency array

  return { showGoToTop, showNavbar };
};
