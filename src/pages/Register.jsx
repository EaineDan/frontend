import React from "react";
import background from "../assets/bg.jpg";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  
  
  return (
    <div
      className=" flex justify-center items-center text-white h-[100vh] bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-slate-800 border border-slate-400 p-8 rounded-md shadow-lg backdrop-filter align-center  backdrop-blur-sm bg-opacity-30 relative w-[75vh] h-[90vh] ">
        <h1 className="text-3xl font-bold text-white text-center mb-12">
          Sign Up
        </h1>
        <form>
          <div className="relative my-4">
            <input
              type="email"
              className="block w-80 mb-7 pt-3 px-0 text-white text-sm bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:focus:border-blue-300 focus:outline-none focus:ring-0 focus:text-white focus:border-emerald-300 peer"
              placeholder=""
              required
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-300 peer-focus:dark:text-emerald-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
            <FaUser className="absolute top-0 right-14 text-black" />
          </div>
          <div className="relative my-4">
            <input
              type="email"
              className="block w-80 mb-7 pt-3 px-0 text-white text-sm bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:focus:border-blue-300 focus:outline-none focus:ring-0 focus:text-white focus:border-emerald-300 peer"
              placeholder=""
              required
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-300 peer-focus:dark:text-emerald-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
            <FaEnvelope className="absolute top-0 right-14 text-black " />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-80 pt-3 mb-8 px-0 text-white text-sm bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:focus:border-blue-300 focus:outline-none focus:ring-0 focus:text-white focus:border-emerald-300 peer"
              placeholder=""
              required
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-300 peer-focus:dark:text-emerald-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <FaLock className="absolute top-0 right-14 text-black " />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-80 pt-3 mb-8 px-0  text-white text-sm bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:focus:border-blue-300 focus:outline-none focus:ring-0 focus:text-white focus:border-emerald-300 peer"
              placeholder=""
              required
            />
            <label
              htmlFor=""
              className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-300 peer-focus:dark:text-emerald-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
            <FaLock className="absolute top-0 right-14 text-black " />
          </div>
          <div>
            <button
              type="submit"
              className="w-80 mb-6 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-blue-300 hover:text-white py-2 translate-colors"
            >
              Login
            </button>
            <span className="text-white items-cent">
              Already have an Account?
              <Link to="/login" className="text-emerald-300 mx-2">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
