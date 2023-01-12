import React from "react";
import "./index.css";
import "./Common.css";
import logo from "../src/Pictures/logo.png";
import fb from "../src/Pictures/fbsvg.svg";
import insta from "../src/Pictures/instasvg.svg";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background4">
          <div className="align-center">
            <div className="row">
              <div className="box centre break footer">
                <div className="container centersimple vertical-center ">
                  <img src={logo} width={"70%"} height={"50%"}></img>
                </div>
                <div className="width2"></div>
                <div className="container alignleft ">
                  <div className="break"></div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/">
                      Home
                    </NavLink>
                  </div>

                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/service">
                      Our Services
                    </NavLink>
                  </div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/becompanion">
                      Students
                    </NavLink>
                  </div>
                </div>

                <div className="container alignleft ">
                  <div className="break"></div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/how">
                      How it Works
                    </NavLink>
                  </div>
                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/about">
                      About Us
                    </NavLink>
                  </div>

                  <div className="ntext gap">
                    <NavLink style={{ color: "black" }} to="/how">
                      Pricing
                    </NavLink>
                  </div>
                </div>

                <div className="container alignleft ">
                  <div className="break"></div>
                  <a href="https://www.facebook.com">
                    <img
                      src={fb}
                      width={40}
                      height={40}
                      className="gap-horizontal"
                    ></img>
                  </a>
                  <a href=" https://www.instagram.com">
                    <img
                      src={insta}
                      width={40}
                      height={40}
                      className="gap-horizontal"
                    ></img>
                  </a>
                  <div className="ntext gap">03219390689 </div>
                  <div className="ntext"> 03232323232</div>
                  <div className="ntext gap">
                    <a
                      style={{ color: "black" }}
                      href="https://myaccount.google.com"
                    >
                      humrahi.official1@gmail.com
                    </a>
                  </div>
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
