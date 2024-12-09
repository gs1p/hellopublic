import React from 'react';
import './SellOnline.css'; // You'll need to create this CSS file
import { ReactComponent as ShoppingSvg } from '../../../assets/shoppingSvg.svg';
import WhyChooseGS1 from './whyGs1/WhyGs1';
import FadeInSection from '../../../components/Transitions/Fadein';
import SlideInLeftSection from '../../Transitions/SideLeft/SideLeft';
import ZoomInSection from '../../Transitions/ZoomIn/ZoomIn';
import SlideInElement from '../../Transitions/Slidein';
import { Link } from 'react-router-dom';
const SellOnline = () => {
    return (
        <div className="gtin-page">
            <FadeInSection>
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Improve your online business with a GS1 GTIN.</h1>
                        {/* <button className="cta-button">Get your GTIN for selling online →</button> */}
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="info-section">
                    <div className="main-content">
                        <h2>If you want to sell products on e-commerce sites or Marketplaces, you need a GTIN.</h2>
                        <p>
                            Marketplaces like Daraz, OLX Pakistan, Telemart, and Shophive benefit from having a GTIN, a Global Trade Item Number. Additionally, international platforms such as Amazon, Mercado Libre, Cdiscount, eMAG, and JD.com also find GTINs valuable for improving product visibility and inventory management.
                        </p>
                        <p>
                            A GTIN is a unique number that identifies your product as your own. It is the number found beneath the barcode on product packaging and is used when listing products online.
                        </p>
                        <p>
                            With a GTIN issued by GS1*, you can list your products quickly and accurately, meeting marketplace requirements. Your GTIN is unique within the GS1 system, ensuring your product won't be confused with similar items. A GTIN also enhances the online visibility of your products.
                        </p>
                    </div>
                    <div className="sidebar">
                        <div className="info-box">
                            <ShoppingSvg height={200} width={200}></ShoppingSvg>
                            <h3>Did you know?</h3>
                            <p>
                                The GS1 GTIN is a recognised international standard and is
                                accepted globally. Once you have a GS1 GTIN, you can use the same
                                number to expand your business seamlessly to other e-commerce
                                sites, online marketplaces and physical retail stores.
                            </p>
                            <a href="#">Discover how GS1 standards power retail sectors</a>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <ZoomInSection>
                <WhyChooseGS1></WhyChooseGS1>
            </ZoomInSection>
            <SlideInElement>
                <div className="containerGTIN">
                    <div className="contentGTIN">
                        <h2>Ready for your barcode/GTIN?</h2>
                        <p>Available from 116 GS1 offices around the world</p>
                        <Link
                            to={`/Getabarcode`}
                        >
                            <button className="cta-button2244">Get your GTIN for selling online</button>
                        </Link>
                    </div>
                </div>
            </SlideInElement>
        </div>
    );
};

export default SellOnline;