import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Homeiiiii", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Enrollment", href: "#selection" }, // Changed here
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="bg-blue-900 text-white sticky top-0 z-50 shadow-md"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wider text-yellow-300">
          NCC KPT
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-yellow-400 transition-colors duration-200 text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-blue-800 border-t border-blue-700">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg border-b border-blue-700 hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
