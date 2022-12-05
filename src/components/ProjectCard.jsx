import React from "react";

const ProjectCard = ({ overview, title }) => {
  return (
    <div className=" bg-gray-500 shadow-lg rounded-lg group flex justify-center items-center mx-auto">
      <div className="">
        <img src={overview} alt={title} className="rounded-t-lg" />
        <div className="flex justify-center items-center">{title}</div>

        <div className="flex justify-between">
          <button className="w-1/2 ">Github Repo</button>
          <button className="w-1/2">Live Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
