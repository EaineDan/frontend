import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="text-white bg-slate-500">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className='text-lg'>NisaVille</h1>

        <ul className="flex text-lg gap-4">
          <Link >
          <li className="hidden sm:inline text-slate-700  hover:underline hover:underline-offset-8 hover:text-rose-500">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700  hover:underline hover:underline-offset-8 hover:text-rose-500">
              About
            </li>
          </Link>
          <Link to="/residence">
            <li className="hidden sm:inline text-slate-700  hover:underline hover:underline-offset-8 hover:text-rose-500">
              Residencies
            </li>
          </Link>
          <button className='bg-white text-emerald-800 w-20 h-10 rounded-full hover:bg-blue-300 hover:text-white'>Login</button>
        </ul>
      </div>
    </header>
  );
}

export default Navbar
