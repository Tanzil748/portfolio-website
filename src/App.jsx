import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 overflow-x-hidden overflow-y-auto snap-y snap-mandatory h-[100vh] w-[100%]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
    </div>
  );
}

export default App;
