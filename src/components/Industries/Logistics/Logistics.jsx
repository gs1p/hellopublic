import React from 'react';
import './Logistics.css'; // Ensure to create this CSS file
import LogisticsImg from '../../../assets/logistics.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import Video from '../../../assets/vid.mp4'
// import LogisticsSvg from '../../../assets/logistics.svg'
import { ReactComponent as LogisticsSvg } from '../../../assets/logistics.svg';
import GS1StandardsSection from './Gs1StandardsLog/Gs1StandardsLog';
import FadeInSection from '../../Transitions/Fadein';
import ScaleInElement from '../../Transitions/ScaleIn';
import SlideInElement from '../../Transitions/Slidein';
const TransportLogistics = () => {
  return (

    <div className='main'> 
    <FadeInSection>   
      <div className="logistics-banner">
      <div className="banner-content">
        <h1>Transport & Logistics</h1>
        <p>
          GS1 is working to achieve fully accurate, real-time visibility throughout the supply chain, from source to consumer, no matter what the mode of transport.
        </p>
      </div>
    </div>
    </FadeInSection>
   
    <div className="logistics-container">
      <div className="logisticsicon">
      <LogisticsSvg height={200} width={200}></LogisticsSvg>
      </div>
      <div className="text-content">
        <h2>
          As a manufacturer, retailer or logistics service provider, or customer, you need to know exactly where your shipments of goods are at any time, where they have come from—and when and where they are due to arrive.
        </h2>
        <p>
          Identifying, capturing and sharing information about the movement of products—and the digitalisation of everyday business processes—not only enhances interoperability between stakeholders but creates a highly efficient, sustainable and collaborative logistics environment.
        </p>
      </div>
    </div>
    <SlideInElement>
    <div className="video-background-container">
      <video autoPlay loop muted className="background-video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="blue-overlay123"></div>
      <div className="content_Video">
        <h1>Powerful. Easy. Interactive.</h1>
      </div>
    </div>
    </SlideInElement>
    <ScaleInElement>
    <GS1StandardsSection></GS1StandardsSection>
    </ScaleInElement>
    </div>

    
  );
};

export default TransportLogistics;
