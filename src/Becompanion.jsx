import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import Footer from "./Footer";
import dgital from "../src/Pictures/Vector.png";
import emo from "../src/Pictures/emo.png";
import variety from "../src/Pictures/variety.png";
import time from "../src/Pictures/time.png";
import connect from "../src/Pictures/connect.png";
import reward from "../src/Pictures/reward.png";
function Becompanion() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background4">
          <div className="align-center">
            <div className="row">
              <div className="heading_text centersimple break breakup">
                Become a Companion!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg">
          <div className="align-center">
            <div className="row">
              <div
                className="border-x centersimple "
                style={{
                  position: "absolute",
                  width: "170px",
                  position: "absolute",
                  left: "50%",
                  right: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: "4%",
                }}
              ></div>
              <div
                className=" centered-txt col-md-6"
                style={{
                  fontWeight: "bold",
                  position: "absolute",
                  left: "50%",
                  right: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: "8%",
                  fontSize: "30px",
                }}
              >
                What’s in it for you?
              </div>

              <div className=" break"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox-start">
        <div class="box">
          <div>
            <img src={emo} alt="img not found"></img>
          </div>
          <div className=" break">
            <span
              className="me-4 ntext"
              style={{ fontSize: "26px", fontWeight: "bold" }}
            >
              {" "}
              Its Fufilling
              <div className="ntext2 col-md-7 " style={{ fontSize: "24px" }}>
                When you help the elderly, you'll truly feel the value of your
                work. You'll observe the positive impact you will make in your
                community.
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={reward} alt="img not found"></img>
          </div>
          <div className=" break">
            <span
              className="me-4 ntext"
              style={{ fontSize: "26px", fontWeight: "bold" }}
            >
              Its Rewarding
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
                You'll be paid on an hourly basis for the basic companionship
                service, and on top of that you'll be paid bonuses according to
                the additional services you'll provide e.g. errands, technology
                support, grocery shopping etc.
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={time} alt="img not found"></img>
          </div>
          <div className=" break">
            <span
              className="me-4 ntext"
              style={{ fontSize: "26px", fontWeight: "bold" }}
            >
              {" "}
              Flexible Schedule
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
                 You’ll have the option to work on your own schedule and decide
                when and how often you work. The work is flexible and part-time
                perfect for students who want to work on a limited set of days.
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={variety} alt="img not found"></img>
          </div>
          <div className=" break">
            <span
              className="me-4 ntext"
              style={{ fontSize: "26px", fontWeight: "bold" }}
            >
              {" "}
              Variety of Services
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
                 You can offer something different each day, since you have the
                option to set your own schedule choose the kind of service you
                can offer
              </div>
            </span>
            <div className=" break"></div>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={connect} alt="img not found"></img>
          </div>
          <div className=" break">
            <span
              className="me-4 ntext"
              style={{ fontSize: "26px", fontWeight: "bold" }}
            >
              {" "}
              Connect With the Community
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
                 By helping those who actually need it, you make your community
                stronger.
              </div>
            </span>
            <div className=" break"></div>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={dgital} alt="img not found"></img>
          </div>
          <div className=" break">
            <span
              className="me-4 ntext"
              style={{ fontSize: "26px", fontWeight: "bold" }}
            >
              {" "}
              Digital
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
                 Help the elderly with technology and smart devices to enable
                them to become more active members of the commuity.
              </div>
            </span>
            <div className=" break"></div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background5">
          <div className="align-center">
            <div className="row">
              <div className="heading_text centersimple">Get Paired Now</div>
              <div className=" centered-txt">
                Call us at 03219390689 or click below to learn more.
              </div>
              <div className="centersimple break">
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

export default Becompanion;
