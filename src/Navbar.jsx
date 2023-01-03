import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../src/Pictures/logo.png";
function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-header">
            <NavLink className="navbar-brand" to="/"></NavLink>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <img src={logo} width={200} height={70}></img>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/service"
                  >
                    Our Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/how"
                  >
                    How it Works
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/becompanion"
                  >
                    Become a Companion
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contact"
                  >
                    <button type="button" className="buttont2">
                      Contact Us
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
