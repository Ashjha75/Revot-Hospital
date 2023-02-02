import React from "react";
import { FaRegHeart, FaShare } from "react-icons/fa";
// import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  return (
    <>
      <span
        className="w-[15rem] md:w-[22rem] mt-10 mb-10 h-[22rem] md:h-[27rem] bg-white rounded-xl border-2  transform hover:-translate-y-10 duration-700 group overflow-hidden"
        data-aos="fade-right"
      >
        <img
          src={props.src}
          alt="DrImg"
          name="Sneha sharma"
          exp="12"
          className="rounded-t-lg group-hover:brightness-50"
          id={props.id}
          onClick={props.handleImgSrc}
        />
        <p className="absolute top-3 transform -translate-x-32 duration-500 group-hover:translate-x-0 ml-3 text-white">
          {props.name}
        </p>
        <p className="absolute top-9 transform -translate-x-28 duration-500 group-hover:translate-x-0 ml-3 text-white">
          {" "}
          Obstetrician
        </p>
        <p className="absolute top-24 md:top-40 text-md text-white animate-bounce slow-spin  opacity-0 group-hover:opacity-100 ml-3">
          {" "}
          click img to-
        </p>
        <p className="absolute top-28 md:top-48 opacity-0 group-hover:opacity-100 text-yellow-400 underline ml-3 ">
          Book appoinment
        </p>
        <FaRegHeart
          className="text-2xl font-bold fill-[#fff] bg-red-600 rounded-xl   transform -translate-y-28 duration-1000  w-10 h-10 p-2 fixed right-4 top-2 group-hover:translate-y-0"
          id="hhh"
        />
        <FaShare
          className="text-2xl font-bold fill-[#fff] bg-[#012b79e1] rounded-xl   transform translate-x-28 duration-1000 w-10 h-10 p-2 fixed right-4 top-10 mt-6 group-hover:translate-x-0"
          id="hhh"
        />
      </span>
    </>
  );
};

export default Card;
