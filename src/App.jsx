import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
    </div>
  );
}

export default App;
