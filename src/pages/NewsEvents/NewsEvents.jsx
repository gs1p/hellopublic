import React from 'react';
import './NewsEvents.css';
import backgroundImage from '../../assets/events.jpg'; // Ensure you have this image
import News from '../../components/News/News';
import imagesectioninevent from '../../assets/What Next qr codes.png';
import ZoomInSection from '../../components/Transitions/ZoomIn/ZoomIn';
import FadeInSection from '../../components/Transitions/Fadein';
import SlideInRightSection from '../../components/Transitions/SIdeRight/SideRight';
import SlideInBottomSection from '../../components/Transitions/SlideBottom/SlideBottom';
import SlideInElement from '../../components/Transitions/Slidein';
// import gs1Logo from './logo1.png'; // Ensure you have this logo

const NewsEvents = () => {
    return (
        <div classname='main'>
            <FadeInSection>
                <div className="about-us-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="overlay1"></div>
                    <div className="content-wrapper">
                        <h1>News & Events</h1>
                    </div>
                </div>
            </FadeInSection>
            <SlideInRightSection>
            <div className="container">
                <div className="image-section">
                    <img src={imagesectioninevent} alt="Leading companies support QR Codes with GS1 standards" className="background-image" />
                </div>
                <div className="text-section">
                    <h2>The role of global standards in supply chain visibility</h2>
                    <p>
                        "The Role of Global Standards in Supply Chain Visibility" was a successful event organized by GS1 Pakistan, focused on raising awareness about the importance of global standards in enhancing supply chain visibility. The event brought together industry leaders, experts, and stakeholders to discuss and demonstrate the benefits of adopting standardized barcodes and QR codes for efficient product tracking and information sharing.
                    </p>
                    <p className="date">05/10/23</p>
                    {/* <a href="#" className="read-more">Read more →</a> */}
                </div>
            </div>
            </SlideInRightSection>
           <SlideInElement>
            <News></News>
            </SlideInElement>
        </div>
    );
};

export default NewsEvents;