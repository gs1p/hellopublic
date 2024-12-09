import React from 'react';
import './Update.css';
import AnimatedPage from '../What we do/Animation/AnimatedPage';
import PopUp from '../PopUp1/PopUp';  // Make sure to create this component
import usePopup from '../PopUp1/usePopup';  // Make sure to create this hook

const Update = () => {
  const { activePopup, openPopup, closePopup } = usePopup();

  const popups = [
    
    {
      id: 'submitRequest',
      title: 'Company Name Change Request',
      content: 'To update your information with GS1 Pakistan® following a company name change while maintaining the same ownership, you need to download and complete the Company Name Change Form, gather the necessary documents supporting the name change, and submit both the completed form and the supporting documents in my GS1 Pakistan via the Support and Registrations section.'
      
    },
    {
      id: 'mergerInfo',
      title: 'GS1 US Identifier Transfer Requests',
      content: 'An Identifier can be transferred upon the sale of a business, the sale of a business line, or a merger. To ensure accurate association with the correct company and up-to-date GS1 Pakistan records, promptly request the transfer of Identifiers after the transactions conclusion. Submit the appropriate Transfer Request Form and a Release Letter signed by a duly authorized officer of the seller, as recorded by GS1 Pakistan. If a Release Letter from the seller is unavailable, the Identifier can still be transferred if GS1 US receives supporting legal documentation evidencing the transaction. Without the appropriate legal documentation, GS1 Pakistan cannot transfer the requested Identifier(s).'
    },
    
  ];
  

  return (
    <div className=".Team2-container">
      <div className="Team2-container" style={{backgroundImage: `url(${Update})`}}>
        <div className="Team2-overlay"></div>
        <div className="content2-Team">
          <h1>Update Your GS1 Identifier Registration</h1>
        </div>
      </div>
   
      <div className="container9">
        <AnimatedPage direction='Righttoleft'>
          <p className="intro9-text">
            Your GS1 Identifier is the key element to your company's unique identification, allowing your business to identify,
            capture, and share information regarding your products.
          </p>
        </AnimatedPage>
        <AnimatedPage direction='Righttoleft'>
          <ul className="feature9-list">
            <li>GTINs (Global Trade Item Numbers)</li>
            <li>U.P.C. and shipping labels</li>
            <li>EDI (Electronic Data Interchange) communications</li>
            <li>Data synchronization</li>
            <li>Coupons</li>
          </ul>
        </AnimatedPage>
        <AnimatedPage direction='Righttoleft'>
          <p className="info9-text">
            By helping to ensure that your company information is up to date, you can accurately represent your company,
            promote traceability of the product throughout the supply chain, and build barcodes that are accepted by retailers
            globally. If your company has recently undergone a name change or been a part of a merger or acquisition, you will
            need to update your GS1 Company Prefix registration.
          </p>
        </AnimatedPage>
        <AnimatedPage direction='Righttoleft'>
          <h2 className="update9-question">Does your identifier information need to be updated?</h2>
        </AnimatedPage>
        <AnimatedPage direction='Righttoleft'>
          <div className="button9-container">
            <button className="update9-button">
              Yes. My company address needs to be updated.
              <button className="Update-button"> 
        <a href="https://gs1pk.org/application/Update-Form.pdf">Select to update company information  &rarr;</a> 
        </button>
            </button>
            
            <button className="update9-button">
              Yes. My company name has changed
              <button className="Update-button" onClick={() => openPopup('submitRequest')}>
                Select to submit your request  &rarr;
              </button>
            </button>
          </div>
        </AnimatedPage>
        <AnimatedPage direction='Righttoleft'>
          <div className="button9-container">
            <button className="update9-button">
              Yes. My company is undergoing a merger or acquisition
              <button className="Update-button" onClick={() => openPopup('mergerInfo')}>
                Select to update information  &rarr;
              </button>
            </button>
            
            <button className="update9-button">
              I'm not sure
              <button className="Update-button" >
              <a href="https://www.gs1us.org/tools/gs1-company-database-gepir">Select to verify your GS1 Identifier registration  &rarr;</a>
              </button>
            </button>
          </div>
        </AnimatedPage>
      </div>

      {activePopup && (
        <PopUp
          title={popups.find(p => p.id === activePopup).title}
          content={popups.find(p => p.id === activePopup).content}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Update;