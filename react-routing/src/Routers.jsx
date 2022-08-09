import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from './components/Services';
import Navbar from './components/Navbar';
import ServiceDetails from './components/ServiceDetails';



function Routers() {
  return (
    <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicedetails:id" element={<ServiceDetails />} />
        </Routes>  
    </BrowserRouter>

  )
}

export default Routers;