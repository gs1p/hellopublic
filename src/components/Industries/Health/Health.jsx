import React from 'react';
import './Health.css';
import GS1Standards from './Gs1Standards/Gs1Standards';
import CaseStudies from './CaseStudies/CaseStudies';
import VideoSection from './VideoSection/VIdeoSection';
import FadeInSection from '../../Transitions/Fadein';


const HealthCare = () => {
  return (
    <div>
      <FadeInSection>
      <div className="HealthCare-banner">
        <div className="banner-content">
          <h1>Healthcare</h1>
          <p>
            Today's Healthcare industry is facing
            unprecedented supply chain challenges
            and the growing power of the consumer.
          </p>
        </div>
      </div>
      </FadeInSection>
      <GS1Standards></GS1Standards>
      <CaseStudies></CaseStudies>
      {/* <VideoSection></VideoSection> */}
    </div>
  );
};

export default HealthCare;
