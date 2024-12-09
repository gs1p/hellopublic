import React from 'react';
import './News.css';
import caseStudiesImage from '../../assets/caseStudy.jpg';
import gs1industryandstandard from '../../assets/gs1industryandstandard.png';
import independenceevent from '../../assets/independenceevent .png';
import digitalproductpassporteventcard from '../../assets/digitalproductpassporteventcard.png';
import digitalproductpassportssu from '../../assets/digitalproductpassportssu.jpg';

const News = () => {
  return (
    <div className="containerNews">
      <div className="event-sectionNews">
      <EventCard 
          image={digitalproductpassportssu}
          title="Awareness Session on Digital Product Passport with GS1 Standards "
          location="Sir Syed University of Engineering and Technology Karachi"
          date="November 20, 2024, 11:00 AM PKT"
           
        />  
      <EventCard 
          image={digitalproductpassporteventcard}
          title="Digital Product Passport Powered by GS1 Standards "
          location="IBA City Campus Karachi "
          date="November 20, 2024, 3:00 PM - 5:30 PM PKT"
          registrationUrl="https://forms.gle/bk3wvsxRdZXetPjK7" 
        />
        <EventCard 
          image={independenceevent}
          title="Pakistan Independence Day Celebrations"
          location="Karachi"
          date="14th August 2024"
        />
        <EventCard 
          image={gs1industryandstandard}
          title="GS1 Industry and Standards Event"
          location="Virtual"
          date="16 - 19 September 2024"
          
        />
      </div>
      <div className="case-studies-section">
        <CaseStudiesCard 
          image={caseStudiesImage}
          title="Case studies"
          description="Explore a wide range of GS1 case studies in one central library. Browse by topic, including industry, service, standard, location, and more to discover the benefits of GS1 standards and services."
          link="Access case studies"
        />
      </div>
    </div>
  );
}

const EventCard = ({ image, label, title, location, date, registrationUrl }) => (
  <div className="event-card">
    <img src={image} alt={title} className="event-image" />
    <div className="event-info">
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{date}</p>
      {registrationUrl && (
        <a href={registrationUrl} className="register-button" target="_blank" rel="noopener noreferrer">
          Register Now →
        </a>
      )}
    </div>
  </div>
);

const CaseStudiesCard = ({ image, title, description, link }) => (
  <div className="case-studies-card">
    <img src={image} alt={title} className="case-studies-image" />
    <div className="case-studies-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="https://www.gs1.org/insights-events/case-studies" className="case-studies-link" target="_blank" rel="noopener noreferrer">
        {link} →
      </a>
    </div>
  </div>
);

export default News;