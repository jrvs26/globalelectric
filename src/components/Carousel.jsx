import React, { useState, useEffect, useCallback } from "react";
import carouselBackground from "../images/carousel.jpg";

function Hero({ isScrolled }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const slideInterval = 2000;

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = useCallback(() => {
    const nextSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextSlide);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const slideTimer = setInterval(goToNextSlide, slideInterval);
    return () => clearInterval(slideTimer);
  }, [goToNextSlide]);

  return (
    <>
      <div
        id="indicators-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden h-screen md:h-72 lg:h-[75vh]">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className="carousel-item absolute inset-0 flex items-center justify-center bg-cover transition-opacity duration-500"
              style={{
                backgroundImage: `url(${carouselBackground})`,
                backgroundPosition: `center`,
                zIndex: currentSlide === index ? 10 : 1,
                opacity: currentSlide === index ? 1 : 0,
                backgroundSize: "cover", // Added this line
              }}
            >
              <div className="text-overlay">
                <h1 className="text-3xl text-white">
                  <strong>
                    {index === 1
                      ? "--Engineer--"
                      : index === 0
                      ? "--Supplier--"
                      : "--Contractor--"}
                  </strong>
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-300" : "bg-gray-900"
              }`}
              aria-current={currentSlide === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

export default Hero;
