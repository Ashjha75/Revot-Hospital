import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Authentication from "./Home/Authentication.jsx";
import Home from "./Home/Home.jsx";
import Menu from "./Menu/Menu.jsx";
import EditProfile from "./Menu/EditProfile.jsx";
import Doctors from "./Doctor's/Doctors.jsx";
import BookAppont from "./Appoinment/BookAppont.jsx";
import ReportsData from "./Reports/ReportsData.jsx";

// for Animations
import { AnimatePresence } from "framer-motion";
const RoutesGroup = () => {
  const Location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={Location} key={Location.path}>
        <Route path="/" element={<Home />} />
        <Route path="/e" element={<Authentication />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/DoctorsList" element={<Doctors />} />
        <Route path="/Appoinments" element={<BookAppont />} />
        <Route path="/Reports" element={<ReportsData />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesGroup;
