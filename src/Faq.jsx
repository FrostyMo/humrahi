import React, { useState } from "react";
import ReactDOM from "react-dom";
import SelectBox from "./select-box.jsx";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./Common.css";
import "./Faq";
import "./styles.css";
import arrow from "./Pictures/arrow.png";
import arrowd from "./Pictures/arrowD.png";
import web from "../src/Pictures/humrahi.png";
import Footer from "./Footer";
function Faq() {
  const [readMore, setReadMore] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const [readMore4, setReadMore4] = useState(false);
  const [readMore5, setReadMore5] = useState(false);
  const [readMore6, setReadMore6] = useState(false);
  const extraContent1 = (
    <div className="extra-content col-md-10" style={{ fontSize: "25px" }}>
      Our companions are university students who want to give back to the
      community while earning flexible income in the process, and they love
      spending time with the elderly!
    </div>
  );

  const extraContent2 = (
    <div
      className="extra-content col-md-10 ntexts"
      style={{ fontSize: "25px" }}
    >
      Our students are devoted and willing to do whatever it takes to support
      your continued independence, connectedness, and happiness. We provide an
      hourly companionship where either the student would visit and spend time
      with you in person or digitally. On top of this, we provide additional
      services as well. We offer light support around your house – things
      including; meal preparation, light cleaning, arranging closets, gardening
      etc. We also provide assistance with doing errands, either with you or on
      your behalf, such as grocery shopping, gift-buying, picking up parcels,
      buying medicine etc. Depending on the availability, we also take you to
      your medical appointments or events in the community. Additionally, we
      also teach you and help with digital technologies and devices, both
      remotely and in person.
    </div>
  );
  const extraContent3 = (
    <div className="extra-content col-md-10" style={{ fontSize: "25px" }}>
      It's straightforward! Just give us a call or contact us through email and
      we'll take care of the arrangement for you. Once we contact you, you can
      provide us with details regarding the additional services you're looking
      for on top of the hourly companionship.
    </div>
  );
  const extraContent4 = (
    <div className="extra-content col-md-8" style={{ fontSize: "25px" }}>
      We recommend that you book a companion a few days in advance to make the
      process hassle-free!
    </div>
  );
  const extraContent5 = (
    <div className="extra-content col-md-10" style={{ fontSize: "25px" }}>
      Yes, we do try our best! However, we can't guarantee that the request will
      be filled each time since students are busy with their own schedules.
    </div>
  );
  const extraContent6 = (
    <div className="extra-content col-md-10" style={{ fontSize: "25px" }}>
      One of the benefits of our service is that you are relieved of the stress
      of having to interview or choose your companion: we'll handle it for you!
      You can feel confident that a dependable, caring student would
      respectfully assist you and would find a way to connect with you. All of
      our students are currently enrolled in university and they are chosen
      based on certain criteria, for example, interests, schedule flexibility,
      and availability.
    </div>
  );
  const linkName = readMore ? arrow : arrowd;
  const linkName2 = readMore2 ? arrow : arrowd;
  const linkName3 = readMore3 ? arrow : arrowd;
  const linkName4 = readMore4 ? arrow : arrowd;
  const linkName5 = readMore5 ? arrow : arrowd;
  const linkName6 = readMore6 ? arrow : arrowd;
  return (
    <>
      <section className="align-items-center">
        <div className="container-fluid nav_bg heading_background5">
          <div className="align-center">
            <div className="row">
              <div className="ntextM centersimple break breakup">
                Frequently Asked Questions
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container  ">
        <div className="App">
          {" "}
          <div className=" heading_textBig2">Who are the Students?</div>
          <div className="at-end ntexts">
            <a
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <img
                src={linkName}
                width={15}
                height={10}
                className="gap-horizontal"
              ></img>
            </a>
          </div>
          {readMore && extraContent1}
          <div className="border-x3 "></div>
        </div>
      </div>

      <div className="container  ">
        <div className="App">
          {" "}
          <div className="heading_textBig2">
            What kind of services do you offer?
          </div>
          <div className="at-end">
            <a
              onClick={() => {
                setReadMore2(!readMore2);
              }}
            >
              <img
                src={linkName2}
                width={15}
                height={10}
                className="gap-horizontal"
              ></img>
            </a>
          </div>
          {readMore2 && extraContent2}
          <div className="border-x3 "></div>
        </div>
      </div>

      <div className="container  ">
        <div className="App">
          {" "}
          <div className="heading_textBig2">How do I sign up?</div>
          <div className="at-end">
            <a
              onClick={() => {
                setReadMore3(!readMore3);
              }}
            >
              <img
                src={linkName3}
                width={15}
                height={10}
                className="gap-horizontal"
              ></img>
            </a>
          </div>
          {readMore3 && extraContent3}
          <div className="border-x3 "></div>
        </div>
      </div>

      <div className="container  ">
        <div className="App">
          {" "}
          <div className="heading_textBig2">
            How far in advance do I need to book a companion?
          </div>
          <div className="at-end">
            <a
              onClick={() => {
                setReadMore4(!readMore4);
              }}
            >
              <img
                src={linkName4}
                width={15}
                height={10}
                className="gap-horizontal"
              ></img>
            </a>
          </div>
          {readMore4 && extraContent4}
          <div className="border-x3 "></div>
        </div>
      </div>

      <div className="container  ">
        <div className="App">
          {" "}
          <div className="heading_textBig2">
            Do we cater to same-day requests?
          </div>
          <div className="at-end">
            <a
              onClick={() => {
                setReadMore5(!readMore5);
              }}
            >
              <img
                src={linkName5}
                width={15}
                height={10}
                className="gap-horizontal"
              ></img>
            </a>
          </div>
          {readMore5 && extraContent5}
          <div className="border-x3 "></div>
        </div>
      </div>

      <div className="container breakd ">
        <div className="App">
          {" "}
          <div className="heading_textBig2">
            {" "}
            Do I have to choose my companion beforehand?
          </div>
          <div className="at-end">
            <a
              onClick={() => {
                setReadMore6(!readMore6);
              }}
            >
              <img
                src={linkName6}
                width={15}
                height={10}
                className="gap-horizontal"
              ></img>
            </a>
          </div>
          {readMore6 && extraContent6}
          <div className="border-x3 "></div>
        </div>
      </div>

      <section className="d-flex align-items-center">
        <div className="container-fluid nav_bg heading_background2">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 heading_textBig2 breakup break">
                Contact Us Now!
                <div className="ntexts col-md-15">
                  We hope you've found this page informative, but if you still
                  have questions, we're always happy to help. Feel free to give
                  us a call at 310-853-8997 or email us at fawfaw@gmail.com and
                  learn more about how Humrahi works. We can't wait to hear from
                  you, and help you stay happy and independent!
                </div>
                <div className="mt-3">
                  <NavLink to={"/contact"}>
                    <button type="button" className="buttont">
                      Contact Us
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6   header-img breakup">
                <img
                  src={web}
                  width={500}
                  height={320}
                  className="img-fluid animated"
                  alt="HomeImg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Faq;
