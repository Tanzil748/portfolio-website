import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateX: 0,
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
        translateX: -100,
      });
    }
  }, [inView]);

  return (
    <div name="About" className=" w-full h-screen">
      <div className="flex flex-col justify-center max-w-[1000px] h-full mx-auto pt-10 sm:pt-0">
        <motion.div animate={animation} ref={ref}>
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
