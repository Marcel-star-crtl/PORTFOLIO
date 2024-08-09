import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png'; 
import Arrow from '../../assets/Arrow.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ href, children }) => (
    <>
      <span className="text-teal-300 hidden md:inline">&lt;/&gt;</span>
      <a
        href={href}
        className="block md:inline-block py-2 px-4 md:px-0 md:py-0 text-teal-300 hover:text-teal-100 hover:font-bold cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          transition: "transform 0.3s ease",
          display: "inline-block",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </a>
    </>
  );

  return (
    <header className="bg-teal-900 shadow-md" style={{ fontFamily: "Abril" }}>
      <div className="mx-auto px-4 sm:px-4 lg:px-16">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl md:text-4xl font-bold text-teal-300">
            <img src={logo} alt="Logo" className="h-8 md:h-12" /> 
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-teal-300 hover:text-teal-100 focus:outline-none">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex md:space-x-6" style={{ color: "#1CB4AF", fontFamily: "Ubuntu Mono" }}>
            <NavLink href="#about">About me</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-left md:pl-4 pl-2" style={{ fontFamily: "Ubuntu Mono" }}>
          <NavLink href="#about">About me</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#resume">Resume</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

const Navbar = () => {
  return (
    <div className="bg-teal-900 text-teal-300 min-h-screen" style={{ backgroundColor: '#1a2b2b', color: "#1CB4AF" }} id="hello" name="hello">
      <Header />
      
      <main className="main-text px-4 md:px-28" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', flexGrow: 1, minHeight: '60vh', lineHeight: "1", textAlign: 'left'}}>
        <h1 className="masterr text-3xl md:text-5xl mb-4" style={{ fontFamily: "Neue Haas Grotesk" }}>Marcel Yiosimbom</h1>
        <p className="text-base md:text-lg mb-8" style={{ color: "#1CB4AFA6", fontFamily: "Neue Haas Grotesk" }}>
          I am a dedicated Full Stack Developer with extensive experience in building and maintaining dynamic web applications.
          Proficient in both front-end and back-end technologies, I specialize in creating seamless user experiences and robust
          server-side functionality.
        </p>
        <a href="#work" className="inline-block py-2 rounded hover:bg-teal-800 transition-colors text-base md:text-xl flex items-center" style={{ color: "#1CB4AF", fontWeight: "600", fontFamily: "Neue Haas Grotesk" }}>
          See Projects
          <img src={Arrow} alt="arrow" className="ml-4 w-4 h-4 md:w-4 md:h-4" />
        </a>
      </main>

      {/* <footer className="mt-16 lg:mt-0" style={{ position: 'relative' }}>
        <h2 className="font-bold opacity-30" style={{ fontSize: "clamp(130px, 18vw, 1000px)", lineHeight: ".8", color: "#1CB4AF1C", paddingBottom: "30px" }}>Hello!</h2>
        <div style={{ position: 'absolute', bottom: '60px', left: '100px', display: 'flex', gap: '20px', fontSize: "30px", color: "#1CB4AF" }}>
          <div>
            <span style={{ color: "#1CB4AF" }}> 
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </div>
          <div>
            <span style={{ color: "#1CB4AF" }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </div>
          <div>
            <span style={{ color: "#1CB4AF" }}>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </div>
          <div>
            <span style={{ color: "#1CB4AF" }}>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </div>
        </div>
      </footer> */}

      <footer className="mt-16 lg:mt-0" style={{ position: 'relative' }}>
        <h2 className="font-bold opacity-30" style={{ fontSize: "clamp(130px, 18vw, 1000px)", lineHeight: ".8", color: "#1CB4AF1C", paddingBottom: "30px" }}>Hello!</h2>
        <div style={{ position: 'absolute', bottom: '60px', left: '100px', display: 'flex', gap: '20px', fontSize: "30px", color: "#1CB4AF" }}>
          <a href="https://x.com/Marcel81776974?t=MSZg1H7uwRGIwfwbyAv8aQ&s=09" target="_blank" rel="noopener noreferrer" style={{ color: "#1CB4AF" }}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/marcel-ngong-bab585190" target="_blank" rel="noopener noreferrer" style={{ color: "#1CB4AF" }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/marcel_ny?igsh=MXB5MmY1aTEwbWV2Nw==" target="_blank" rel="noopener noreferrer" style={{ color: "#1CB4AF" }}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/Marcel-star-crtl" target="_blank" rel="noopener noreferrer" style={{ color: "#1CB4AF" }}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
