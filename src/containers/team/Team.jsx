import React from 'react';
import './resume.css'; 

function Team() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Marcel_Resume.pdf';
    link.download = 'Marcel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-teal-900 text-teal-300 min-h-screen" id="resume" name="resume">
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '20px' }}>
        <p className="text-base md:text-lg max-w-7xl mr-auto text-start section__pandi" style={{ color: "#1CB4AFA6", fontFamily: "Neue Haas Grotesk", fontSize: "18px" }}>
          Feel free to get in touch with me through my <a href="#contact" className="text-teal-300 hover:text-teal-100 underline" style={{ color: "#1CB4AF", fontSize: "20px", fontFamily: "Neue Haas Grotesk Body"}}>contact page</a> and take a look at <a href="#" onClick={handleResumeDownload} className="text-teal-300 hover:text-teal-100 underline" style={{ color: "#1CB4AF", fontSize: '20px', fontFamily: "Neue Haas Grotesk Body" }}>my resume</a>.
        </p>
      </main>
      
      <footer className="mt-36 lg:mt-16">
        <h2 className="text-8xl font-bold opacity-90" style={{ fontSize: "clamp(120px, 16vw, 800px)", lineHeight: "", color: "#1CB4AF1C" }}>Resume</h2>
      </footer>
    </div>
  );
}

export default Team;
