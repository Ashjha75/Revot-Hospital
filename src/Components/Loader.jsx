import React from "react";
import { IoLogoBuffer } from "react-icons/io";

// import Heart from "../Assets/health-con.png";
const Loader = () => {
  return (
    <>
      <div className="flex justify-center top-1/2 left-[45%] right-[45%] fixed delay-300  animate-bounce ">
        <span className="text-[#1f3d5f] flex mx-3 md:mx-5 justify-center items-center cursor-pointer   animate-pulse scale-110 md:scale-150 shadow-[#c75e5e] shadow-md rounded-lg">
          <IoLogoBuffer className=" text-3xl" />
          <h2 className="ml-1 font-bold flex text-2xl tracking-widest">
            R̳evot
            <p className="text-red-600 text-4xl flex tracking-widest -mt-1">
              +
            </p>
          </h2>
        </span>
      </div>
    </>
  );
};

export default Loader;
