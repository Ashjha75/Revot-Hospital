import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Home/Header.jsx";
// import Loader2 from "./Components/Loader2.jsx";
import Footer from "./Components/Home/Footer.jsx";
import Authentication from "./Components/Home/Authentication.jsx";
import Home from "./Components/Home/Home.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import EditProfile from "./Components/Menu/EditProfile.jsx";
import Doctors from "./Components/Doctor's/Doctors.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Loader2 /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e" element={<Authentication />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/DoctorsList" element={<Doctors />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
