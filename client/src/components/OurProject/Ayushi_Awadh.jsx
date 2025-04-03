import React from 'react'
import styled from 'styled-components'
import img from '../../images/Ayushi Awadh.jpeg'

import { FaWhatsapp } from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import GoogleMapCom from '../../pages/GoogleMapCom';

function Ayushi_Awadh() {
  
    const whatsappNumber = "+919575809888"; // Your WhatsApp number
    const defaultMessage = "Hi! I came across the Ayushi Awadh project on your website, and I’m interested in exploring more about it. Could we discuss the details?";
  
    // Constructing WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  
  return (
   <Wrapper>
    <div className="container">
     <div className="row align-items-center mt-5 g-4 mb-5">
     
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Ayushi Awadh</h2>
               
              </div>
              <p>Discover Ayushi Awadh, an upcoming premium residential project situated at Purwa Road Dhanvantari Nagar (near Medical College).Spanning across 9 acres, this elite development will offer 200 opulent 4 BHK Triplex Villas, designed to provide spacious living, modern architecture, and a luxurious lifestyle.

Each villa boasts thoughtfully crafted interiors, ensuring ample natural light, elegant aesthetics, and top-tier fittings. Nestled within a secure gated community, residents will enjoy privacy, exclusivity, and world-class amenities for an unmatched living experience.
</p>
             
<div className="d-flex flex-wrap gap-1">
<div className="">
            <li><strong>Site Address : - </strong>Purwa Road</li>
            <li><strong>No. of Units : - </strong>200</li>
            <li><strong>Status : - </strong>Upcoming Project</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>0</li>
            <li><strong>Project Type : - </strong>4 BHK Villas Triplex</li>
            <li><strong>Land Area : - </strong>9 acre</li>
  
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
<h6>Children's Play Area
</h6>
    </div>
    <div className="col-lg-3">
<h6>CCTV Covered Campus


</h6>
    </div>
    <div className="col-lg-3">
<h6>Clubhouse</h6>
    </div>
    <div className="col-lg-3">
<h6>Swimming Pool</h6>
    </div>
    <div className="col-lg-3">
<h6>Gym
</h6>
    </div>

    <div className="col-lg-3">
<h6>
Yoga and Meditation Space
</h6>
    </div>
   
    <div className="col-lg-3">
<h6>Temple
</h6>
    </div>
    <div className="col-lg-3">
<h6>Open Gym
</h6>
    </div>
   
   
    <div className="col-lg-3">
<h6>Jogging Tracks

</h6>
    </div>
   
    <div className="col-lg-3">
<h6>BADMINTON COURT/ TENIS COURT


</h6>
    </div>
    <div className="col-lg-3">
<h6>BASKETBALL COURT/ VOLLEYBALL COURT


</h6>
    </div>
    <div className="col-lg-3">
<h6>CRICKET TURFS


</h6>
    </div>
 
    <div className="col-lg-3">
<h6>Grand Entrance Gate


</h6>
    </div>
    <div className="col-lg-3">
<h6>Under Ground Drain System


</h6>
    </div>
    <div className="col-lg-3">
<h6>Sculptures


</h6>
    </div>
    <div className="col-lg-3">
<h6>Under Ground Electricity System


</h6>
    </div>
    <div className="col-lg-3">
<h6>Rcc Wide Road (40 Feet & 30 Feet)


</h6>
    </div>
    <div className="col-lg-3">
<h6>Beautiful landscape Garden
</h6>
    </div>

    <GoogleMapCom
                locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7336.749648308055!2d79.87333389777685!3d23.15651608815761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b17f5b676ebd%3A0x574b50123a43cb29!2sPurwa%20Rd%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482003!5e0!3m2!1sen!2sin!4v1743137364108!5m2!1sen!2sin"
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
  href="https://wa.me/919575809888?text=Hi!%20I%20came%20across%20the%20Ayushi Awadh%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Ayushi_Awadh

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