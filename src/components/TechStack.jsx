import React from "react";
import {
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  nodeLogo,
  mongoLogo,
} from "../assets";
import { motion } from "framer-motion";

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
      pic: jsLogo,
      title: "js pic",
    },
    {
      id: 4,
      pic: reactLogo,
      title: "react logo",
    },
    {
      id: 5,
      pic: nodeLogo,
      title: "node pic",
    },
    {
      id: 6,
      pic: mongoLogo,
      title: "mongo pic",
    },
  ];
  return (
    <div
      name="Tech"
      className="w-full h-screen flex flex-col justify-center snap-center"
    >
      <motion.div
        className="mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 3, type: "spring", bounce: 0.1 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: -100 },
        }}
      >
        <h1 className="pl-3 text-3xl pb-3 text-slate-300">My Tech Stack</h1>
        <div className="">
          <div className="flex flex-wrap justify-center items-center">
            {logoArray.map(({ id, pic, title }) => (
              <div
                key={id}
                className="w-[140px] h-[140px] shadow-2xl bg-[#69809b] p-2 m-1"
              >
                <img
                  src={pic}
                  alt={title}
                  className="w-[124px] h-[124px] hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
