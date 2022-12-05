import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

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
    <motion.div
      className="flex justify-between items-center w-full px-2 h-14 fixed bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <ul className="hidden sm:flex">
        {headerLinks.map(({ name, id }) => (
          <li
            key={id}
            className="px-3 font-bold cursor-pointer hover:scale-110 duration-150"
          >
            <Link to={name} smooth duration={500}>
              {name}
            </Link>
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
              <Link
                onClick={() => setSideMenu(!sideMenu)}
                to={name}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div>
        <button className="bg-red-500 py-2 px-3 rounded-full font-bold hover:scale-110">
          Resume
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
