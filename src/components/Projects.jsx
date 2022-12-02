import React from "react";
import ProjectCard from "./ProjectCard";
import project2 from "../assets/project2.png";
import project1 from "../assets/project1.png";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>My Projects</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-3">
        <ProjectCard project={project1} title="Ecommerce" />
        <ProjectCard project={project2} title="Crypto App" />
        <ProjectCard project={project2} title="ANI-MANGO" />
        <ProjectCard project={project1} title="QC TROPA Club Website" />
      </div>
    </div>
  );
};

export default Projects;
