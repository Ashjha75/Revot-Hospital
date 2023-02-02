import React from "react";

const ApponmentBell = () => {
  return (
    <>
      <div className="bg-white flex justify-evenly w-screen h-[70vh] fixed top-0 z-40 pt-20">
        <div className="bg-gray-300 pl-10 w-[25vw] h-[35vh] flex flex-col justify-center items-center">
          <h3>Name</h3>
          <p>Phone</p>
          <p>Email</p>
          <p>Address</p>
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
