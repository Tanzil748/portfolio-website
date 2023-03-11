import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    // spread background color to all components
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
