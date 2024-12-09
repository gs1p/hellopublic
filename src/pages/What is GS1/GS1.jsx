import React from 'react';
import './GS1.css';
import backgroundImage from './GS1.png';
import AnimatedPage from '../What we do/Animation/AnimatedPage';
import FadeInSection from '../../components/Transitions/Fadein';

const GlobalSettingsIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    {/* Globe */}
    <circle cx="45" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
    <path d="M15 30 Q45 10 75 30" fill="none" stroke="currentColor" strokeWidth="6" />
    <path d="M15 70 Q45 90 75 70" fill="none" stroke="currentColor" strokeWidth="6" />
    <line x1="5" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="6" />
    <line x1="45" y1="10" x2="45" y2="90" stroke="currentColor" strokeWidth="6" />

    {/* Gear */}
    <path d="M85 50 L85 45 L90 40 L95 45 L95 55 L90 60 L85 55 Z" fill="currentColor" />
    <path d="M75 60 L75 55 L80 50 L85 55 L85 65 L80 70 L75 65 Z" fill="currentColor" />
    <path d="M75 40 L75 35 L80 30 L85 35 L85 45 L80 50 L75 45 Z" fill="currentColor" />
    <circle cx="80" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);
const SupplyChainIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    {/* Circular arrows */}
    <path d="M 50 10 A 40 40 0 1 1 10 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M 90 50 A 40 40 0 1 1 50 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>

    {/* Truck */}
    <path d="M 40 10 h 20 v 10 h 10 v 10 h -30 z" fill="currentColor"/>
    <circle cx="45" cy="30" r="3" fill="currentColor"/>
    <circle cx="65" cy="30" r="3" fill="currentColor"/>

    {/* Gear */}
    <circle cx="90" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="4"/>
    <path d="M 90 38 v 4 M 90 58 v 4 M 78 50 h 4 M 98 50 h 4 M 81 41 l 3 3 M 96 56 l 3 3 M 96 41 l -3 3 M 81 56 l -3 3" stroke="currentColor" strokeWidth="2"/>

    {/* Person */}
    <circle cx="50" cy="85" r="5" fill="currentColor"/>
    <path d="M 50 90 v 10 M 45 95 h 10 M 45 100 h 10" stroke="currentColor" strokeWidth="2"/>

    {/* Factory */}
    <path d="M 5 50 h 15 v -10 h 5 v 10 h 5 v -15 h 5 v 15 h 5 v -10 h 5 v 10 h 5 v -20 h -45 z" fill="currentColor"/>
  </svg>
)
const ChecklistIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    {/* Clipboard base */}
    <rect x="20" y="15" width="60" height="80" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="4"/>
    
    {/* Clipboard top */}
    <path d="M35 15 V5 H65 V15" fill="none" stroke="currentColor" strokeWidth="4"/>
    
    {/* Checklist lines */}
    <line x1="30" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="3"/>
    <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="3"/>
    <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="3"/>
    <line x1="30" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="3"/>
    
    {/* Checkmark circle */}
    <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="4"/>
    
    {/* Checkmark */}
    <path d="M65 75 L72 82 L85 69" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ShieldCheckIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    {/* Background circle */}
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="5" />
    
    {/* Shield outline */}
    <path d="M50 20 L25 30 V55 C25 70 50 80 50 80 C50 80 75 70 75 55 V30 L50 20Z" 
          fill="none" stroke="currentColor" strokeWidth="6" />
    
    {/* Checkmark */}
    <path d="M35 50 L45 60 L65 40" 
          fill="none" stroke="currentColor" strokeWidth="6" 
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SupportPersonIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    <path d="M50 20 A15 15 0 0 1 50 50 A15 15 0 0 1 50 20" fill="none" stroke="currentColor" strokeWidth="6" />
    <path d="M35 45 Q50 60 65 45" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M10 70 Q25 50 50 70 Q75 50 90 70" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M10 70 L10 85 Q30 70 50 85 Q70 70 90 85 L90 70" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const TargetIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" />
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="4" fill="none" />
    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <line x1="70" y1="30" x2="80" y2="20" stroke="currentColor" strokeWidth="4" />
    <line x1="80" y1="20" x2="90" y2="30" stroke="currentColor" strokeWidth="4" />
    <line x1="65" y1="35" x2="90" y2="10" stroke="currentColor" strokeWidth="4" />
    <line x1="50" y1="50" x2="65" y2="35" stroke="currentColor" strokeWidth="4" />
  </svg>
);


const EyeMagnifyIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 60">
    <path d="M5 30 Q50 0 95 30 Q50 60 5 30" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="50" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="50" cy="30" r="10" fill="currentColor" />
    <line x1="65" y1="40" x2="85" y2="55" stroke="currentColor" strokeWidth="6" />
    <circle cx="85" cy="55" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const ExpandIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" stroke="currentColor" strokeWidth="4" fill="none" />
    <rect x="50" y="50" width="40" height="40" stroke="currentColor" strokeWidth="4" fill="none" />
    <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="4" />
    <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="4" />
    <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const BarcodeIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" />
    <line x1="20" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="4" />
    <line x1="30" y1="20" x2="30" y2="80" stroke="currentColor" strokeWidth="4" />
    <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" strokeWidth="4" />
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="4" />
    <line x1="60" y1="20" x2="60" y2="80" stroke="currentColor" strokeWidth="4" />
    <line x1="70" y1="20" x2="70" y2="80" stroke="currentColor" strokeWidth="4" />
    <line x1="80" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
    <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="currentColor" strokeWidth="4" />
    <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="4" />
    <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const DollarIcon = () => (
  <svg className="icon-bar" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5" />
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="5" />
    <path d="M65 35 C65 25, 35 25, 35 40 C35 55, 65 50, 65 65 C65 80, 35 80, 35 70" fill="none" stroke="currentColor" strokeWidth="5" />
  </svg>
);
const GS1 = () => {
    return (
    <div classname= 'main'> 
      <div className="GS1-container" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="lay2"></div>
        <div className="content-GS1">
          <AnimatedPage direction="topToBottom">
          <h1>GS1</h1>
          </AnimatedPage>
          <AnimatedPage direction="bottomToTop">
          <h2>Connecting Products, Connecting People</h2>
          </AnimatedPage>
        </div>
      </div>
      <div className="Why">
        <AnimatedPage direction="topToBottom">
        <h1>Why GS1?</h1>
        </AnimatedPage>
      </div>
    
      <div className="info-container">
      <FadeInSection>
      <div className="info-item1">
          <div className="icon-wrapper9">
            <GlobalSettingsIcon />
          </div>
          <div className="text-content">
            <h3>Global Standards</h3>
            <p>GS1 offers globally recognized barcode standards, providing interoperability and seamless integration in worldwide markets.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            <BarcodeIcon />
          </div>
          <div className="text-content">
            <h3>Unique barcodes</h3>
            <p>We manage the international barcode system and licence barcodes for use globally, so you can be sure your barcodes will be accepted around the world.</p>
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            <SupplyChainIcon />
          </div>
          <div className="text-content">
            <h3>Supply Chain Efficiency</h3>
            <p>Enhance supply chain efficiency using GS1 barcodes, which allow for faster and more accurate product tracking and monitoring.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            <ChecklistIcon />
          </div>
          <div className="text-content">
            <h3>Regulatory Compliance</h3>
            <p>Use GS1's standardized barcode technology to ensure compliance with industry standards and norms.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            <ShieldCheckIcon />
          </div>
          <div className="text-content">
            <h3>Product Authenticity</h3>
            <p>Use GS1 barcodes to protect your brand and customers against counterfeiting.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            <SupportPersonIcon />
          </div>
          <div className="text-content">
            <h3>Comprehensive Support</h3>
            <p>GS1 Pakistan provides expert guidance and support for all of your barcoding needs, from generation to implementation.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            <TargetIcon />
          </div>
          <div className="text-content">
            <h3>Data Accuracy</h3>
            <p>Improve data accuracy and eliminate errors in inventory management and point-of-sale transactions by implementing GS1's accurate barcoding solutions.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            <EyeMagnifyIcon/>
          </div>
          <div className="text-content">
            <h3>Improved Visibility</h3>
            <p>Using GS1 barcodes, which are recognized by retailers and distributors around the world, you may increase the visibility of your product in retail and e-commerce channels.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            < ExpandIcon />
          </div>
          <div className="text-content">
            <h3>Scalability</h3>
            <p>GS1 barcodes are scalable, allowing your organization to grow and expand its product line.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="info-item1">
          <div className="icon-wrapper9">
            < DollarIcon />
          </div>
          <div className="text-content">
            <h3>Cost Savings</h3>
            <p>GS1 can help you save costs due to improved operational efficiencies and fewer errors by using standardized barcoding solutions and cleaning up your processes.</p>
          </div>
          </div>
          </FadeInSection>
          <FadeInSection>
        <div className="info-item1">
          <div className="icon-wrapper9">
            <GlobeIcon />
          </div>
          <div className="text-content">
            <h3>Tried and tested</h3>
            <p>Our roots go back 40 years, to when the very first barcode was created. Today, we create and manage many other business standards, too.</p>
          </div>
        </div>
        </FadeInSection>
      </div>
      
    </div>

    );
};
export default GS1;