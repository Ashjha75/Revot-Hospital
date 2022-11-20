import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import Doctor from "../Assets/icon-doctors.svg";
import Reports from "../Assets/icon-reports.svg";
import Appoint from "../Assets/icon-appointment.svg";
import SOS from "../Assets/sos-icon.svg";
import Phone from "../Assets/icon-phone-dark.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdPersonAdd, IoLogoBuffer } from "react-icons/io";
import Auth from "../Components/Authentication.jsx";
import SearchBox from "../Components/SearchBox.jsx";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const dataShow = (e) => {
    setShow(true);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* First navbar */}
      <div className="w-[100vw] h-14 bg-[#37a4b9] md:bg-[#6cc2d385] flex absolute top-0 items-center  z-50 md:h-14">
        <Link>
          <span className="text-[#1f3d5f] flex mx-3 md:mx-5 justify-center items-center cursor-pointer shadow-white hover:shadow-2xl hover:bg-[#56a8ffd8] rounded ">
            <IoLogoBuffer className=" text-xl md:text-3xl" />
            <h2 className="ml-1 font-bold flex text-lg md:text-2xl tracking-widest">
              R̳evot
              <p className="text-red-600 text-4xl flex tracking-widest -mt-1">
                +
              </p>
            </h2>
          </span>
        </Link>
        <div className="absolute right-4 md:right-9 flex">
          <SearchBox />
          <Link>
            <button
              className="ml-4 px-1 md:px-3 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 flex"
              onClick={dataShow}
            >
              <IoMdPersonAdd className="mx-1 flex jsutify-center mt-1" />
              Signup
            </button>
          </Link>
        </div>
      </div>
      {/* Sticky Left bar */}
      <div
        className="fixed left-0 top-1/2 
      w-12 h-24 bg-[#dce6e8] rounded-r-xl shadow-[#333] shadow-md z-10"
      >
        <img
          src={SOS}
          alt="SOS"
          className="cursor-pointer  w-[100%] mt-1 mb-2 h-10 rounded-xl hover:bg-[#acc7cc] hover:ml-3 hover:mb-2  "
        />

        <img
          src={Phone}
          alt="Phone"
          className="cursor-pointer   w-[100%] my-1 h-10 rounded-xl hover:bg-[#acc7cc] hover:ml-3 hover:mt-2"
        />
      </div>
      {/* second Header */}
      <div className="w-[100vw] h-24 bg-[#37a4b9] md:bg-[#6cc2d385] fixed -bottom-7 flex justify-around items-center  md:top-14 z-50 md:h-10 md:justify-end md:space-x-8 md:pr-7 md:w-[59vw] md:right-0 md:rounded-tl-xl md:rounded-l-full md:mb-1 md:absolute">
        <span className="w-fit h-fit mb-4 cursor-pointer flex flex-col justify-center items-center  md:mb-0  md:hover:bg-[#2f91bb] md:rounded-md md:hover:underline md:px-2 md:text-yellow-400">
          <img src={Doctor} alt="Doctor" className="w-7 h-8 md:hidden " />
          <h3 className="text-white text-xs mb-1 md:text-lg">Doctors</h3>
        </span>
        <span className="w-fit h-fit mb-4 cursor-pointer flex flex-col justify-center items-center  md:mb-0  md:hover:bg-[#2f91bb] md:rounded-md md:hover:underline md:px-2 md:text-yellow-400">
          <img src={Reports} alt="Doctor" className="w-7 h-8 md:hidden" />
          <h3 className="text-white text-xs mb-1 md:text-lg">Reports</h3>
        </span>
        <span className="w-fit h-fit mb-4 cursor-pointer flex flex-col justify-center items-center  md:mb-0  md:hover:bg-[#2f91bb] md:rounded-md md:hover:underline md:px-2 md:text-yellow-400">
          <img src={Appoint} alt="Doctor" className="w-7 h-8 md:hidden" />
          <h3 className="text-white text-xs mb-1 md:text-lg">Appointments</h3>
        </span>
        <span className="w-fit h-fit mb-4 cursor-pointer flex flex-col justify-center items-center  md:mb-0  md:hover:bg-[#2f91bb] md:rounded-md md:hover:underline md:px-2 md:text-yellow-400">
          <GiHamburgerMenu className="fill-white w-7 h-8 md:hidden" />
          <h3 className="text-white text-xs mb-1  md:text-lg">Menu</h3>
        </span>
      </div>
      {show && <Auth toggleSignup={(show) => setShow(false)} />}
    </>
  );
};
export default Header;
