import React from 'react';
import './Gs1Standards.css';
import Share from '../../../assets/Gs1-share.png'
import AnimatedPage from '../../What we do/Animation/AnimatedPage';
const GS1Standards = () => {
  return (
    // <AnimatedPage direction='Righttoleft'>
    <div className="gs1-standards-unique-wrapper">
      <div className="gs1-standards-unique-section gs1-standards-unique-identify">
        <div className="gs1-standards-unique-icon-container">
          <img src="https://www.gs1.org/sites/default/files/images/identity.png" alt="Identify" className="gs1-standards-unique-icon" />
        </div>
        <h2 className="gs1-standards-unique-heading">Identify</h2>
        <div className="gs1-standards-unique-content">
          <h3 className="gs1-standards-unique-subheading">GS1 Standards for Identification</h3>
          <h4 className="gs1-standards-unique-category">Company & Location</h4>
          <ul className="gs1-standards-unique-list">
            <li>Global Location Number (GLN)</li>
          </ul>
          <h4 className="gs1-standards-unique-category">Product</h4>
          <ul className="gs1-standards-unique-list">
            <li>Global Trade Item Number (GTIN)</li>
          </ul>
          <h4 className="gs1-standards-unique-category">Logistics & Shipping</h4>
          <ul className="gs1-standards-unique-list">
            <li>Serial Shipping Container Code (SSCC)</li>
            <li>Global Shipment Identification Number (GSIN)</li>
            <li>Global Identification Number for Consignment (GINC)</li>
          </ul>
          {/* <h4 className="gs1-standards-unique-category">Assets</h4>
          <ul className="gs1-standards-unique-list">
            <li>Global Individual Asset Identifier (GIAI)</li>
            <li>Global Returnable Asset Identifier (GRAI)</li>
          </ul>
          <h4 className="gs1-standards-unique-category">Other</h4>
          <ul className="gs1-standards-unique-list">
            <li>Global Service Relation Number (GSRN)</li>
            <li>Global Document Type Identifier (GDTI)</li>
            <li>Global Coupon Number (GCN)</li>
            <li>Global Model Number (GMN)</li>
            <li>Component/Part Identifier (CPID)</li>
          </ul> */}
        </div>
      </div>
      
      <div className="gs1-standards-unique-section gs1-standards-unique-capture">
        <div className="gs1-standards-unique-icon-container">
          <img src="https://www.gs1.org/sites/default/files/images/capture.png" alt="Capture" className="gs1-standards-unique-icon" />
        </div>
        <h2 className="gs1-standards-unique-heading">Capture</h2>
        <div className="gs1-standards-unique-content">
          <h3 className="gs1-standards-unique-subheading">GS1 Standards for Barcodes & EPC/RFID</h3>
          <h4 className="gs1-standards-unique-category">GS1 Barcodes</h4>
          <div className="gs1-standards-unique-barcode-examples">
            <img src="https://www.leadtools.com/help/sdk/v20/resources/images/netleadtoolstopics/upca.png" alt="EAN/UPC" className="gs1-standards-unique-barcode" />
            <img src="https://info.trustwell.com/hubfs/Imported_Blog_Media/GS1-128-Standard-Barcode.png" alt="GS1-128" className="gs1-standards-unique-barcode" />
            {/* <img src="https://www.gs1belu.org/sites/gs1belu/files/styles/image_medium_landscape/public/2020-05/ITF-14.png?h=d5bed402&itok=XY512c6v" alt="ITF-14" className="gs1-standards-unique-barcode" /> */}
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Databar_14_00075678164125.png/220px-Databar_14_00075678164125.png" alt="GS1 DataBar" className="gs1-standards-unique-barcode" />
            <img src="https://www.gs1ie.org/images_upload/Image_Files/Graphics/Barcode-Symbols/Sample-Data-Matrix.jpg" alt="GS1 DataMatrix" className="gs1-standards-unique-barcode" />
          {/*  <img src="https://www.gs1.at/sites/default/files/styles/content_half_660_1x/public/2022-05/GS1-QR-Code-2022.png?itok=sumqCnXM" alt="GS1 QR Code" className="gs1-standards-unique-barcode" />
            <img src="https://barcode.tec-it.com/barcode.ashx?data=1234567890123%7C2D-data&code=GS1DataBarCCA" alt="GS1 Composite Barcode" className="gs1-standards-unique-barcode" /> */}
          </div>
          {/* <h4 className="gs1-standards-unique-category">GS1 EPC/RFID</h4>
          <div className="gs1-standards-unique-rfid-examples">
            <img src="https://www.leadtools.com/help/sdk/v20/resources/images/netleadtoolstopics/upca.png" alt="EPC HF Gen 2" className="gs1-standards-unique-rfid" />
            <img src="https://www.leadtools.com/help/sdk/v20/resources/images/netleadtoolstopics/upca.png" alt="EPC UHF Gen 2" className="gs1-standards-unique-rfid" />
          </div> */}
        </div>
      </div>
      
      <div className="gs1-standards-unique-section gs1-standards-unique-share">
        <div className="gs1-standards-unique-icon-container">
          <img src={Share} alt="Share" className="gs1-standards-unique-icon" />
        </div>
        <h2 className="gs1-standards-unique-heading">Share</h2>
        <div className="gs1-standards-unique-content">
          <h3 className="gs1-standards-unique-subheading">GS1 Standards for Data Exchange</h3>
          <h4 className="gs1-standards-unique-category">Master Data</h4>
          <ul className="gs1-standards-unique-list">
            <li>Global Data Synchronisation Network (GDSN)</li>
          </ul>
          <h4 className="gs1-standards-unique-category">Transactional Data</h4>
          <ul className="gs1-standards-unique-list">
            <li>Electronic Data Interchange (EDI): EANCOM, GS1 XML</li>
          </ul>
          <h4 className="gs1-standards-unique-category">Event Data</h4>
          <ul className="gs1-standards-unique-list">
            <li>EPC Information Services (EPCIS)</li>
          </ul>
        </div>
      </div>
      
    </div>
    
    // </AnimatedPage>

  );
};

export default GS1Standards;