import React, { useState, useEffect } from "react";

const ApponmentBell = () => {
  const [profileValues, setProfileValues] = useState({
    Name: "Name",
    Gender: "Male/Female/others",
    Address: "New Delhi",
    Zipcode: "12XXXX",
    Phone: "9999XXXXXX",
    Email: "XYZ@gmail.com",
    City: "Mumbai",
    Member: "Active/NotActive",
  });
  useEffect(() => {
    const profileValues = JSON.parse(localStorage.getItem("profileValues"));
    if (profileValues) {
      setProfileValues(profileValues);
    }
  }, []);
  return (
    <>
      <div className="bg-white flex justify-evenly w-screen h-[70vh] fixed top-0 z-40 pt-20">
        <div className="bg-gray-300 pl-10 w-[25vw] h-[35vh] flex flex-col justify-center items-center">
          <h3>{profileValues.Name}</h3>
          <p>{profileValues.Phone}</p>
          <p>{profileValues.Email}</p>
          <p>{profileValues.Address}</p>
        </div>
        <div className="flex bg-blue-100 gap-5">
          <div className="bg-gray-300 pl-10 w-[25vw] h-[35vh] flex flex-col justify-center items-center">
            <h2>Your Appoinments</h2>
          </div>
          <div className="bg-gray-300 pl-10 w-[25vw] h-[35vh] flex flex-col justify-center items-center">
            <h2>Your Order</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApponmentBell;
