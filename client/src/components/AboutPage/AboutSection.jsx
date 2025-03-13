import React from "react";
import styled from "styled-components";

import About2 from "../../images/about-us.jpeg";
import ownerimg from "../../images/owner-img.JPG";

const AboutSection = () => {
  return (
    <>
      <Container>
      <section id="about" >
      <div className="container">
<div className="heading text-center">
  
  <h1>Welcome to Aysuhi Construction About Us Page</h1>
  <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></div>
</div>





        <div className="row align-items-center mt-5">
        <div className="col-lg-6 mt-2" id='desktop'>
            <div className="about-content s-about-content pl-30  " data-aos= "fade-right">
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
       
          <div className="col-lg-6" id='desktop'>
            <div className="s-about-img p-relative" data-aos= "fade-left">
              <img src= {About2} alt="img" />
              
            </div>
          </div>
          <div className="col-lg-6"  id='mobile'>
            <div className="s-about-img p-relative" data-aos= "fade-left">
              <img src= {About2} alt="img" />
              
            </div>
          </div>

          <div className="col-lg-6 mt-2" id='mobile'>
            <div className="about-content s-about-content pl-30  " data-aos= "fade-right">
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
        <div className="row align-items-center mt-5">
<div className="col-lg-6">
            <div className="s-about-img p-relative" data-aos= "fade-right">
              <img src= {ownerimg} alt="img" />
              
            </div>
          </div>

        <div className="col-lg-6 mt-2">
            <div className="about-content s-about-content pl-30  " data-aos= "fade-left">
              <div className="about-title second-atitle">
               
                <h2>DIRECTOR’S OF AYUSHI CONSTRUCTION</h2>
                <p><span>SATYENDRA YADAV</span>
                </p>
              </div>
              <p>Satyendra Yadav, the Director of Ayushi Construction, which is the best construction company in Jabalpur, is a seasoned professional with a decade of experience in land acquisition and development. His expertise lies in colonizing and developing townships, making him a valuable asset to the company.
              </p>
              <p>Under Satyendra’s leadership, Ayushi Construction has successfully completed several real estate projects, including Rudraksh Park and Ayushi Palm Greens in Ganga Nagar, Jabalpur, and Ayushi Homes. These projects have not only met the expectations of the clients but have also become landmarks in their respective locations.
              </p>
              <p>Satyendra’s dedication and vision have played a crucial role in the success of these projects. He possesses a deep understanding of the real estate market and has the ability to identify lucrative opportunities for development. His strategic decision-making and meticulous planning have ensured that each project is executed flawlessly, resulting in high-quality residential properties.
              </p>
   
            
            </div>
          </div>
        <div className="col-lg-12 mt-3">
            <div className="about-content s-about-content pl-30  " data-aos= "fade-right">
            
              <p>In addition to his past achievements, Satyendra is currently working on two incredible ongoing projects – Ayushi Dhara and Ayushi Villa. These projects are set to redefine luxury living and set new benchmarks in the real estate industry. With his expertise and innovative ideas, Satyendra aims to create exceptional living spaces that cater to the evolving needs and aspirations of modern homebuyers.
              </p>
              <p>Satyendra’s commitment to excellence and his passion for creating sustainable communities make him a respected figure in the real estate sector. He believes in delivering projects that not only provide comfortable living spaces but also contribute to the overall development of the surrounding areas.
              </p>
              <p>With his extensive experience and profound knowledge, Satyendra Yadav has established himself as a trusted name in the real estate industry. Under his guidance, Ayushi Construction continues to thrive and deliver exceptional projects that exceed the expectations of its customers.
              </p>
              <p>As the Director of Ayushi Construction, Satyendra Yadav is a driving force behind the company’s success and its commitment to creating exceptional living spaces that stand the test of time. His dedication to excellence and his ability to transform visions into reality make him an invaluable asset to the company and a true leader in the field of real estate.
              </p>
   
            
            </div>
          </div>

          

         
          
        </div>
      </div>
    </section>
      </Container>
    </>
  );
};

export default AboutSection;

const Container = styled.div`
img{
  width: 100%;
  height: 28rem;
  @media screen and (max-width: 768px) {
      height: 20rem;
      
    }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
height: 40rem;
  }
}
h1{

  color: #f26a20;
  /* color: #d29b33; */
  
}
h2{


  color:#f26a20;
  
}
li{
  margin-top: 1rem;
}
span{
  font-weight: bold;
}
p{
  text-align: justify;
  
  }
  #mobile {
    display: none;

    @media screen and (min-width: 768px) and (max-width: 1024px)  {
      display: block;
    }
  }

  #desktop {
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }
  }
  #about{
  margin-top: 2.5rem;
  @media screen and (max-width: 768px) {
            margin-top:1rem;
            
      }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
            margin-top:1rem;
            
      }
}
`;
