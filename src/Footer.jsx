import React from "react";
import "./index.css";
import "./Common.css";
import logo from "../src/Pictures/logo.png";
import fb from "../src/Pictures/fbsvg.svg";
import insta from "../src/Pictures/instasvg.svg";
import call from "../src/Pictures/Call.svg";
import email from "../src/Pictures/mail.svg";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background4">
          <div className="align-center">
            <div className="  centersimple vertical-center ">
              <img src={logo} width={"20%"} height={"20%"}></img>
            </div>
            <div className="row">
              <div className="box centre break footer">
                {/* <div className="width2"></div> */}
                <div className="boxFooter centre">
                  <div className="container centre ntext gap">
                    <NavLink style={{ color: "black" }} to="/">
                      Home
                    </NavLink>
                  </div>

                  <div className="container ntext gap">
                    <NavLink style={{ color: "black" }} to="/service">
                      Services
                    </NavLink>
                  </div>
                  <div className=" container ntext gap">
                    <NavLink style={{ color: "black" }} to="/becompanion">
                      Students
                    </NavLink>
                  </div>
                  <div className="container ntext gap">
                    <NavLink style={{ color: "black" }} to="/how">
                      How
                    </NavLink>
                  </div>
                  <div className="container ntext gap">
                    <NavLink style={{ color: "black" }} to="/about">
                      About
                    </NavLink>
                  </div>

                  <div className="container ntext gap">
                    <NavLink style={{ color: "black" }} to="/how">
                      Pricing
                    </NavLink>
                  </div>
                </div>

                {/* <div className="container alignleft ">
                  <div className="break"></div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/">
                      Home
                    </NavLink>
                  </div>

                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/service">
                      Services
                    </NavLink>
                  </div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/becompanion">
                      Students
                    </NavLink>
                  </div>
                </div> */}

                {/* <div className="container alignleft ">
                  <div className="break"></div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/how">
                      How
                    </NavLink>
                  </div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/about">
                      About
                    </NavLink>
                  </div>

                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/how">
                      Pricing
                    </NavLink>
                  </div>
                </div> */}

                {/* <div className="container alignleft ">
                  <div className="break"></div>
                  <a href="https://www.facebook.com" className="gap">
                    <img
                      src={fb}
                      width={"30vh"}
                      height={"30vh"}
                      className="gap-horizontal"
                    ></img>
                  </a>
                  <a href=" https://www.instagram.com" className="gap">
                    <img
                      src={insta}
                      width={"30vh"}
                      height={"30vh"}
                      className="gap-horizontal"
                    ></img>
                  </a>
                  <div className="ntext gap">
                    <a href="tel:03219390689" className="gap">
                      <img
                        src={call}
                        width={"30vh"}
                        height={"30vh"}
                        className="gap-horizontal"
                      ></img>
                    </a>
                    <a
                      href="mailto:humrahi.official1@gmail.com"
                      className="gap"
                    >
                      <img
                        src={email}
                        width={"30vh"}
                        height={"30vh"}
                        className="gap-horizontal"
                      ></img>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row" style={{ paddingBottom: "2vh" }}>
              <div className="footer">
                <div className="boxFooter">
                  <a href="https://www.facebook.com/HumrahiOfficial">
                    <img src={fb} width={"30vh"} height={"30vh"}></img>
                  </a>
                  <a
                    href="https://instagram.com/humrahi.official?igshid=YmMyMTA2M2Y="
                    className="gap-horizontal-2"
                  >
                    <img src={insta} width={"30vh"} height={"30vh"}></img>
                  </a>
                  <a href="tel:03219390689" className="gap-horizontal-2">
                    <img src={call} width={"30vh"} height={"30vh"}></img>
                  </a>
                  <a
                    href="mailto:humrahi.official1@gmail.com"
                    className="gap-horizontal-2"
                  >
                    <img src={email} width={"30vh"} height={"30vh"}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
