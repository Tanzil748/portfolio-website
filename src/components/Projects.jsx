import React from "react";
import ProjectCard from "./ProjectCard";
import { project1, project2 } from "../assets";

const Projects = () => {
  const projectCardData = [
    { id: 1, title: "QC TROPA Club Website", overview: project1 },
    { id: 2, title: "ANI-MANGO", overview: project2 },
    { id: 3, title: "ANI-MANGO", overview: project1 },
    { id: 4, title: "ANI-MANGO", overview: project2 },
  ];
  return (
    <div
      name="Projects"
      className="md:h-screen w-full bg-gradient-to-r from-green-500 via-purple-500 to-pink-500"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-[1000px] mx-auto p-3">
        <h1 className="text-3xl pb-3">My Projects</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {projectCardData.map(({ id, title, overview }) => (
            <ProjectCard key={id} title={title} overview={overview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
