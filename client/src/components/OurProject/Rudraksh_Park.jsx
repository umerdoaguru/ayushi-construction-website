import React from 'react'
import styled from 'styled-components'
import img from '../../images/rudraksh-park.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import OurVideo from '../HomePage/OurVideo'
import GoogleMapCom from '../../pages/GoogleMapCom'



function Rudraksh_Park() {

  
  return (
    <Wrapper>
    
    <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
    <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Rudraksh Park</h2>
               
              </div>
              <p>Experience modern living at Rudraksh Park, a fully completed residential project in the prime location of Ganganagar Garha. This well-designed 2BHK apartment complex spans across 1.86 acres, offering 152 premium units, all of which have been successfully sold—a testament to its quality and desirability.

Designed for comfort and convenience, each 2BHK unit features spacious interiors, modern architecture, and high-quality finishes. The project ensures a secure and community-friendly environment, making it an ideal choice for families and professionals seeking a peaceful and well-connected living space.

With its strategic location, Rudraksh Park provides easy access to schools, hospitals, shopping centers, and public transport, ensuring a seamless urban lifestyle.</p>
             

             <div className="d-flex flex-wrap gap-1">
             <div className="">
                         <li><strong>Site Address : - </strong>Ganganagar Garha. </li>
                         <li><strong>No. of Units : - </strong>152</li>
                         <li><strong>Status : - </strong>Project completed</li>
                       </div>
             <div className="">
             
                         <li><strong>No. of Sale Unit : - </strong>152</li>
                         <li><strong>Project Type : - </strong>2bhk Building apartment</li>
                         <li><strong>Land Area : - </strong>1.86 acre</li>
               
                       </div>
             </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="s-about-img p-relative"data-aos= "fade-left" >
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
<h6>
Temple</h6>
    </div>
    
    <div className="col-lg-3">
<h6>24 Hours Water Supply</h6>
    </div>
    <div className="col-lg-3">
<h6>Jogging Track- Footpath</h6>
    </div>

    <div className="col-lg-12 mt-4">
      <h2>
      SPECIFICATIONS</h2>
    </div>
    <div className="col-lg-3">
<h6>R.C.C.. Framed Structure</h6>
    </div>
    <div className="col-lg-3">
<h6>AAC Blocks Walls</h6>
    </div>
    <div className="col-lg-3">
<h6>Teak Entry Door</h6>
    </div>
    <div className="col-lg-3">
<h6>Vitrified Tiled</h6>
    </div>
 
    <div className="col-lg-3">
<h6>Modular Kitchen Platform</h6>
    </div>
    <div className="col-lg-3">
<h6>Branded Bath Fitting </h6>
    </div>
    <div className="col-lg-3">
<h6>ISI Electrical Goods </h6>
    </div>
    <div className="col-lg-3">
<h6>Internal Flush Door  </h6>
    </div>
    <div className="col-lg-3">
<h6>Branded Putty And Painting  </h6>
    </div>
    <div className="col-lg-3">
<h6>S.S.. Stair Railing  </h6>
    </div>

    <div className="col-lg-3">
<h6>UPVC / Aluminium Windows</h6>
    </div>
    <div className="col-lg-3">
<h6>Glass & Stainless Steel Railing At Elevation</h6>
    </div>
    <div className="col-lg-3">
<h6>Testure At Elevation</h6>
    </div>
    <div className="col-lg-3">
<h6>Stair Floor of Green Marble</h6>
    </div>
    <div className="col-lg-3 ">
<h6>Safety Grills</h6>
    </div>
    <h2 className='text-center'>
    Video</h2>
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
    <OurVideo/>
    <GoogleMapCom
                locationUrl= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14675.247307074349!2d79.86035136439021!3d23.140552420652917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3139133dae3%3A0xb17dd5810d162f4d!2sRudraksh%20park!5e0!3m2!1sen!2sin!4v1742808696852!5m2!1sen!2sin"    />
    <div className="container text-center mt-2">
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
  href="https://wa.me/917880008031?text=Hi!%20I%20came%20across%20the%20Rudraksh%20Park%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Rudraksh_Park
const Wrapper  = styled.div`
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