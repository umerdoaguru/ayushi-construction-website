import React from "react";
import styled from "styled-components";
import img from "../../images/ayushi-vrindavan.jpg";


import OurVideo from "../HomePage/OurVideo";

import { FaWhatsapp } from "react-icons/fa";
import GoogleMapCom from "../../pages/GoogleMapCom";

function Ayushi_Vrindavan() {

  return (
    <Wrapper>
      <div className="container">
        <div className="row align-items-center mt-5 g-4 mb-5">
          <div className="col-lg-6 mt-3">
            <div
              className="about-content s-about-content pl-30"
              data-aos="fade-right"
            >
              <div className="about-title second-atitle">
                <h2>Welcome To Ayushi Vrindavan</h2>
              </div>
              <p>
              Discover your ideal investment opportunity with our ongoing residential plot project in front of iskcon temple in Chowkital. Spanning across 6.30 acres, this project offers 116 well-planned plots, with 28 units already sold, reflecting its high demand and value.

Located in a prime and well-connected area, these plots provide an excellent foundation for building your dream home or making a long-term investment. The project is surrounded by essential amenities, including schools, hospitals, shopping centers, and transportation hubs, ensuring a convenient and comfortable lifestyle.

With limited plots available, this is your golden opportunity to secure a valuable piece of land in Chowkital. Don’t miss out—invest today and turn your dreams into reality!
      
              </p>

              <div className="d-flex flex-wrap gap-1">
<div className="">
            <li><strong>Site Address : - </strong>Chowkital</li>
            <li><strong>No. of Units : - </strong>116</li>
            <li><strong>Status : - </strong>On going project</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>28</li>
            <li><strong>Project Type : - </strong>Plots</li>
            <li><strong>Land Area : - </strong>6.30 acre</li>
  
          </div>
</div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos="fade-left">
              <img src={img} alt="img" />
            </div>
           
          </div>

          <div className="col-lg-12">
            <h2>AMENITIES</h2>
          </div>
          <div className="col-lg-3">
            <h6>Grand Enterance Gate</h6>
          </div>
          <div className="col-lg-3">
<h6>CCTV Covered Campus


</h6>
    </div>
          <div className="col-lg-3">
            <h6>Beautiful Garden</h6>
          </div>
          <div className="col-lg-3">
            <h6>RCC Wide Road</h6>
          </div>

          <div className="col-lg-3">
            <h6>Electricity Supply</h6>
          </div>
          <div className="col-lg-3">
            <h6>Draines System</h6>
          </div>
          <div className="col-lg-3">
            <h6>Children Play Area</h6>
          </div>
          <div className="col-lg-3">
            <h6>Radha Krishna sculpture</h6>
          </div>
         
          <GoogleMapCom 
                locationUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1834.5566840595739!2d79.8523463786097!3d23.1295310704706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA3JzQ2LjMiTiA3OcKwNTEnMTIuMyJF!5e0!3m2!1sen!2sin!4v1742799997431!5m2!1sen!2sin"
            />

       <div className="container text-center">
            <div className="h4" style={{ color: "#f26a20" }}>
              Contact Us{" "}
            </div>
            <div
              className="underline mx-auto"
              style={{
                height: 3,
                width: "3rem",
                backgroundColor: "#34495E",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></div>
            <a
              href="https://wa.me/917880008031?text=Hi!%20I%20came%20across%20the%20Ayushi Vrindavan%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size="50px" color="#25D366" />
            </a>
          </div>

          {/* <FormNirvanaHomes/> */}
        </div>
        
      </div>
    </Wrapper>
  );
}

export default Ayushi_Vrindavan;

const Wrapper = styled.div`
  img {
    width: 100%;
  }

  .imgset {
    height: 25rem;
  }

  h2 {
    color: #f26a20;
    
  }
  .card-title{
    color: #f26a20;
  }
  .container{
    margin-top: 6rem;
  }
  p{
    text-align: justify;
  }
`;
