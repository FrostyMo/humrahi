import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import Footer from "./Footer";
import dgital from "../src/Pictures/dig.svg";
import emo from "../src/Pictures/Smile.svg";
import variety from "../src/Pictures/Variety.svg";
import time from "../src/Pictures/Time.svg";
import connect from "../src/Pictures/Connect.svg";
import reward from "../src/Pictures/Reward.svg";
function Becompanion() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background4">
          <div className="align-center">
            <div className="row">
              <div className="ntextM centersimple break breakup">
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
              <div className="border-x centersimple breakup"></div>
              <div className=" heading_textBigB centersimple breakup">
                What’s in it for you?
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox-start">
        <div class="box">
          <div>
            <img
              src={emo}
              alt="img not found"
              style={{ height: "3.2vh", width: "3.2vh" }}
            ></img>
          </div>

          <span
            className=" heading_textBig2"
            style={{ marginLeft: "3%", textAlign: "left" }}
          >
            {" "}
            Its Fufilling
            <div className="ntexts col-md-10 breakup break ">
              When you help the elderly, you'll truly feel the value of your
              work. You'll observe the positive impact you will make in your
              community.
            </div>
          </span>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img
              src={reward}
              alt="img not found"
              style={{ height: "3.2vh", width: "3.2vh" }}
            ></img>
          </div>

          <span
            className="heading_textBig2"
            style={{ marginLeft: "3%", textAlign: "left" }}
          >
            Its Rewarding
            <div className="ntexts col-md-10 breakup break ">
              You'll be paid on an hourly basis for the basic companionship
              service, and on top of that you'll be paid bonuses according to
              the additional services you'll provide e.g. errands, technology
              support, grocery shopping etc.
            </div>
          </span>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img
              src={time}
              alt="img not found"
              style={{ height: "3.2vh", width: "3.2vh" }}
            ></img>
          </div>

          <span
            className="heading_textBig2"
            style={{ marginLeft: "3%", textAlign: "left" }}
          >
            {" "}
            Flexible Schedule
            <div className="ntexts col-md-10 breakup break ">
              You’ll have the option to work on your own schedule and decide
              when and how often you work. The work is flexible and part-time
              perfect for students who want to work on a limited set of days.
            </div>
          </span>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img
              src={variety}
              alt="img not found"
              style={{ height: "3.2vh", width: "3.2vh" }}
            ></img>
          </div>

          <span
            className="heading_textBig2"
            style={{ marginLeft: "3%", textAlign: "left" }}
          >
            {" "}
            Variety of Services
            <div className="ntexts col-md-10 breakup break ">
              You can offer something different each day, since you have the
              option to set your own schedule choose the kind of service you can
              offer
            </div>
          </span>
          <div className=" break"></div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img
              src={connect}
              alt="img not found"
              style={{ height: "3.2vh", width: "3.2vh" }}
            ></img>
          </div>

          <span
            className="heading_textBig2"
            style={{ marginLeft: "3%", textAlign: "left" }}
          >
            {" "}
            Connect With the Community
            <div className="ntexts col-md-10 breakup break">
              By helping those who actually need it, you make your community
              stronger.
            </div>
          </span>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img
              src={dgital}
              alt="img not found"
              style={{ height: "3.2vh", width: "3.2vh" }}
            ></img>
          </div>

          <span
            className="heading_textBig2"
            style={{ marginLeft: "3%", textAlign: "left" }}
          >
            {" "}
            Digital
            <div className="ntexts col-md-10 breakup break">
              Help the elderly with technology and smart devices to enable them
              to become more active members of the commuity.
            </div>
          </span>
          <div className=" break"></div>
        </div>
        <div className=" break"></div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background5">
          <div className="align-center">
            <div className="row">
              <div className="heading_textBig2 centersimple">
                Get Paired Now
              </div>
              <div className=" heading_text2sans centersimple breakup ">
                Call us at 03219390689 or click below to learn more.
              </div>
              <div className="centersimple break">
                <NavLink to={"/contact"}>
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
