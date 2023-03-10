import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { motion } from "framer-motion";
import { heroImg } from "../assets";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import "../styles/hero.css";
import { fadeIn } from "./pageAnimation";

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="xl:container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center lg:items-start lg:pl-3"
        >
          <div className="text-4xl text-slate-300">Hi there, I'm</div>
          <div className="text-5xl py-2 text-slate-300">TANZIL HASSAN</div>
          <div>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                3000,
                "Full Stack Developer",
                3000,
                "UI/UX Enthusiast",
                3000,
              ]}
              wrapper="div"
              repeat={Infinity}
              className="text-red-500 text-4xl"
            />
          </div>
          <motion.ul
            className="flex gap-3 pt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.5 }}
          >
            <li>
              <a href="https://github.com/Tanzil748" target="_blank">
                <AiFillGithub size={30} className="hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tanzilhassan/"
                target="_blank"
              >
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
        </motion.div>

        <motion.div
          className="hidden lg:block relative h-[450px]"
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          {/* three js blob animation inspired from lama dev tutorial */}
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[2, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.9}>
              <MeshDistortMaterial
                color="blue"
                attach="material"
                distort={0.3}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            src={heroImg}
            alt="hero image"
            className="w-96 heroImgMov absolute"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
