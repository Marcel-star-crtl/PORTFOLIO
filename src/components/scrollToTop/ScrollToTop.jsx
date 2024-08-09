import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ArrowUpIcon = () => (
  <svg
    className="arrow-up-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="5 12 12 5 19 12" transform="rotate(90 12 12)"></polyline>
    <line x1="12" y1="19" x2="12" y2="5" transform="rotate(90 12 12)"></line>
  </svg>
);

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 300; 
  
      console.log('Scroll position:', scrollTop);
  
      if (scrollTop > threshold) {
        setShowButton(true);
        console.log('Show button');
      } else {
        setShowButton(false);
        console.log('Hide button');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <div className="back-to-top" onClick={scrollToTop}>
          <ArrowUpIcon />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
