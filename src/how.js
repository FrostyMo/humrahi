import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import one from "../src/Pictures/one.png";
import two from "../src/Pictures/two.png";
import three from "../src/Pictures/three.png";
import Footer from "./Footer";
function how() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background2">
          <div className="align-center">
            <div className="row">
              <div className="heading_text centersimple">How it Works</div>
              <div
                className="border-x2"
                style={{
                  
                  width: "185px",
                  position: "absolute",
                  left: "50%",
                  right: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: "80px",
                }}
              ></div>
              <div className="col-md-4 centered-txt">
                Humrahi offers older adults companionship to encourage them to
                live life to the fullest!
              </div>
            </div>
            <div className="break2"></div>

            <div className="box centre">
              <div className="container centre ">
                <img src={one} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext ">Contact Us</div>
                <div className="ntext2 ">
                  Contact us at 03219390689 or email us at
                  humrahi.official1@gmail.com.
                </div>
              </div>
              <div className="container centre">
                <img src={two} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext ">Tell Us About Yourself</div>
                <div className="ntext2 ">
                  Tell us your requirements and any additional services you
                  require.
                </div>
              </div>
              <div className="container centre">
                <img src={three} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext ">Relax</div>
                <div className="ntext2 ">
                  We match you and fix your schedule with a trusted
                  companionship, who would arrive and offer help!
                </div>
                <div className="break"></div>
                <div className="break"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg">
          <div className="align-center breakup">
            <div className="row">
              <div className="heading_text centersimple">Pricing</div>
              <div className=" centered-txt col-md-9" style={{ marginBottom:"30px"}}>
                Pricing is straightforward, we charge at an hourly rate, and on
                top of that we charge on the basis of additional services that
                may be required by our clients.
              </div>
              <div className="centered-txt col-md-4" style={{ marginTop:"30px"}} >
                Call us at 03219390689 or click below to learn more.
              </div>
              <div className="centersimple" style={{ marginBottom:"90px"}}>
                <NavLink to={"/home"}>
                  <button type="button" className="buttont">
                    Learn More
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
export default how;
