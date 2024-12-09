import React from 'react';
import './Retail.css';
import Reliable from '../../../assets/reliable.png';
import Compliance from '../../../assets/compliant.png';
import Loyalty from '../../../assets/love.png';
import Sustainability from '../../../assets/recycling.png';
import Resilient from '../../../assets/resilient.png';
import DidYouKnowSection from './RetailDYK/retdyk';
import FadeInSection from '../../../components/Transitions/Fadein'; // Adjust the import path as needed

const Retail = () => {
  return (
    <div>
      <FadeInSection>
        <div className="retail-banner">
          <div className="banner-content">
            <h1>Retail</h1>
            <p>
              Today's retail industry is facing
              unprecedented supply chain challenges
              and the growing power of the consumer.
            </p>
          </div>
        </div>
      </FadeInSection>
      <div className='mainRetail-Retail'>
        <div className="retail-content">
          <FadeInSection>
            <div className="retail-info">
              <h4>
                Whether online or in store, GS1 barcodes still provide the trusted data foundation for retailers and brands, helping businesses large and small.
              </h4>
              <p>
                GS1 standards and services enable trusted, complete and accurate product identification, as well as data sharing. Better data still means better service.
              </p>
              <p>
                Whether online or in-store, the ubiquitous GS1 barcode (GS1 GTIN) is still the trusted foundation for retailers and brands, helping businesses large and small to uniquely identify their products.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection>
            <div className="retail-benefits">
              <div className="benefit-item">
                <img src={Sustainability} alt="Sustainability" />
                <p>Sustainability and traceability</p>
              </div>
              <div className="benefit-item">
                <img src={Compliance} alt="Compliance" />
                <p>Regulatory requirement compliance</p>
              </div>
              <div className="benefit-item">
                <img src={Reliable} alt="Reliable" />
                <p>Reliable, verifiable product information</p>
              </div>
              <div className="benefit-item">
                <img src={Resilient} alt="Efficiency" />
                <p>Supply chain efficiency and resiliency</p>
              </div>
              <div className="benefit-item">
                <img src={Loyalty} alt="Consumer" />
                <p>Improved consumer experiences and loyalty</p>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection>
            <div className="retail-info">
              <h4>
                The product data journey: digitalisation and standardisation
              </h4>
              <p>
                GS1 has a long history in retail—and the ubiquitous "beep" of the GS1 barcode is heard at store checkouts over 10 billion times every day. Business need to ensure however, that the products they sell are as well represented in the digital world, as they are in the physical world.
              </p>
              <p>
                This is why GS1 is partnering with the retail industry to build a stronger product data foundation, based on unique product identity. Through services such as Verified by GS1, businesses can enjoy a consistent and reliable flow of information, making operations between retailers and brand owners more transparent.
              </p>
            </div>
          </FadeInSection>
        </div>
        <div className="retail-images">
          <FadeInSection>
            <DidYouKnowSection />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Retail;