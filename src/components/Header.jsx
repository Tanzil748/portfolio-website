import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="flex justify-between items-center w-full px-2 h-14 fixed bg-[#09203F] text-slate-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <div>
        <h1 className="font-bold text-2xl italic">TH</h1>
      </div>
      <div>
        <button className="bg-[#144b93] py-2 px-3 rounded-full font-bold hover:scale-110 cursor-pointer">
          <a href="./sampleResume.pdf" download>
            Resume
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
