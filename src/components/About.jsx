import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="About" className=" w-full h-screen">
      <div className="flex flex-col justify-center h-full mx-auto pt-10 sm:pt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 3, type: "spring", bounce: 0.1 }}
          variants={{
            visible: { opacity: 1, translateX: 0 },
            hidden: { opacity: 0, translateX: -100 },
          }}
        >
          <h1 className="text-3xl pl-3 text-slate-300">About Me</h1>
          <div className="text-xl p-3 text-slate-200">
            <p>
              Hi there! I graduated from John Jay College in June 2022 with a
              Bachelors of Science in Computer Science & Information Security.
              Growing up, I've always been fascinated by computers, but I became
              truly interested in computer science only after I attended a
              coding event at my college.
              <br />
              <br />I began my tech journey in Data Analytics as I loved to
              visualize my findings. However, after joining my school's Computer
              Science Club, I realized that web development was my passion.
              Nowadays, I enjoy building React JS applications in my free time.
              I'm a lifelong learner and my eventual goal is to build apps in
              React Native. I look forward to meeting you!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
