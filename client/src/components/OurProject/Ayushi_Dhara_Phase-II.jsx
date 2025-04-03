
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import ayushi_dhara from '../../images/ayushi-dhara.jpg'

import { FaPause, FaPlay, FaWhatsapp } from 'react-icons/fa'
import GoogleMapCom from '../../pages/GoogleMapCom';

import { Spinner } from 'react-bootstrap';
import video from '../../video/Ayushi Villa.mp4'
import video1 from '../../video/ayushidhara.mp4'

function Ayushi_Dhara_Phase_2() {

  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
      const handleLoadedData = () => {
        setLoading(false);
      };
      const togglePlayPause = (videoElement, setPlayingState) => {
        if (videoElement.current.paused) {
          videoElement.current.play();
          setPlayingState(true);
        } else {
          videoElement.current.pause();
          setPlayingState(false);
        }
      };
  return (
    <Wrapper>
    <div className="container">
    <div className="row align-items-center mt-5 g-4 mb-5">
    <div className="col-lg-6 mt-3">
            <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                
                <h2>Welcome To Our Shiv Malti Vihar Ayushi Dhara Phase-II</h2>
               
              </div>
              <p>Nestled in the prime location of Sagra, Lamheta Road, this ongoing project offers a perfect blend of elegance and modern living. Designed to provide a premium lifestyle experience, the project features 153 well-planned units.

Spread across 5.81 acres, the development includes spacious 3 BHK duplexes, 4 BHK duplexes, and luxurious 4 BHK triplex villas, catering to families looking for comfort, style, and convenience.

Strategically located, this project provides easy access to schools, hospitals, shopping centers, and major road networks, making it an ideal choice for homebuyers and investors alike. Whether you're looking for a dream home or a valuable investment.
           
</p>
            
            </div>
<div className="d-flex flex-wrap  gap-1">
<div className="">
            <li><strong>Site Address : - </strong>Sagra, Lamheta Road</li>
            <li><strong>No. of Units : - </strong>153</li>
            <li><strong>Status : - </strong>On going project</li>
          </div>
<div className="">

            <li><strong>No. of Sale Unit : - </strong>35</li>
            <li><strong>Project Type : - </strong>3 Bhk duplex 4 Bhk Duplex <br />& 4 Bhk Triplex Villas</li>
            <li><strong>Land Area : - </strong>5.81 acre</li>
  
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
    <div className="col-lg-3">
<h6>Women Plaza</h6>
    </div>
    <div className="col-lg-3">
<h6>Open Zym</h6>
    </div>
    <div className="col-lg-3">
<h6>6 Beautiful Sculpture</h6>
    </div>
    <div className="col-lg-3">
<h6>Basket Ball Court</h6>
    </div>
    <div className="col-lg-3">
<h6>Amphi Theater Stage</h6>
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
  
    <div className="position-relative" id="cont">
          <h2 className='text-center'>Videos</h2>
          <div className="row">
            <div className="mt-4 col-lg-6 position-relative text-center">
              <video ref={videoRef} src={video} loop muted onLoadedData={handleLoadedData} className="video-element" />
              <button className="play-button" onClick={() => togglePlayPause(videoRef, setIsPlaying)}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <div className="mt-4 col-lg-6 position-relative text-center">
              <video ref={videoRef1} src={video1} loop muted onLoadedData={handleLoadedData} className="video-element" />
              <button className="play-button" onClick={() => togglePlayPause(videoRef1, setIsPlaying1)}>
                {isPlaying1 ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
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
  href="https://wa.me/919575809888?text=Hi!%20I%20came%20across%20the%20Shiv Malti Vihar Ayushi Dhara%20project%20phase-II%20on%20your%20website,%20and%20I%E2%80%99m%20interested%20in%20exploring%20more%20about%20it.%20Could%20we%20discuss%20the%20details?" 
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

export default Ayushi_Dhara_Phase_2

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
  video{
    width: 55%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
}
.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 30px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .play-button:hover {
    background: rgba(0, 0, 0, 0.8);
  }

`