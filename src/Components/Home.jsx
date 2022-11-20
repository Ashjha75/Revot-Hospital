import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../Components/Contact.jsx";
// ------------------------------------Images----------------------------------------------
import Mainimg from "../Assets/Contraception methods.gif";
import Mainimg2 from "../Assets/doctor-consult-illustration (1).svg";
import Heart from "../Assets/adult-cardiac-surgery.png";
import Bones from "../Assets/orthopaedic-services.png";
import Marrow from "../Assets/bone-marrow-transplant_0.png";
import Kidney from "../Assets/adult-kidney-transplant.png";
import Cardio from "../Assets/cardiology-adult.png";
import Critical from "../Assets/critical-care-services.png";
import Liver from "../Assets/liver-transplant-surgery.png";
import Cardia from "../Assets/cardia.svg";
import Orthopaedics from "../Assets/Orthopaedics.svg";
import Cancer from "../Assets/cancer care oncology.svg";
import Neuro from "../Assets/Neurosciences.svg";
import Thoracic from "../Assets/Thoracic Surgery.svg";
import Gas from "../Assets/Gastroenterology.svg";
import BoneMarrow from "../Assets/Bone Marrow Transplant .svg";
// +++++++++++++++++++++++++DOCTORS IMG+++++++++++++++++++++++++++++++++++++

