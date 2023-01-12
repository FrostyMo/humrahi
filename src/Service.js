import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import Footer from "./Footer";
import home1 from "../src/Pictures/Home1.svg";
import shop from "../src/Pictures/Shop.svg";
import car from "../src/Pictures/Car.svg";
import dgital from "../src/Pictures/dig.svg";
function Service() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background4">
          <div className="align-center">
            <div className="row">
              <div className="heading_textBig1 centersimple break breakup">
                It shouldn't be so hard to care for those you love.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg">
          <div className="align-center">
            <div className="row">
              <div className="col-md-8 ntextn centersimple breakup">
                Humrahi is there to assist you with all the things your family
                might help you with had they been available all the time.
                Humrahi makes it simple to connect you or a loved one to a
                university student who can make all the difference in the world
                for you with a short visit!
              </div>
              <div className="border-x  "></div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox-start">
        <div class="box">
          <div>
            <img src={home1} alt="img not found"></img>
          </div>
          <div className=" break" style={{ marginLeft: "3%" }}>
            <span className="me-4 heading_textBig1">
              {" "}
              At Your House
              <div className="ntexts col-md-10 " style={{ marginTop: "3%" }}>
                Preparing meals, gardening, light cleaning, helping with pets,
                and above all making a new friend!
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={car} alt="img not found"></img>
          </div>
          <div className=" break" style={{ marginLeft: "3%" }}>
            <span className="me-4 heading_textBig1">
              {" "}
              Around the City
              <div className="ntexts col-md-10" style={{ marginTop: "3%" }}>
                Shopping, trips to friends and family, attending social
                gatherings, appointments, going out for a drive in the city or
                setting up rides for you.
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={shop} alt="img not found"></img>
          </div>
          <div className=" break" style={{ marginLeft: "3%" }}>
            <span className="me-4 heading_textBig1">
              {" "}
              Running Errands for You
              <div className="ntexts col-md-10" style={{ marginTop: "3%" }}>
                Grocery shopping, picking up parcels, shopping for gifts,
                picking up somethhing from a friend’s or relative’s house
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox">
        <div class="box">
          <div>
            <img src={dgital} alt="img not found"></img>
          </div>
          <div className=" break" style={{ marginLeft: "3%" }}>
            <span className="me-4 heading_textBig1">
              {" "}
              Digital
              <div className="ntexts col-md-10" style={{ marginTop: "3%" }}>
                Teaching how to operate computers, tablets, smartphones,
                smartTVs Both in person and digitally
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
              <div
                className="heading_textBig2 centersimple"
                style={{ marginTop: "3%" }}
              >
                Get Paired Now
              </div>
              <div
                className=" heading_text2sans centersimple"
                style={{ marginTop: "2%" }}
              >
                Call us at 03219390689 or click below to learn more.
              </div>
              <div className="centersimple break" style={{ marginTop: "2%" }}>
                <NavLink to="/contact">
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

export default Service;
