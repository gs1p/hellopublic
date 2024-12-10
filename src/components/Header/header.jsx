import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import GS1Logo from '../../assets/gs1-logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      title: 'About us', submenu: ['History',
        'Board of Directors',
        'WhyGS1', 
        // 'Team',
      ]
    },
    { title: 'Standards & Services' },
    { title: 'Industries', submenu: ['Retail', 'Healthcare', 'Transport & Logistics', 'Food & Agriculture', 'Selling Online', 'Technical Industries'] },
    {
      title: 'Tools & Services', submenu: [
        { name: 'Verified by GS1', 
          // newTab: true, url: 'https://www.gs1.org/services/verified-by-gs1/iframe'
         },
        'Barcode Guide',
        { name: 'Barcode Estimator' },
        'Barcode Verification', 'Update Your GS1 Identifier Registration',
        // { name: 'GTIN Management Standard Decision Tool', newTab: true, url: 'https://www.gs1.org/services/verified-by-gs1' },
        'Product Photography', 'Ten Steps to Using Barcodes',
        // 'Rehman',
        { name: 'Education & Training' },
      ]
    },
    { title: 'News & Events', submenu: [{ name: 'Case Studies', newTab: true, url: 'https://www.gs1.org/insights-events/case-studies' }] },
  ];

  const renderSubmenu = (submenu) => {
    const itemsPerColumn = 3;
    const columns = [];

    for (let i = 0; i < submenu.length; i += itemsPerColumn) {
      columns.push(submenu.slice(i, i + itemsPerColumn));
    }

    return (
      <div className="submenu">
        {columns.map((column, columnIndex) => (
          <ul key={columnIndex} className="submenu-column">
            {column.map((subItem, itemIndex) => (
              <li key={itemIndex}>
                {typeof subItem === 'object' && subItem.newTab ? (
                  <a href={subItem.url} target="_blank" rel="noopener noreferrer">
                    {subItem.name}
                  </a>
                ) : (
                  <Link
                    to={`/${(typeof subItem === 'string' ? subItem : subItem.name).toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {typeof subItem === 'string' ? subItem : subItem.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    );
  };

  return (
    <header className="header">
      <Link to={`/`}>
        <div className="logo">
          <img src={GS1Logo} alt="GS1 UK" />
        </div>
      </Link>
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.title === 'Tools & Services' ? (
                <span className='Header-Tools'>{item.title}</span>
              ) : (
                <Link to={`/${item.title.toLowerCase().replace(/\s/g, '-')}`}>{item.title}</Link>
              )}
              {item.submenu && (
                <div className="submenu-toggle" onClick={() => toggleMenu()}>
                  {renderSubmenu(item.submenu)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-buttons">
        <Link to={`/Getabarcode`}>
          <button className="Get-a-barcode">Get a barcode</button>
        </Link>
        <Link to={`/Contact`}>
          <button className="member-login">Contact Us...</button>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;