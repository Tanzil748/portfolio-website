import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const headerLinks = [
    {
      name: "Home",
      id: 1,
    },
    {
      name: "About",
      id: 2,
    },
    {
      name: "Projects",
      id: 3,
    },
    {
      name: "Tech",
      id: 4,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full px-2 h-14 fixed bg-white">
      <ul className="hidden sm:flex">
        {headerLinks.map(({ name, id }) => (
          <li
            key={id}
            className="px-3 font-bold cursor-pointer hover:scale-110 duration-150"
          >
            {name}
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer z-10 sm:hidden"
        onClick={() => setSideMenu(!sideMenu)}
      >
        {sideMenu ? (
          <AiOutlineClose size={30} />
        ) : (
          <RxHamburgerMenu size={30} />
        )}
      </div>

      {sideMenu && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500">
          {headerLinks.map(({ name, id }) => (
            <li key={id} className="text-3xl cursor-pointer py-4 font-bold">
              {name}
            </li>
          ))}
        </ul>
      )}

      <ul className="flex gap-4">
        <li>darkMode</li>
        <li className="hover:scale-105 duration-150">
          <a href="#" className="bg-red-500 py-3 px-5 rounded-full font-bold">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
