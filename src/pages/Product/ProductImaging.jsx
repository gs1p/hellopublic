import React from 'react';
import './ProductImaging.css';
import FadeInElement from '../../components/Transitions/FadeinElem';

const ProductPhotography = () => {
    return (
        <section className="product-photography">
            <div className="about-us-container">
                <div className="overlay1"></div>
                <div className="content-wrapper">
                    <h1>Why use Product Photography?</h1>
                    <h2>Standards and solutions for your business success</h2>
                </div>
            </div>
            <div className="content23">
                <FadeInElement>
                <div className="content">
                    <img
                        src="https://shopatshams.com.pk/cdn/shop/files/1702124713_MINT-CHOCOLATE_400x.jpg?v=1714718542"
                        alt="Hico Indulge Ice Cream"
                        className="product-image"
                    />
                    <ul className="benefits-list">
                        <li>
                        High quality images compliant photography for selling on E-commerce stores
                        </li>
                        <li>
                        Upload product images to E-commerce stores with confidence they meet requirements
                        </li>
                        <li>
                        High quality images provide a competitive edge in a busy marketplace
                        </li>
                        <li>
                        The only official licensed barcode provider authorised to supply barcodes in Pakistan
                        </li>
                    </ul>
                </div>
                </FadeInElement>
                <FadeInElement>
                <div className="content">
                    <img
                        src="https://qne.com.pk/cdn/shop/products/orgsize_904WhatsApp_20Image_202023-06-06_20at_204.55.43_20PM_800x.jpg?v=1686054365"
                        alt="Coco Crunch"
                        className="product-image"
                    />
                    <ul className="benefits-list">
                        <li>
                            Showcase key features and product attributes using high resolution 2D and
                            3D images with major retailers in the food and grocery sector
                        </li>
                        <li>
                            Take shoppers on a visual journey
                        </li>
                        <li>
                            Give your product a competitive edge in an over-crowded marketplace
                        </li>
                        <li>
                            Minimise product returns with detailed product images
                        </li>
                    </ul>
                </div>
                </FadeInElement>
                <FadeInElement>
                <div className="content">
                    <img
                        src="https://himalayanchef.pk/cdn/shop/products/OatPorridge_f3726421-56cd-472b-9f01-156bd6d18a5e_1000x.jpg?v=1678146733"
                        alt="Barley Poridge"
                        className="product-image"
                    />
                    <ul className="benefits-list">
                        <li>
                        Innovative photography to differentiate your product online
                        </li>
                        <li>
                        Specialising in lighting, spritzing, concept and stylised photography for digital and print
                        </li>
                        <li>
                        Bespoke photography to help your product stand out
                        </li>
                        <li>
                        Complement your product with stylised image of real-life situations
                        </li>
                    </ul>
                </div>
                </FadeInElement>
            </div>

        </section>
    );
};

export default ProductPhotography;