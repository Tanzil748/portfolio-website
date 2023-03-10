import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="bg-[#09203F] text-slate-300 sticky top-0 z-10"
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
            <button className="bg-[#144b93] py-2 px-3 rounded-full font-bold hover:scale-110 cursor-pointer">
              <a href="./sampleResume.pdf" download>
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
