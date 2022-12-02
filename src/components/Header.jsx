import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-5 mb-5">
      <h1>Tanzil's Portfolio</h1>
      <ul className="flex gap-4">
        <li>darkMode</li>
        <li>
          <a href="#" className="bg-red-500 py-3 px-5 rounded-full">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
