import React from 'react';
import './TenSteps.css';
import PopUp from '../PopUp1/PopUp';
import usePopup from '../PopUp1/usePopup';
import AnimatedPage from '../What we do/Animation/AnimatedPage';


import step1Image from './step1-image.png';
import step2Image from './step2-image.png';
import step3Image from './step3-image.png';
import step4Image from './step4-image.png';
import step5Image from './step5-image.png';
import step6Image from './step6-image.png';
import step7Image from './step7-image.png';
import step8Image from './step8-image.png';
import step9Image from './step9-image.png';
import step10Image from './step10-image.png';

const TenSteps = () => {
    const { activePopup, openPopup, closePopup } = usePopup();

    const popups = [
        {
            id: 'updateInfo',
            title: 'Obtaining a GS1 Company Prefix',
            content: 'To use barcodes, businesses in Pakistan need a GS1 Company Prefix from GS1 Pakistan. This unique identifier is essential for creating barcodes for products, services, or locations. GS1 Pakistan is the official organization to contact for obtaining a GS1 Company Prefix within the country.'
          },
          {
            id: 'updateInfo1',
            title: 'Assigning GS1 Identification Numbers',
            content: 'The choice of the method of printing a barcode depends significantly on the nature of the product – whether it is a fixed weight (e.g. a bottle of wine) or a variable weight (e.g. a head of cabbage). If the product has a fixed weight, then the Global Trade Unit Number (GTIN) – a unique worldwide number that contains only a link to the registration of product data in the databases of all participants in the supply chain – is used to identify it. All physical units of such a product are identical and therefore the labels contain the same barcode. For printing labels, it is recommended to use letterpress printing methods.'
          },
          {
            id: 'updateInfo2',
            title: 'Choosing a Barcode Printing Method',
            content: 'In Pakistan, barcode printing depends on product type. For fixed-weight products like bottles, use a GTIN (Global Trade Item Number) and letterpress printing. Variable-weight products like cabbage require a local commercial unit number and laser or thermal transfer printing. Choosing the right method is crucial for effective barcode implementation.'
          },
          {
            id: 'updateInfo3',
            title: 'Determining the Scan Environment',
            content: 'Barcode specifications in Pakistan depend on where they scanned. Common scanning locations are retail checkouts, warehouses, and specialized areas like hospitals. GS1 Pakistan provides guidelines for barcode type, size, placement, and quality based on these locations. For instance, products scanned at both retail stores and warehouses require different barcode sizes and placements to ensure accurate reading.'
          },
          {
            id: 'updateInfo4',
            title: ' Choosing the Barcode Symbol Type',
            content: 'Selecting the correct barcode symbology is crucial for successful barcode implementation in Pakistan. For products scanned at retail checkouts, EAN is essential. When dealing with variable data like serial numbers or expiration dates, GS1-128, DataBar, 2D symbols, or Data Matrix are suitable options. For printing GTIN on corrugated boxes, ITF-14 is recommended. To determine the best symbology for specific needs, businesses should consult GS1 Pakistan for expert guidance and available services.'
          },
          {
            id: 'updateInfo5',
            title: ' Choosing the Size of a Barcode',
            content: 'Barcode design in Pakistan involves selecting the appropriate symbol type and data to encode. The barcode size depends on the symbol type, application, and printing method. EAN symbols have fixed size ratios and specific dimensions for retail use. ITF-14 and GS1-128 symbols have different size specifications based on application and encoded data. The printing process also impacts barcode size, with minimum size and bar width reduction requirements varying by printing method. 1  GS1 General Specifications provide detailed guidance on barcode dimensions'
          },
          {
            id: 'updateInfo6',
            title: ' Compose the Barcode Text',
            content: 'The text below a barcode serves as a backup for damaged or misprinted symbols. Any font can be used for EAN, while ITF-14 and GS1-128 text must be proportional to the symbol size. Text placement varies by symbol type. Spaces within text improve readability but are not encoded for ITF-14 and GS1-128. Application Identifiers (AIs) in GS1-128 are enclosed in parentheses in the text but not encoded. EAN-13 requires 13 digits, EAN-8 requires 8 digits below the symbol.'
          },
          {
            id: 'updateInfo7',
            title: 'Choosing the Color of the Barcode',
            content: 'For optimal barcode scanning, black bars on a white background are recommended. However, dark colors like blue, brown, or green can be used for bars, while light backgrounds such as white or yellow are preferred. Avoid red, orange, pink, or peach for bars as most scanners use red light. If unsure, consult a printing company recommended by GS1 Pakistan.'
          },
          {
            id: 'updateInfo8',
            title: 'Choosing the Barcode Location',
            content: 'Proper barcode placement is crucial for accurate scanning. Consider packaging design when choosing a barcode location, ensuring it avoids damage. Consult with packaging engineers and refer to GS1 General Specifications for optimal placement guidelines. Printing methods also affect barcode quality; consult your printing company for best results. For parallel alignment and minimal distortion, consider flexographic printing with the feed direction or rotogravure printing aligned with the plate holder cylinder. For further assistance, contact GS1 Pakistan.'
          },
          {
            id: 'updateInfo9',
            title: 'Barcode Quality Check',
            content: 'To ensure barcode quality, businesses can follow guidelines outlined in the ISO/IEC 15416 standard. GS1 Pakistan provides specific quality parameters for different barcode types and applications. Companies can either conduct their own quality checks or utilize GS1 Pakistan barcode verification service. Adhering to these standards is crucial for accurate and efficient barcode scanning..'
          },
          
       
    ];

    return (
        <div>
            <div className="Agriculture3-banner">
                <div className="banner2-content">
                    <h1>Ten Steps to Using Barcodes</h1>
                </div>
            </div>
            <div className="agribusiness2-section">
                <div className="farm2-content">
                    
                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step1Image} alt="Step 1" className="step-image" />
                            <div className="step-content">
                                <h1>Step 1: Obtaining a GS1 Company Prefix</h1>
                                <p9>Pakistani businesses require a GS1 Company Prefix from GS1 Pakistan to generate barcodes.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step2Image} alt="Step 2" className="step-image" />
                            <div className="step-content">
                                <h1>Step 2: Assigning GS1 Identification Numbers</h1>
                                <p9>Barcode printing method depends on product type: fixed weight products use GTIN and letterpress printing, while variable weight products require different approaches.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo1')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step3Image} alt="Step 3" className="step-image" />
                            <div className="step-content">
                                <h1>Step 3: Choosing a Barcode Printing Method</h1>
                                <p9>Barcode printing method in Pakistan varies by product: use GTIN and letterpress for fixed-weight items, local commercial unit number and laser/thermal transfer for variable-weight ones.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo2')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step4Image} alt="Step 4" className="step-image" />
                            <div className="step-content">
                                <h1>Step 4: Determining the Scan Environment</h1>
                                <p9>Barcode specifications in Pakistan vary by scanning location (retail, warehouse, etc.), with GS1 Pakistan providing guidelines for optimal barcode type, size, and placement for accurate reading.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo3')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step5Image} alt="Step 5" className="step-image" />
                            <div className="step-content">
                                <h1>Step 5: Choosing the Barcode Symbol Type</h1>
                                <p9>Choose the right barcode symbology (EAN, GS1-128, DataBar, 2D, ITF-14) based on product type, data needs, and scanning location, consulting GS1 Pakistan for expert advice.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo4')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step6Image} alt="Step 6" className="step-image" />
                            <div className="step-content">
                                <h1>Step 6: Choosing the Size of a Barcode</h1>
                                <p9>Barcode design in Pakistan involves selecting symbol type, data, and size based on application, printing method, and GS1 specifications.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo5')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step7Image} alt="Step 7" className="step-image" />
                            <div className="step-content">
                                <h1>Step 7: Compose the Barcode Text</h1>
                                <p9>Barcode text below the symbol acts as a backup, using specific font and placement rules for different symbol types, with spaces for readability but not encoding in some cases, and including Application Identifiers (AIs) for GS1-128.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo6')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step8Image} alt="Step 8" className="step-image" />
                            <div className="step-content">
                                <h1>Step 8: Choosing the Color of the Barcode</h1>
                                <p9>For optimal barcode scanning in Pakistan, use black bars on a white background. Avoid red bars and consult a GS1 Pakistan recommended printer for color variations.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo7')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step9Image} alt="Step 9" className="step-image" />
                            <div className="step-content">
                                <h1>Step 9: Choosing the Barcode Location</h1>
                                <p9>Proper barcode placement in Pakistan requires considering packaging design, printing method, and GS1 guidelines for optimal scanning and avoiding damage.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo8')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                    <AnimatedPage direction="Righttoleft">
                        <div className="step-container">
                            <img src={step10Image} alt="Step 10" className="step-image" />
                            <div className="step-content">
                                <h1>Step 10: Barcode Quality Check</h1>
                                <p9>Businesses in Pakistan can ensure barcode quality by following ISO/IEC 15416 and GS1 Pakistan guidelines, conducting internal quality checks, or using GS1 Pakistan's verification service.</p9>
                                <div></div>
                                <button className="UpdateTenSteps-button" onClick={() => openPopup('updateInfo9')}>
                                    Read More  &rarr;
                                </button>
                            </div>
                        </div>
                    </AnimatedPage>

                </div>
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

export default TenSteps;