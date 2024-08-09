import React, { useState } from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import md5 from 'md5';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const { i18n, t } = useTranslation();
  const [errorPopup, setErrorPopup] = useState(false); // State for error popup

  // Form validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t('invalidEmail')).required(t('emailRequired')),
  });

  // useForm hook from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Function to add subscriber to Mailchimp list
  const addSubscriberToMailchimp = async (email) => {
    try {
      const subscriberHash = md5(email);

      // Replace with your actual Mailchimp API key and list ID
      const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY;
      const listId = "YOUR_MAILCHIMP_LIST_ID";
      const proxyUrl = 'https://ulevusproxy-623eb395a8bb.herokuapp.com/';
      const endpoint = `${proxyUrl}https://us12.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

      // Make PUT request to Mailchimp API
      const response = await axios.put(
        endpoint,
        {
          email_address: email,
          status: "pending",
          tags: ["Your Newsletter Tag"], 
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `apikey ${apiKey}`,
          },
        }
      );

      console.log('Subscription successful. Mailchimp response:', response.data);
      return response;
    } catch (error) {
      console.error('Error subscribing to Mailchimp:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  // Function to handle form submission
  const handleSubscribe = async (data) => {
    if (!data.email) {
      return;
    }

    try {
      // Add the subscriber to Mailchimp
      await addSubscriberToMailchimp(data.email);

      // Reset the form after successful submission
      reset();

      console.log('Subscription successful');
      alert(t('subscriptionSuccess'));
    } catch (error) {
      console.error('Error subscribing:', error);
      setErrorPopup(true); // Show error popup
    }
  };

  // Function to close the error popup
  const closeErrorPopup = () => {
    setErrorPopup(false);
  };

  // Toggle between English and French
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-links">
          
        {/* Newsletter Subscription Form */}
        <div className="newsletter-form">
          <p style={{ fontFamily: "Montserrat", fontSize: "12px", fontWeight: "400" }}>{t('mailingList')}</p>
          <form onSubmit={handleSubmit(handleSubscribe)} className="subscribe-form">
            <div style={{ display: 'flex' }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('emailPlaceholder')}
                style={{ 
                  backgroundColor: 'rgba(30, 30, 30, 1)',  
                  border: '1px solid #888', 
                  paddingLeft: "30px", 
                  paddingRight: "30px", 
                  paddingTop: "15px", 
                  paddingBottom: "15px",
                  marginTop: "15px",
                  color: "#888",
                  fontFamily: "Rajdhani",
                  fontSize: "18px",
                  flex: '1', 
                }}
                {...register('email')}
              />
              <button type="submit" disabled={isSubmitting} className="subscribe-button">
                {/* Replace text with right arrow icon */}
                <FaArrowRight style={{ marginLeft: '10px', fontSize: '18px' }} />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className="gpt3__footer-links_div gpt3__footer-links_div--contact" style={{ fontFamily: "Rajdhani", fontSize: "24px", fontWeight: "400" }}>
          <p><a href="#about">{t('aboutUs')}</a></p>
          <p><a href="#contact">{t('contactUs')}</a></p>
          <p><a href="#speakers">{t('speakers')}</a></p>
          <p><a href="#sessions">{t('sessions')}</a></p>
        </div>
      </div>

      {/* Error popup */}
      {errorPopup && (
        <div className="error-popup">
          <p>{t('subscriptionError')}</p>
          <button onClick={closeErrorPopup}>{t('close')}</button>
        </div>
      )}
    </div>
  );
};

export default Footer;












// import React from 'react';
// import './footer.css';
// import { useTranslation } from 'react-i18next';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// const Footer = () => {
//   const { i18n, t } = useTranslation();

//   // useForm hook from react-hook-form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors: formErrors, isSubmitting },
//     reset,
//   } = useForm();

//   // Function to add subscriber to GetResponse list
//   const addSubscriberToGetResponse = async (email) => {
//     try {
//       const apiKey = process.env.REACT_APP_GETRESPONSE_API_KEY;
//       const campaignId = "YOUR_GETRESPONSE_CAMPAIGN_ID";
//       const endpoint = `https://api.getresponse.com/v3/contacts`;

//       // Make POST request to GetResponse API
//       const response = await axios.post(
//         endpoint,
//         {
//           email,
//           campaign: { campaignId },
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'X-Auth-Token': `api-key ${apiKey}`,
//           },
//         }
//       );

//       console.log('Subscription successful. GetResponse response:', response.data);
//       return response;
//     } catch (error) {
//       console.error('Error subscribing to GetResponse:', error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };

//   // Function to handle form submission
//   const handleSubscribe = async (data) => {
//     if (!data.email) {
//       return;
//     }

//     try {
//       await addSubscriberToGetResponse(data.email);

//       reset();

//       console.log('Subscription successful');
//       alert(t('subscriptionSuccess'));
//     } catch (error) {
//       console.error('Error subscribing:', error);
//       alert(t('subscriptionError'));
//     }
//   };

//   // Toggle between English and French
//   const toggleLanguage = () => {
//     i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
//   };

//    // Function to scroll to Tickets section
//   const scrollToTickets = () => {
//     document.getElementById('sessions').scrollIntoView({ behavior: 'smooth' });
//   };

//   const scrollToAboutUs = () => {
//     document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
//   };
//   const scrollToContactUs = () => {
//     document.getElementById('sessions').scrollIntoView({ behavior: 'smooth' });
//   };
//   const scrollToSpeakers = () => {
//     document.getElementById('speakers').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="gpt3__footer">
//       <div className="gpt3__footer-links">
          
//         {/* Newsletter Subscription Form */}
//         <div className="newsletter-form">
//           <p style={{ fontFamily: "Montserrat", fontSize: "12px", fontWeight: "400" }}>{t('mailingList')}</p>
//           <form onSubmit={handleSubmit(handleSubscribe)} className="subscribe-form">
//             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' , marginLeft: "0"}}>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder={t('emailPlaceholder')}
//                 style={{ 
//                   backgroundColor: 'rgba(30, 30, 30, 1)',  
//                   border: '1px solid #888', 
//                   paddingLeft: "30px", 
//                   paddingRight: "30px", 
//                   paddingTop: "10px", 
//                   paddingBottom: "10px",
//                   marginTop: "0",
//                   color: "#888",
//                   fontFamily: "Rajdhani",
//                   fontSize: "18px",
//                   width: "400px" 
//                 }}
//                 {...register('email')}
//               />
//               {formErrors.email && <p className="error-message">{formErrors.email.message}</p>}
//               <button type="submit" disabled={isSubmitting} style={{ marginTop: '10px', width: '400px' }}>
//                 {isSubmitting ? t('subscribing') : t('subscribe')}
//               </button>
//             </div>
//           </form>

//         </div>

//         {/* Footer Links */}
//         <div className="gpt3__footer-links_div gpt3__footer-links_div--contact" style={{ fontFamily: "Rajdhani", fontSize: "24px", fontWeight: "400" }}>
//           <p>{t('contactUs')}</p>
//           <p id="about" onClick={scrollToAboutUs} style={{cursor: 'pointer'}}>{t('aboutUs')}</p>
//           <p id="speakers" onClick={scrollToSpeakers} style={{cursor: 'pointer'}}>{t('speakers')}</p>
//           <p id="sessions" onClick={scrollToTickets} style={{cursor: 'pointer'}}>{t('sessions')}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
