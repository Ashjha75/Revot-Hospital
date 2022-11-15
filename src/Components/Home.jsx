import React, { useState } from "react";
import Mainimg from "../Assets/Contraception methods.gif";

// ------------------------------------Images----------------------------------------------
import { ImLocation } from "react-icons/im";
import { FaLocationArrow } from "react-icons/fa";
// import Heart from "../Assets/adult-cardiac-surgery.png";
// import Bones from "../Assets/orthopaedic-services.png";
// import Marrow from "../Assets/bone-marrow-transplant_0.png";
// import Kidney from "../Assets/adult-kidney-transplant.png";
// import Cardio from "../Assets/cardiology-adult.png";
// import Critical from "../Assets/critical-care-services.png";
// import Liver from "../Assets/liver-transplant-surgery.png";

const Home = () => {
  const [input, setInput] = useState("");
  const [loc, setLoc] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleLoc = (e) => {
    const data = e.target.value;
    setLoc(data);
  };

  return (
    <div className="bg-[#f8f8f8] w-[100vw] h-[100vh] z-0">
      <div className="flex flex-col md:flex-row justify-around ">
        <div className="pt-16 md:pt-24 " id="leftanim">
          <img src={Mainimg} alt="Loading..." />
        </div>
        <div
          className="pt-8 md:pt-28 md:pl-14  flex justify-center items-center flex-col "
          id="rightanim"
        >
          <h1 className="font-bold px-3 md:px-1 text-2xl md:text-4xl text-blue-500  tracking-widest">
            We'll Take Care Of{" "}
            <span className="text-blue-300 ">Your Health</span>
          </h1>
          <div className="bg-[#e2eaec77] rounded-lg flex justify-center items-center mt-10 mb-28  border-4 border-[#c7dfe6f1] scale-105">
            <form className=" flex flex-col gap-3 px-8 py-6">
              <span className="bg-[#fff] flex flex-row  items-center focus:ring-2 focus:ring-[#79a7ccf1] rounded-md border-2 border-slate-400">
                {" "}
                <FaLocationArrow className=" fill-slate-500 w-7 " />
                <input
                  type="email"
                  placeholder="enter email"
                  className="  py-4 px-1 border-none outline-none "
                  value={input}
                  onChange={handleInput}
                />
              </span>
              <span className="bg-[#fff] flex flex-row  items-center focus:ring-2 focus:ring-[#79a7ccf1] rounded-md border-2 border-slate-400">
                {" "}
                <ImLocation className="fill-slate-500 w-7" />
                <input
                  type="text"
                  name="location"
                  placeholder="enter location"
                  className="  py-4 px-1 border-none outline-none "
                  value={loc}
                  onChange={handleLoc}
                />
              </span>
              <button
                type="submit"
                className="bg-[#003a70] text-white text-lg rounded-lg py-3 w-[80%] ml-5 hover:bg-[#06447e]"
              >
                Book Appoinment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
