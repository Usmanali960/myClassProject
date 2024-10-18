// components/ImageSlider.js
// components/ImageSlider.js
import { useState } from "react";

const images = [
    "https://www.governorsindh.com/_next/static/media/slideShow3.0006489a.jpg",  // Add your image paths here
    "https://www.governorsindh.com/_next/static/media/slideShow5.b502aa01.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow6.03103579.jpg",
];
export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover w-[80vw] h-[500px] rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 font-bold -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800"
      >
        &larr;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 font-bold -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800"
      >
        &rarr;
      </button>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-8 rounded-full cursor-pointer transition-colors ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
