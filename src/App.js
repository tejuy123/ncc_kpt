import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Selection from "./components/Selection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <Home />
      <About/>
      <Events />
      <Selection />
      <Gallery />
      <Contact />
      <Footer />
      
    </div>
  );
}
export default App;
