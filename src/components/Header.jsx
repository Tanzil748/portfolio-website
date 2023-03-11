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
      name: "Tech Stack",
      id: 4,
    },
    {
      name: "Contact",
      id: 5,
    },
  ];

  return (
    <motion.header
      className="bg-[#09203F] text-slate-300 fixed w-full z-[10]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <div className="xl:container mx-auto py-3 px-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl">Tanzil Hassan</h1>
          </div>
          <div>
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
              className="cursor-pointer z-20 sm:hidden"
              onClick={() => setSideMenu(!sideMenu)}
            >
              {sideMenu ? (
                <AiOutlineClose size={30} />
              ) : (
                <RxHamburgerMenu size={30} />
              )}
            </div>

            {sideMenu && (
              <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900">
                {headerLinks.map(({ name, id }) => (
                  <li
                    key={id}
                    className="text-2xl cursor-pointer py-4 font-bold"
                  >
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
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
