import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
function Contact() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background6">
          <div className="align-center">
            <div className="row">
              <div className="heading_textBig1 centersimple break breakup" style={{color:"white"}}>
                What are you Interested in?
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="box centre breakup break">
        <div className="container  centre break">
          <div className="mt-3">
            <NavLink to="/">
              <button type="button" className="buttont">
                Providing Services
              </button>
            </NavLink>
          </div>
          <div className="break"></div>
          <div className="ntext ">Become a companion!</div>
        </div>
        <div className="container centre  break">
        <div className="mt-3">
            <NavLink to="/">
              <button type="button" className="buttont">
                Receiving Services
              </button>
            </NavLink>
          </div>
          <div className="break"></div>
          <div className="ntext ">(For yourself or a loved one)</div>
        </div>
        <div className="break"></div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Contact;
