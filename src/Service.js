import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import Footer from "./Footer";
import home1 from "../src/Pictures/Vector-3.png";
import shop from "../src/Pictures/Vector-2.png";
import car from "../src/Pictures/Vector-1.png";
import dgital from "../src/Pictures/Vector.png";
function Service() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background4">
          <div className="align-center">
            <div className="row">
              <div className="heading_text centersimple break breakup">
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
              <div
                className="col-md-6"
                style={{
                  position: "absolute",
                  left: "50%",
                  right: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: "6%",
                  fontSize: "24px",
                }}
              >
                Humrahi is there to assist you with all the things your family
                might help you with had they been available all the time.
                Humrahi makes it simple to connect you or a loved one to a
                university student who can make all the difference in the world
                for you with a short visit!
              </div>
              <div
                className="border-x centersimple "
                style={{
                  position: "absolute",
                  width: "185px",
                  position: "absolute",
                  left: "50%",
                  right: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: "12%",
                }}
              ></div>
              <div className=" break"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center serviceBox-start">
        <div class="box">
          <div>
            <img src={home1} alt="img not found"></img>
          </div>
          <div className=" break">
            <span className="me-4 ntext" style={{ fontSize: "26px" , fontWeight: 'bold'}}>
              {" "}
              At Your House
              <div className="ntext2 col-md-7 " style={{ fontSize: "24px" }}>
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
          <div className=" break">
            <span className="me-4 ntext" style={{ fontSize: "26px" , fontWeight: 'bold'}}>
              {" "}
              Around the City
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
                 Shopping, trips to friends and family, attending
                social gatherings, appointments, going out for a drive in the
                city or setting up rides for you.
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
          <div className=" break">
            <span className="me-4 ntext" style={{ fontSize: "26px" , fontWeight: 'bold'}}>
              {" "}
              Running Errands for You
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
              
Grocery shopping, picking up parcels, shopping for gifts, picking up somethhing from a friend’s or relative’s house
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
          <div className=" break">
            <span className="me-4 ntext" style={{ fontSize: "26px" , fontWeight: 'bold'}}>
              {" "}
              Digital
              <div className="ntext2 col-md-7" style={{ fontSize: "24px" }}>
              
Teaching how to operate computers, tablets, smartphones, smartTVs
Both in person and digitally
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

export default Service;
