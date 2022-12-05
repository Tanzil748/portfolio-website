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
  const logoArray = [
    {
      id: 1,
      pic: htmlLogo,
      title: "html pic",
    },
    {
      id: 2,
      pic: cssLogo,
      title: "css pic",
    },
    {
      id: 3,
      pic: tailwindLogo,
      title: "tailwind pic",
    },
    {
      id: 4,
      pic: jsLogo,
      title: "js pic",
    },
    {
      id: 5,
      pic: reactLogo,
      title: "react logo",
    },
    {
      id: 6,
      pic: nodeLogo,
      title: "node pic",
    },
    {
      id: 7,
      pic: mongoLogo,
      title: "mongo pic",
    },
  ];
  return (
    <div
      name="Tech"
      className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <h1 className="pl-3 text-3xl">My Tech Stack</h1>
      <div className="flex flex-col pb-3">
        <div className="flex flex-wrap justify-center items-center">
          {logoArray.map(({ id, pic, title }) => (
            <div
              key={id}
              className="w-[80px] h-[80px] shadow-2xl bg-white p-2 m-1"
            >
              <img src={pic} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
