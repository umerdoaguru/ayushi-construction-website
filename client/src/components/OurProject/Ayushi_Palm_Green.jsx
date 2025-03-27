import React from 'react'
import styled from 'styled-components'
import img from '../../images/ayushi-palm-green.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import GoogleMapCom from '../../pages/GoogleMapCom'



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
             
<div className="d-flex flex-wrap gap-1">
<div className="">
            <li><strong>Site Address : - </strong>Ganganagar Garha. </li>
            <li><strong>No. of Units : - </strong>125</li>
            <li><strong>Status : - </strong>Project completed</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>125</li>
            <li><strong>Project Type : - </strong>2/3 bhk Building apartment</li>
            <li><strong>Land Area : - </strong>1.78 acre</li>
  
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
            <h6>Landscaped garden with lush green campus.</h6>
          </div>
          <div className="col-lg-3">
            <h6>Fountain and children play area.</h6>
          </div>
          <div className="col-lg-3">
            <h6>Jogging Track</h6>
          </div>
          <div className="col-lg-3">
            <h6>Power backup for lifts and essential services.</h6>
          </div>

          <div className="col-lg-3">
            <h6>Elegant entrance gate.</h6>
          </div>
          <div className="col-lg-3">
            <h6>Ample space for parking.</h6>
          </div>
          <div className="col-lg-3">
            <h6>Secured Campus with Boundary wall</h6>
          </div>
          <div className="col-lg-3">
            <h6>Club house</h6>
          </div>
          <div className="col-lg-3">
            <h6>Elegant street lighting</h6>
          </div>
          <div className="col-lg-12 mt-4">
      <h2>
      SPECIFICATIONS</h2>
    </div>
    <div className="col-lg-3">
<h6>POP with acrylic emulsion paint on the walls.</h6>
    </div>
    <div className="col-lg-3">
<h6>Vitrified/marble flooring</h6>
    </div>
    <div className="col-lg-3">
<h6>Anodized/powder coated aluminium/PVC window frames and shutters.</h6>
    </div>
    
    <div className="col-lg-3">
<h6>Designer POP With acrylic emulsion paint on the celling.</h6>
    </div>
    <div className="col-lg-3">
<h6>Ambient lighting and modular switches.</h6>
    </div>
    <div className="col-lg-3">
<h6>Designer textured wall.</h6>
    </div>
 
    <div className="col-lg-3">
<h6>Vitrified tiles.</h6>
    </div>
    <div className="col-lg-3">
<h6>Stainless steel kitchen sink.</h6>
    </div>
    <div className="col-lg-3">
<h6>Anti skid tile floorings</h6>
    </div>
    <div className="col-lg-3">
<h6>Weather proof paint on walls and ceilings.</h6>
    </div>
    <div className="col-lg-3">
<h6>Provision for Elevator.</h6>
    </div>
    <div className="col-lg-3">
<h6>High quality electrical wiring and modular switches.</h6>
    </div>

    <GoogleMapCom 
                locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.2197561091393!2d79.88415197603919!3d23.162178211102614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1486cff691b%3A0x12e0f996e72b5211!2sAyushi%20Palm%20Green%20Apartment%20(APG)!5e0!3m2!1sen!2sin!4v1742807842702!5m2!1sen!2sin"/>

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