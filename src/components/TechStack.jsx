import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import tailwindLogo from "../assets/tailwind.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/reactLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import mongoLogo from "../assets/mongoLogo.png";

const TechStack = () => {
  return (
    <div className="flex items-center flex-col">
      <h1>My Tech Stack</h1>
      <div className="flex">
        <img src={htmlLogo} alt="" />
        <img src={cssLogo} alt="" />
        <img src={tailwindLogo} alt="" className="w-[64px]" />
        <img src={jsLogo} alt="" />
        <img src={reactLogo} alt="" />
        <img src={nodeLogo} alt="" />
        <img src={mongoLogo} alt="" />
      </div>
    </div>
  );
};

export default TechStack;
