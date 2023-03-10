import React from "react";
import ProjectCard from "./ProjectCard";
import { project1, project1Updated, project2, project4 } from "../assets";
import { motion } from "framer-motion";

const Projects = () => {
  const projectCardData = [
    {
      id: 1,
      title: "Woodside Bazaar",
      overview: project4,
      githubLink: "https://github.com/Tanzil748/woodside-ecommerce",
      demo: "#",
    },
    {
      id: 2,
      title: "ANI-MANGO",
      overview: project2,
      githubLink: "https://github.com/Tanzil748/ani-man_go/tree/main",
      demo: "https://tanzil748.github.io/ani-man_go/",
    },
    {
      id: 3,
      title: "Uno Royale",
      overview: project1,
      githubLink: "https://github.com/Tanzil748/uno-royale",
      demo: "#",
    },
    {
      id: 4,
      title: "QC TROPA Club Website",
      overview: project1Updated,
      githubLink: "https://github.com/Tanzil748/club-website",
      demo: "https://tanzil748.github.io/club-website/",
    },
  ];
  return (
    <section
      name="Projects"
      className="md:h-screen w-full snap-start scroll-mt-20"
    >
      {/* <div className="flex flex-col justify-center w-full h-full mx-auto p-3 pt-16 sm:pt-14 md:pt-0 max-w-6xl"> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 3, type: "spring", bounce: 0.1 }}
        variants={{
          visible: { opacity: 1, translateX: 0 },
          hidden: { opacity: 0, translateX: 100 },
        }}
      >
        <div className="lg:container mx-auto px-2">
          <h1 className="text-3xl pb-3 text-slate-300">My Projects</h1>
          <div className="grid sm:grid-cols-2 gap-2">
            {projectCardData.map(
              ({ id, title, overview, githubLink, demo }) => (
                <ProjectCard
                  key={id}
                  title={title}
                  overview={overview}
                  githubLink={githubLink}
                  demo={demo}
                />
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
    // </div>
  );
};

export default Projects;
