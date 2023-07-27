import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex">
      <div className="w-screen flex">
        <div className="p-2 flex fixed items-center">
          <img className="h-8 w-8 m-1" src={logo} alt="img" />
          <p className="text-lg font-semibold m-1">Pickbook</p>
        </div>
        <div className="flex flex-col h-screen w-full text-center items-center justify-center">
          <div className="w-80">
            <p className="text-3xl font-semibold text-left">
              Welcome to Pickbook
            </p>
            <p className="text-xs font-medium text-gray-400 mt-4 text-left">
              Welcome to Pickbook! Please enter your details here{" "}
            </p>
            <form className="my-8">
              <div className="my-4">
                <p className="my-2 text-left text-xs font-semibold text-slate-500">
                  Email
                </p>
                <input className="block h-8 w-80 px-2 text-sm focus:outline-none focus:bg-slate-50 rounded border-2" />
              </div>
              <div>
                <p className="my-2 text-left text-xs font-semibold text-slate-500">
                  Password
                </p>
                <input className="block h-8 w-80 px-2 text-sm focus:outline-none focus:bg-slate-50 rounded border-2" />
              </div>
              <div className="flex my-4 justify-between">
                <div className="flex">
                  <input type="checkbox" />
                  <p className="mx-1 text-xs font-semibold text-slate-500">
                    Remember for 30 days
                  </p>
                </div>
                <p className="mx-1 text-xs font-bold text-slate-500 text-[#570DE6]">
                  Forgot Password?
                </p>
              </div>
              <button
                type="submit"
                className="h-8 w-full text-white text-sm rounded bg-[#570DE6] "
              >
                Sign in
              </button>
            </form>
            <div>
              <p className="text-sm text-slate-500 ">
                Already have an account?
                <Link to="/login">
                  <span className="font-semibold text-[#570DE6]">Log in</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen hover: bg-slate-100 hover:blur-lg ease-out duration-200 flex justify-center items-center">
        <div className="w-56 h-56 rounded-full bg-[#570DE6]"></div>
      </div>
    </div>
  );
};

export default Signup;
