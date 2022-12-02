import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>My Projects</h1>
      <div className="grid grid-cols-3 grid-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
