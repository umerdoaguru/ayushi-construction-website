import React, { useState } from "react";
// import img from "../images/slider_img01.webp";
import img from "../images/banner123.jpg";
import video from '../video/Ayushi Construction home.mp4'


import img1 from "../images/Untitled design (10).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutSection from "../components/HomePage/AboutSection";
import Bank_Partner from "../components/HomePage/Bank_Partner";
import WhyChoose from "../components/HomePage/OurProjects";
import OurProjects from "../components/HomePage/WhyChoose";
import LastHeropage from "../components/HomePage/LastHeropage";
import OurVideo from "../components/HomePage/OurVideo";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";
import GoogleReview from "./GoogleReview";

function HomePage() {
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };

  return (
    <Wrapper>
{/*   
      <div
        className="container-fluid"
        id="cont"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        
        }}
      >
        
      </div> */}
       <div className="position-relative" id="cont">
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            zIndex: 10,
          }}
        >
          <Spinner animation="border" variant="light" /> {/* Change this to your preferred loader */}
        </div>
      )}

      <video
        src={video}
        autoPlay
        loop
        muted
        onLoadedData={handleLoadedData}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

      <AboutSection/>
      <WhyChoose/>
      <OurProjects/>
      <Bank_Partner/>
      <OurVideo/>
      <LastHeropage/>
      <GoogleReview/>
     


    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  video{
   
    margin-top: 6.4rem;
    @media screen and (max-width: 768px) {
    margin-top: 4.5rem;
      
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
     margin-top: 5.5rem;
      
    }
    @media screen and (min-width: 1021px) and (max-width: 1400px) {
    
      margin-top: 5rem;
    }
  
  }


`
