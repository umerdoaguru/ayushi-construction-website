import React, { useState } from 'react'
import styled from 'styled-components'

import ayushi_dhara from '../../images/ayushi-dhara.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import GoogleMapCom from '../../pages/GoogleMapCom';
import video from '../../video/ayushidhara.mp4'
import { Spinner } from 'react-bootstrap';

function Ayushi_Dhara() {

  const [loading, setLoading] = useState(true);
  
      const handleLoadedData = () => {
        setLoading(false);
      };
  
  return (
    <Wrapper>
    <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
    <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Our Ayushi Dhara</h2>
               
              </div>
              <p>Discover the perfect opportunity to build your dream home in the completed residential project at Sagra, Lamheta Road. This meticulously planned development offers 148 fully sold-out plots, spread across 5.20 acres of prime land, making it an ideal investment for homeowners and developers alike.

With a strategic location, the project provides easy access to schools, hospitals, shopping centers, and major transportation routes, ensuring convenience and connectivity. Each plot is designed to offer ample space, excellent infrastructure, and a peaceful environment.

The project has been successfully completed, making it a ready-to-build location with essential amenities in place.
           
</p>

<div className="d-flex flex-wrap gap-1">
<div className="">
            <li><strong>Site Address : - </strong>Sagra, Lamheta Road</li>
            <li><strong>No. of Units : - </strong>148</li>
            <li><strong>Status : - </strong>Project completed</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>148</li>
            <li><strong>Project Type : - </strong>Plots</li>
            <li><strong>Land Area : - </strong>5.20 acre</li>
  
          </div>
</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-left">
              <img src= {ayushi_dhara} alt="img" />
         
            </div>
          </div>

    <div className="col-lg-12">
      <h2>
      AMENITIES</h2>
    </div>
    <div className="col-lg-3">
<h6>Grand Entrance Gate</h6>
    </div>
    <div className="col-lg-3">
<h6>CCTV Covered Campus


</h6>
    </div>
    <div className="col-lg-3">
<h6>3 Beautiful Garden</h6>
    </div>
    <div className="col-lg-3">
<h6>RCC  Wide Road</h6>
    </div>

    <div className="col-lg-3">
<h6>
Electricity Supply</h6>
    </div>
    <div className="col-lg-3">
<h6>Draines System</h6>
    </div>
    <div className="col-lg-3">
<h6>Temple</h6>
    </div>
    <div className="col-lg-3">
<h6>Children Play Area</h6>
    </div>
  
     
   


    <GoogleMapCom
                locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.9709326397283!2d79.86601557603863!3d23.134737712131795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b37bf7c868c9%3A0xb7bbcfdd18689f62!2sAyushi%20Dhara!5e0!3m2!1sen!2sin!4v1742816322465!5m2!1sen!2sin" />

    <div className="container text-center mt-5">
      <div className="h4" style={{color:" #f26a20"}}>Contact Us </div>
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
  href="https://wa.me/919575809888?text=Hi!%20I%20came%20across%20the%20Ayushi%20Dhara%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Ayushi_Dhara

const Wrapper  = styled.div`
    img{
  width: 100%;
 
}
.imgset{
    height: 25rem;
    
}

h6{
    /* color:  #f26a20; */
    
}
h2{
    color:  #f26a20;
    
}
.card-title{
    color:  #f26a20;
  }
  .container{
    margin-top: 6rem;
  }
  
video{
    width: 25%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
}
p{
    text-align: justify;
  }
`