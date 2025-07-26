import React, { useState, useRef, useEffect } from "react";

export default function Events() {
  const events = [
    {
      title: "Independence Day Parade",
      date: "15 Aug 2025",
      description:
        "A grand parade conducted by NCC cadets to celebrate India's independence. Independence Day in India, celebrated on August 15th, commemorates the nation's freedom from British rule in 1947. It's a day of national pride and unity, marked by flag hoisting ceremonies, patriotic songs, and cultural programs across the country.",
      image: "/images/independence.jpg",
    },
    {
      title: "Annual NCC Camp",
      date: "Sept 2025",
      description:
        "The KPT (Karnataka Polytechnic) in Mangalore hosts an annual NCC camp, organized in association with the NCC group headquarters and the 18 Karnataka Battalion. This camp, a major training activity for the battalion, aims to familiarize cadets with the NCC syllabus and various training subjects. It features a comprehensive schedule including drill exercises, classroom sessions on naval subjects (for naval wing cadets), motivational guest lectures, sports, cultural programs, and social service initiatives. Cadets also participate in firing practice, adventure activities like trekking and rock climbing, and social activities like beach cleaning. A 10-day training camp including drills, adventure sports, and leadership activities.",
      image: "/images/camp.jpg",
    },
    {
      title: "Blood Donation Drive",
      date: "Oct 2025",
      description:
        "Karnataka Polytechnic (KPT) Mangaluru, also known as Government Polytechnic, is actively involved in social initiatives, including blood donation camps. KPT, as a nodal polytechnic in the region, coordinates academic activities for other institutions and is involved in various developmental projects. The institution, run by the Government of Karnataka, has a strong reputation for academic excellence and placement of its graduates. A social responsibility initiative encouraging cadets and students to donate blood.",
      image: "/images/blood.jpg",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const modalRef = useRef();

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedEvent(null);
      }
    };

    if (selectedEvent) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedEvent]);

  return (
    <section
      id="events"
      className="py-20 bg-red-100"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <h2 className="text-4xl font-semibold mb-8 text-center"> Events</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {events.map((event, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            <h3 className="text-2xl font-bold text-blue-800 hover:underline">
              {event.title}
            </h3>
            <p className="mt-2 text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative animate-slide-up"
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{selectedEvent.date}</p>
            <p className="text-gray-700">{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
