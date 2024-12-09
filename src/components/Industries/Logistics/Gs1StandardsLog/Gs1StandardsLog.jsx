import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBarcode, faMapMarkedAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Gs1StandardsLog.css'
const GS1StandardsSection = () => {
  const standards = [
    {
      title: "Location Management",
      icon: faMapMarkedAlt,
      items: ["GLN Registry", "GLN extension", "Location standards", "GDSN"]
    },
    {
      title: "Data Capture",
      icon: faBarcode,
      items: ["GS1 DataBar", "EPC/RFID", "GS1 Digital Link", "2D barcodes"]
    },
    {
      title: "Traceability",
      icon: faTruck,
      items: ["GTIN", "SSCC", "GLN", "GS1-128"]
    },
    {
      title: "Data Exchange",
      icon: faFileAlt,
      items: ["EDI", "GS1 XML", "EPCIS", "GS1 Web Vocabulary"]
    }
  ];

  return (
    <div className="gs1-standards-section11">
      <h2>GS1 Standards in Transport & Logistics</h2>
      <div className="standards-container11">
        {standards.map((standard, index) => (
          <div key={index} className="standard-item">
            <div className="standard-icon">
              <FontAwesomeIcon icon={standard.icon} size="2x" />
            </div>
            <h3>{standard.title}</h3>
            <div className="standard-items">
              {standard.items.map((item, idx) => (
                <span key={idx} className="item-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GS1StandardsSection;