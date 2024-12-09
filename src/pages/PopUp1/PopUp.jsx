import React from 'react';
import './PopUp.css';

const PopUp = ({ title, content, onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default PopUp;