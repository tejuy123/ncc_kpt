import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <h2 className="text-4xl font-semibold mb-12 text-center animate-fade-in">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        {/* Contact Info Display */}
        <div className="space-y-6 animate-slide-up">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value="Satheesha K M"
              readOnly
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              value="johndoe@example.com"
              readOnly
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
            />
          </div>

          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value="+91 9739004032"
              readOnly
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
            />
          </div>

          {/* Social Media Links */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/kpt_ncc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition text-xl"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow-md animate-slide-up">
          <iframe
            title="NCC KPT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1222828998123!2d74.852647914279!3d12.87288212188581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35058e12283c9%3A0xaba5c8dc92e8355c!2sGovernment%20Polytechnic%2C%20Mangalore!5e0!3m2!1sen!2sin!4v1625745000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
