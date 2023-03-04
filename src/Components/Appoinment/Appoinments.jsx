import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Appoinments = (props) => {
  const Location1 = useLocation();
  const datas = Location1.state;
  const [AppointDetails, SetAppointDetails] = useState({
    Name: " ",
    Address: " ",
    Phone: " ",
    Email: " ",
  });
  const handleInputs = (e) => {
    let Value = e.target.value;
    SetAppointDetails({ ...AppointDetails, [e.target.name]: Value });
  };
  const HandleSubmit = (e) => e.preventDefault();
  const handleButton = (e) => {
    const value = window.confirm("Are You Sure ?")
      ? alert("completed Successfully")
      : null;
  };

  return (
    <div className="bg-[#add9e0] mb-20  overflow-hidden w-[59%] rounded-lg shadow-2xl  ">
      <form className=" w-full p-5 flex justify-evenly" onSubmit={HandleSubmit}>
        <div className=" w-[72%] ">
          {" "}
          <h2 className="ml-2 mb-1 font-serif text-gray-800  ">Name*</h2>
          <input
            type="text"
            required
            name="Name"
            id="Name"
            placeholder="Name"
            pattern="[A-Za-z0-9\s]{3,10}"
            className="outline-none px-4 py-2 w-[80%]  rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 invalid:focus:ring-red-500"
            value={AppointDetails.Name}
            onChange={handleInputs}
          />
          <h2 className="ml-2 mb-1 font-serif text-gray-800  ">
            Phone Number*
          </h2>
          <input
            type="tel"
            name="Phone"
            id="Phone"
            className="outline-none px-4 py-2 w-[80%]  rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 invalid:focus:ring-red-500"
            value={AppointDetails.Phone}
            onChange={handleInputs}
            placeholder="Phone"
            pattern="[0-9]{0,10}"
            max={10}
          />
          <h2 className="ml-2 mb-1 font-serif text-gray-800  ">Email</h2>
          <input
            type="email"
            name="Email"
            id="Email"
            className="outline-none px-4 py-2 w-[80%]  rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 invalid:focus:ring-red-500"
            value={AppointDetails.Email}
            onChange={handleInputs}
            placeholder="XYZ@gmail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            max={10}
          />
          <h2 className="ml-2 mb-1 font-serif text-gray-800  ">Address</h2>
          <input
            type="text"
            required
            name="Address"
            id="Address"
            className="outline-none px-4 py-2 w-[80%]  rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 invalid:focus:ring-red-500"
            value={AppointDetails.Address}
            onChange={handleInputs}
            placeholder="Address"
          />
          <h2 className="ml-2 mb-1 font-serif text-gray-800  ">Speciality</h2>
          <input
            type="text"
            required
            name="specs"
            id="specs"
            className="outline-none px-4 py-2 w-[80%]  rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 invalid:focus:ring-red-500"
            value={datas[4]}
          />
          <h2 className="ml-2 mb-1 font-serif text-gray-800  ">
            Doctor selected
          </h2>
          <input
            type="text"
            required
            name="DrName"
            id="DrName"
            className="outline-none px-4 py-2 w-[80%]  rounded-md border border-[#4ca5b7] ring-2 ring-transparent focus:ring-fuchsia-400 invalid:focus:ring-red-500"
            value={datas[2]}
            re
          />
        </div>
        <div>
          <img
            src={datas[0]}
            alt="no"
            className="h-28 w-28 rounded-[100%] ml-20 mb-6 mt-3 border-[3px] border-fuchsia-400"
          />
          <div>
            {" "}
            <table className="table-auto bg-white w-[18rem] flex justify-center rounded-xl border-2 border-[#3f414d9e] text-md font-sans text-[#19276e] tracking-widest">
              <tbody>
                <tr>
                  <td>Name-</td>
                  <td className="pl-5">{datas[2]}</td>
                </tr>
                <tr>
                  <td>Speciality-</td>
                  <td className="pl-5">{datas[4]}</td>
                </tr>
                <tr>
                  <td>Experience-</td>
                  <td className="pl-5">{datas[3]} Yrs</td>
                </tr>
              </tbody>
            </table>
            <button
              type="submit"
              class="bg-[#06447e] hover:bg-blue-400 text-white font-semibold py-4 px-11 mt-7 ml-16 rounded-lg focus:ring focus:ring-[#2e3950b7] cursor-pointer"
              onClick={handleButton}
            >
              Submit
            </button>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Appoinments;
