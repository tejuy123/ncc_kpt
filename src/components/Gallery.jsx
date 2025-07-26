import React, { useState } from "react";

export default function Gallery() {
  const imgs = [
    "event1.jpg",
    "event2.jpg",
    "event3.jpg",
    "event4.jpg",
    "event5.jpg",
    "event6.jpg",
    "event7.jpg",
    "event8.jpg",
    "event9.jpg",
    "event10.jpg",
    "event11.jpg",
    "event12.jpg"
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-semibold mb-8 text-center">Gallery</h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {imgs.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={process.env.PUBLIC_URL + `/images/${img}`}
              alt={`Event ${i + 1}`}
              className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
       <section id="events" className="py-20 bg-red-600"></section>
      {/* Modal for enlarged image */}
      {selectedImg && (
        <div

          className="fixed inset-0 bg-yellow-500 bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="max-w-3xl w-full px-4">
            <img
              src={process.env.PUBLIC_URL + `/images/${selectedImg}`}
              alt="Enlarged Event"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
