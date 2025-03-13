import React from 'react';
// import img from '../../images/about_img02.png'
import img from '../../images/about-us.jpeg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Wrapper>
    
       <section id="about" className="">
      <div className="container">
        <div className="row">

<div className="col-lg-12 heading text-center">
<h1 className="typing-text">Ayushi Construction : The Best Builders in Jabalpur</h1>
 
  <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#373435",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></div>
</div>
{/* <div className="col-lg-3 flash-animation">
<h2 className=' text-center ongoing'><Link to='/ayushi-vrindavan' onClick={handleFooterLink}>Ongoing Project</Link></h2>

</div> */}

</div>
<div className="content mb-3" data-aos="zoom-out">

  <p>Welcome to Ayushi Construction, one of the reputed leading home builders in Jabalpur established in 2006, by Satyendra . We specialize in creating comfortable and affordable residential homes that cater to your needs. Our latest completed project, Rudraksh Park and Ayushi Palm Greens in Ganga Nagar, Jabalpur, offers 2/3 BHK Flats/Apartments with state-of-the-art architecture and a wide range of amenities to provide a comfortable living experience. Additionally, we have ongoing projects like Ayushi Homes, Ayushi Dhara, and Ayushi Villa.</p>
</div>




        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-right"  
     >
              <img src= {img} alt="img" />
              
            </div>
          </div>

          <div className="col-lg-6 mt-2">
          <div className="about-content s-about-content pl-30" data-aos= "fade-right">
              <div className="about-title second-atitle">
                 
                <h2>Welcome To Ayushi Construction</h2>
                <p><span></span>We provide an essential support for you</p>
              </div>
              <p>With extensive expertise in the field of real estate, Ayushi Construction Developers provides top-tier housing solutions and undertakes the construction of residential, commercial, and industrial buildings. Our services extend to comprehensive infrastructural works, ensuring robust and sustainable development.</p>
              <ul className="list-item">
                <li><span>Residential Construction</span>: We create beautiful, functional, and durable homes that cater to diverse needs and preferences.</li>
                <li><span>Commercial Projects</span>: From office spaces to retail establishments, we deliver commercial buildings designed for success and growth.</li>
                <li>
                <span>Industrial Buildings</span>: Our industrial construction projects are built to support operational efficiency and long-term resilience.

                </li>
                <li>
                <span>Infrastructural Works</span>: We specialize in developing essential infrastructure, including roads, bridges, and utility systems, to support thriving communities.
                </li>
              </ul>
              <button  className="btn" style={{color:"white" ,backgroundColor:"  color: #01614e;"}}>Get Started</button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
    </Wrapper>
 
  );
};

export default AboutSection; 
const Wrapper = styled.div`
img{
  width: 100%;
  height: 32rem;
  @media screen and (max-width: 768px) {
      height: 20rem;
      
    }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
height: 40rem;
  }
  
}
h1{

  color: #f26a20;
  
  
   /* font-family: Figtree, sans-serif; */
  
}
h2{


  color: #f26a20;
}
li{
  margin-top: 1rem;
}
span{
  font-weight: bold;
  
}


#about{
  margin-top: 1.5rem;
  @media screen and (max-width: 768px) {
            margin-top:1rem;
            
      }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
            margin-top:1rem;
            
      }
}



.typing-text {

  color: #f26a20;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 0.2rem solid #f26a20; */
  margin: 0 auto;
  width: 0;
  animation: typing 7s steps(50, end) infinite, blink 0.75s step-end infinite;
  @media screen and (max-width: 768px) {
    animation: none;
    white-space: normal;
    width: auto;

    }
}

/* Typing Animation */
@keyframes typing {
  0% { width: 0; }
  70% { width: 100%; }
  100% { width: 0; }
}

/* Blinking Cursor */
@keyframes blink {
  0% { border-color: #f26a20; }
  50% { border-color: transparent; }
  100% { border-color: #f26a20; }
}



`
