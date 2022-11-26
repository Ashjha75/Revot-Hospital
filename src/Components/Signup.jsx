import React, { useState } from "react";

const Signup = () => {
  const [showpass, setShowpass] = useState("password");
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handlePass = (e) => {
    const tagValue = document.getElementById("show");

    if (tagValue.type === "password") {
      setShowpass("text");
    } else {
      setShowpass("password");
    }
  };
  return (
    <div>
      <div className=" flex items-center justify-center md:ml-10 -mt-2 ">
        <form className="flex justify-center items-center flex-col py-3 px-10  ">
          <label
            htmlFor="username"
            className=" text-[#333333ec] font-semibold -ml-32"
          >
            Username *
          </label>

          <input
            value={inputs.username}
            type="text"
            name="username"
            className="py-2 pl-5 w-60 rounded-lg border-2 outline-blue-600  valid:text-slate-700 invalid:text-red-600 bg-white
            "
            placeholder="name here...."
            onChange={handleInputs}
            required
          />
          <label
            htmlFor="username"
            className=" text-[#333333ec] font-semibold -ml-40"
          >
            Email *
          </label>

          <input
            value={inputs.email}
            type="email"
            name="email"
            className="py-2 pl-5 w-60 rounded-lg border-2 outline-blue-600  valid:text-slate-700 invalid:text-red-600 bg-white
            "
            placeholder="email here...."
            onChange={handleInputs}
            required
          />
          <label
            htmlFor="Password"
            className=" text-[#333333ec] font-semibold -ml-36"
          >
            Password*
          </label>
          <input
            value={inputs.password}
            type={showpass}
            name="password"
            className="py-2 pl-5 w-60 rounded-lg border-2 outline-blue-600  valid:text-blue-700-700 invalid:text-red-600 
            "
            id="show"
            placeholder="password here...."
            onChange={handleInputs}
            required
          />
          <label
            htmlFor="Password"
            className=" text-[#333333ec] font-semibold -ml-16"
          >
            Confirm Password*
          </label>
          <input
            value={inputs.cpassword}
            type={showpass}
            name="capassword"
            className="py-2 pl-5 w-60 rounded-lg border-2 outline-blue-600  valid:text-slate-700 invalid:text-red-600 
            "
            id="show2"
            placeholder="confirm password..."
            onChange={handleInputs}
            required
          />
          <span className="flex justify-center">
            <input
              type="checkbox"
              id="Username"
              className="-ml-9 mr-2 mt-2 "
              onClick={handlePass}
              required
            />
            <label htmlFor="show " className="ml-2 mt-2">
              Show password
            </label>
          </span>
          <input
            type="submit"
            className="bg-[#155ee4e3] rounded-lg mt-3 py-2 cursor-pointer text-white font-bold w-[65%]"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
