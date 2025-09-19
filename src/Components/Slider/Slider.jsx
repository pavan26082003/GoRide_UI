import React, { useState, useEffect } from 'react';
import './Slider.css';

const BusSlider = () => {
 const images = [
  // Add more from Pexels
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://svmchaser.wordpress.com/wp-content/uploads/2015/12/30d30-tsr2bwatermark2b-2b1748.jpg"  ,

  "https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/285363/gallery_g4.jpg",
"https://www.constructionweekonline.com/cloud/2021/07/06/Volvo-electric-bus-web.jpg",  
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/269917/about_img.jpg"

];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-section" id='Explore'>
      <h2>Our Fleet</h2>
      <p>Travel in comfort with our modern bus fleet</p>
      
      <div className="slider-container">
        <button className="slider-arrow left-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        
        <div className="slider">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Bus ${index + 1}`} />
                <div className="slide-overlay">
                  <h3>Luxury Bus {index + 1}</h3>
                  <p>Comfortable seating • Air conditioning • Free WiFi</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="slider-arrow right-arrow" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BusSlider;