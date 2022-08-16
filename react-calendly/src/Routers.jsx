import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Enterprise from "./components/Enterprise";
import Teams from "./components/Teams";
import Individual from "./components/Individual";


function Routers() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/individuals" element={<Individual />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routers;