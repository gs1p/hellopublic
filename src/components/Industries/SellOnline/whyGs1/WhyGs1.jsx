import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClock, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './WhyGs1.css'; // You'll need to create this CSS file
import ScaleInElement from '../../../Transitions/ScaleIn';

const WhyChooseGS1 = () => {
    return (
        <ScaleInElement>
        <div className="why-choose-gs1">
            <h2>Why choose GS1 to get your GTIN?</h2>
            <div className="reasons-container">
                <div className="reason">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#e74c3c" class="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    {/* <FontAwesomeIcon icon={faShoppingCart} className="reason-icon" /> */}
                    <h3>Meet marketplace requirements</h3>
                    <p>With a GS1 GTIN, you are better equipped to sell anywhere. Most marketplaces require a GTIN, so you'll be prepared to sell online or in retail stores quickly.</p>
                </div>
                <div className="reason">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#e74c3c" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                    {/* <FontAwesomeIcon icon={faClock} className="reason-icon" /> */}
                    <h3>List products faster</h3>
                    <p>Skip re-entering product data to list products on the marketplace—a GTIN can retrieve key product data from the marketplace database and external resources or from Verified by GS1.</p>
                </div>
                <div className="reason">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#e74c3c" class="bi bi-bar-chart" viewBox="0 0 16 16">
                        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                    </svg>
                    {/* <FontAwesomeIcon icon={faChartLine} className="reason-icon" /> */}
                    <h3>Increase online visibility</h3>
                    <p>The GTIN is a part of Google's algorithm, and products with it rank higher in search results. According to Google, products with a GTIN have up to 40% more impressions and up to 20% more conversions.</p>
                </div>
            </div>
        </div>
        </ScaleInElement>
    );
};

export default WhyChooseGS1;