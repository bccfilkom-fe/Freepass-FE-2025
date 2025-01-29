import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Menu/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;