import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Popup = (props) => {
  const handleClose = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!handleClose.current.contains(e.target))
        props.setImagesa([null, false, "", 0]);
    };
    document.addEventListener("mousedown", handler);
    return (e) => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      {" "}
      {props.imagesa[1] ? (
        <section
          className="z-50 fixed top-0 w-screen h-screen bg-[#63b6f295] flex flex-col justify-center items-center"
          id="Container"
        >
          <FaTimes className="absolute right-16 top-14 text-4xl font-thin cursor-pointer text-white" />
          <div
            className="bg-[#a9cff5e7] border  flex flex-col md:flex-row overflow-hidden justify-around items-center py-16 w-[90%]  md:w-[80%] rounded-[2.2rem] "
            ref={handleClose}
          >
            <img
              src={props.imagesa[0]}
              alt="Popup"
              className="md:w-[25rem] w-[20rem] mb-10 bg-cover rounded-2xl border-4"
            />
            <div>
              {/* <div className="bg-[#fbfbfd] px-10 py-5 border-2 border-[#3f414d9e] rounded-xl">
                
              </div> */}
              <table className="table-auto bg-white w-[20rem] flex justify-center rounded-xl border-2 border-[#3f414d9e] text-lg font-sans text-[#19276e] tracking-widest">
                <tbody>
                  <tr>
                    <td>Name-</td>
                    <td className="pl-5">{props.imagesa[2]}</td>
                  </tr>
                  <tr>
                    <td>Speciality-</td>
                    <td className="pl-5">Obstetrician</td>
                  </tr>
                  <tr>
                    <td>Experience-</td>
                    <td className="pl-5">{props.imagesa[3]}Yrs</td>
                  </tr>
                </tbody>
              </table>
              <button className="bg-[#df8447] text-white px-5 py-3 my-10 ml-5 rounded-xl border-2 transform translate duration-300 shadow-xl hover:scale-110 hover:shadow-sm">
                Book Appinment
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Popup;
