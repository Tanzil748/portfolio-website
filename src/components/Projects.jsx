import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { project1, project2 } from "../assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
        translateX: 100,
      });
    }
  }, [inView]);

  const projectCardData = [
    { id: 1, title: "QC TROPA Club Website", overview: project1 },
    { id: 2, title: "ANI-MANGO", overview: project2 },
    { id: 3, title: "ANI-MANGO", overview: project1 },
    { id: 4, title: "ANI-MANGO", overview: project2 },
  ];
  return (
    <div name="Projects" className="md:h-screen w-full">
      <div className="flex flex-col justify-center w-full h-full max-w-[1100px] mx-auto p-3 pt-16 sm:pt-14 md:pt-0">
        <motion.div animate={animation} ref={ref}>
          <h1 className="text-3xl pb-3 text-slate-300">My Projects</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {projectCardData.map(({ id, title, overview }) => (
              <ProjectCard key={id} title={title} overview={overview} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
