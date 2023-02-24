import React from "react";

import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import logo from "../src/Pictures/logo.png";
import home1 from "../src/Pictures/Home1.svg";
import shop from "../src/Pictures/Shop.svg";
import car from "../src/Pictures/Car.svg";
import dgital from "../src/Pictures/dig.svg";
import one from "../src/Pictures/one.png";
import two from "../src/Pictures/two.png";
import three from "../src/Pictures/three.png";
import students from "../src/Pictures/students.png";
import fb from "../src/Pictures/fb.png";
import insta from "../src/Pictures/insta.png";
import Footer from "./Footer";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideImages from "./Pictures";

function Common({ name, imgsrc, imgsrc2, visit, btname }) {
  return (
    <>
      <section className="d-flex ">
        <div className="nav_bg heading_background">
          <div className="row">
            <div
              className="col-md-6 heading_text1"
              style={{ marginTop: "3%", marginLeft: "3%" }}
            >
              {name}
              <div
                className="  col-md-10 heading_text2 "
                style={{ marginTop: "4%" }}
              >
                We connect university students with the elderly living in their
                homes to provide them with social support, help them with
                activities of day-to-day living, run errands for them, and teach
                them digital skills.
              </div>

              <div className="mt-3">
                <NavLink to={visit}>
                  <button type="button" className="buttont">
                    {btname}
                  </button>
                </NavLink>
              </div>
            </div>

            {/* <div
                className="col-lg-6   header-img"
                style={{ marginTop: "3%" }}
              >
                <img
                  src={imgsrc}
                  className="img-fluid animated"
                  alt="HomeImg"
                />
              </div> */}
            <div className="column" style={{}}>
              <Slide arrows={false} infinite={true}>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div
                      style={{ backgroundImage: `url(${slideImage.url})` }}
                    ></div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="d-flex align-items-left">
          <div className="container-fluid nav_bg ">
            <div className=" mx-auto">
              <div className="row">
                <div
                  className="col-md-6 heading_textBig1"
                  style={{ marginTop: "3%", marginBottom: "5%" }}
                >
                  What Can We Help You With
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="wrapper" style={{ marginBottom: "8%" }}>
        <figure class="item1">
          <div class="box">
            <div style={{ marginTop: "1%" }}>
              <img
                src={home1}
                alt="img not found"
                style={{ height: "3.2vh", width: "3.2vh" }}
              ></img>
            </div>

            <span
              className="me-4 heading_textBig2"
              style={{ textAlign: "left", marginLeft: "4%" }}
            >
              At Your House
              <div
                className="heading_text2 col-md-10 "
                style={{ marginTop: "5%" }}
              >
                Preparing meals, gardening, light cleaning, helping with pets,
                and above all making a new friend!
              </div>
            </span>

            {/* <div className="addheight"></div> */}
          </div>
        </figure>
        <figure class="item2">
          <div class="box">
            <div style={{ marginTop: "1%" }}>
              <img
                src={shop}
                alt="img not found"
                style={{ height: "3.2vh", width: "3.2vh" }}
              ></img>
            </div>

            <span
              className="me-4 heading_textBig2"
              style={{ textAlign: "left", marginLeft: "4%" }}
            >
              Running Errands For You
              <div
                className="heading_text2  "
                style={{ marginTop: "5%", textAlign: "left" }}
              >
                Grocery shopping, picking up parcels, shopping for gifts,
                picking up somethhing from a friend’s or relative’s house
              </div>
            </span>
          </div>
        </figure>
        <figure class="item3">
          <div class="box">
            <div style={{ marginTop: "1%" }}>
              <img
                src={car}
                alt="img not found"
                style={{ height: "3.2vh", width: "3.2vh" }}
              ></img>
            </div>

            <span
              className="me-4 heading_textBig2"
              style={{ textAlign: "left", marginLeft: "4%" }}
            >
              Around Your City
              <div
                className="heading_text2 col-md-10 "
                style={{ marginTop: "5%" }}
              >
                Shopping, trips to friends and family, attending social
                gatherings, appointments, going out for a drive in the city or
                setting up rides for you.
              </div>
            </span>
          </div>
        </figure>
        <figure class="item4">
          <div class="box">
            <div style={{ marginTop: "1%" }}>
              <img
                src={dgital}
                alt="img not found"
                style={{ height: "3.2vh", width: "3.2vh" }}
              ></img>
            </div>

            <span
              className="me-4 heading_textBig2"
              style={{ textAlign: "left", marginLeft: "4%" }}
            >
              Digital
              <div
                className="heading_text2 col-md-10 "
                style={{ marginTop: "5%" }}
              >
                Teaching how to operate computers, tablets, smartphones,
                smartTVs Both in person and digitally
              </div>
            </span>
          </div>
        </figure>
      </div>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background2">
          <div className="align-center">
            <div className="row">
              <div className="heading_textBig1 centered breakup">
                How it Works
              </div>
              <div
                className=" heading_text2 centersimple"
                style={{ marginTop: "3%" }}
              >
                Humrahi offers older adults companionship to encourage them to
                live life to the fullest!
              </div>
            </div>
            <div className="break2"></div>

            <div className="box centre">
              <div className="container centre ">
                <img class="hoverImages" src={one} alt="img not found"></img>

                <div className="break"></div>
                <div className="ntext ">Contact Us</div>
                <div className="ntext2 ">
                  Contact us at 03219390689 or email us at
                  humrahi.official1@gmail.com.
                </div>
              </div>
              <div className="container centre">
                <img class="hoverImages" src={two} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext ">Tell Us About Yourself</div>
                <div className="ntext2 ">
                  Tell us your requirements and any additional services you
                  require.
                </div>
              </div>
              <div className="container centre">
                <img class="hoverImages" src={three} alt="img not found"></img>
                <div className="break"></div>
                <div className="ntext ">Relax</div>
                <div className="ntext2 ">
                  We match you and fix your schedule with a trusted
                  companion, who would arrive and offer help!
                </div>
                <div className="break"></div>
              </div>
            </div>
            <div className="break"></div>
          </div>
        </div>
      </section>

      <section className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-7 heading_textBig1 vertical-center ">
                Who are the student companions?
                <div
                  className="heading_text2 col-md-11 "
                  style={{ marginTop: "3%" }}
                >
                  Individuals offering you companionship are university students
                  who want to give back to the community while earning flexible
                  income in the process, and they love spending time with the
                  elderly!
                </div>
              </div>

              <div className="col-lg-5">
                <img
                  src={students}
                  alt="img not found"
                  style={{ width: "50vh", height: "40vh" }}
                />
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
                className="heading_textBig1 centersimple"
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
                <NavLink to={visit}>
                  <button type="button" className="buttont">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background2">
          <div className="align-center">
            <div className="row">
              <div
                className="heading_textBig1 centersimple"
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

export default Common;
