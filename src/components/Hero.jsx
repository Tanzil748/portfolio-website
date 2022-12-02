import React from "react";
import profile from "../assets/profile.jpg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="flex justify-around mb-10">
      <div className="flex flex-col justify-center items-center">
        <p>Tanzil Hassan</p>
        <p>Front End & Full Stack Developer</p>
        <ul className="flex gap-3">
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
      </div>
      <img src={profile} alt="" className="w-[300px]" />
    </div>
  );
};

export default Hero;
