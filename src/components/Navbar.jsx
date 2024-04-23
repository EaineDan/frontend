import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="text-white bg-black w-full top-0 left-0  cursor-pointer ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <h1 className="text-lg text-gray-300">NisaVille...</h1>

        <ul className="flex text-lg gap-7 py-2  items-center text-white">
          <Link>
            <li className="hidden sm:inline hover:underline hover:underline-offset-8 hover:text-blue-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline hover:underline-offset-8 hover:text-blue-300">
              About
            </li>
          </Link>
          <Link to="/residence">
            <li className="hidden sm:inline   hover:underline hover:underline-offset-8 hover:text-blue-300">
              Residencies
            </li>
          </Link>
          <button className="bg-white text-emerald-800 w-20 h-10 rounded-full hover:bg-blue-500 hover:text-white">
            Login
          </button>
        </ul>
      </div>
    </header>
  );
}

export default Navbar
