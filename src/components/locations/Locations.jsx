import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll'; 

function Locations() {
  const { t } = useTranslation();

  return (
    
    <div className="bg-teal-900 text-teal-300 min-h-screen" id="about">
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '40px 20px 20px 20px' }}>
        <p className="text-base md:text-lg mx-auto section__pandi" style={{color: "#1CB4AFA6",  fontFamily: "Neue Haas Grotesk"}}>
          The transformation of a small business website from outdated to modern and user-friendly became a defining moment in my career. Witnessing the impact of merging design and code to create a stunning, user-friendly platform ignited a passion for web development that burns brightly to this day. Since then, my greatest joy lies in translating abstract ideas into interactive experiences that captivate users However, a beautiful website is just one piece of the puzzle. <br/><br/> My philosophy emphasizes a seamless blend of aesthetics and functionality. Websites and mobile should not only be visually appealing, but also perform flawlessly and cater to user needs. To achieve this balance, I collaborate closely with designers. I weave technical solutions seamlessly into the design fabric, ensuring a smooth and impactful user journey. This philosophy of prioritizing beauty and functionality is a cornerstone of every project I undertake.
        </p>
      </main>
      
      <footer className="mt-16">
        <h2 className="text-8xl font-bold opacity-90" style={{fontSize: "clamp(120px, 16vw, 800px)", lineHeight: "", color: "#1CB4AF1C"}}>AboutMe</h2>
      </footer>
    </div>
  );
}

export default Locations;
