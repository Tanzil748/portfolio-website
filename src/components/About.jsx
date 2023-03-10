import React from "react";
import { motion } from "framer-motion";
import { profile } from "../assets";
import { fadeIn } from "./pageAnimation";

const About = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="xl:container mx-auto flex">
        <motion.div
          className="basis-2/5 hidden lg:block"
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <img
            src={profile}
            alt="Tanzil profile image"
            className="w-96 rounded-lg"
          />
        </motion.div>
        <motion.div
          className="basis-full lg:basis-3/5 flex flex-col justify-around gap-y-5 px-2"
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl lg:text-4xl text-slate-300 text-center font-bold">
            About Me
          </h1>
          <p className="text-lg lg:text-2xl text-slate-200">
            I graduated from John Jay College in June 2022 with a Bachelors of
            Science in Computer Science & Information Security. Growing up, I've
            always been fascinated by computers, but I became truly interested
            in computer science only after I attended a coding event at my
            college.
            <br />
            <br />I began my tech journey in Data Analytics as I loved to
            visualize my findings. However, after joining my school's Computer
            Science Club, I realized that web development was my passion.
            Nowadays, I enjoy building React JS applications in my free time.
            I'm a lifelong learner and my eventual goal is to build apps in
            React Native. I look forward to meeting you!
          </p>
          <div className="flex justify-center">
            <button className="bg-[#144b93] py-2 px-3 rounded-full font-bold hover:scale-110 duration-500 text-white w-48">
              <a href="./sampleResume.pdf" download>
                Download Resume
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
