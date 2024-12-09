import React from 'react';
import './BusinessJourney.css';

const BusinessJourney = () => {
  return (
    <div className="business-journey">
      <h1>Smart solutions to help you on your business journey</h1>
      <div className="journey-stages">
        <div className="stage">
          <div className="Business-icon123 starting-out"></div>
          <button className="Update-button"> 
        <a href="/standards-&-services">Starting out </a> 
        </button>
        </div>
        <div className="stage">
          <div className="Business-icon123 growing"></div>
          <button className="Update-button"> 
        <a href="/standards-&-services">  Growing Global </a> 
        </button>
        </div>
        <div className="stage">
          <div className="Business-icon123 scaling-up"></div>
          <button className="Update-button"> 
        <a href="/standards-&-services">Scaling up </a> 
        </button>
        </div>
        <div className="stage">
          <div className="Business-icon123 exporting"></div>
          <button className="Update-button"> 
        <a href="/standards-&-services">Expand Exporting</a> 
        </button>
        </div>
      </div>
    </div>
  );
};
export default BusinessJourney;