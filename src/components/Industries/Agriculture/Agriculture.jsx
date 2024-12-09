import React from 'react';
import './Agriculture.css';
import farmer from '../../../assets/farmer.jpg';
import FadeInSection from '../../../components/Transitions/Fadein'; // Adjust the import path as needed
import { Link } from 'react-router-dom';
const Agriculture = () => {
  return (
    <div>
      <FadeInSection>
        <div className="Agriculture-banner">
          <div className="banner-content">
            <h1>Food and Agriculture</h1>
            <p>
              Ensuring food safety and sustainability from farm to fork. GS1 standards enhance supply chain efficiency, improve traceability, and ensure transparency in the food and agriculture sector.
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="agribusiness-section">
          <div className="farm-content">
            <h1>GS1 Pakistan - helping in Agriculture and Food</h1>
            <p>
              The agribusiness sector is a crucial pillar of Pakistan's economy, but farmers, producers,
              retailers and others face significant challenges in today's competitive market.
            </p>
            <p>
              For the past two decades, GS1 Pakistan has been collaborating closely with the nation's
              agribusiness sector to enhance supply chains, improve efficiencies, lower operational costs,
              and bolster consumer safety. This is achieved through the implementation of GS1's unique
              product, entity and location identifiers, barcodes, Radio Frequency Identification (RFID)
              and data sharing technologies and services, tailored to meet the specific needs of
              Pakistan's agricultural landscape.
            </p>
          </div>
          <div className="image">
            <img src={'https://www.thestatesman.com/wp-content/uploads/2022/12/indian-farmer-1.jpg'} alt="Farmer working in a field" />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="barcode-section">
          <div className="barcode-content">
            <h1>Barcodes - revolutionizing agriculture and food traceability</h1>
            <p>
              The agriculture and food industry is embracing a global shift from traditional barcodes to
              two-dimensional QR codes, enhancing traceability, food safety, and consumer information
              from farm to table.
            </p>
          </div>
          <div className="image">
            {/* <img src={agricultureBarcode} alt="2D barcode on agricultural product" /> */}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="AgriGTIN">
          <div className="contentGTIN">
            <h2>Ready for your barcode/GTIN?</h2>
            <p>Available from 116 GS1 offices around the world</p>
            <Link
              to={`/Getabarcode`}
            >
              <button className="cta-button22">Get your GTIN for Agribusiness</button>
            </Link>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Agriculture;