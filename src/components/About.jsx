import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/images/kpt-ncc.jpg" // Replace with your actual image path
            alt="KPT NCC Mangalore"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            About KPT NCC Mangalore
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            The National Cadet Corps (NCC) unit at Karnataka Polytechnic (KPT), Mangalore, plays a vital role in fostering discipline, leadership, and a spirit of national service among students. 
            KPT hosts both Army and Naval wings under the 18 Karnataka Battalion and 6 Karnataka Naval Unit NCC respectively. Cadets undergo rigorous training including drills, weapon handling, 
            adventure camps, and community service activities.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            The NCC unit at KPT Mangalore is known for its enthusiastic participation in Republic Day camps, annual training camps, and social initiatives like blood donation drives, 
            environmental awareness programs, and Swachh Bharat campaigns. It instills values of unity and discipline, shaping cadets into responsible citizens and future leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
