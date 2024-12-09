import React from 'react';
import './servicesMain.css';
import starting from './Untitled (300 x 400 px).png';
import exporti from './Untitled (300 x 400 px)333.png';
import gro from './Untitled (300 x 400 px)859979.png';
import sca from './b0494ea3-6e5f-46c0-92cb-be51625a7829-min.jpeg';

import GS1Standards from './Gs1Standards/Gs1Standards';
import SlideInElement from '../../components/Transitions/Slidein';
import FadeInSection from '../../components/Transitions/Fadein';
import AnimatedPage from '../What we do/Animation/AnimatedPage';

const ServicesBanner = () => {
  return (
    <div className="gs1-service-page">
      <header className="gs1-banner">
        { <h1 className="gs1-banner-title">Services to streamline your business</h1> }
        <p className="gs1-banner-text">GS1 Standards to create a common foundation for business by uniquely identifying, accurately capturing and automatically sharing vital information about products, locations, assets and more.</p>
      </header>
      {/* <div className='image-div'>      
        <img src={services} alt="Need a barcode?" className="service-image" />
      </div> */}
      {/* <GS1Standards></GS1Standards> */}

      <div className="gs1-service-section">
        <div className="gs1-service-illustration">
       
          <img src={starting} alt="Need a barcode?" className="gs1-service-image" />  
        </div>


        <div className="gs1-service-content">
          <h2 className="gs1-service-heading">Starting out in business:</h2>
          <p className="gs1-service-description">GS1 Pakistan can support you to begin your business journey the right way:</p>
          <ul className="gs1-service-list">
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-barcode"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Barcodes</h3>
                <p className="gs1-service-description">Authentic, globally recognised barcodes</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-productflow"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">ProductFlow</h3>
                <p className="gs1-service-description">Give your product the best chance of success</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-verification"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Barcode Verification</h3>
                <p className="gs1-service-description">Be confident your barcodes will scan</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-photography"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Photography</h3>
                <p className="gs1-service-description">Professional, digital product photography</p>
                </AnimatedPage>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="gs1-service-section">
        <div className="gs1-service-illustration">
       
          <img src={gro} alt="Business growth" className="gs1-service-image" />  
        </div>
        <div className="gs1-service-content">
        <AnimatedPage direction='topToBottom'>
          <h2 className="gs1-service-heading">We've replaced the services with those more relevant to established businesses and growth:</h2>
          <p className="gs1-service-description">GS1 Pakistan growth journey:</p>
          </AnimatedPage>
          <ul className="gs1-service-list">
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-barcode1"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Product Identity: </h3>
                <p className="gs1-service-description">Get a unique code (GTIN) for your products, ensuring clear identification and traceability from the start.</p>
                </AnimatedPage>
              </div>

            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-productflow1"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Supply Chain Efficiency:</h3>
                <p className="gs1-service-description"> Streamline data exchange with partners using standardized formats for smoother information flow.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-verification1"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Scalability & Visibility</h3>
                <p className="gs1-service-description">Gain greater control and visibility across your supply chain as your business grows, thanks to GS1 standards.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-photography1"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Global Reach: </h3>
                <p className="gs1-service-description">Simplify import and export processes with globally recognized identification keys for your products.</p>
                </AnimatedPage>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="gs1-service-section">
        <div className="gs1-service-illustration">
     
          <img src={sca} alt="Scaling up" className="gs1-service-image" />  
        </div>
        <div className="gs1-service-content">
        <AnimatedPage direction='topToBottom'>
          <h2 className="gs1-service-heading">Scaling Up Your Business to the next level:</h2>
          <p className="gs1-service-description">GS1 Pakistan can propel your growth journey to the next level:</p>
          </AnimatedPage>
          <ul className="gs1-service-list">
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-barcode2"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Unlock Product Power:</h3>
                <p className="gs1-service-description">Assign unique GTINs to your products, ensuring clear identification and traceability from the start.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-productflow2"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Streamline Your Supply Chain:</h3>
                <p className="gs1-service-description"> Standardize data exchange with partners for seamless information flow, optimizing efficiency.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-verification2"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Scale Up with Confidence: </h3>
                <p className="gs1-service-description"> Gain greater control and visibility across your growing supply chain as you scale your business.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-photography2"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Go Global with Ease:</h3>
                <p className="gs1-service-description">Simplify international trade with globally recognized identification keys for your products, facilitating import and export.</p>
                </AnimatedPage>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="gs1-service-section">
        <div className="gs1-service-illustration">
        
          <img src={exporti} alt="Import and Export" className="gs1-service-image" />  
        </div>
        <div className="gs1-service-content">
        <AnimatedPage direction='topToBottom'>
          <h2 className="gs1-service-heading">Help in Import and Export:</h2>
          <p className="gs1-service-description">GS1 Pakistan can support you to begin your business journey the right way:</p>
          </AnimatedPage>
          <ul className="gs1-service-list">
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-barcode3"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Speak the Global Language</h3>
                <p className="gs1-service-description"> Assign unique GTINs to your products, acting as a universal identifier recognized by customs authorities everywhere.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-productflow3"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Seamless International Transactions:</h3>
                <p className="gs1-service-description">Standardize data exchange with international partners, ensuring smooth sailing for imports and exports.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-verification3"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Enhanced Visibility Across Borders: </h3>
                <p className="gs1-service-description">Gain greater control and track your goods with precision throughout the global supply chain.</p>
                </AnimatedPage>
              </div>
            </li>
            <li className="gs1-service-item">
              <span className="gs1-service-icon gs1-icon-photography3"></span>
              <div className="gs1-service-details">
              <AnimatedPage direction='topToBottom'>
                <h3 className="gs1-service-title">Effortless Compliance, Everywhere: </h3>
                <p className="gs1-service-description">Simplify compliance with international trade regulations by leveraging the power of globally recognized GS1 identification.</p>
                </AnimatedPage>
              </div>
            </li>
          </ul>
        </div>
      </div>
        </div>
  );
};

export default ServicesBanner;



