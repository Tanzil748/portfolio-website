import React, { useEffect } from "react";
import {
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  nodeLogo,
  mongoLogo,
} from "../assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechStack = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        translateY: -100,
      });
    }
  }, [inView]);

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
    <div name="Tech" className="w-full h-screen flex flex-col justify-center">
      <motion.div className="mx-auto" animate={animation} ref={ref}>
        <h1 className="pl-3 text-3xl pb-3">My Tech Stack</h1>
        <div className="">
          <div className="flex flex-wrap justify-center items-center">
            {logoArray.map(({ id, pic, title }) => (
              <div
                key={id}
                className="w-[140px] h-[140px] shadow-2xl bg-white p-2 m-1"
              >
                <img src={pic} alt={title} className="w-[124px] h-[124px]" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
