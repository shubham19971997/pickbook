import React from "react";
import logo from "../images/logo.png";

const Signup = () => {
  return (
    <div className="flex">
      <div className="w-screen flex">
        <div className="p-2 flex fixed items-center">
          <img className="h-8 w-8 m-1" src={logo} alt="img" />
          <p className="text-lg font-semibold m-1">Pickbook</p>
        </div>
        <div className="flex flex-col h-screen w-full text-center items-center justify-center">
          <div className="">
            <p className="text-3xl font-semibold text-left">
              Welcome to Pickbook
            </p>
            <p className="text-sm font-medium text-gray-400 mt-4 text-left">
              Welcome to Pickbook! Please enter your details here{" "}
            </p>
            <form className="my-8">
              <div className="my-4">
                <p className="my-2 text-left text-sm font-semibold text-slate-800">Email</p>
                <input className="block" />
              </div>
              <div>
              <p className="my-2 text-left text-sm font-semibold text-slate-800">Password</p>
                <input className="block" />
              </div>
            </form>
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
