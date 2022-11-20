import React, { useState, useEffect } from "react";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("");
  const [suggestions, setSuggestions] = useState("");
  // const [reset, setReset] = useState("Reset");
  // const [loading, setLoading] = useState(true);

  const handleReset = (e) => {
    const data = "";
    setNames(data);
    setEmails(data);
    setSuggestions(data);
  };
  const handleSubmit = (e) => {
    alert("Are you sure ");
    e.preventDefault();
  };

  return (
    <main className="flex flex-col md:flex-row justify-center md:justify-around mb-10 items-center ">
      <div className="transform translate hover:scale-105 w-[50%] flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9735903498013!2d-0.20705708541459747!3d5.570922495960975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a72b8afffff%3A0xa05a568bb001b4a7!2sRevo%20Hospitality!5e0!3m2!1sen!2sin!4v1668778302521!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          className="w-[600px] h-[450px] border-0 rounded-lg"
          title="map"
        ></iframe>
      </div>
      <div className="bg-[#edf1f2]  py-7 px-2 md:px-48 flex justify-center items-center rounded-xl border-4 border-[#c9e0e6] mt-14 sm:mr-5">
        <form className="flex flex-col gap-5 py-4 " onSubmit={handleSubmit}>
          <div className="bg-white w-fit flex  items-center rounded-xl pl-2 group">
            <FaUserAlt className="fill-[#64748b] " />
            <input
              type="text"
              className=" w-64 md:w-72 py-3 outline-none px-2  mx-2 invalid:text-red-600 valid:text-blue-600 border-2 border-transparent "
              placeholder="name here..."
              required
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
          </div>
          <div className="bg-white w-fit flex  items-center rounded-xl pl-2 ">
            <FaEnvelope className="fill-[#64748b]  " />
            <input
              type="email"
              className=" py-3 px-2 outline-none border-0 mx-2 invalid:text-red-600 valid:text-blue-600 w-64 md:w-72"
              placeholder="email here..."
              required
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />
          </div>
          <textarea
            cols="30"
            rows="10"
            className=" resize-none border-none outline-none rounded-xl p-4 "
            placeholder="Write your suggestions or queries ...."
            required
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
          ></textarea>

          <div className="flex justify-evenly">
            <input
              type="submit"
              className="bg-[#06447e] hover:bg-blue-400 text-white font-semibold py-3 px-5 rounded-lg focus:ring focus:ring-[#2e3950b7] cursor-pointer"
            />
            <input
              type="reset"
              // value={reset}
              onClick={handleReset}
              className="bg-[#06447e] hover:bg-blue-400 text-white font-semibold  py-3 px-5 rounded-lg focus:ring focus:ring-[#2e3950b7]  cursor-pointer"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
