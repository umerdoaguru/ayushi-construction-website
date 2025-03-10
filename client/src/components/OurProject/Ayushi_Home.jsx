import React from 'react'
import styled from 'styled-components'
import img from '../../images/ayushi-home.jpg'

import { FaWhatsapp } from 'react-icons/fa'

function Ayushi_Home() {
  
  
  return (
   <Wrapper>
   
   <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
   
         
          <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Ayushi Home</h2>
               
              </div>
              <p>A ready-to-move duplex offering a well-designed living space of 620 sq. ft., perfect for those seeking comfort and functionality. Situated in the heart of Jabalpur, this property is ideal for families or individuals looking for a modern home in a well-connected location. The thoughtfully planned layout ensures maximum space utilization, with well-ventilated rooms, stylish interiors, and quality finishes that enhance the overall appeal. Additionally, the property comes with a dedicated parking facility, providing convenience and security for vehicle owners. With its prime location, this duplex offers easy access to essential amenities, making it a great choice for homebuyers looking for a blend of comfort, convenience, and affordability.
              </p>
             

              <p className ="fw-bold">Total 9 Acres</p>
              <p className ="fw-bold"><span></span>Project Duration 2017 - 2021
</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-left" >
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
  href="https://wa.me/919575809888?text=Hi!%20I%20came%20across%20the%20Ayushi%20Home%20project%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Ayushi_Home
const Wrapper  =  styled.div`
    
img{
    width: 100%;
   
}
.imgset{
    height: 25rem;
}
h2{
    color: #f26a20;
    font-family: "Playfair Display";
}
.card-title{
    color: #f26a20;
  }
`