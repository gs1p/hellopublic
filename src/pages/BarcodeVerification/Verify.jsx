import React from 'react';
import './Verify.css'; // Import the CSS file
import barcodeImage from '../../assets/Damaged-barcode.png'; // Import the barcode image

const BarcodeVerification = () => {
    return (
        <div className="barcode-verification">
            <main className="main-content-verify">
                <div className="about-us-container">
                    <div className="overlay1"></div>
                    <div className="content-wrapper">
                        <h1>Barcode verification</h1>
                        <h2>Why is it important to print quality barcodes?</h2>
                    </div>
                </div>
                <div className="barcode-section">
                    <img src={barcodeImage} alt="Damaged Barcode" className="barcode-image" />
                    <div className="barcode-text">
                        <h3>Damaged barcode</h3>
                        <p>
                            A damaged barcode can significantly disrupt the scanning process, making it difficult or even impossible for barcode readers to capture the encoded information accurately.
                        </p>
                    </div>
                </div>
                <div className="barcode-quality">
                    <h2>Marking a product with a poor quality barcode is worse than not marking it at all!</h2>
                    <div className="content-barcode-ver">
                        <ul>
                            <li>
                                encourages queues at checkouts, because the cashier has to enter the bar code by hand or look for a "helper", or go to the shelves to find out the correct product code, but we have to stand in line and wait...
                            </li>
                            <li>
                                creates a negative attitude towards the product/brand that causes you to delay the queue.
                            </li>
                        </ul>
                        <p>
                            Even worse, the barcode is read but mistakenly identifies a different product, which affects all checkout, warehouse and invoicing systems. Therefore, retail chains try to combat poor quality barcodes, for example by including a disclaimer about barcode quality in contracts. A low-quality bar code label worth a few cents can cost a manufacturer or supplier <strong>hundreds of euros</strong> - new packaging or labels need to be ordered, the product has to be sold at a lower price, or the merchant may refuse to accept the product in trade altogether.
                        </p>
                    </div>
                </div>
                <div className="barcode-quality">
                    <h2>How to protect against bad quality barcode?</h2>
                    <div className="content-barcode-ver">
                        <ul>
                            <li>
                                At the packaging or label design stage, the bar code should be provided with sufficient space, correct placement and color selection, i.e. choosing the right size of "quiet areas", bar code magnification and color contrast.
                            </li>
                            <li>
                                When concluding a contract with the packaging manufacturer, it is recommended to include a disclaimer that he is responsible for the readability of the barcode, ie that the barcode is readable every time with the first reading.
                            </li>
                            <li>
                                If the barcode is printed with a label printer, the barcode print quality of the printer should be checked and the printer manufacturer/supplier should be asked to ensure that the machine meets print quality standards.
                            </li>
                            <li>
                                The bar code quality should be checked on the printing film and packaging sample before ordering a larger batch.
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="barcode-quality">
                    <h2>Where and how can you check the quality of the barcode?</h2>
                    <div className="content-barcode-ver">
                        <p>
                            This can be done at our office in <strong>Karachi</strong> Office No.B-2, 2nd Floor, Azzainab Court, Campbell Street <strong>
                                74200
                            </strong>
                        </p>
                        <p>
                            We perform verification of all GS1 system barcodes - EAN-13, EAN-8, ITF-14, GS1-128, DataBar, etc.
                        </p>
                        <p>
                            To verify the conformity of a barcode symbol to GS1 standards, 2 identical barcode samples and a completed barcode symbol verification request form must be submitted.
                        </p>

                    </div>
                </div>
                <div className="barcode-quality">
                    <h2>Why is it not enough to check a regular checkout scanner?</h2>
                    <div className="content-barcode-ver">
                        <p>
                            This is because no two scanners are the same, as they differ in settings, aperture and software. Manufacturers complement their hardware with various additional algorithms and filters that help read barcodes. It is not uncommon for a bar code to be read without problems in one retail chain, but not at all in another.
                        </p>
                        <p>
                            We perform checks with verifiers conforming to the standard, which check the barcode according to the algorithm defined by the ISO standard, which would meet the minimum conditions of all possible scanners.
                        </p>
                    </div>
                </div>
                <div className="barcode-quality">
                    <h2>Traditional GS1 parameters</h2>
                    <div className="content-barcode-ver">
                        <p>
                            The traditional parameters describe the linear dimensions of the barcode, encoded information, placement on the product, colors, etc. parameters visible to a person:
                        </p>
                        <ul>
                            <li>
                                Symbol structure e.g. EAN-13 or EAN-8
                            </li>
                            <li>
                                X-dimension (magnification) ie the narrowest element in the barcode
                            </li>
                            <li>
                                barcode height
                            </li>
                            <li>
                                "Silent" right and "silent" left zone, e.g., for EAN-13 symbol, the size of the "silent" right zone should be 7xX-dimension, and the left - 11xX-dimension
                            </li>
                            <li>
                                human readability - that is, the information encoded in the barcode "one-to-one" corresponds to what a person sees and what a scanner reads
                            </li>
                            <li>
                                barcode width
                            </li>
                            <li>
                                compliance with the company number assigned by the GS1 organization - GS1 prefix
                            </li>
                            <li>
                                data structure (for logistics label).
                            </li>
                        </ul>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default BarcodeVerification;
