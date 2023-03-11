import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./pageAnimation";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center"
      name="Contact"
    >
      <motion.div
        className="xl:container mx-auto py-16"
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl lg:text-4xl text-slate-300 text-center font-bold pb-4">
          Contact Me
        </h1>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/4fce2d25-d217-4550-85fd-733f2556b954"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="bg-yellow-700 py-2 px-3 rounded-md font-bold hover:scale-110 duration-500 text-white w-48 mx-auto">
              Send Mail
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
