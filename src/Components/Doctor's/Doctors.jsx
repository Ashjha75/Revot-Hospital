import React, { useEffect } from "react";
import DoctorList from "./DoctorList";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import Dr1 from "../../Assets/NewDoctor.jpeg";

const Doctors = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <motion.div
      className="bg-[#4e5c5c36] "
      initial={{ height: 0 }}
      animate={{ height: "100%", transition: { duration: 0.5 } }}
      exit={{ y: window.innerHeight }}
    >
      <div className="bg-[#036c5f] flex flex-col md:flex-row justify-around items-center w-screen h-fit  pb-20 z-0">
        <div
          className="md:w-[60%] w-[94%] pl-5 pt-32 md:pt-64 md:pl-24"
          data-aos="fade-right"
        >
          <h3 className=" font-mono  tracking-widest text-lg text-yellow-300 pl-2">
            BOOK AN APPOINMENT
          </h3>
          <span className="text-white font-sans font-semibold text-[3rem] md:text-[3.5rem] tracking-wider ">
            <h2 className="pb-4 pt-1">
              Schedule a virtual or <br />
              presential appoinment today
            </h2>
          </span>
          <p className="text-[#f4f4f4] text-lg md:text-xl py-4 max-w-xl italic">
            Our hospital is commited for making people healthy and fit our
            doctors work day and night for making this commitment possible. we
            always try to give better tommorrow to our patients .
          </p>
          <span className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-xl py-7">
            <a href="#Drs">
              {" "}
              <button
                type="submit"
                className=" text-[#333] bg-[#eea676]  px-7 py-3  rounded-3xl transform hover:scale-105 duration-500 hover:shadow-lg border-2 shadow-md"
              >
                Book An Appoinment
              </button>
            </a>
            <button
              type="submit"
              className="bg-transparent px-5 py-3 border-4 text-white border-double rounded-3xl shadow-md hover:border-[#9e9b9b] hover:scale-95 duration-500 w-fit"
            >
              About Us
            </button>
          </span>
        </div>
        <div
          className="bg-bg-img bg-left-bottom bg-no-repeat bg-cover md:pr-4 md:pt-16 "
          data-aos="fade-left"
        >
          <span className=" border-double rounded-lg hover:border-solid  border-l-8 border-t-8 border-orange-500 flex bg-transparent w-72 md:w-80 h-[22rem] md:h-[24rem] relative mr-10 md:mr-28 mt-20 md:mt-56 group ml-8">
            <img
              src={Dr1}
              alt="Doctors"
              className="md:w-72 w-64  rounded-md  group-hover:shadow-[#708d8df7] group-hover:shadow-lg absolute group-hover:top-8 group-hover:left-20 duration-300 group-hover:rotate-2 top-5  left-5"
            />
            <img
              src={Dr1}
              alt="Doctors"
              className="md:w-72 w-64  rounded-md  transform group-hover:-translate-y-4 group-hover:scale-110 duration-700  absolute top-5  left-5"
            />
          </span>
        </div>
      </div>
      <div id="Drs"></div>
      <DoctorList />
    </motion.div>
  );
};

export default Doctors;
