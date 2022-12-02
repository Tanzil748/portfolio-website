import React from "react";

const ProjectCard = ({ project, title }) => {
  return (
    <div className="h-[300px] bg-red-500 p-1 flex flex-col items-center rounded-lg">
      <img src={project} alt={project} className="h-3/4 " />
      <h1 className="pb-1">{title}</h1>
      <button className="bg-green-500 py-2 px-5 rounded-full">More Info</button>
    </div>
  );
};

export default ProjectCard;
