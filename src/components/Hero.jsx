import React from 'react'
import display from '../assets/house-banner.png'
import { FaLocationPin,  } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-black">
      <div className="flex  ">
        <div className="flex-1 pt-20 px-10">
          <div className="justify-center text-center text-white gap -4 leading-loose">
            <div className="h-[6rem] w-[6rem] rounded-full absolute bg-yellow-600 right-[57%] top-[22%] -z-0 "></div>
            <h1 className="text-4xl p-5 relative z-1">Expand your Horizon</h1>

            <h2 className="p-3 text-xl">
              Discover New Exciting, <br />
              Affordable and Easy to live in Apartments
            </h2>
            <p className="p-3 text-lg">
              Find a variety of housing units,
              <br /> with ultra modern facilities <br /> to provide you with the
              comfort you so deserve
            </p>
            <p
              className="text-lg p-3
            "
            >
              An ideal home for your dream vacation
            </p>
            <div className="bg-slate-100 p-3 rounded-lg flex items-center mx-28 my-12 w-[60%] overflow-hidden justify-between ">
              <FaLocationPin className="text-blue-500 text-2xl m-3 " />
              <input
                type="text"
                placeholder="Search....."
                className="bg-transparent focus:outline-none  sm:w-64 justify-between text-black text-lg"
              />
              <FaSearch className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-20">
            <img
              src={display}
              alt=""
              className="w-[25rem] h-[27rem] overflow-hidden rounded-t-full border-2 border-blue-300 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
