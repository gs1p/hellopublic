import React from 'react';
import './Train.css';
import backgroundImage from './train1.jpg';
import AnimatedPage from '../What we do/Animation/AnimatedPage';
import checkIcon from './icon.png';
import { Link } from 'react-router-dom';
import ScaleInElement from '../../components/Transitions/ScaleIn';
import SlideInRightSection from '../../components/Transitions/SIdeRight/SideRight';
import SlideInLeftSection from '../../components/Transitions/SideLeft/SideLeft';

const Training = () => {
  return (

    <div className='main'>
      <div className="Train-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay1213"></div>
        <div className="content-Train">
          <ScaleInElement>
            <h1>Welcome to the GS1 Learning Zone</h1>
          </ScaleInElement>
        </div>
      </div>
      <div className='content-contain'>
        <AnimatedPage direction='bottomToTop'>
          <p>Need to know more about bar coding, EDI, data sharing or traceability? Want to understand the basics of GS1 standards used across the supply chain? If you don't have time to attend a classroom course why not consider taking some of the GS1 online education modules?</p>
        </AnimatedPage>
      </div>
      <AnimatedPage direction='bottomToTop'>
      <p className="description678">
        The e-Learning Zone is an online training platform that provides an ideal alternative for GS1 Pakistan members and registered solution providers to learn at a time and place that suits them. Our online training provides a wide range of courses and modules on essential aspects of GS1 supply chain standards and their practical application. Learning is self-paced and users can revise and revisit any section or module as needed.
      </p>
      </AnimatedPage>
      <ScaleInElement>
      <button className="faq-button345">
        <a href="https://training.gs1.org/pages/18/home"> Go to the e-learning zone &rarr;</a>
      </button>
      </ScaleInElement>
      <div className='Second-container12'>
      <AnimatedPage direction='topToBottom'>
        <h2>What can you learn about on a GS1 training course?</h2>
        </AnimatedPage>
      </div>
      <div className="gs1-banner234">
        {/* <h1 className="gs1-title">What can you learn about on a GS1 training course?</h1> */}
        <AnimatedPage direction='topToBottom'>
        <ul className="gs1-benefits">
          <li>
            <img src={checkIcon} alt="Check" className="check-icon" />
            How to identify items (products, shipping units, locations, assets) using GS1 standard identification numbers.
          </li>
          <li>
            <img src={checkIcon} alt="Check" className="check-icon" />
            The technical requirements and specifications for barcode symbols.
          </li>
          <li>
            <img src={checkIcon} alt="Check" className="check-icon" />
            Using RFID tags for automated data capture.
          </li>
          <li>
            <img src={checkIcon} alt="Check" className="check-icon" />
            EDI and standard business message exchange (for orders, invoices and other business transactions).
          </li>
          <li>
            <img src={checkIcon} alt="Check" className="check-icon" />
            Product traceability based on global standards and best practices.
          </li>
          <li>
            <img src={checkIcon} alt="Check" className="check-icon" />
            Managing product data and maintaining high data quality.
          </li>
          <li>
            <img src={checkIcon} alt="Check" className="check-icon" />
            The principles for global data exchange and much more.
          </li>
        </ul>
        </AnimatedPage>
        <ScaleInElement>
        <button className="faq-button3456">
          <a href="https://training.gs1.org/pages/18/home"> View Courses &rarr;</a>
        </button>
        </ScaleInElement>
      </div>
      <div className='courses123'>
      <AnimatedPage direction='bottomToTop'>
        <h2>Courses for those new to GS1 standards</h2>
        <p>For those new to the implementation of GS1 barcodes we recommend the "Getting Started with GS1" course. On this course you will cover the basics of product identification and the allocation of product codes called GTINs or Global Trade Item Numbers. This course also covers the key points to be observed when creating and printing barcode symbols for your products. This course is free to all paid up Members of GS1 Pakistan.</p>
      </AnimatedPage>
      <AnimatedPage direction='bottomToTop'>
        <h2>GS1 Certificate Courses</h2>
        <p>For those requiring a deeper understanding of the fundamentals of GS1 standards implementation, and would like to earn a GS1 Certificate to validate their knowledge there are Certificate and Advanced Certificate course options available. You need to pass the Certificate Assessment with a minimum grade of 80% in order to achieve the award.</p>
        </AnimatedPage>
        <AnimatedPage direction='bottomToTop'>
        <h2>Register for access to the GS1 Learning Zone</h2>
        <p>Accessing the GS1 Learning Zone simply requires basic email registration. Register now to begin your training.
          When your registration has been approved you will be able to view and register for the specific courses you would like to take.</p>
          </AnimatedPage>
          <AnimatedPage direction='bottomToTop'>
        <h2>Training Support</h2>
        </AnimatedPage>
        <div className='Link-contact'>
        <AnimatedPage direction='bottomToTop'>
          <p>
            Please contact us if you would like more information on the use of The Learning Zone.
            <Link to={`/Contact`}> Click here</Link>

          </p>
          </AnimatedPage>
        </div>

      </div>
    </div>


  );
};

export default Training;