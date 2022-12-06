import React from "react";

const ProjectCard = ({ overview, title, githubLink, demo }) => {
  const githubHandler = (githubLink) => {
    const openGitHub = window.open(githubLink, "_blank", "noopener,noreferrer");
    if (openGitHub) openGitHub.opener = null;
  };

  const demoHandler = () => {
    const openDemo = window.open(demo, "_blank", "noopener,noreferrer");
    if (openDemo) openDemo.opener = null;
  };

  return (
    <div className=" bg-[#69809b] shadow-lg rounded-lg group flex justify-center items-center mx-auto">
      <div className="">
        <img src={overview} alt={title} className="rounded-t-lg" />
        <div className="flex justify-center items-center text-white text-xl">
          {title}
        </div>

        <div className="flex justify-between gap-3 p-2">
          <button
            onClick={() => githubHandler(githubLink)}
            className="w-1/2 bg-white rounded-md"
          >
            Github Repo
          </button>
          <button
            onClick={() => demoHandler(demo)}
            className="w-1/2 bg-red-50 rounded-md"
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
