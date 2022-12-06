import React from "react";

const ProjectCard = ({ overview, title }) => {
  return (
    <div className=" bg-[#69809b] shadow-lg rounded-lg group flex justify-center items-center mx-auto">
      <div className="">
        <img src={overview} alt={title} className="rounded-t-lg" />
        <div className="flex justify-center items-center text-white text-xl">
          {title}
        </div>

        <div className="flex justify-between gap-3 p-2">
          <button className="w-1/2 bg-white rounded-md">Github Repo</button>
          <button className="w-1/2 bg-red-50 rounded-md">Live Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
