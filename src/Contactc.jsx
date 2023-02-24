import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import one from "../src/Pictures/one.png";
import two from "../src/Pictures/two.png";
import three from "../src/Pictures/three.png";

function Contactc() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background7 ">
          <div className="align-center ">
            <div className="row">
              <div
                className="ntextM centersimple break breakup"
                style={{ fontWeight: "bold" }}
              >
                Become a Companion!
              </div>
              <div className="break"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background6">
          <div className="align-center">
            <div className="row">
              <div
                className="heading_textBig2 centered breakup"
                style={{ color: "white" }}
              >
                How it Works
              </div>
              <div
                className=" heading_text2 centersimple"
                style={{ marginTop: "3%", color: "white" }}
              >
                Humrahi offers older adults companionship to encourage them to
                live life to the fullest!
              </div>
            </div>
            <div className="break2"></div>

            <div className="box centre">
              <div className="container centre ">
                <img src={one} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext " style={{ color: "white" }}>
                  Contact Us
                </div>
                <div className="ntext2 " style={{ color: "white" }}>
                  Contact us at 03219390689 or email us at
                  humrahi.official1@gmail.com.
                </div>
              </div>
              <div className="container centre">
                <img src={two} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext " style={{ color: "white" }}>
                  Tell Us About Yourself
                </div>
                <div className="ntext2 " style={{ color: "white" }}>
                  Tell us your availability and any additional services you can
                  provide
                </div>
              </div>
              <div className="container centre">
                <img src={three} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext " style={{ color: "white" }}>
                  Relax
                </div>
                <div className="ntext2 break2" style={{ color: "white" }}>
                  We match you with a client willing to avail your service!
                </div>
                <div className="break2"></div>
              </div>
              <div className="break2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background8">
          <div className="align-center">
            <div className="row">
              <div
                className="heading_textBig2 centersimple"
                style={{ marginTop: "3%" }}
              >
                Apply here
              </div>
              <div
                className=" heading_text2sans centersimple"
                style={{ marginTop: "2%" }}
              >
                This form is a gateway between us and you!
              </div>
              <div className="centersimple break" style={{ marginTop: "2%" }}>
                <a href="https://forms.gle/cNXdXs2YHZWvnwLN7" target="_blank">
                  <button type="button" className="buttont">
                    Apply
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background3">
          <div className="align-center">
            <div className="row">
              <div
                className="heading_textBig2 centersimple"
                style={{ marginTop: "3%" }}
              >
                Our Story
              </div>
              <div
                className=" heading_text2sans centersimple"
                style={{ marginTop: "2%" }}
              >
                Learn more about who we are and how we got started?
              </div>
              <div className="centersimple break" style={{ marginTop: "2%" }}>
                <NavLink to="/about">
                  <button type="button" className="buttont">
                    About Us
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Contactc;
