import React from 'react';
import './About.css';
import backgroundImage from './about1.jpg'; 
import ceoImage from './ceo.jpeg'; 
import AnimatedPage from './Animation/AnimatedPage';
import ZoomInSection from '../../components/Transitions/ZoomIn/ZoomIn';
import ScaleInElement from '../../components/Transitions/ScaleIn';


const AboutUs = () => {
  return (
    <div classname= 'main'> 
    <div className="about-us-container" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="overlay1"></div>
      <div className="content-wrapper">
        <ZoomInSection>
        <h1>About us</h1>
        <h2>Standards and solutions for your business success</h2>
        </ZoomInSection>
      </div>
    </div>
    
    <div className="common-language-container">
      <AnimatedPage direction='topToBottom'>
      <h2 className="title">Helping you do business</h2>
      </AnimatedPage>
      <AnimatedPage direction='topToBottom'>
      <p className="description">
        GS1 Pakistan is part of the GS1 organisation, which is present in over 116 countries 
        worldwide. GS1 is a neutral, not-for-profit organisation that develops and maintains the most widely used global standards for efficient business communication. We are best known for the barcode, named by the BBC as one of “the 50 things that made the world economy”. GS1 standards improve the efficiency, safety and visibility of supply chains across physical and digital channels in 25 sectors. Our scale and reach – local Member Organisations in 112 countries, 1.5 million user companies and 6 billion transactions every day – help ensure that GS1 standards create a common language that supports systems and processes across the globe.
      </p>
      </AnimatedPage> 
    </div>
    
    <div className='bullet container'>
        <div>
        <ScaleInElement>
        <h2 className="title1"> You'll know the barcode </h2>
        <p className="description1">
          It's our most recognisable standard. But from retail and transport to healthcare and 
          financial services, we create standards for a wide range of areas</p>
          </ScaleInElement>
        </div>
        <div>
        <ScaleInElement>
        <h2 className="title1"> Building standards for you </h2>
        <p className="description1">
          We're driven by the interests of our members. No matter what size your organisation, 
          join us to play a role in defining standards that work for you.</p>
          </ScaleInElement>
        </div>
        <div>
        <ScaleInElement>
        <h2 className="title1"> Experience you can trust </h2>
        <p className="description1">
          Our roots go back to the first barcode, created in 1973. Today, we're the world's leader 
          in creating, implementing and maintaining useful business standards.</p>
          </ScaleInElement>
        </div>
    </div>
    <AnimatedPage direction='topToBottom'>
    <div className="ceo-quote-container">
      <div className="ceo-image-container">
        <img src={ceoImage} alt="Jörg Mathis, CEO of GS1 Switzerland" className="ceo-image" />
      </div>
      <div className="quote-content">
        <div className="quote-marks">"</div>
        <p className="quote-text">
          «At GS1 Pakistan, we empower businesses with global standards for seamless and efficient business operations.»
        </p>
        <p className="quote-author">Hoosamuddin S. Bandukwala, CEO of GS1 Pakistan</p>
      </div>
    </div>
    </AnimatedPage>
    <AnimatedPage direction='bottomToTop'>
    <div className="gs1-container">
      <div className="gs1-card">
        <h2 className="gs1-heading">Global reach, local presence</h2>
        <p className="gs1-content">
        You’ll find our local offices in over 100 countries, including Pakistan. Together with our headquarters in Brussels, our presence in so many countries make us a truly global organisation. The Pakistan office should be your first point of contact for any questions.
        </p>
      </div>
    </div>
    </AnimatedPage>
    <div className="success-keys-container">
     <ScaleInElement>
      <h1 className="success-keys-heading">The keys to our success</h1> </ScaleInElement>
      <div className="success-keys-grid">
      <AnimatedPage direction='topToBottom'>
        <div className="success-key">
          <div className="icon-circle">
            <i className="fas fa-hands-holding"></i>
          </div>
          <p>Neutral and not for profit</p>
        </div>
        </AnimatedPage>
        <AnimatedPage direction='bottomToTop'>
        <div className="success-key">
          <div className="icon-circle">
            <i className="fas fa-handshake"></i>
          </div>
          <p>With the members for the members</p>
        </div>
        </AnimatedPage>
        <AnimatedPage direction='topToBottom'>
        <div className="success-key">
          <div className="icon-circle">
            <i className="fas fa-globe"></i>
          </div>
          <p>Global & local</p>
        </div>
        </AnimatedPage>
        <AnimatedPage direction='bottomToTop'>
        <div className="success-key">
          <div className="icon-circle">
            <i className="fas fa-cog"></i>
          </div>
          <p>Integrative & collaborative</p>
        </div>
        </AnimatedPage>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;