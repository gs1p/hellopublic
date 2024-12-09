import React, { useEffect, useRef } from 'react';
import './GS1BoardOfDirectors.css';
import AnimatedPage from '../What we do/Animation/AnimatedPage';
import { FaUsers, FaLightbulb, FaGlobe, FaHandshake } from 'react-icons/fa';

const GS1BoardOfDirectors = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="gs1-board-of-directors-container">
      <AnimatedPage direction='bottomToTop'>
        <header className="gs1-board-of-directors-header">
          <h1>GS1 Board of Directors</h1>
        </header>
      </AnimatedPage>

      <AnimatedPage direction='leftToRight'>
        <section ref={(el) => (sectionRefs.current[0] = el)} className="gs1-board-of-directors-section">
          <div className="icon-wrapper">
            <FaUsers className="section-icon" />
          </div>
          <h2>Our Mission</h2>
          <p>At GS1, our Board of Directors are committed to driving global standards that improve efficiency, safety, and visibility across supply chains in multiple sectors.</p>
        </section>
      </AnimatedPage>

      <AnimatedPage direction='rightToLeft'>
        <section ref={(el) => (sectionRefs.current[1] = el)} className="gs1-board-of-directors-section">
          <div className="icon-wrapper">
            <FaLightbulb className="section-icon" />
          </div>
          <h2>Our Leadership</h2>
          <p>Our Board comprises of industry leaders with diverse expertise, guiding GS1's strategic direction and ensuring we remain at the forefront of global standards development.</p>
        </section>
      </AnimatedPage>

      ' {/* <AnimatedPage direction='bottomToTop'>
        <section ref={(el) => (sectionRefs.current[2] = el)} className="gs1-board-of-directors-section team-section">
          <h2>Meet Our Board</h2>
          <div className="team-grid">
            {[
              { name: 'John Doe', role: 'Chairman', image: 'https://i.pravatar.cc/150?img=1' },
              { name: 'Jane Smith', role: 'Vice Chair', image: 'https://i.pravatar.cc/150?img=5' },
              { name: 'Mike Johnson', role: 'Treasurer', image: 'https://i.pravatar.cc/150?img=7' },
              { name: 'Sarah Brown', role: 'Secretary', image: 'https://i.pravatar.cc/150?img=10' }
            ].map((member, index) => (
              <div key={index} className="team-member">
                <div className="profile-image-wrapper">
                  <img src={member.image} alt={member.name} className="profile-image" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedPage>*/}

      <AnimatedPage direction='leftToRight'>
        <section ref={(el) => (sectionRefs.current[3] = el)} className="gs1-board-of-directors-section">
          <div className="icon-wrapper">
            <FaGlobe className="section-icon" />
          </div>
          <h2>Our Global Impact</h2>
          <p>With representation from various industries and regions, our Board ensures that GS1 standards meet the needs of businesses and consumers worldwide, facilitating seamless global trade.</p>
        </section>
      </AnimatedPage>

      <AnimatedPage direction='rightToLeft'>
        <section ref={(el) => (sectionRefs.current[4] = el)} className="gs1-board-of-directors-section">
          <div className="icon-wrapper">
            <FaHandshake className="section-icon" />
          </div>
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Collaboration: Fostering partnership across industries</li>
            <li>Innovation: Driving technological advancements in standards</li>
          </ul>
        </section>
      </AnimatedPage>
    </div>
  );
};

export default GS1BoardOfDirectors;