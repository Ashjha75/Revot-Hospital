import React from "react";
import {
  FaAmbulance,
  FaAlignLeft,
  FaDiscord,
  FaAddressCard,
  FaMobile,
} from "react-icons/fa";
import Appoinments from "./Appoinments";
const BookAppont = () => {
  return (
    <div className="bg-[#f4f3ef] ">
      <div className="pt-32 pb-2 ml-7 flex">
        <h1 className="text-slate-800 text-2xl font-mono font-extrabold">
          Dashboard
        </h1>
        <FaAlignLeft className="ml-2 mt-2" />
      </div>
      <div className="grid ml-10 md:ml-0 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <div className="overflow-hidden md:ml-3 bg-white shadow-lg border rounded-md   transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400 hover:bg-[#f3f4f5] w-60 h-24  md:w-72 md:h-28 p-3 ">
          <div className="flex justify-evenly mt-2 mb-4">
            <FaAmbulance className=" text-2xl md:text-3xl text-gray-800 font-bold"></FaAmbulance>
            <h3 className="text-md md:text-lg text-slate-600">
              Total Ambulances
            </h3>
          </div>
          <hr />
          <span className="flex justify-around">
            <h5>Till Date</h5>
            <p>557</p>
          </span>
        </div>
        <div className="overflow-hidden bg-white shadow-lg border rounded-md   transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400 hover:bg-[#f3f4f5] w-60 h-24  md:w-72 md:h-28 p-3 ">
          <div className="flex justify-evenly mt-2 mb-4">
            <FaDiscord className="text-2xl md:text-3xl text-gray-800 font-bold"></FaDiscord>
            <h3 className="text-md md:text-lg text-slate-600">
              Online Appoinments
            </h3>
          </div>
          <hr />
          <span className="flex justify-around">
            <h5>Till Date</h5>
            <p>836</p>
          </span>
        </div>
        <div className="overflow-hidden bg-white shadow-lg border rounded-md   transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400 hover:bg-[#f3f4f5] w-60 h-24  md:w-72 md:h-28 p-3 ">
          <div className="flex justify-evenly mt-2 mb-4">
            <FaAddressCard className="text-2xl md:text-3xl text-gray-800 font-bold"></FaAddressCard>
            <h3 className="text-md md:text-lg text-slate-600">
              Physical Appoinments
            </h3>
          </div>
          <hr />
          <span className="flex justify-around">
            <h5>Till Date</h5>
            <p>69825</p>
          </span>
        </div>
        <div className="overflow-hidden md:ml-3 bg-white shadow-lg border rounded-md transform translate duration-500 hover:-translate-y-3 hover:scale-105 hover:border-slate-400 hover:bg-[#f3f4f5] w-60 h-24  md:w-72 md:h-28 p-3 ">
          <div className="flex justify-evenly mt-2 mb-4">
            <FaMobile className="text-2xl md:text-3xl text-gray-800 font-bold"></FaMobile>
            <h3 className="text-md md:text-lg text-slate-600">
              Total TeleConsultancy
            </h3>
          </div>
          <hr />
          <span className="flex justify-around">
            <h5>Till Date</h5>
            <p>97843</p>
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-16 shadow-2xl">
        <Appoinments />
      </div>
    </div>
  );
};

export default BookAppont;
