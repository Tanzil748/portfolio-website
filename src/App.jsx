import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-[#e3dcc2] dark:bg-[#565454]">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Hero />
        <About />
        <Projects />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
