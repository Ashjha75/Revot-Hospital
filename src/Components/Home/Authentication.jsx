import React, { useRef, useState } from "react";
import Med from "../../Assets/Medicine-amico.png";
import Login from "../Home/Login.jsx";
import Signup from "../Home/Signup.jsx";
import { VscError } from "react-icons/vsc";
const Authentication = (props) => {
  const [auth, setAuth] = useState({
    login: true,
    signup: false,
  });
  let handleLogin = (e) => {
    setAuth({ ...auth, login: true, signup: false });
  };
  function handleSignUp() {
    setAuth({ ...auth, login: false, signup: true });
  }
  const contents = useRef();
  const handleClose = (e) => {
    const data = document.getElementById("cross");
    if (!contents.current.contains(e.target) || data === e.target) {
      props.toggleSignup(true);
    }
  };
  return (
    <div onClick={handleClose} className="overflow-y-hidden">
      <div className="flex justify-center items-center bg-[#102753b8] w-[100vw] h-[100vh]  ">
        <div
          className="bg-[#e1d9d9] w-[92%] md:w-[60%]   rounded-xl border-4 border-[#63e6f2] flex overflow-hidden  "
          ref={contents}
        >
          <div className=" hidden lg:flex flex-col bg-slate-500 w-[49%] pl-0 sm:items-center">
            <img src={Med} alt="Med" className="w-72 " />
            <p className="text-white font-semibold text-2xl" id="screen">
              Get Flat 10% off on <br /> Medicines
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-x-12 md:gap-x-28 mt-3 ml-5 font-semibold text-xl text-gray-700 h-fit pb-5">
              {" "}
              <h2
                className={`focus:text-white cursor-pointer  px-4  pb-1 ${
                  auth.login
                    ? "border-4 border-transparent border-b-blue-500 rounded"
                    : null
                }`}
                onClick={handleLogin}
              >
                Login
              </h2>
              <h2
                className={`focus:text-white cursor-pointer  px-4  pb-1 ${
                  auth.signup
                    ? "border-4 border-transparent border-b-blue-500 rounded"
                    : null
                }`}
                onClick={handleSignUp}
              >
                Signup
              </h2>
            </div>

            {auth.login ? <Login /> : <Signup />}
          </div>
          <div className="justify-end h-fit mt-3 ml-10 mr-2 hidden md:flex">
            <VscError
              className="text-3xl font-extrabold text-red-700  cursor-pointer "
              onClick={handleClose}
              id="cross"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
