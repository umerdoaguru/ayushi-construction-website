import React from "react";
import AboutUs from "../images/ayushi-about.jpg";
import About1 from "../images/About1.png";

import AboutSection from "../components/AboutPage/AboutSection";
import Heros from "../components/Heros";
import ContactSection from "../components/AboutPage/ContactSection";
import CountSection from "../components/AboutPage/CountSection";
import OurProjects from "../components/AboutPage/OurProjects";


function About() {
  
  return (
    <>
      <Heros title="About Us" backgroundImage={AboutUs} />
   
      <AboutSection />
      <OurProjects/>
     
      <ContactSection />
      <CountSection />
     
    </>
  );
}

export default About;
