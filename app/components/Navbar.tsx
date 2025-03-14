import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full p-5 bg-black bg-opacity-90 text-white flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold">Ashutosh Shrivastava</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
