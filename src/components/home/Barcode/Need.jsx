import React from 'react';
import './Need.css';
import image from './Barcode.jpg';
import { Link } from 'react-router-dom';
import AnimatedPage from '../../../pages/What we do/Animation/AnimatedPage';

const NeedBarcode = () => {
  const handleClick1 = () => {
    alert('Get a barcode for your products now');
  };

  return (
    <div className="container1">
      <div className="overlayBarcode">
        <div className="text-section1">
          <AnimatedPage direction='bottomToTop'>
          <h1>Need a barcode?</h1>
          <p>Whether you’re selling your products online or in store, it all begins with a GS1 number and barcode.</p>
          <Link to={`/Getabarcode`}>
          <button className="cta-button1" onClick={handleClick1}>
            Get a barcode now &rarr;
          </button>
          </Link>
          </AnimatedPage>
        </div>
      </div>
      <img src={image} alt="Need a barcode?" className="background-image1" />
    </div>
  );
};

export default NeedBarcode;
