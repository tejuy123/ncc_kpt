import React from "react";

const Selection = () => {
  return (
    <section
      id="selection"
      className="py-16 bg-gray-100 px-6"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
        NCC Enrollment Process – KPT Mangalore
      </h2>

      <div className="max-w-4xl mx-auto text-lg text-gray-800 leading-relaxed">
        <p className="mb-4">
          Enrollment at <strong>Government Polytechnic Mangalore (KPT)</strong> into the National Cadet Corps (NCC) is conducted at the beginning of each academic year. Students with a strong inclination toward discipline, leadership, and patriotism are encouraged to apply.
        </p>

        <p className="mb-4">
          The <strong>selection process</strong> includes:
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Physical Fitness Test</strong> – including running, push-ups, and basic endurance checks.</li>
            <li><strong>Personal Interview</strong> – to assess interest, attitude, and motivation for joining NCC.</li>
            <li><strong>Medical Clearance</strong> – basic health and fitness criteria must be met.</li>
          </ul>
        </p>

        <p className="mb-4">
          Selected cadets become part of the esteemed <strong>3 Karnataka Battalion NCC</strong>, representing KPT at various district, state, and national level events.
        </p>

        <p className="mb-4">
          <strong>Benefits of Joining NCC at KPT:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>National Camp Participation</strong> – RDC, TSC, CATC, etc.</li>
            <li><strong>Leadership Training</strong> & Personality Development</li>
            <li><strong>Priority in Government Jobs</strong> with NCC certificates (A, B, and C)</li>
            <li><strong>Service to Nation</strong> and development of civic responsibility</li>
          </ul>
        </p>

        <p className="mt-6 text-center text-blue-800 font-semibold">
          “Join NCC – March with Pride, Lead with Honor.”
        </p>
      </div>
    </section>
  );
};

export default Selection;
