import React from "react";
import {
  htmlLogo,
  cssLogo,
  tailwindLogo,
  jsLogo,
  reactLogo,
  nodeLogo,
  mongoLogo,
} from "../assets";

const TechStack = () => {
  return (
    <>
      <h1 className="flex justify-center">My Tech Stack</h1>
      <div className="flex flex-col pb-3">
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
