import React from 'react';
import './companyMilestones.css';
import AnimatedPage from '../What we do/Animation/AnimatedPage';

const companyMilestones = [
  
  {
    year: 2007,
    title: "GS1 Pakistan Founded",
    description: "Established to introduce global standards in Pakistani markets."
  },
  {
    year: 2013,
    title: "Global Medical Device Identification System (UDIs)",
    description: "GS1 Earns Prestigious Accreditation from U.S. FDA as Issuing Agency for Global Medical Device Identification System (UDIs)."
  },
  {
    year: 2014,
    title: "GS1 Empowers Commerce",
    description: "Unveiling a future-proof strategy for the digital age, including the world's first ratified digital standard.."
  },
  {
    year: 2016,
    title: "Barcode Breaks Barriers: A BBC Recognition",
    description: "The iconic GS1 barcode is lauded by the BBC as a game-changer, making it onto their prestigious list of the 50 things that made the world economy."
  },
  {
    year: 2018,
    title: "GS1 Becomes Accredited Issuer of LEIs",
    description: "GS1 expands its reach by becoming an accredited issuer of Legal Entity Identifiers (LEIs), leveraging its expertise in unique identification within the global financial sector. This accreditation enhances the reliability and trustworthiness of financial transactions worldwide."
  },
  {
    year: 2019,
    title: "GS1 Registry Platform (GRP) as Trusted Source",
    description: "The GS1 Registry Platform (GRP) is established as a trusted source for GS1 Company Prefixes (GCPs) and the Global Trade Item Number (GTIN). It ensures accurate and reliable identification for businesses, streamlining operations and enhancing supply chain efficiency."
  },
  {
    year: 2020,
    title: "GS1 Digital Link Standard and QR Codes",
    description: "The GS1 Digital Link standard utilizes QR codes to connect consumers with a wealth of brand-authorized data on the web. This includes product information, promotions, ingredients, recipes, and more, providing a seamless and informative consumer experience."
  },
  {
    year: 2021,
    title: "GS1's Support for 2D Barcodes at Retail",
    description: "GS1 aims to enable the reading of two-dimensional barcodes, such as QR codes and GS1 DataMatrix barcodes, at retail points-of-sale globally by the end of 2027. This initiative supports the retail industry in improving checkout efficiency and enhancing customer engagement."
  },{
    year: 2022,
    title: "WTO and WEF Report on GS1's Impact on Trade",
    description: "A joint report by the World Trade Organization (WTO) and the World Economic Forum (WEF) highlights the power of GS1 product and location identification. The report outlines how GS1 standards make cross-border trade more efficient, inclusive, and sustainable, benefiting businesses and economies worldwide."
  },
  {
    year: 2023,
    title: "GS1 Celebrates the 50th Anniversary",
    description: "GS1, alongside its 116 local GS1 Member Organisations (MOs), marks the 50th anniversary of the barcode. Today, over 1 billion products carry GS1 barcodes, which are scanned billions of times daily across the globe, underscoring the barcode's enduring impact on commerce and daily life.",
    isAnniversary: true
  }
];

const GS1PakistanHistory = () => {
  return (
   
    <div className="gs1-history">
      <AnimatedPage direction='Righttoleft'>
      <header className="gs1-history__header">
      <AnimatedPage direction='Righttoleft'>
        <h1>GS1 Pakistan: Our Journey Through Time</h1>
        </AnimatedPage>
        <AnimatedPage direction='Righttoleft'>
        <p>Explore our milestones from 2007 to present day</p>
        </AnimatedPage>
      </header>
      </AnimatedPage>
      <div className="gs1-history__timeline">
        {companyMilestones.map((milestone, index) => (
          <div key={index} className={`gs1-history__item ${milestone.isAnniversary ? 'gs1-history__item--anniversary' : ''}`}>
            <div className="gs1-history__year">{milestone.year}
            </div>
            <AnimatedPage direction='Righttoleft'>
            <div className="gs1-history__content">
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
              {milestone.isAnniversary && <span className="gs1-history__badge">50 Years</span>}
            </div>
            </AnimatedPage>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default GS1PakistanHistory;