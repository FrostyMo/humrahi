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
              <div className="heading_textBig1 centersimple break breakup" style={{ color: "white" }}>
                What are you Interested in?
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="box centre breakup break">
        <div className="container  centre break">
          <div className="mt-3">
            <NavLink to="/contactc">
              <button type="button" className="buttont3">
                Providing Services
              </button>
            </NavLink>
          </div>
          <div className="break"></div>
          <div className="ntext ">Become a companion!</div>
        </div>
        <div className="container centre  break">
          <div className="mt-3">
            <NavLink to="/contacto">
              <button type="button" className="buttont3">
                Receiving Services
              </button>
            </NavLink>
          </div>
          <div className="break"></div>
          <div className="ntext ">(For yourself or a loved one)</div>
        </div>
        <div className="break"></div>
      </div>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background8">
          <div className="align-center">
            <div className="row">
              <div className="centersimple break" style={{ marginTop: "2%", marginBottom: "10%" }}>
                <a href="https://forms.gle/TCwVPuV1CCq992Yy9" target="_blank">
                  <button type="button" className="buttont">
                    Give Feedback
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Contact;
