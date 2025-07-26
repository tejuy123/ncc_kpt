import React from "react";

export default function Footer() {
  return (
    <footer
      className="py-6 bg-blue-900 text-white text-center"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm md:text-base">
          © 2025 <strong>NCC KPT Mangalore</strong>. All Rights Reserved.
        </p>
        <p className="text-xs mt-1">Designed and maintained by the NCC Web Team.</p>
      </div>
    </footer>
  );
}
