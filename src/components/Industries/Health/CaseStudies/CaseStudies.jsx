import React from 'react';
import './CaseStudies.css';
import Doctor from '../../../../assets/Doctors.png'
import FadeInElement from '../../../Transitions/FadeinElem';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'End-to-end product traceability enables safer, more efficient care for Lancashire.',
      description: 'Stock control was heavily reliant on manual processing, and orders and supplies were managed by a li...',
      category: 'Healthcare',
      image: Doctor
    },
    {
      id: 2,
      title: 'Reducing the global impact of environmentally harmful anaesthetic gases using a medical de...',
      description: '95% of anaesthetic gases used in an operation are not metabolised by the patient so a significant pr...',
      category: 'Healthcare',
      image: Doctor
    },
    {
      id: 3,
      title: 'Using GS1 standards to trace surgical and dental instruments',
      description: 'Keeping track of many surgical instruments by visual inspection presented problems from a risk manag...',
      category: 'Healthcare',
      image: Doctor
    }
  ];

  return (
    <div className="case-studies">
      <h2>Case studies</h2>
      <div className="case-studies-grid">
        {caseStudies.map(study => (
          <FadeInElement key={study.id}>  
            <div className="case-study-card">
              <img src={study.image} alt={study.title} className="case-study-image" />
              <div className="case-study-content">
                <p className="case-study-category">{study.category}</p>
                <h3 className="case-study-title">{truncateText(study.title, 50)}</h3>
                <p className="case-study-description">{truncateText(study.description, 80)}</p>
              </div>
            </div>
          </FadeInElement>
        ))}
      </div>
      <a href='https://www.gs1.org/insights-events/case-studies?f%5B0%5D=industry%3A1631' target='_blank' rel="noopener noreferrer" style={{textDecoration:'none'}}>
        <button className="case-studies-button">Explore Case Studies</button>
      </a>
    </div>
  );
};

export default CaseStudies;