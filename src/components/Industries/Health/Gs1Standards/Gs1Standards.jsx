import React from 'react';
import './Gs1Standards.css';
import { useSpring, animated } from '@react-spring/web';

const GS1Standards = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  return (
    <div className="gs1-standards">
      <h2>GS1 standards in action – supporting healthcare’s digital transformation for better patient outcomes</h2>
      <p>
        Join us to learn how accelerated standards adoption will make a difference to every patient, worldwide.
        Using 6 use cases with simple animations, this interactive resource explains the healthcare actors, relationships and
        GS1 standards application.
      </p>
      <p>Safer, more efficient care starts with a simple scan.</p>
      <div className="gs1-content">
        <div className="gs1-sidebar">
          <div className="gs1-sidebar-header">
            <h3>GS1 Healthcare</h3>
          </div>
          <ul>
            <li>GS1 Healthcare Strategy 2023-2027</li>
            <li>GS1 Healthcare Sustainability Strategy</li>
            <li>Securing trust in the global supply chain of COVID-19 vaccines</li>
            {/* <li>Google/Apple Call-to-action</li> */}
          </ul>
        </div>
        <div className="gs1-links">
          <animated.div style={fadeIn} className="gs1-links-item red">Master data</animated.div>
          <animated.div style={fadeIn} className="gs1-links-item purple">Supply chain management</animated.div>
          <animated.div style={fadeIn} className="gs1-links-item blue">Point of care scanning</animated.div>
          <animated.div style={fadeIn} className="gs1-links-item yellow">Traceability</animated.div>
          <animated.div style={fadeIn} className="gs1-links-item pink">Recall</animated.div>
          <animated.div style={fadeIn} className="gs1-links-item green">Recording data in Clinical Systems</animated.div>
        </div>

      </div>
    </div>
  );
};

export default GS1Standards;
