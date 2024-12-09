import React, { useRef, useEffect, useState } from 'react';
import './memberSlider.css';

import logo1 from './tools1-image.png';
import logo2 from './tools2-image.png';
import logo3 from './tools3-image.png';
import logo4 from './tools4-image.png';
import logo5 from './tools5-image.png';

const MembersSlider = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const members = [
    { logo: logo1, name: "Barcode Guide", industry: "How to place barcodes on products for optimal scanning", link: '/barcode-guide' },
    { logo: logo2, name: "Product Photography", industry: "Use professional Product Photography to enhance your brand's visual appeal", link: '/product-photography' },
    { logo: logo3, name: "Barcode verification", industry: "Why is it important to print quality barcodes?", link: '/barcode-verification' },
    { logo: logo4, name: "Ten Steps to Using Barcodes", industry: "Discover how to effectively implement barcodes in your operations.", link: '/ten-steps-to-using-barcodes' },
    { logo: logo5, name: "Update Your GS1 Identifier", industry: "Discover how to effectively implement barcodes in your operations.", link: '/update-your-gs1-identifier-registration' },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let lastTime = 0;
    const speed = 0.1; // Pixels per millisecond

    const animate = (currentTime) => {
      if (lastTime !== 0) {
        const deltaTime = currentTime - lastTime;
        if (!isHovered) {
          slider.scrollLeft += speed * deltaTime;
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
          }
        }
      }
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;
  
    const handleStart = (e) => {
      isDown = true;
      startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
      scrollLeft = slider.scrollLeft;
      setIsHovered(true);
    };
  
    const handleEnd = () => {
      isDown = false;
    };
  
    const handleMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };
  
    const handleEnter = () => {
      setIsHovered(true);
    };
  
    const handleLeave = () => {
      isDown = false;
      setIsHovered(false);
    };
  
    slider.addEventListener('mousedown', handleStart);
    slider.addEventListener('touchstart', handleStart);
    slider.addEventListener('mousemove', handleMove);
    slider.addEventListener('touchmove', handleMove);
    slider.addEventListener('mouseup', handleEnd);
    slider.addEventListener('touchend', handleEnd);
    slider.addEventListener('mouseleave', handleLeave);
    slider.addEventListener('mouseenter', handleEnter);
  
    return () => {
      slider.removeEventListener('mousedown', handleStart);
      slider.removeEventListener('touchstart', handleStart);
      slider.removeEventListener('mousemove', handleMove);
      slider.removeEventListener('touchmove', handleMove);
      slider.removeEventListener('mouseup', handleEnd);
      slider.removeEventListener('touchend', handleEnd);
      slider.removeEventListener('mouseleave', handleLeave);
      slider.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  return (
    <div className="members-component-Home">
      <div className="members-content-Home">
        <h4>Online tools</h4>
        <h2>GS1 makes your day-to-day business easier</h2>
        <p>We are committed to providing superior customer support, responding quickly and efficiently to all your inquiries and ensuring your complete satisfaction.</p>
      </div>
      <div 
        className="members-slider-Home" 
        ref={sliderRef}
      >
        {members.concat(members).map((member, index) => (
          <div key={index} className="member-card-Home">
            <img src={member.logo} alt={`${member.name} logo`} className="member-logo" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.industry}</p>
              <button className="Update8-button">
                <a href={member.link}>Get More Details</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersSlider;