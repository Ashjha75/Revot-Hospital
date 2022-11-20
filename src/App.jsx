import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header.jsx";
// import Loader2 from "./Components/Loader2.jsx";
import Footer from "./Components/Footer.jsx";
import Authentication from "./Components/Authentication.jsx";
import Home from "./Components/Home.jsx";

const App = () => {
  const dataShow = (e) => {
    const data = document.getElementById("authContaent");
    data.style.display = "flex";
  };
  return (
    <Router>
      <Header onClick={dataShow} />
      {/* <Loader2 /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e" element={<Authentication onClick={dataShow} />} />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
