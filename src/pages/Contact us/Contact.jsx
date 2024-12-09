import React, { useState} from 'react';
import './Contact.css';
import backgroundImage from './contact3.jpg';
import { Link } from 'react-router-dom';
import AnimatedPage from '../What we do/Animation/AnimatedPage';
import ScaleInElement from '../../components/Transitions/ScaleIn';
import FadeInSection from '../../components/Transitions/Fadein';

const ContactUs = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    
    const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
    return (
      <div className="Main">
        <div className="contact-us7">
            <div className="breadcrumb7">
              <span>Home</span> &gt; <span>Contact us</span>
            </div>
            <div className="content56" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="overlay6">
                    <div className="contact-container2">
                        <div>
                          <AnimatedPage direction= "topToBottom">
                          <h1>Contact us</h1>
                          <p>We’re here to assist you with any query.</p>
                          </AnimatedPage>
                          <AnimatedPage direction= "bottomToTop">
                          <button className="faq-button"> 
                            <a href="https://xchange.gs1.org/sites/faq">Read our FAQs &rarr;</a> 
                          </button>
                          </AnimatedPage>
                        </div> 
                    </div>
                  </div>
                </div>
        <div className="support-info">
        <ScaleInElement>
      <h1>Our support team is available to assist you, regardless of whether you are a member, are considering joining, or simply have a few questions.</h1>
      <p className="availability">
        Our support team is available from <strong>Monday to Friday between 9:30 am and 5:30 pm, and on Saturday between 9:30 am and 1:30 pm. </strong>
      </p>
      </ScaleInElement>
      <ScaleInElement>
      <div className={`support-unavailable ${isExpanded ? 'expanded' : ''}`}>
      
        <h2 onClick={toggleExpand}>
          Need a barcode?
          <span className={`arrow ${isExpanded ? 'up' : 'down'}`}></span>
        </h2>
        {isExpanded && (
          <div className="content1">
            <p>Get your own unique barcodes to improve the visibility of your products and simplify supply chain management.<Link to={`/Getabarcode`}> Click here </Link></p>
            <p>Furthermore, Our website has lots of helpful information, you are free to explore it at <a href="https://gs1-pk.vercel.app/"> GS1 Pakistan</a></p>
            <p>If you haven't found the answer on our website, please drop us an email at <a href="mailto:info@gs1pk.org">info@gs1pk.org</a> and we will answer your query ASAP.</p>
          </div> 
        )}
       
      </div>
      </ScaleInElement> 
      
      </div>
      </div>
      <div className="contact-info">
      <FadeInSection>
      <section className="contact-section">
        <h2>Call us</h2>
        <p>Call our member support team on freephone <a href="tel:021-32215844">021 32215844</a> or <a href="tel:+92-312-0003997">+92 (312) 0003997</a> or <a href="tel:+92-322-2251704">+92 (322) 2251704. </a></p>
      </section>
      </FadeInSection>
      <FadeInSection>
      <section className="contact-section">
        <h2>Email us</h2>
        <p>Email us at <a href="mailto:info@gs1pk.org">info@gs1pk.org</a> and we'll aim to get back to you within 2-3 working days.</p>
      </section>
      </FadeInSection>
      <section className="contact-section">
      <FadeInSection>
        <h2>Address</h2>
        <address>
            Office No.B-2, 2nd Floor, Azzainab Court, Campbell Street, Karachi-74200, Pakistan
        </address>
        </FadeInSection>
        <AnimatedPage direction= "bottomToTop">
        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3092419253417!2d67.00405571016707!3d24.85328564545405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fe2573ecbf9%3A0xf4bd7f20772a0985!2sGS1%20Pakistan!5e0!3m2!1sen!2s!4v1720609960367!5m2!1sen!2s" width="600" height="450" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </AnimatedPage>
      </section> 
    </div>
    </div>
        
    );
};

export default ContactUs;

