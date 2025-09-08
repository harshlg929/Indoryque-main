import React, { useEffect, useState } from "react";
import "./component.css";
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initially based on current width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`carousel-container ${isMobile ? "mobile" : ""}`}>
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].caption}
        />
        <div className="caption">{slides[currentIndex].caption}</div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
            <span className="carousel-control-prev-icon col-12 col-sm-12 " aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next " href="#carouselExampleFade" role="button" data-slide="next" onClick={nextSlide} >
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
  </a>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
