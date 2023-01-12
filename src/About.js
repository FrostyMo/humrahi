import React from "react";
import Common from "./Common";
import web from "../src/Pictures/humrahi.png";
import Footer from "./Footer";
function About() {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid nav_bg heading_background2 ">
          <div className="col-11 mx-auto breakup">
            <div className="row breakup ">
              <div
                className="col-md-6 heading_textBigB2 breakup"
              >
                Humrahi is
                <div className=" heading_textBigB2 ">
                  Redefining the
                </div>
                <div
                  className=" col-md-16 heading_textBigB2"
                  style={{color: "white" }}
                >
                  Way We Grow Old.
                </div>
                <div className="break"></div>
              </div>
              <div className="col-lg-6 header-img">
                <img src={web} className="img-fluid animated breakup" alt="HomeImg" />
                <div className="break"></div>
                <div className="break"></div>
              </div>
              <div className="break"></div>
            </div>
            <div className="break"></div>
          </div>
          <div className="break"></div>
        </div>
      </section>

      <section className="align-items-center">
        <div className="container-fluid nav_bg">
          <div className="align-center breakup ">
            <div className="row ">
              <div className="heading_textBigAbt centersimple" style={{textDecoration:"underline", textUnderlineOffset:"20px"}}>
                Our Story is Deeply Personal
              </div>
              {/* <div className="border-x centersimple "></div> */}
              <div
                className=" ntextP col-md-9 centersimple breakup"
                
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
                className="  ntextP col-md-9 centersimple breakup"
                
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
                className="  ntextP col-md-9 centersimple breakup"
             
              >
                At the same time, we provide an opportunity to university
                students to give back and contribute to the community and earn
                money whilst the elderly get a companion to spend time with and
                have a way to deal with their loneliness
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="break " ></div>

      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background2">
          <div className="align-center ">
            <div className="row">
              <div className="heading_textBig2 centersimple ">Our Mission</div>
              <div className=" ntextP2 centersimple col-md-8 break breakup" style={{textAlign:"center"}} >
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
