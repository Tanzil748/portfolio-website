import React from "react";
import ProjectCard from "./ProjectCard";
import { project1, project1Updated, project2, project4 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "./pageAnimation";

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
    {
      id: 5,
      title: "Portfolio Website",
      overview: project1,
      githubLink: "https://github.com/Tanzil748/portfolio-website",
      demo: "https://tanzil748.github.io/portfolio-website/",
    },
  ];
  return (
    <section className="min-h-screen">
      <motion.div
        className="xl:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2"
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <div>
          <h1 className="text-2xl lg:text-4xl text-slate-300 text-center md:text-start pb-5">
            My Projects
          </h1>
          <p className="text-lg lg:text-2xl text-slate-200 text-center md:text-start">
            Check out my latest and favorite projects! The projects range in
            simplicity from a school club landing page to an entire full stack
            application with a working frontend & backend.
          </p>
        </div>
        {projectCardData.map(({ id, title, overview, githubLink, demo }) => (
          <ProjectCard
            key={id}
            title={title}
            overview={overview}
            githubLink={githubLink}
            demo={demo}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
