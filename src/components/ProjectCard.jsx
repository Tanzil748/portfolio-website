import React from "react";

const ProjectCard = ({ overview, title, githubLink, demo }) => {
  const githubHandler = (githubLink) => {
    const openGitHub = window.open(githubLink, "_blank", "noopener,noreferrer");
    if (openGitHub) openGitHub.opener = null;
  };

  const demoHandler = () => {
    if (demo !== "https://tanzil748.github.io/portfolio-website/") {
      const openDemo = window.open(demo, "_blank", "noopener,noreferrer");
      if (openDemo) openDemo.opener = null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 shadow-lg shadow-sky-600 rounded-lg overflow-hidden font-paragraph">
      <div>
        <img src={overview} alt={title} />
        <div className="text-center text-white text-lg font-semibold">
          {title}
        </div>

        <div className="flex justify-between gap-3 p-2">
          <button
            onClick={() => githubHandler(githubLink)}
            className="w-1/2 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 rounded-md text-white shadow-sm shadow-white hover:scale-105 duration-500"
          >
            Github Repo
          </button>
          <button
            onClick={() => demoHandler(demo)}
            className="w-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 rounded-md text-white shadow-sm shadow-white hover:scale-105 duration-500"
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
