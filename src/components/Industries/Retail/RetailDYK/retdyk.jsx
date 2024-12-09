import React from 'react';
import { ReactComponent as ShoppingSvg } from '../../../../assets/retailSvg.svg';
import './retaildyk.css'
const DidYouKnowSection = () => {
  return (
    <div className="did-you-know-section">
      {/* <img src="/path-to-your-image.png" alt="E-commerce illustration" className="did-you-know-image" /> */}
      <ShoppingSvg height={200} width={200}></ShoppingSvg>
      <h3>Did you know?</h3>
      <span>
        The GS1 GTIN is a recognised international standard and is accepted globally. Once you
        have a GS1 GTIN, you can use the same number to expand your business seamlessly to
        other e-commerce sites, online marketplaces and physical retail stores.
      </span>
      {/* <a href="#" className="discover-link">Discover how GS1 standards power retail sectors</a> */}
    </div>
  );
};

export default DidYouKnowSection;