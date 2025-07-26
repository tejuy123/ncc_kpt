import React, { useEffect, useState } from "react";

// Add your images here (place them in public/images/)
const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slideshow background */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i}`}
          className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-1000 ease-in-out ${
            i === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div
        className="relative text-center text-white z-10 px-4"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">
          NCC KPT Mangalore
        </h1>
        <p className="text-xl md:text-2xl drop-shadow-sm">
          Discipline • Unity • Nation
        </p>
      </div>
    </section>
  );
}
