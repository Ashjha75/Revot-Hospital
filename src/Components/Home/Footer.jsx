import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoBuffer } from "react-icons/io";
const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <main className=" bg-slate-900 text-white  w-[100%] relative bottom-0">
      <section className="flex flex-col   justify-around pt-5 py-12 md:flex-row">
        <div className="border-l-4 h-fit pl-4 my-7 md:mt-2 ml-6 md:ml-1 border-[#f8f8f8] hover:border-yellow-400">
          <ul>
            <h3 className=" text-xl font-bold mb-3 hover:text-yellow-300 cursor-pointer hover:underline">
              Revot
            </h3>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              About
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Blog
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Careers
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Press
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="border-l-4 h-fit pl-4 my-7 md:mt-2 ml-6 md:ml-1 border-[#f8f8f8] hover:border-yellow-400">
          <ul>
            <h3 className=" text-xl font-bold mb-3 hover:text-yellow-300 cursor-pointer hover:underline">
              For patients
            </h3>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Search for doctors
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Search for clinics
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Search for hospitals
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Read about medicines
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot drive
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Health app
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Plus
            </li>
          </ul>
        </div>
        <div className="border-l-4 h-fit pl-4 my-7 md:mt-2 ml-6 md:ml-1 border-[#f8f8f8] hover:border-yellow-400">
          <ul>
            <h3 className=" text-xl font-bold mb-3 hover:text-yellow-300 cursor-pointer hover:underline">
              For doctors
            </h3>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Consult
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Healthfeed
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Profile
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              For clinics
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Prime
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Ray by Revot
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Reach
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Ray Tab
            </li>
          </ul>
        </div>
        <div className="border-l-4 h-fit pl-4 my-7 md:mt-2 ml-6 md:ml-1 border-[#f8f8f8] hover:border-yellow-400">
          <ul>
            <h3 className=" text-xl font-bold mb-3 hover:text-yellow-300 cursor-pointer hover:underline">
              For hospitals
            </h3>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Insta by Revot
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Qikwell by Revot
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Profile
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Reach
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              Revot Drive
            </li>
            <li className="hover:text-yellow-300 hover:underline cursor-pointer tracking-wider">
              For Corporates
            </li>
          </ul>
        </div>
        <div className="fill-white mb-20">
          <ul className="flex md:flex-col flex-row ">
            <li>
              <FaFacebook className=" ml-9 transform transition duration-500 cursor-pointer  hover:scale-150 text-2xl md:ml-1 md:my-2 hover:text-blue-400 " />{" "}
            </li>
            <li>
              <FaTwitter className=" ml-9 transform transition duration-500 cursor-pointer  hover:scale-150 text-2xl md:ml-1 md:my-2 hover:text-blue-500" />{" "}
            </li>
            <li>
              <FaYoutube className=" ml-9 transform transition duration-500 cursor-pointer  hover:scale-150 text-2xl md:ml-1 md:my-2 hover:text-red-500" />{" "}
            </li>
            <li>
              <FaInstagramSquare className=" ml-9 transform transition duration-500 cursor-pointer  hover:scale-150 text-2xl md:ml-1 md:my-2 hover:text-pink-500" />{" "}
            </li>
          </ul>
        </div>
      </section>
      <div className=" flex justify-evenly pb-7 text-white">
        <hr className="w-[42%] " />
        <span className="text-[#306baf] flex  justify-center items-center cursor-pointer shadow-white hover:shadow-2xl mx-2 -mt-4 rounded ">
          <IoLogoBuffer className=" text-3xl" />
          <h2 className=" font-bold flex text-2xl tracking-widest">
            R̳evot
            <p className="text-red-600 text-4xl flex tracking-widest -mt-1">
              +
            </p>
          </h2>
        </span>
        <hr className="w-[42%]" />
      </div>
      <div className="flex justify-center items-center pb-24 hover:text-yellow-500 ">
        Copyright ©-{date} Revot+ Hospital{" "}
      </div>
    </main>
  );
};

export default Footer;
