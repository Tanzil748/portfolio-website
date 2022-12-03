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
    <>
      <h1 className="flex justify-center">My Tech Stack</h1>
      <div className="flex mb-3 flex-col">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1">
            <img src={htmlLogo} alt="" />
          </div>
          <div className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1">
            <img src={cssLogo} alt="" />
          </div>
          <div className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1">
            <img src={tailwindLogo} alt="" className="w-[64px]" />
          </div>
          <div className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1">
            <img src={jsLogo} alt="" />
          </div>
          <div className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1">
            <img src={reactLogo} alt="" />
          </div>
          <div className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1">
            <img src={nodeLogo} alt="" />
          </div>
          <div className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1">
            <img src={mongoLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
