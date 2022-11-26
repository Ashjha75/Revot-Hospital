import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header.jsx";
// import Loader2 from "./Components/Loader2.jsx";
import Footer from "./Components/Footer.jsx";
import Authentication from "./Components/Authentication.jsx";
import Home from "./Components/Home.jsx";
import Menu from "./Components/Menu.jsx";
import EditProfile from "./Components/EditProfile.jsx";

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
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
