import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Contactc from "./Contactc";
import Contacto from "./Contacto";
import How from "./how"
import FAQ from "./Faq"
import Becompanion from "./Becompanion"
import "@fontsource/ibm-plex-sans"; // Defaults to weight 400.
import "@fontsource/ibm-plex-serif";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/service' element={<Service/>} />
        <Route exact path='/how' element={<How/>} />
        <Route exact path='/becompanion' element={<Becompanion/>} />
        <Route exact path='/faq' element={<FAQ/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/contactc' element={<Contactc/>} />
        <Route exact path='/contacto' element={<Contacto/>} />
        <Route path="/" element={<Navigate replace to={<Home/>} />} />
      </Routes>
    </>
  );
}

export default App;
