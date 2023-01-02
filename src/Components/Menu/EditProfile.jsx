import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
const EditProfile = (props) => {
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
    localStorage.setItem("profileValues", JSON.stringify(profileValues));
  }, [profileValues]);

  const handleInputs = (e) => {
    let values = e.target.value;
    setProfileValues({ ...profileValues, [e.target.name]: values });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setProfileValues(profileValues);
  };
  return (
    <>
      <main
        className="bg-[#f4f4f4] w-[100vw] py-20 md:py-32  z-50  flex flex-col justify-between"
        id="main"
        onSubmit={handleSubmit}
      >
        <span className="flex justify-between items-center mb-3 border-b-2 shadow-md">
          <h2 className="text-xl font-semibold pl-8 pt-4  text-slate-600 pb-2">
            Edit Profile Page
          </h2>

          <Link to="/Menu">
            <span className="mr-6 md:mr-20 flex justify-center pb-2">
              <FaTimes className="text-2xl text-slate-700 cursor-pointer hover:scale-125" />
            </span>
          </Link>
        </span>
        <div className="flex justify-center">
          <h2 className="mx-2 w-fit py-4 rounded-2xl drop-shadow-xl px-12 bg-[#addae3] text-red-700 font-semibold text-md md:text-lg flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            ad ducimus. Amet saepe facilis a adipisci repellat veniam molestias
            excepturi.
          </h2>
        </div>

        <form
          className="flex flex-col md:grid md:grid-flow-row gap-1  grid-cols-2 ml-8 py-5"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="Name"
            className="text-slate-500 md:text-xl font-semibold  md:mt-8 md:ml-10 flex gap-1"
          >
            Name
            {/* <FaTimes /> */}
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="outline-none px-4 py-2 w-[85%]  rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 md:mt-7 invalid:focus:ring-red-500 "
            value={profileValues.Name}
            onChange={handleInputs}
            placeholder="Name"
            pattern="[A-Za-z0-9\s]{3,10}"
          />

          <label
            htmlFor="Gender"
            className="text-slate-500 md:text-xl font-semibold  md:mt-8  md:ml-10"
          >
            Gender
          </label>
          <input
            name="Gender"
            id="Gender"
            className="outline-none px-4 py-2 w-[85%] rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 md:mt-7 "
            value={profileValues.Gender}
            onChange={handleInputs}
            pattern="[A-Za-z]"
            placeholder="Male/Female/Others"
          />

          <label
            htmlFor="Address"
            className="text-slate-500 md:text-xl font-semibold  md:mt-8  md:ml-10"
          >
            Address
          </label>
          <input
            type="text"
            name="Address"
            id="Address"
            className="outline-none px-4 py-2 w-[85%] rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 md:mt-7  invalid:focus:ring-red-500 "
            value={profileValues.Address}
            onChange={handleInputs}
            placeholder="Address"
          />

          <label
            htmlFor="Zipcode"
            className="text-slate-500 md:text-xl font-semibold  md:mt-8  md:ml-10"
          >
            Zipcode
          </label>
          <input
            type="text"
            name="Zipcode"
            id="Zipcode"
            className="outline-none px-4 py-2 w-[85%] rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 md:mt-7  invalid:focus:ring-red-500 "
            value={profileValues.Zipcode}
            onChange={handleInputs}
            placeholder="Zipcode"
            pattern="[0-9]{0,10}"
          />

          <label
            htmlFor="Phone"
            className="text-slate-500 md:text-xl font-semibold  md:mt-8  md:ml-10"
          >
            Phone No.
          </label>
          <input
            type="tel"
            name="Phone"
            id="Phone"
            className="outline-none px-4 py-2 w-[85%] rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 md:mt-7  invalid:focus:ring-red-500 "
            value={profileValues.Phone}
            onChange={handleInputs}
            placeholder="Phone"
            pattern="[0-9]{0,10}"
            max={10}
          />

          <label
            htmlFor="City"
            className="text-slate-500 md:text-xl font-semibold  md:mt-8  md:ml-10"
          >
            City
          </label>
          <input
            type="text"
            name="City"
            id="City"
            className="outline-none px-4 py-2 w-[85%] rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 md:mt-7  invalid:focus:ring-red-500 "
            value={profileValues.City}
            onChange={handleInputs}
            placeholder="City"
            pattern="[A-Za-z\s]{3,}"
          />

          <label
            htmlFor="Member"
            className="text-slate-500 md:text-xl font-semibold  md:mt-8  md:ml-10"
          >
            Member Status
          </label>
          <input
            name="Member"
            id="Gender"
            className="outline-none px-4 py-2 w-[85%] rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 md:mt-7 "
            value={profileValues.Member}
            onChange={handleInputs}
            pattern="[A-Za-z]"
            placeholder="Active/Not Active"
          />

          <input
            type="submit"
            className="bg-blue-600 text-white ml-44  mt-12 xsm:ml-10 px-9 py-3 hover:bg-blue-500 rounded-lg  mb-2 cursor-pointer w-fit shadow-[#353434] shadow-lg transform translate duration-300 hover:scale-110 hover:shadow-xl"
          />
        </form>
      </main>
    </>
  );
};

export default EditProfile;
