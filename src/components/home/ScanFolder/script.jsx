import React from 'react';
import './styles.css';
import gs1InfoImage from './scan3.jpg';
import { Link } from 'react-router-dom';
import ZoomInSection from '../../Transitions/ZoomIn/ZoomIn';

const GS1Info = () => {
  return (
    <div className="Bar-container">
      <div className="bar-info-box">
        
        <img src={gs1InfoImage} alt="GS1 Information" className="gs1-info-image" />
       
      </div>
      <div className="description9">
        <h2>Transform Your Scanning Experience with GS1 Barcodes</h2>
        <p>Step into the Future with Next-Gen Barcodes</p>
        <Link to={`/WhyGS1`}>
          <button className="cta-button9">Explore GS1 Benefits  &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default GS1Info;