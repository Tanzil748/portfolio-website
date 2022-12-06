import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#17509b] to-[#0c2c56] overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
    </div>
  );
}

export default App;
