import React from "react";
import styled from "styled-components";
import img from "../../images/ayushi-vrindavan.jpg";


import OurVideo from "../HomePage/OurVideo";
import Forms from "../contact/Forms";
import FormNirvanaHomes from "../contact/FormNirvanaHomes";
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
              Choose between elegantly designed 2 BHK or 3 BHK flats, fully ready to move in, with spacious sizes ranging from 1473 to 1759 sq. ft. These modern homes are crafted to offer a perfect balance of comfort and functionality, featuring well-ventilated rooms, stylish interiors, and high-quality fittings. Whether you need a cozy space or a larger home for your growing family, these flats cater to diverse lifestyle needs. Additionally, the property includes a dedicated parking facility, ensuring convenience and security for residents. Located in a well-connected area with easy access to essential amenities, these homes provide a perfect blend of luxury and practicality for a hassle-free living experience.
      
              </p>

             
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
            <h6>Covered Campus</h6>
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
              href="https://wa.me/917880008031?text=Hi!%20I%20came%20across%20the%20Nirvana%20Home%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?"
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
`;
