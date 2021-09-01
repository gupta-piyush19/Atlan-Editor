import React from "react";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="px-4 flex w-full mx-auto md:px-20 justify-between items-center h-16 border-b-2 border-gray-800">
        <div className="logo text-2xl tracking-tight hover:text-gray-600">
          <Link to="/">Atlan Code Editor</Link>
        </div>
        <a
          href="https://github.com/gupta-piyush19"
          target="blank"
          rel="noreferrer"
        >
          <div className="text-xl p-2 hover:bg-black hover:text-white border-2 border-black rounded-full transition duration-300 ease-in-out">
            <FiGithub />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
