import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
    </div>
  );
}

export default App;
