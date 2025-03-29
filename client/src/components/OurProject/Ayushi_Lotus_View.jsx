import React from 'react'
import styled from 'styled-components'
import img from '../../images/Ayushi Lotus view.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import GoogleMapCom from '../../pages/GoogleMapCom';

function Ayushi_Lotus_View() {
  
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
                
                <h2>Welcome To Ayushi Lotus View</h2>
               
              </div>
              <p>Ayushi Lotus View is an exclusive upcoming project located at Sagra, near Sai Mandir. Spanning 41,763.97 sq. ft., this elite development offers 28 premium units, combining modern commercial shops and luxurious triplex villas, designed for a harmonious blend of business and upscale living.

Each unit is meticulously planned to provide spacious layouts, contemporary architecture, and high-end amenities. The commercial spaces are designed to cater to business owners and entrepreneurs, while the villa triplexes offer a serene and comfortable lifestyle for families seeking elegance and convenience.</p>
             
<div className="d-flex flex-wrap gap-1">
<div className="">
            <li><strong>Site Address : - </strong>Sagra, Sai Mandir</li>
            <li><strong>No. of Units : - </strong>28</li>
            <li><strong>Status : - </strong>Upcoming completed</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>0</li>
            <li><strong>Project Type : - </strong>Shops & Villa Triplex</li>
            <li><strong>Land Area : - </strong>41763.97 Sqfeet</li>
  
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
<h6>Commercial Units/Shops</h6>
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

    <GoogleMapCom
                locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.2949537063087!2d79.87430531089414!3d23.13780134092641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b232924830cd%3A0xf058781beefc2343!2sShree%20Sai%20Dham!5e0!3m2!1sen!2sin!4v1743139045208!5m2!1sen!2sin"
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
  href="https://wa.me/919575809888?text=Hi!%20I%20came%20across%20the%20Ayushi%20Hari%20Vihar%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Ayushi_Lotus_View

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
`