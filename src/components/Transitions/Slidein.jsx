import React, { useEffect, useRef, useState } from 'react';

const SlideInElement = ({ children, direction = 'left', distance = '50px', threshold = 0.1 }) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    const handleScroll = () => {
      if (currentRef) {
        const rect = currentRef.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport && !isVisible) {
          setVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, threshold]);

  const getSlideTransform = () => {
    switch (direction) {
      case 'right': return `translateX(-${distance})`;
      case 'up': return `translateY(${distance})`;
      case 'down': return `translateY(-${distance})`;
      default: return `translateX(${distance})`;
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transform: isVisible ? 'translate(0)' : getSlideTransform(),
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default SlideInElement;