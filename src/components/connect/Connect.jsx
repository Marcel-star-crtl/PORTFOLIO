// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import './projects.css'

// const Connect = () => {
//   return (
//     <div className='min-h-screen' style={{ backgroundColor: '#1a2b2b' }} id="work" name="work">
//       <div className="bg-teal-900 flex flex-col justify-center items-center relative md:py-12 pt-4" style={{ minHeight: '80vh' }}>
//         <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center">
//           <div
//             className="project w-full px-4 md:px-0 md:border-b md:border-white "
//             style={{
//               maxWidth: "600px",
//               overflowY: "scroll",
//               msOverflowStyle: "none",
//               scrollbarWidth: "none",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <style jsx>{`
//               div::-webkit-scrollbar {
//                 display: none;
//               }
//             `}</style>
//             <div
//               className="text-teal-400 text-4xl md:text-6xl lg:text-8xl font-bold space-y-4 md:text-center"
//               style={{ lineHeight: "1.2", fontFamily: "Neue Haas Grotesk" }}
//             >
//               {['Push', 'Ulevus', 'Creative Evt', 'LGV Gas', 'GSA'].map((project, index) => (
//                 <Link
//                   key={index}
//                   to={`https://${project.toLowerCase().replace(' ', '')}.com/`}
//                   className="hover:text-teal-300 transition-transform duration-300 block"
//                   style={{
//                     color: "#1CB4AFA6",
//                     fontFamily: "Neue Haas Grotesk",
//                     transformOrigin: "center",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//                   onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                 >
//                   {project}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2">
//           <div className="flex flex-col space-y-1">
//             {[...Array(4)].map((_, index) => (
//               <div key={index} className="text-teal-400">
//                 <FontAwesomeIcon icon={faArrowUp} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <footer className="mt-4 lg:mt-0" style={{position: 'relative'}}>
//         <h2 className="font-bold opacity-30" style={{fontSize: "clamp(130px, 18vw, 1000px)", lineHeight: ".8", color: "#1CB4AF1C", paddingBottom: "30px"}}>Projects</h2>
//       </footer>
//     </div>
//   );
// };

// export default Connect;









import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './projects.css'

const Connect = () => {
  const projects = [
    { displayName: 'Push', domain: 'https://pushevt.com/' },
    { displayName: 'Ulevus', domain: 'https://ulevus.com/' },
    // { displayName: 'Creative Evt', domain: 'https://creatives.ulevus.com/' },
    { displayName: 'LGV Gas', domain: 'https://gas-project-uq5q.vercel.app/' },
    { displayName: 'Creatives', domain: 'https://creatives-alpha.vercel.app//' },
    { displayName: 'Annies', domain: 'https://store-psl2.vercel.app/' },
    { displayName: 'GSA', domain: 'https://greenspaceacademy.org/' },
    // { displayName: 'Annies', domain: 'https://store-psl2.vercel.app/' },
    // { displayName: 'Annies', domain: 'https://store-psl2.vercel.app/' },
  ];

  return (
    <div className='min-h-screen' style={{ backgroundColor: '#1a2b2b' }} id="work" name="work">
      <div className="bg-teal-900 flex flex-col justify-center items-center relative md:py-12 pt-4" style={{ minHeight: '80vh' }}>
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center">
          <div
            className="project w-full px-4 md:px-0 md:border-b md:border-white "
            style={{
              maxWidth: "600px",
              overflowY: "scroll",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div
              className="text-teal-400 text-4xl md:text-6xl lg:text-8xl font-bold space-y-4 md:text-center"
              style={{ lineHeight: "1.2", fontFamily: "Neue Haas Grotesk" }}
            >
              {projects.map((project, index) => (
                <Link
                  key={index}
                  to={project.domain}
                  className="hover:text-teal-300 transition-transform duration-300 block"
                  style={{
                    color: "#1CB4AFA6",
                    fontFamily: "Neue Haas Grotesk",
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {project.displayName}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-1">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-teal-400">
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-4 lg:mt-0" style={{position: 'relative'}}>
        <h2 className="font-bold opacity-30" style={{fontSize: "clamp(130px, 18vw, 1000px)", lineHeight: ".8", color: "#1CB4AF1C", paddingBottom: "30px"}}>Projects</h2>
      </footer>
    </div>
  );
};

export default Connect;
