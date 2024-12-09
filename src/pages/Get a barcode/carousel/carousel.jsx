import React, { useEffect, useRef } from 'react';
import './carousel.css';

import ebayLogo from '../ebay.jpg';
import allegroLogo from '../Allegro.jpg';
import googleLogo from '../google.jpg';
import ShopeeLogo from '../Shopee.png';
import walmartlogo from '../walmart.jpg';
import metrologo from '../metro.png';
import Amazonlogo from '../Amazon.png';
import Shopifylogo from '../shopify.png';
import alibabalogo from '../alibaba.jpg';
import nestlelogo from '../nestle.png';
import carrefourlogo from '../carrefour.jpg';


const Carousel = () => {
  const sliderRef = useRef(null);

  const members = [
    { logo: ebayLogo, name: "Company 1", industry: "Retail" },
    { logo: allegroLogo, name: "Company 2", industry: "Healthcare" },
    { logo: googleLogo, name: "Company 3", industry: "Logistics" },
    { logo: ShopeeLogo, name: "Company 1", industry: "Retail" },
    { logo: walmartlogo, name: "Company 2", industry: "Healthcare" },
    { logo: Amazonlogo, name: "Company 3", industry: "Logistics" },
    { logo: Shopifylogo, name: "Company 3", industry: "Logistics" },
    { logo: metrologo, name: "Company 3", industry: "Logistics" },
    { logo: alibabalogo, name: "Company 3", industry: "Logistics" },
    { logo: nestlelogo, name: "Company 3", industry: "Logistics" },
    { logo: carrefourlogo, name: "Company 3", industry: "Logistics" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const step = 1;
    const interval = 30;

    const slideTimer = setInterval(() => {
      slider.scrollLeft += step;
      scrollAmount += step;

      if (scrollAmount >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, interval);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="members-component">
      <div className="members-slider" ref={sliderRef}>
        {members.concat(members).map((member, index) => (
            <img src={member.logo} alt={`${member.name} logo`} className="member-logo" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;