import React, { useState, useEffect } from "react";

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
// import EditProfile from "./EditProfile";

const Menu = () => {
  const [profileValues, setProfileValues] = useState({
    Name: "",
    Gender: "",
    Address: "",
    Zipcode: "",
    Phone: "",
    City: "",
    Member: "",
  });
  useEffect(() => {
    const profileValues = JSON.parse(localStorage.getItem("profileValues"));
    if (profileValues) {
      setProfileValues(profileValues);
    }
  }, []);

  return (
    <div className="w-[100vw]  pt-12 md:pt-20 overflow-hidden">
      <div className=" h-fit  pt-16  flex flex-col md:flex-row justify-around items-center border-b-2  border-[#f4c3c3] rounded-lg shadow-sm  gap-5">
        <div className="w-fit md:w-[35%] bg-[#f3f3f3] border rounded-lg shadow-lg mb-7">
          <span className="flex  gap-9 items-center md:w-[100vw] md:pl-12 mt-5  ">
            <div className="bg-yellow-400  h-20 w-20 rounded-full border-4 ml-3 border-[#65bacb] flex justify-center  items-center md:w-28 md:h-28 shadow-2xl">
              <FaUser className="text-gray-700 text-4xl z-1 " />
            </div>
            <h2 className="text-gray-700 text-2xl font-semibold ml-4 mr-4 tracking-wider md:text-3xl">
              {profileValues.Name}
            </h2>
          </span>
          <span className="flex gap-9 md:gap-12 my-6 md:w-[100vw] md:pl-44  md:-mt-4 ml-5">
            <p className="text-gray-700 text-lg">1 Booking</p>
            <p className="text-gray-700 text-lg border-l-2 pl-5 border-gray-600 ">
              0 following
            </p>
          </span>

          <span className="flex justify-center items-center">
            <Link to="/EditProfile">
              <button className="w-fit mt-3 mb-9 bg-white px-3 py-2 text-slate-500 text-lg font-semibold rounded-lg shadow-lg  outline-none ring ring-transparent focus:ring-[#758ad1] border border-gray-400 transform translate duration-300 hover:scale-110 hover:shadow-xl">
                Edit profile
              </button>
            </Link>
          </span>
        </div>
        <div className="w-[85%] h-fit  md:h-[55%] md:w-[55%] bg-[#f3f3f3]  border rounded-lg grid grid-flow-col grid-rows-4 sm:grid-rows-2  gap-3 p-5 overflow-hidden">
          <span className="bg-white px-5 md:px-7 py-5 border rounded-md  shadow-lg transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400">
            <h5 className="text-lg text-[#333]">Gender</h5>
            <p className="text-slate-400">{profileValues.Gender}</p>
          </span>
          <span className="bg-white px-7 py-3 border rounded-md  shadow-lg transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400">
            <h5>Phone</h5>
            <p className="text-slate-400">{profileValues.Phone}</p>
          </span>

          <span className="bg-white px-3 md:px-7 py-5 border rounded-md  shadow-lg transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400">
            <h5 className="text-lg text-[#333]">Address</h5>
            <p className="text-slate-400">{profileValues.Address}</p>
          </span>
          <span className="bg-white px-3 md:px-7 py-5 border rounded-md  shadow-lg transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400">
            <h5 className="text-lg text-[#333]">City</h5>
            <p className="text-slate-400">{profileValues.City}</p>
          </span>
          <span className="bg-white px-3 md:px-7 py-5 border rounded-md  shadow-lg transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400">
            <h5 className="text-lg text-[#333]">ZipCode</h5>
            <p className="text-slate-400">{profileValues.Zipcode}</p>
          </span>
          <span className="bg-white px-3 md:px-7 py-5 border rounded-md  shadow-lg transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400">
            <h5 className="text-lg text-[#333]">Member Status</h5>
            <p className="text-slate-400">{profileValues.Member}</p>
          </span>
          <span className="bg-white px-3 md:px-7 py-5 border rounded-md  shadow-lg transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400">
            <h5 className="text-lg text-[#333]">Registration Date</h5>
            <p className="text-slate-400">22-11-2022</p>
          </span>
        </div>
        <div className="w-60%"></div>
      </div>
    </div>
  );
};

export default Menu;
