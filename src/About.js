import React from "react";
import Common from "./Common";
import web from "../src/Pictures/humrahi.png";
import Footer from "./Footer";
function About() {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid nav_bg heading_background2 ">
          <div className="col-10 mx-auto">
            <div className="row breakup ">
              <div
                className="col-md-6 heading_text "
                style={{ fontSize: "70px" }}
              >
                Humrahi is
                <div className="header2" style={{ fontSize: "70px" }}>
                  Redefining the
                </div>
                <div
                  className="header2"
                  style={{ fontSize: "70px", color: "white" }}
                >
                  Way We Grow Old.
                </div>
              </div>
              <div className="col-lg-6   header-img">
                <img src={web} className="img-fluid animated" alt="HomeImg" />
                <div className="break"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg">
          <div className="align-center breakup break">
            <div className="row break">
              <div className="heading_text centersimple">
                Our Story is Deeply Personal
              </div>
              <div className="border-x centersimple "></div>
              <div
                className=" centered-txt22 col-md-7 break"
                style={{
                  left: "50%",
                  right: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  marginTop: "19%",
                  textAlign: "left",
                  wordSpacing: "5px",
                }}
              >
                Humrahi was founded in 2022 when we noticed the growing need for
                social support and companionship for the elderly. We identified
                the problem when a common friend mentioned how their
                grandparents felt lonely because their children lived abroad,
                and they hadn’t seen each other in years. We found that in
                Pakistan, there was a lack of services to care for the elderly
                or provide them with social support; the ones available only
                provided clinical support.
              </div>
              <div
                className=" centered-txt22 col-md-7 break"
                style={{
                  left: "50%",
                  right: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  marginTop: "35%",
                  textAlign: "left",
                  wordSpacing: "5px",
                }}
              >
                Therefore we set out to help senior citizens become happy and
                lead independent lives. Through this service, we connect
                university students with older adults in the community to
                provide them with social support and help them with activities
                of day-to-day living; these activities would include gardening,
                preparing meals, providing transport, grocery shopping, running
                other errands, etc.
              </div>
              <div
                className=" centered-txt22 col-md-7"
                style={{
                  left: "50%",
                  right: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  marginTop: "47%",
                  textAlign: "left",
                  marginBottom: "10%",
                  wordSpacing: "5px",
                }}
              >
                At the same time, we provide an opportunity to university
                students to give back and contribute to the community and earn
                money whilst the elderly get a companion to spend time with and
                have a way to deal with their loneliness
              </div>
              <div className="break breakup"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="break breakup" style={{ marginTop: "45%" }}></div>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background2 ">
          <div className="align-center ">
            <div className="row">
              <div className="heading_text centersimple ">Our Mission</div>
              <div className=" centered-txt col-md-5 break" style={{marginBottom:"90px"}}>
                We’re on a mission to reimagine freedom at any age. Humrahi
                fosters meaningful relationships and connections with older
                adults using technology and community to support fulfilling
                lives at home
              </div>
              
            </div>
          </div>
        </div>
      </section>
     <Footer></Footer>
    </>
  );
}

export default About;
