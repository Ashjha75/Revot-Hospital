import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header.jsx";
// import Loader from "./Components/Loader.jsx";
import Home from "./Components/Home.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Loader /> */}

      <Routes>
        <Route path="/e" element={<Home />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
