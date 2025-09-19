import React from 'react'
import styled from 'styled-components'
import img from '../../images/ayushi-hari-vihar.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import GoogleMapCom from '../../pages/GoogleMapCom';

function Ayushi_Hari_Vihar() {
  
    const whatsappNumber = "+919575809888"; // Your WhatsApp number
    const defaultMessage = "Hi! I came across the Ayushi Hari Vihar project on your website, and I’m interested in exploring more about it. Could we discuss the details?";
  
    // Constructing WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  
  return (
   <Wrapper>
    <div className="container">
     <div className="row align-items-center mt-5 g-4 mb-5">
     
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Ayushi Hari Vihar Phase-I</h2>
               
              </div>
              <p>Presenting an exclusive residential development at Paraswada, Dhanwantri Nagar, offering fully developed plots in a prime location. Spanning 2.32 acres, this completed project consists of 56 meticulously planned units, all of which have been successfully sold, reflecting its high demand and superior quality.

These residential plots provide an excellent opportunity for homeowners and investors alike, allowing for the construction of custom dream homes in a well-planned, thriving community.

Located in Paraswada, Dhanwantri Nagar, residents benefit from proximity to key amenities such as educational institutions, healthcare centers, shopping hubs, and major transport links, ensuring convenience and connectivity.


</p>
             
<div className="d-flex flex-wrap gap-4">
<div className="">
            <li><strong>Site Address : - </strong>Paraswada,Dhanwantri  nagar</li>
            <li><strong>No. of Units : - </strong>56</li>
            <li><strong>Status : - </strong>Project completed</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>56</li>
            <li><strong>Project Type : - </strong>Plots</li>
            <li><strong>Land Area : - </strong>2.32 acre</li>
  
          </div>
</div>
              
            </div>
          </div>

          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-left">
              <img src= {img} alt="img" />
         
            </div>
          </div>

    <div className="col-lg-12">
      <h2>
      AMENITIES</h2>
    </div>
    <div className="col-lg-3">
<h6>Grand Gentry Enterance</h6>
    </div>
    <div className="col-lg-3">
<h6>CCTV Covered Campus


</h6>
    </div>
    <div className="col-lg-3">
<h6>Water Supply</h6>
    </div>
    <div className="col-lg-3">
<h6>Kids Play Area</h6>
    </div>

    <div className="col-lg-3">
<h6>
Soalr Lighting</h6>
    </div>
   
    <div className="col-lg-3">
<h6>24 Hours Water Supply</h6>
    </div>
    <div className="col-lg-3">
<h6>Jogging Track- Footpath</h6>
    </div>
    <div className="col-lg-3">
<h6>Beautiful garden</h6>
    </div>
    <div className="col-lg-3">
<h6>Temple</h6>
    </div>
   
    <GoogleMapCom
                locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0579516827493!2d79.87518507603933!3d23.168084910881046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b18fb38602d3%3A0x91e0a14a3d0fa692!2sAyushi%20Hari%20vihar!5e0!3m2!1sen!2sin!4v1742816968619!5m2!1sen!2sin"
            />

    <div className="container text-center mt-5">
      <div className="h4" style={{color:"#f26a20"}}>Contact Us </div>
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
  href="https://wa.me/919575809888?text=Hi!%20I%20came%20across%20the%20Ayushi%20Hari%20Vihar%20project%20phase-I%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaWhatsapp     size="50px" color='#25D366'/>
</a>



    </div>


    
        </div>
       
        </div>
   </Wrapper>
  )
}

export default Ayushi_Hari_Vihar

const Wrapper  =  styled.div`
img{
    width: 100%;
}
   
.imgset{
    height: 25rem;
}
h2{
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
`