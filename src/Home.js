import React from "react";
import Common from "./Common";
import web from "../src/Pictures/humrahi.png";
import home from "../src/Pictures/home-p.png"
function Home() {
  return (
    <>
      <Common
        name="A companionship service between
        university students and the elderly"
        imgsrc={web}
        imgsrc2={home}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default Home;
