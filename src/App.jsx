import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Header from "./Components/Home/Header.jsx";
import Footer from "./Components/Home/Footer.jsx";
import RoutesGroup from "./Components/RoutesGroup.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <RoutesGroup />
      <Footer />
    </Router>
  );
};

export default App;
