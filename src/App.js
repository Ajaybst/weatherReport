import React from "react";
import { Routes, Route } from "react-router-dom";
import Service from "./services.js";
import Weather from "./weather.js";
import Contact from "./contact.js";
import Home from "./home.js";
import Navbar from "./navbar.js";
let App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </>
  );
};
export default App;
