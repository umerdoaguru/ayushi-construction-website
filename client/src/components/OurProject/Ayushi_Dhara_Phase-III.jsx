import React, { useState } from 'react'
import styled from 'styled-components'

import ayushi_dhara from '../../images/ayushi-dhara.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import GoogleMapCom from '../../pages/GoogleMapCom';
import video from '../../video/ayushidhara.mp4'
import { Spinner } from 'react-bootstrap';

function Ayushi_Dhara_Phase_3() {

  const [loading, setLoading] = useState(true);
  
      const handleLoadedData = () => {
        setLoading(false);
      };
  
  return (
    <Wrapper>
    <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
    <div className="col-lg-6 mt-5">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Our Ayushi Dhara Phase-III</h2>
               
              </div>
          
<p>Welcome to an exclusive residential development at Sagra, Lamheta Road, featuring 146 thoughtfully designed units across 4.64 acres of prime land. This project offers a mix of 3 BHK duplex homes and residential plots, catering to modern homebuyers seeking comfort, elegance, and a well-connected location.

With all units sold out, this completed project stands as a testament to its desirability and high demand. The 3 BHK duplexes provide spacious living areas, contemporary architecture, and high-quality construction, while the plots offer the perfect canvas for homeowners to build their dream residences.

Located in a serene yet well-connected neighborhood, residents enjoy proximity to essential amenities like schools, hospitals, shopping centers, and major roads, ensuring a convenient and fulfilling lifestyle.


           
</p>
            
            </div>
<div className="d-flex flex-wrap gap-4">
<div className="">
            <li><strong>Site Address : - </strong>Sagra, Lamheta Road.</li>
            <li><strong>No. of Units : - </strong>146</li>
            <li><strong>Status : - </strong>On going project</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>0</li>
            <li><strong>Project Type : - </strong>3 Bhk duplex and Plots</li>
            <li><strong>Land Area : - </strong>4.64 acre</li>
  
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
     
    <div className="col-lg-12 mt-4">
      <h2>
      SPECIFICATIONS</h2>
    </div>
    <div className="col-lg-3">
<h6>Construction with fly ash bricks and  M send.</h6>
    </div>
    <div className="col-lg-3">
<h6>ISI TMT iron Saria</h6>
    </div>
    <div className="col-lg-3">
<h6>Flush Door</h6>
    </div>
    <div className="col-lg-3">
<h6>Personal water tank 1000 ltr. capacity.</h6>
    </div>
 
    <div className="col-lg-3">
<h6>Personal Borwell with 1/2 hp sumrseabal pump.</h6>
    </div>
    <div className="col-lg-3">
<h6>Double charged vitrified flooring tiles 2"x4" </h6>
    </div>
    <div className="col-lg-3">
<h6>Window ms steel grill with three track UPVC 
section tuffan glass.</h6>
    </div>
    <div className="col-lg-3">
<h6>Granite panelling on doors.  </h6>
    </div>
    <div className="col-lg-3">
<h6>Double coat putty finish one coat primer and 
double coat glossy paint/normal paint.</h6>
    </div>
    <div className="col-lg-3">
<h6>Wiring & modular switch Anchor/CPL.</h6>
    </div>

    <div className="col-lg-3">
<h6>Modular kitchen with chimney</h6>
    </div>
    <div className="col-lg-3">
<h6>Jaquar sanitary fitting</h6>
    </div>
    <div className="col-lg-3">
<h6>Quba/Godrej locks and hendle.</h6>
    </div>
    <div className="col-lg-3">
<h6>SS Grill on stairs</h6>
    </div>
    <div className="col-lg-3 ">
<h6>Anti skid tiles in balcony and washroom.</h6>
    </div>
    <div className="col-lg-3 ">
<h6>Parking tiles 12mm 16"x16"</h6>
    </div>
    <div className="col-lg-3 ">
<h6>MS Gate</h6>
    </div>
    <div className="col-lg-3 ">
<h6>Tukdi Roof protection/KOWA for water leakage.</h6>
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
  href="https://wa.me/919575809888?text=Hi!%20I%20came%20across%20the%20Ayushi%20Dhara%20project%20phase-III%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Ayushi_Dhara_Phase_3

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