import DR1 from "../Assets/240_F_172186647_e93OQdc8KSoBzIPqfKG0UoJSJhR15HLa-min.jpg";
import DR2 from "../Assets/dr2.jpg";
import DR3 from "../Assets/240_F_282721311_yyx96CWXbXsy2XVOFAjZ6jFm8vZrZKjO-min.jpg";
import DR4 from "../Assets/240_F_291430206_U1vohsIJWJvF3wb1a3uxfYLPCfXMRbum-min.jpg";
import DR5 from "../Assets/240_F_316428808_Tf4dch8C6t2mciunZDlbCi0qVmdGbxqv-min.jpg";
import DR6 from "../Assets/240_F_307163137_zZzqR0NLT5M1w7E4CNrAQEo2gnIYYcAN-min.jpg";
import DR7 from "../Assets/240_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni-min.jpg";
import DR8 from "../Assets/240_F_328759383_QFBykomIcL0ajmj56hIg3my4ful6JooZ-min.jpg";
// -----------------------------------Icons------------------------------------------------
import {
  FaLocationArrow,
  FaBed,
  FaAmbulance,
  FaUsers,
  FaHospitalAlt,
  FaUserMd,
  FaNotesMedical,
  FaTablets,
  FaRegHeart,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { RiHeartPulseFill } from "react-icons/ri";
import { VscRunAll } from "react-icons/vsc";
// ------------------------------------------Code--------------------------------------------------
const Home = () => {
  const [list, setList] = useState(false);
  const [input, setInput] = useState("");
  const [loc, setLoc] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleLoc = (e) => {
    const data = e.target.value;
    setLoc(data);
  };
  const handleView = (e) => {
    if (list === false) {
      setList(true);
    } else {
      setList(false);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#f8f8f8] w-[100%] h-[100%] z-0 flex flex-col">
      {/* 1st row */}
      <div className="flex flex-col md:flex-row justify-around ">
        <div className="pt-16 md:pt-24 " data-aos="fade-left">
          <img src={Mainimg} alt="Loading..." />
        </div>
        <div
          className="pt-8 md:pt-28 md:pl-14  flex justify-center items-center flex-col "
          data-aos="fade-right"
        >
          <h1 className="font-bold px-3 md:px-1 text-2xl text-blue-600  tracking-widest">
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
      {/* 2nd row */}
      <div className="h-fit w-[100%] bg-[#edf1f2] grid justify-around place-items-center grid-cols-3 md:grid-cols-7  mb-5 mt-5">
        <span className="flex flex-col justify-center ml-2 my-4">
          <img
            src={Heart}
            alt="Heart"
            className="w-12 md:w-14 transform transition duration-500 hover:scale-125"
          />
          <h5 className="text-gray-500 my-1 font-semibold">Cardiac-surgery</h5>
        </span>
        <span className="flex flex-col justify-center my-4">
          <img
            src={Bones}
            alt="Bones"
            className="w-12 md:w-14 transform transition duration-500 hover:scale-125"
          />
          <h5 className="text-gray-500 my-1 font-semibold">Bones</h5>
        </span>
        <span className="flex flex-col justify-center my-4">
          <img
            src={Marrow}
            alt="Marrow"
            className="w-12 md:w-14 transform transition duration-500 hover:scale-125"
          />
          <h5 className="text-gray-500 my-1 font-semibold">Marrow-Structure</h5>
        </span>
        <span className="flex flex-col justify-center my-4">
          <img
            src={Kidney}
            alt="Kidney"
            className="w-12 md:w-14 transform transition duration-500 hover:scale-125"
          />
          <h5 className="text-gray-500 my-1 font-semibold">
            Kidney-Transplant
          </h5>
        </span>
        <span className="flex flex-col justify-center my-4">
          <img
            src={Liver}
            alt="Liver"
            className="w-12 md:w-14 transform transition duration-500 hover:scale-125"
          />
          <h5 className="text-gray-500 my-1 font-semibold">Liver-Transplant</h5>
        </span>
        <span className="flex flex-col justify-center my-4">
          <img
            src={Cardio}
            alt="Cardio"
            className="w-12 md:w-14 transform transition duration-500 hover:scale-125"
          />
          <h5 className="text-gray-500 my-1 font-semibold">Audult-Cardio</h5>
        </span>
        <span>
          <img
            src={Critical}
            alt="Critical"
            className="w-12 md:w-14 transform transition duration-500 hover:scale-125"
          />
          <h5 className="text-gray-500 my-1 font-semibold">Critical-Icu</h5>
        </span>
      </div>
      {/* 3rd row */}

      <div className=" gap-4 bg-[#e2eaec77] border-4 border-[#c7dfe6f1] rounded-lg mx-4 mt-16 mb-36 overflow-hidden">
        <div className="mb-10 mt-5 flex justify-center ">
          <h2 className="mb-20 font-bold text-2xl absolute right[45%] text-gray-600">
            ~ Our Services ~
          </h2>
        </div>
        <div className="flex  justify-around flex-wrap">
          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl  "
            data-aos="fade-right hover:border-4 "
            id="hello"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <FaUserMd className="text-4xl fill-[#036d8e] mb-2 " />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              Experts-Consultancy
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              Our Hospital have best faculty experts to help you.
            </p>
          </div>

          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl hover:border-4 "
            id="hello"
            data-aos="fade-right"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <FaBed className="text-4xl fill-[#036d8e] mb-2" />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              Bed Facility
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              Our Hospital have best and affordable beds for you.
            </p>
          </div>

          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl hover:border-4 "
            id="hello"
            data-aos="fade-left"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <FaAmbulance className="text-4xl fill-[#036d8e] mb-2" />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              24/7 Ambulance
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              Our Ambulance service can pick patient from anywhere.
            </p>
          </div>
          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl hover:border-4 "
            id="hello"
            data-aos="fade-left"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <FaUsers className="text-4xl fill-[#036d8e] mb-2" />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              2100+
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              We have deliver our service to more than 2100+ happy patient.
            </p>
          </div>
        </div>
        {/* subsection2 */}

        <div className="md:flex  justify-around flex-wrap hidden  ">
          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl hover:border-4 "
            id="hello"
            data-aos="fade-right"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <FaNotesMedical className="text-4xl fill-[#036d8e] mb-2" />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              Free Checkup
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              Our Hospital provide you the free checkup.
            </p>
          </div>

          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl hover:border-4 "
            id="hello"
            data-aos="fade-right"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <FaTablets className="text-4xl fill-[#036d8e] mb-2" />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              Medicines
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              We provide you the best generic Medicines at affordable Price.
            </p>
          </div>

          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl hover:border-4 "
            id="hello"
            data-aos="fade-left"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <FaHospitalAlt className="text-4xl fill-[#036d8e] mb-2" />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              Hospitals Branch
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              We have more than 20+ branch globally with worldclass facility.
            </p>
          </div>
          <div
            className="m-4 bg-[#f8f8f8]  w-[16rem] h-[16.5rem] rounded-md border-2  border-[#c7dfe6f1] flex flex-col justify-evenly items-center hover:shadow-2xl  hover:border-4 "
            id="hello"
            data-aos="fade-left"
          >
            <FaRegHeart
              className="text-2xl font-bold fill-[#036d8e]  opacity-0 hover:fill-pink-600 hover:scale-110 -mt-1 fixed right-4 top-2"
              id="hhh"
            />
            <RiHeartPulseFill className="text-4xl fill-[#036d8e] mb-2" />
            <h2 className="font-semibold text-gray-600 mb-1 hover:underline text-2xl">
              Total Care
            </h2>
            <p className="overflow-hidden mx-2 text-gray-600 text-lg">
              We care for you and provide home like services to our patients.
            </p>
          </div>
        </div>
      </div>

      {/* row -4 */}

      <div className=" flex justify-center items-center my-3  ">
        <h1 className="text-3xl text-slate-800  pl-5 hover:underline hover:text-slate-600 ">
          ~ Specialities ~
        </h1>
      </div>
      <div className="bg-[#ebf2fa] flex flex-col md:flex-row  justify-around py-12">
        <div className="w-[35rem] ">
          <div className="w-fit flex gap-2 justify-center items-center hover:bg-[#b0dae4bd] px-8 py-4 rounded-xl shadow-gray-800 hover:shadow-xl ml-4">
            <img src={Cardia} alt="" className="w-16 " />
            <p className=" text-sm md:text-lg font-semibold text-[#265587] hover:underline hover:text-white">
              Cardiac Science
            </p>
          </div>

          <div className="w-fit flex gap-2 justify-center items-center hover:bg-[#b0dae4bd] px-8 py-4 rounded-xl shadow-gray-800 hover:shadow-xl ml-4">
            <img src={Orthopaedics} alt="" className="w-16 " />
            <p className="text-sm md:text-lg  font-semibold text-[#004084] hover:underline hover:text-white">
              Orthopaedics & <br /> Joints Replacements
            </p>
          </div>
          <div className="w-fit flex gap-2 justify-center items-center hover:bg-[#b0dae4bd] px-8 py-4 rounded-xl shadow-gray-800 hover:shadow-xl ml-4">
            <img src={Neuro} alt="" className="w-16 " />
            <p className="text-sm md:text-lg  font-semibold text-[#004084] hover:underline hover:text-white">
              Neuroscience
            </p>
          </div>
          <div className="w-fit flex gap-2 justify-center items-center hover:bg-[#b0dae4bd] px-8 py-4 rounded-xl shadow-gray-800 hover:shadow-xl ml-4">
            <img src={Cancer} alt="" className="w-12 " />
            <p className="text-sm  md:text-lg font-semibold text-[#004084] hover:underline hover:text-white">
              Cancer Care/Oncology
            </p>
          </div>
          <div className="w-fit flex gap-2 justify-center items-center hover:bg-[#b0dae4bd] px-8 py-4 rounded-xl shadow-gray-800 hover:shadow-xl ml-4">
            <img src={BoneMarrow} alt="" className="w-16 " />
            <p className="text-sm md:text-lg  font-semibold text-[#004084] hover:underline hover:text-white">
              Bone Marrow Transplant
            </p>
          </div>
          {list ? (
            <div className="">
              <div className="w-fit flex gap-2 justify-center items-center hover:bg-[#b0dae4bd] px-8 py-4 rounded-xl shadow-gray-800 hover:shadow-xl ml-4">
                <img src={Thoracic} alt="" className="w-16 " />
                <p className="text-sm md:text-lg  font-semibold text-[#004084] hover:underline hover:text-white">
                  Thoracic Surgery
                </p>
              </div>
              <div className="w-fit flex gap-2 justify-center items-center hover:bg-[#b0dae4bd] px-8 py-4 rounded-xl shadow-gray-800 hover:shadow-xl ml-4 ">
                <img src={Gas} alt="" className="w-16 " />
                <p className="text-sm md:text-lg  font-semibold text-[#004084] hover:underline hover:text-white">
                  Gastroenterology
                </p>
              </div>
            </div>
          ) : null}
          <div
            className="py-5 w-36 cursor-pointer bg-[#06447e] rounded-xl flex justify-center items-center hover:bg-[#4a94a7eb] shadow-gray-700 border-2 border-transparent hover:border-[#f8f8f8] shadow-lg ml-10 mt-10"
            onClick={handleView}
          >
            <h2 className="text-white font-2xl font-semibold">View More </h2>
            <VscRunAll className="fill-white w-10" />
          </div>
        </div>
        <div>
          <img src={Mainimg2} alt="loading..." className="mt-20 mb-7" />
        </div>
      </div>
      {/* row -5 */}

      <div className="flex overflow-hidden justify-between my-20 bg-[#edf1f2] w-fit ">
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion1"
        >
          <img src={DR1} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">
            Dr. Juille ves
          </h3>
          <h5 className="text-[#446477] font-semibold">-Master of surgery</h5>
          <p className="mb-3 text-[#0f1551]">10 Yrs Experience</p>
        </div>
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion2"
        >
          <img src={DR2} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">
            Dr. Rougee dax
          </h3>
          <h5 className="text-[#446477] font-semibold">
            -Bachelor of Medicine, Bachelor of Surgery
          </h5>
          <p className="mb-3 text-[#0f1551]">10 Yrs Experience</p>
        </div>
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion3"
        >
          <img src={DR3} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">
            Dr. Rafle yuv
          </h3>
          <h5 className="text-[#446477] font-semibold">-Doctor of Medicine</h5>
          <p className="mb-3 text-[#0f1551]">10 Yrs Experience</p>
        </div>
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion4"
        >
          <img src={DR4} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">Dr. Yuliie</h3>
          <h5 className="text-[#446477] font-semibold">-MBBS</h5>
          <p className="mb-3 text-[#0f1551]">14 Yrs Experience</p>
        </div>
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion5"
        >
          <img src={DR5} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">
            Dr. Rdell NS
          </h3>
          <h5 className="text-[#446477] font-semibold">-Heart surgen</h5>
          <p className="mb-3 text-[#0f1551]">13 Yrs Experience</p>
        </div>
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion6"
        >
          <img src={DR6} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">
            Dr. Janiie jay
          </h3>
          <h5 className="text-[#446477] font-semibold">
            -Bachelor of Physiotherapy{" "}
          </h5>
          <p className="mb-3 text-[#0f1551]">16 Yrs Experience</p>
        </div>
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion7"
        >
          <img src={DR7} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">
            Dr Yavi kapoor
          </h3>
          <h5 className="text-[#446477] font-semibold">
            -Bachelor of Unani Medicine and Surgery
          </h5>
          <p className="mb-3 text-[#0f1551]">20 Yrs Experience</p>
        </div>
        <div
          className="m-4 bg-[#f8f8f8]  w-[20rem] h-[20.5rem] rounded-lg border-4  border-[#c7dfe6f1] flex flex-col  items-center hover:shadow-2xl  "
          id="Drotaion8"
        >
          <img src={DR8} alt="" className="mt-0 h-[75%]" />
          <h3 className="text-[#0f1551] text-2xl font-semibold">
            {" "}
            Dr. Sam curan
          </h3>
          <h5 className="text-[#446477] font-semibold">
            -Bachelor of Physiotherapy
          </h5>
          <p className="mb-3 text-[#0f1551]">11 Yrs Experience</p>
        </div>
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
