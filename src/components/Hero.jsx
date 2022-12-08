import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full pt-4 flex justify-center items-center snap-center"
    >
      <div>
        <motion.p
          className="text-5xl py-2 text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Tanzil Hassan
        </motion.p>
        <motion.p
          className="text-xl pb-2 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.5 }}
        >
          Front End & Full Stack Developer
        </motion.p>
        <motion.ul
          className="flex gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <li>
            <a href="https://github.com/Tanzil748" target="_blank">
              <AiFillGithub size={30} className="hover:scale-110" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tanzilhassan/" target="_blank">
              <AiFillLinkedin
                size={30}
                color="#0072b1"
                className="hover:scale-110"
              />
            </a>
          </li>
          <li>
            <a href="mailto:tanzilhassan333@gmail.com">
              <MdOutlineMarkEmailUnread
                color="orange"
                size={30}
                className="hover:scale-110"
              />
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Hero;
