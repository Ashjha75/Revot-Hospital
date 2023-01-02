import React, { useState } from "react";
import Popup from "./Popup.jsx";
import Card from "./Card.jsx";

// _---__________----------________---------______--IMAGES1---______________---------
// import LadyDr1 from "../../Assets/Ladydr1.jpg";
import LadyDr2 from "../../Assets/Ladydr2.webp";
import LadyDr from "../../Assets/Ladydr.webp";
import LadyDr3 from "../../Assets/Ladydr3.jpg";
import LadyDr4 from "../../Assets/LadyDr4.webp";
import LadyDr5 from "../../Assets/Ladydr5.webp";
// import LadyDr6 from "../../Assets/Ladydr-6.webp";
import obesterician from "../../Assets/Pregnancy test-bro.png";

// --------------________________________________-------------------------

const DoctorList = () => {
  let oldArr = [
    {
      visb: false,
      butt: "More",
    },
    {
      visb: false,
      butt: "More",
    },
  ];
  const [know, setKnow] = useState(oldArr);
  const handleCards = (e) => {
    let newArr = [
      {
        visb: true,
        butt: "Less",
      },
      {
        visb: false,
        butt: "More",
      },
    ];
    know[0].visb ? setKnow(oldArr) : setKnow(newArr);
  };
  const [imagesa, setImagesa] = useState([obesterician, false, "", 0]);
  const handleImgSrc = (e) => {
    const data = e.target.id;
    const name = e.target.name;
    const exp = e.target.getAttribute("exp");
    const imgsrc = document.getElementById(data).src;
    setImagesa([imgsrc, true, name, exp]);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <div
        className={`bg-gradient-to-r from-[#25a89b] to-[#0b8678ce] my-24 w-[90%] md:w-[97%] rounded-2xl py-5 px-10 border-2 ${
          know[0].visb ? "h-fit" : "h-[45rem]"
        } delay-150 overflow-hidden`}
      >
        <span className="relative pt-40 md:pt-0">
          <img
            src={obesterician}
            alt="Img"
            className="ml-10 md:ml-0 w-36 h-36 rounded-full border-4 border-[#f3f4f5]  hover:border-8 absolute top-2 md:right-[45%] md:left-[45%] bg-gradient-to-b from-[#f3f4f5] to-[#35978c]"
          />
          <h2 className="pl-2 md:pl-6 pt-40 md:pt-0 text-3xl md:text-4xl font-semibold font-serife text-transparent bg-gradient-to-r from-[#f3f4f5] to-[#b2c1bf]  drop-shadow-2xl w-fit bg-clip-text border-b-8 border-double ">
            Obstetrician
          </h2>
        </span>

        <div className="mt-20 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:gap-y-12 place-items-center">
          <Card
            imagesa={imagesa}
            src={LadyDr}
            handleImgSrc={handleImgSrc}
            id="Dr1"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr2}
            handleImgSrc={handleImgSrc}
            id="Dr2"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr3}
            handleImgSrc={handleImgSrc}
            id="Dr3"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr4}
            handleImgSrc={handleImgSrc}
            id="Dr4"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr5}
            handleImgSrc={handleImgSrc}
            id="Dr5"
          />
        </div>

        <div className="w-screen  h-[15vh]  z-40 flex justify-center items-center sticky   -bottom-9    backdrop-blur-md">
          <button
            className=" px-10 h-fit w-fit py-4 rounded-2xl text-white text-lg bg-yellow-400  transform duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-white "
            onClick={handleCards}
          >
            Know {know[0].butt}
          </button>
        </div>
      </div>
      {/* ---------------2nd card */}
      <div
        className={`bg-gradient-to-r from-[#25a89b] to-[#0b8678ce] my-24 w-[90%] md:w-[97%] rounded-2xl py-5 px-10 border-2 ${
          know[0] ? "h-fit" : "h-[45rem]"
        } delay-150 overflow-hidden`}
      >
        <span className="relative pt-40 md:pt-0">
          <img
            src={obesterician}
            alt="Img"
            className="ml-10 md:ml-0 w-36 h-36 rounded-full border-4 border-[#f3f4f5]  hover:border-8 absolute top-2 md:right-[45%] md:left-[45%] bg-gradient-to-b from-[#f3f4f5] to-[#35978c]"
          />
          <h2 className="pl-6 pt-40 md:pt-0 text-3xl md:text-4xl font-semibold font-serife text-transparent bg-gradient-to-r from-[#f3f4f5] to-[#b2c1bf]  drop-shadow-2xl w-fit bg-clip-text border-b-8 border-double ">
            Obstetrician
          </h2>
        </span>

        <div className="mt-20 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:gap-y-12 place-items-center">
          <Card
            imagesa={imagesa}
            src={LadyDr}
            handleImgSrc={handleImgSrc}
            id="Dr1"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr2}
            handleImgSrc={handleImgSrc}
            id="Dr2"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr3}
            handleImgSrc={handleImgSrc}
            id="Dr3"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr4}
            handleImgSrc={handleImgSrc}
            id="Dr4"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr5}
            handleImgSrc={handleImgSrc}
            id="Dr5"
          />
        </div>
        <div className="w-screen  h-[15vh]  z-40 flex justify-center items-center sticky   -bottom-9    backdrop-blur-md">
          <button
            className=" px-10 h-fit w-fit py-4 rounded-2xl text-white text-lg bg-yellow-400  transform duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-white "
            onClick={handleCards}
          >
            Know {know[1].butt}
          </button>
        </div>
      </div>
      {imagesa[1] ? <Popup imagesa={imagesa} setImagesa={setImagesa} /> : null}
    </main>
  );
};

export default DoctorList;
