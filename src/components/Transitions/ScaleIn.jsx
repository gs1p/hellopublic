import React, { useEffect, useRef, useState } from 'react';

const ScaleInElement = ({ children, threshold = 0.1 }) => {
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(0.5)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.9s ease-out, opacity 0.9s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ScaleInElement;