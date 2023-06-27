import React, { useState, useEffect } from 'react';
import "../style/components/TextCarousel.scss";

const TextCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="text-carousel">
      {items.map((item, index) => (
        <span
          key={index}
          className={index === activeIndex ? 'active' : ''}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default TextCarousel;
