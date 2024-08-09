// import React from 'react';
// import './creatives.css'; 

// const Creatives = () => {
//   return (
//     <div style={{backgroundColor: '#1a2b2b'}} id="contact" name="contact">
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', color: '#ffffff', paddingTop: '4rem ' }}>
//         <div className='p-4' style={{ backgroundColor: '#1a2b2b', color: '#ffffff', width: "800px", position: 'relative' }}>
//           <div className="flex items-center justify-center" style={{ backgroundColor: '#1a2b2b' }}>
//             <div style={{ textAlign: 'center' }}>
//               <h1 style={{ fontSize: "clamp(40px, 16vw, 60px)", marginBottom: '0px', fontWeight: "900", lineHeight: "1.1", fontFamily: "Neue Haas Grotesk", paddingBottom: "30px"}}>
//                 Let's <span style={{ color: '#40e0d0' }}>build</span><br />
//                 together!
//               </h1>
//               <p className='text-base md:text-lg' style={{ color: '#1CB4AFA6', marginBottom: '10px', fontFamily: "Neue Haas Grotesk"}}>
//                 Drop me a note and I'll be sure to get back to you as soon as I can.
//               </p>
//             </div>
//           </div>
          
//           <form >
//             <div style={{ marginBottom: '15px', fontFamily: "Neue Haas Grotesk"}}>
//               <input type="text" placeholder="Name" style={inputStyle} />
//             </div>
//             <div style={{ marginBottom: '15px', fontFamily: "Neue Haas Grotesk"}}>
//               <input type="email" placeholder="Email" style={inputStyle} />
//             </div>
//             <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '15px', fontFamily: "Neue Haas Grotesk" }}>
//               <input type="text" placeholder="Message" style={{...inputStyle, flex: 1}} />
//               <button type="submit" style={buttonStyle}>Send</button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <footer className="mt-16 md:mt-0" style={{position: 'relative', paddingBottom: "0", marginBottom: "0", fontFamily: "Neue Haas Grotesk"}}>
//         <h2 className=" font-bold opacity-30" style={{fontSize: "clamp(120px, 16vw, 800px)", lineHeight: "1.4", color: "#1CB4AF1C"}}>Contact</h2>
//       </footer>
//     </div>
//   );
// };

// const inputStyle = {
//   width: '100%',
//   padding: '30px 30px 30px 0',
//   backgroundColor: 'transparent',
//   border: 'none',
//   borderBottom: '1px solid #40e0d0',
//   color: '#ffffff',
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   color: '#fff',
//   marginLeft: '20px',
//   border: '1px solid #40e0d0',
//   cursor: 'pointer',
//   backgroundColor: 'transparent',
// };

// export default Creatives;








import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './creatives.css'; 

const Creatives = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      process.env.REACT_APP_EMAILJS_USER_ID 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, (err) => {
      console.log('FAILED...', err);
      alert('Failed to send the message. Please try again.');
    });

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{backgroundColor: '#1a2b2b'}} id="contact" name="contact">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', color: '#ffffff', paddingTop: '4rem ' }}>
        <div className='p-4' style={{ backgroundColor: '#1a2b2b', color: '#ffffff', width: "800px", position: 'relative' }}>
          <div className="flex items-center justify-center" style={{ backgroundColor: '#1a2b2b' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '4.5em', marginBottom: '0px', fontWeight: "900", lineHeight: "1", fontFamily: "Neue Haas Grotesk", paddingBottom: "30px"}}>
                Let's <span style={{ color: '#40e0d0' }}>build</span><br />
                together!
              </h1>
              <p className='text-base md:text-lg' style={{ color: '#1CB4AFA6', marginBottom: '10px', fontFamily: "Neue Haas Grotesk"}}>
                Drop me a note and I'll be sure to get back to you as soon as I can.
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px', fontFamily: "Neue Haas Grotesk"}}>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleChange} 
                style={inputStyle} 
                required
              />
            </div>
            <div style={{ marginBottom: '15px', fontFamily: "Neue Haas Grotesk"}}>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                style={inputStyle} 
                required
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '15px', fontFamily: "Neue Haas Grotesk" }}>
              <input 
                type="text" 
                name="message" 
                placeholder="Message" 
                value={formData.message} 
                onChange={handleChange} 
                style={{...inputStyle, flex: 1}} 
                required
              />
              <button type="submit" style={buttonStyle}>Send</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="mt-16 lg:mt-0" style={{position: 'relative', paddingBottom: "0", marginBottom: "0", fontFamily: "Neue Haas Grotesk"}}>
        <h2 className=" font-bold opacity-30" style={{fontSize: "clamp(120px, 16vw, 800px)", lineHeight: "1.4", color: "#1CB4AF1C"}}>Contact</h2>
      </footer>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '30px 30px 30px 0',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid #40e0d0',
  color: '#ffffff',
};

const buttonStyle = {
  padding: '10px 20px',
  color: '#fff',
  marginLeft: '20px',
  border: '1px solid #40e0d0',
  cursor: 'pointer',
  backgroundColor: 'transparent',
};

export default Creatives;
