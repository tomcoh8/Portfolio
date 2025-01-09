import React, { useState } from 'react';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <button className="carrousel-button prev" onClick={prevSlide}>
        &#9664;
      </button>
      <div className="carrousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="carrousel-button next" onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default Carrousel;
