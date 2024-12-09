import React from 'react';
import './Barcode.css';
import backgroundImage from './barcode.png';
import Carousel from './carousel/carousel';
import backgroundImage2 from './hand.jpg';
import reg from './reg.jpg';
import money from './rupee.jpg';
import product from './sell.jpg';
import sign from './sign.jpg';
import invoice from './invoice.jpg';
// import sizes from './sizes.jpeg';
// import gtins from './gtins.jpg';
// import choco from './choco.jpg';
// import size from './size.webp';
// import multipack from './multi.jpg';
import { Link } from 'react-router-dom';
import AnimatedPage from '../What we do/Animation/AnimatedPage';

const Barcode = () => {
  const handleApplyNow = () => {
    // Replace this URL with the actual path to your downloaded form
    const formUrl = 'https://raw.githubusercontent.com/huzaifa21-glitch/gs1-forms/4d09a9c1e070b060bf7c5fcc3b4cc467238cf07f/GS1-Company-Prefix-License-Application-%20General.pdf';
    window.open(formUrl, '_blank');
  };

  const handleApplyNow2 = () => {
    // Replace this URL with the actual path to your downloaded form
    const formUrl = 'https://raw.githubusercontent.com/huzaifa21-glitch/gs1-forms/4d09a9c1e070b060bf7c5fcc3b4cc467238cf07f/GS1-Company-Prefix-License-Application-Health%20Care%20-%20Copy.pdf';
    window.open(formUrl, '_blank');
  };

  const handleApplyNow3  = () => {
    // Replace this URL with the actual path to your form file
    const formUrl = 'https://github.com/huzaifa21-glitch/gs1-forms/raw/main/GS1-Company-Prefix-UDI-License-Application.docx';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = formUrl;
    
    // Set the download attribute with the desired filename
    link.setAttribute('download', 'GS1-Application-Form.pdf');
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the body
    document.body.removeChild(link);
  };

  const handleApplyNow4 = () => {
    // Replace this URL with the actual path to your downloaded form
    const formUrl = 'https://raw.githubusercontent.com/huzaifa21-glitch/gs1-forms/4d09a9c1e070b060bf7c5fcc3b4cc467238cf07f/Update-Form.pdf';
    window.open(formUrl, '_blank');
  };

    return (
    <div classname= 'main'>
      <div className="barcode-container" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="overlay2"></div>
        <div className="content-barcode">
        <AnimatedPage direction='topToBottom'>
          <h1>GS1 Barcode</h1>
          </AnimatedPage>
          <AnimatedPage direction='bottomToTop'>
          <h2>Disclosing Product Details Instantly</h2>
          </AnimatedPage>
        </div>
      </div>
      <div className='text-contain'>
      <AnimatedPage direction='bottomToTop'>
        <p>Obtaining a unique barcode is the first step in enhancing your product's visibility and traceability in the marketplace. Our barcodes are designed according to global standards so your products get identified and managed across different supply chains. Begin your journey with us today and experience the ease and reliability that GS1 barcodes bring to your organization.</p>
        </AnimatedPage>
      </div>
      <Carousel></Carousel>
    <div className="simple-container">
    <AnimatedPage direction='bottomToTop'>
      <h2>Get a barcode in few simple steps</h2>
    </AnimatedPage>
    
      <div className="steps-container">
      <AnimatedPage direction='bottomToTop'>
        <div className="step">
          <div className="image-container1">
            <img src={reg} />
          </div>
          <h2>1. Fill the Application form</h2>
          {/* Email us at <a href="mailto:info@gs1pk.org">info@gs1pk.org</a> or you can call as well at <a href="tel:021-32215844">021 32215844</a> */}
          <p>Download and fill the registration form given below, and make sure to fill accurate and detailed information.</p>
        </div>
        </AnimatedPage>
        <AnimatedPage direction='bottomToTop'>
        <div className="step">
          <div className="image-container1">
            <img src={sign} />
          </div>
          <h2>2. Fill, Sign, and Submit </h2>
          <p>After filling out the form, print it, sign it, and submit it to our office.</p>
        </div>
        </AnimatedPage>
        <AnimatedPage direction='bottomToTop'>
        <div className="step">
          <div className="image-container1">
            <img src={invoice} />
          </div>
          <h2>3. Generate Invoice </h2>
          <p>GS1 will generate an invoice for the applicable fees and send it to you.</p>
        </div>
        </AnimatedPage>
        </div>
        <div className="steps-container">
        <AnimatedPage direction='bottomToTop'>
        <div className="step">
          <div className="image-container1">
            <img src={money} />
          </div>
          <h2>4. Pay the Fees </h2>
          <p>Once you receive the invoice, proceed with the payment. Your GTINs will be processed and allocated within 3-4 working days.</p>
        </div>
        </AnimatedPage>
        <AnimatedPage direction='bottomToTop'>
        <div className="step">
          <div className="image-container1">
            <img src={product}/>
          </div>
          <h2>5. Start selling with GTINs</h2>
          <p>Receive your GTINs and begin integrating them into your products to enhance their market visibility and traceability.</p>
        </div>
        </AnimatedPage>
      </div>
     
    </div>
    <div className="online-application">
    <AnimatedPage direction='topToBottom'>
      <h1>Download Application Forms</h1>
    </AnimatedPage>
    <AnimatedPage direction='bottomToTop'>
      <p className="description-online">
      Our memberships have been designed to meet a variety of requirements for improving your business operations. To become a member of GS1 Pakistan, please download and complete the application form below.
      </p>
      </AnimatedPage>
      <AnimatedPage direction='bottomToTop'>
      <div className="membership-option">
        <h2>General</h2>
        <p>
        The General category includes wide range of products, such as packaged food, agricultural products, and industrial goods etc. By assigning GTINs to these items, the business ensures that its products are identified and traceable throughout the supply chain, thus enhancing efficiency and transparency.
        </p>
        <div className="button-container">
          <button className="apply-button" onClick={handleApplyNow}>Download</button>
        </div>
      </div>
      </AnimatedPage>
      <AnimatedPage direction='bottomToTop'>
      <div className="membership-option">
        <h2>Healthcare</h2>
        <p>
        The Healthcare category is primarily designed for medical products and pharmaceuticals. GS1 standards ensure the accurate identification and traceability of pharmaceuticals, medical equipment, and other healthcare products, which improves patient safety and regulatory compliance.
        </p>
        <div className="button-container">
          <button className="apply-button" onClick={handleApplyNow2}>Download</button>
        </div>
      </div>
      </AnimatedPage>
      <AnimatedPage direction='bottomToTop'>
      <div className="membership-option">
        <h2>Unique Device Identification (UDI)</h2>
        <p>
        The UDI category is dedicated to the unique identification of medical devices. By assigning UDIs, manufacturers may ensure that their devices are consistently and uniquely identifiable, allowing for better monitoring, traceability, and recall processes, eventually enhancing patient safety and healthcare results.
        </p>
        <div className="button-container">
          <button className="apply-button" onClick={handleApplyNow3}>Download</button>
        </div>
      </div>
      </AnimatedPage>
      <AnimatedPage direction='bottomToTop'>
      <div className="membership-option">
        <h2>Update Form</h2>
        <p>
        To make changes to your existing items, fill out the Update Form. Whether you need to update product information, modify attributes, or change any other details, this form will help you maintain your product data accurate and up to date. Keeping your product information up to date promotes uniformity throughout supply chains and improves overall data quality and integrity.
        </p>
        <div className="button-container">
          <button className="apply-button" onClick={handleApplyNow4}>Download</button>
        </div>
      </div>
      </AnimatedPage>
    </div>
    <div className="final-container" style={{backgroundImage: `url(${backgroundImage2})`}}>
        <div className="over2"></div>
        <div className="content-final">
          <AnimatedPage direction='bottomToTop'>
          <h1>Need help?</h1>
          </AnimatedPage>
          <AnimatedPage direction='bottomToTop'>
          <p>Need assistance with GS1 standards, barcodes, or navigating our services? Reach out to us directly for personalized support and expert guidance.</p>
          </AnimatedPage>
            <Link to={`/Contact`}>
            <button className="faq-button-final9">Get in touch &rarr;</button></Link>
        </div>
      </div>
    
    </div>

  );
};
export default Barcode;