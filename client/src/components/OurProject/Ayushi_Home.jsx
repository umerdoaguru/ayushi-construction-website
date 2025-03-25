import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../../images/ayushi-home.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import { Spinner } from 'react-bootstrap';
import video from '../../video/Ayushi home Video.mp4'
import GoogleMapCom from '../../pages/GoogleMapCom';
function Ayushi_Home() {
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
                
                <h2>Welcome To Ayushi Homes</h2>
               
              </div>
              <p>A ready-to-move duplex offering a well-designed living space of 620 sq. ft., perfect for those seeking comfort and functionality. Situated in the heart of Jabalpur, this property is ideal for families or individuals looking for a modern home in a well-connected location. The thoughtfully planned layout ensures maximum space utilization, with well-ventilated rooms, stylish interiors, and quality finishes that enhance the overall appeal. Additionally, the property comes with a dedicated parking facility, providing convenience and security for vehicle owners. With its prime location, this duplex offers easy access to essential amenities, making it a great choice for homebuyers looking for a blend of comfort, convenience, and affordability.
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
<h6>24 Hours Water Supply</h6>
    </div>
    <div className="col-lg-3">
<h6>Jogging Track- Footpath</h6>
    </div>
    <div className="col-lg-3">
<h6>Temple</h6>
    </div>

    <div className="col-lg-12 mt-4">
      <h2>
      SPECIFICATIONS</h2>
    </div>
    <div className="col-lg-3">
<h6>Construction with fly ash bricks and M send.</h6>
    </div>
    <div className="col-lg-3">
<h6>ISI TMT iron Saria.</h6>
    </div>
    <div className="col-lg-3">
<h6>Flush Door.</h6>
    </div>
    <div className="col-lg-3">
<h6>Personal Borwell with 1/2 hp sumrseabal pump.</h6>
    </div>
 
    <div className="col-lg-3">
<h6>Vitrified tiles.</h6>
    </div>
    <div className="col-lg-3">
<h6>Window ms steel grill with three track UPVC section tuffan glass.</h6>
    </div>
    <div className="col-lg-3">
<h6>Wooden panelling or granite panelling on doors.</h6>
    </div>
    <div className="col-lg-3">
<h6>Double coat putty finish one coat primer and double coat paint.</h6>
    </div>
    <div className="col-lg-3">
<h6>Wiring and modular switch Anchor/CPL.</h6>
    </div>
    <div className="col-lg-3">
<h6>Modular kitchen with chimney.</h6>
    </div>

    <div className="col-lg-3">
<h6>Green Marble Kitchen top.</h6>
    </div>
    <div className="col-lg-3">
<h6>Green Marble on Stairs</h6>
    </div>
    <div className="col-lg-3">
<h6>Quba locks</h6>
    </div>
    <div className="col-lg-3">
<h6>SS Grill on stairs</h6>
    </div>
    <div className="col-lg-3 ">
<h6>MS and SS Grill on balcony</h6>
    </div>
    <div className="col-lg-3 ">
<h6>Anit skid tiles on washroom 12"X18"</h6>
    </div>
    <div className="col-lg-3 ">
<h6>Parking tiles 12mm 16"X16"</h6>
    </div>
    <div className="col-lg-3 ">
<h6>MS Gate</h6>
    </div>
    <div className="col-lg-3 ">
<h6>Tukdi Roof production for water leakage</h6>
    </div>
     
    <div className="position-relative" id="cont">
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
<div className="mt-4">
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            zIndex: 10,
          }}
        >
          <Spinner animation="border" variant="light" /> {/* Change this to your preferred loader */}
        </div>
      )}

      <video
        src={video}
        autoPlay
        loop
        muted
        onLoadedData={handleLoadedData}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
</div>
    </div>
   
    <GoogleMapCom 
                locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.8593516888495!2d79.86728047603876!3d23.13881571197894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3b306da7e1f%3A0xa79d96c935f2e4f4!2zQXl1c2hpIEhvbWVzIOCkhuCkr-ClgeCkt-ClgCDgpLngpYvgpK7gpY3gpLg!5e0!3m2!1sen!2sin!4v1742794681366!5m2!1sen!2sin"
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
    
}
.card-title{
    color: #f26a20;
  }
  .container{
    margin-top: 6rem;
  }
`