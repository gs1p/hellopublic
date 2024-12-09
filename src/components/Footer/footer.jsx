import React from 'react';
import './footer.css';
import GS1Logo from '../../assets/gs1-logo.jpg';
import LinkedinLogo from '../../assets/linkedin.png' ;
import ytlogo from '../../assets/youtube.png' ;
import fblogo from '../../assets/facebook.png';
import xlogo from '../../assets/x.png';

import { Link } from 'react-router-dom';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          {/* <img src={GS1Logo} alt="GS1 PK" className="footer-logo" /> */}
        </div>
        <div className="footer-column">
         <Link className='link' to='/about-us'><h4>About us</h4> </Link>
        </div>
        <div className="footer-column">
        <Link className='link' to={`/Getabarcode`}>
          <h4>Get a barcode</h4>
          </Link>
        </div>
        <div className="footer-column">
        <Link className='link' to='/industries'>
          <h4>Our industries</h4>
          </Link>
        </div>
        <div className="footer-column">
          
        <Link className='link' to='/Contact'><h4>Support</h4></Link>
        </div>
      </div>
      <div className="footer-middle">
  <ul className="social-links">
    <li><a href="https://www.linkedin.com/company/gs1pakistan/" target="_blank" rel="noopener noreferrer" className="linkedin"><img src={LinkedinLogo} alt="LinkedIn" /></a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer" className="youtube"><img src={ytlogo} alt="YouTube" /></a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer" className="facebook"><img src={fblogo} alt="Facebook" /></a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer" className="twitter"><img src={xlogo} alt="Twitter" /></a></li>
  </ul>
</div>
      <div className="footer-bottom1">
        <p>
         GS1 Pakistan is the leading organization managing the barcode system used by retailers, suppliers, and their partners.
         <br/>
         Postal address: Office No.B-2, 2nd Floor, Azzainab Court, Campbell Street, Karachi-74200.
        </p>
        <p15>GS1 is a registered trademark of GS1 AISBL. All contents copyright &copy; GS1 AISBL 2014-{currentYear}</p15>
      </div>
    </footer>
  );
};

export default Footer;