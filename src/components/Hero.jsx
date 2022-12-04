import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full pt-4 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <p className="text-5xl">Tanzil Hassan</p>
        <p className="text-xl">Front End & Full Stack Developer</p>
        <ul className="flex gap-3 justify-center">
          <li>
            <a href="#">
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Hero;
