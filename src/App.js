import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import { Team } from './containers';
import { Navbar, Locations, Connect, Creatives } from './components';

import './App.css';

const handleSponsorRequest = () => {
  console.log('Sponsor request clicked');
};

const handleSpeakerRequest = () => {
  console.log('Speaker request clicked');
};

const handleVolunteerRequest = () => {
  console.log('Volunteer request clicked');
};

const handlePartnerRequest = () => {
  console.log('Partner request clicked');
};

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
    <polyline points="5 12 12 5 19 12"></polyline>
    <line x1="12" y1="19" x2="12" y2="5"></line>
  </svg>
);

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      console.log(`ScrollTop: ${scrollTop}, WindowHeight: ${windowHeight}, DocumentHeight: ${documentHeight}`);
      if (scrollTop > 0.60 * (documentHeight - windowHeight)) {
        setShowButton(true);
      } else {
        setShowButton(false);
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

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Locations />
      <Connect />
      <Team />
      <Creatives />
      <ScrollToTop />
    </div>
  </Router>
);

export default App;
