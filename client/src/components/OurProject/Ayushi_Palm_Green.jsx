import React from 'react'
import styled from 'styled-components'
import img from '../../images/ayushi-palm-green.jpg'

import { FaWhatsapp } from 'react-icons/fa'



function Ayushi_Palm_Green() {
  
  return (
    <Wrapper>
    
    <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
    <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Ayushi Palm Green</h2>
               
              </div>
              <p>Choose between spacious 2 BHK or 3 BHK flats, fully ready to move in, with sizes ranging from 1473 to 1759 sq. ft. Designed for modern living, these flats offer a perfect combination of style, comfort, and functionality. Each unit features well-ventilated rooms, contemporary interiors, and premium-quality fittings to ensure a superior living experience. Whether you are looking for a cozy space or a larger home for your family, these flats cater to diverse needs. Additionally, a dedicated parking facility is provided for added convenience and security. Situated in a prime location with easy access to essential amenities, these homes offer a seamless and luxurious lifestyle.</p>
             

         
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
<h6>Open Air Gym</h6>
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
  href="https://wa.me/917880008031?text=Hi!%20I%20came%20across%20the%20Ayushi%20Villa%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Ayushi_Palm_Green
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
`