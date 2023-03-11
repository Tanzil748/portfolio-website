import React from "react";
import { fadeIn } from "./pageAnimation";
import {
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  nodeLogo,
  mongoLogo,
  bootstrapLogo,
  tailwindLogo,
  githubLogo,
} from "../assets";
import { motion } from "framer-motion";

const TechStack = () => {
  const logoArray = [
    {
      id: 1,
      pic: htmlLogo,
      title: "HTML",
    },
    {
      id: 2,
      pic: cssLogo,
      title: "CSS",
    },
    {
      id: 3,
      pic: jsLogo,
      title: "Javascript",
    },
    {
      id: 4,
      pic: reactLogo,
      title: "React",
    },
    {
      id: 5,
      pic: nodeLogo,
      title: "Node",
    },
    {
      id: 6,
      pic: mongoLogo,
      title: "MongoDB",
    },
    {
      id: 7,
      pic: bootstrapLogo,
      title: "Bootstrap",
    },
    {
      id: 8,
      pic: tailwindLogo,
      title: "Tailwind",
    },
    {
      id: 9,
      pic: githubLogo,
      title: "Github",
    },
  ];
  return (
    <section
      className="min-h-screen flex flex-col justify-center"
      name="Tech Stack"
    >
      <motion.div
        className="xl:container mx-auto"
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <div>
          <h1 className="text-2xl lg:text-4xl text-slate-300 text-center font-paragraph">
            My Tech Stack
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {logoArray.map(({ id, pic, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-110 duration-500 py-2 rounded-lg"
            >
              <img
                src={pic}
                alt={title}
                className="w-32 mx-auto rounded-[1.3rem]"
              />
              <p className="pt-4 text-white font-semibold text-center">
                {title}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
