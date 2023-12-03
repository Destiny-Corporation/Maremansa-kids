// src/App.js
import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const images = [
  'https://via.placeholder.com/800x400',
  'https://via.placeholder.com/800x401',
  'https://via.placeholder.com/800x402',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troque 3000 para o intervalo desejado em milissegundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-${index}`}
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Carousel;
