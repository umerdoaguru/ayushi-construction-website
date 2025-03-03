import React from 'react'
import styled from 'styled-components';
import ayushi_dhara from '../../images/ayushi dhara logo png.png'
import ayushi_home  from '../../images/ayushi homes logo png.png'
import ayushi_villa from '../../images/ayushi villa logo png.png'
import ayushi_hari_vihar from '../../images/ayushi hari vihar logo png.png'
import ayushi_vridavan from '../../images/ayushi vrindavan logo png.png'
import ayushi_palm_green from '../../images/ayushi palm green logo png.png'
import ayushi_rudraksha_park from '../../images/rudraksha park logo png.png'



function OurProjects() {
  return (
    <Wrapper>
      <div className="container mt-5">
        <div className="row g-5">
          
          <div className="col-lg-12 mb-4 mt-5 text-center">
            <h2>Our Projects</h2>
            <div className="underline mx-auto"></div>
          </div>
          {/* <div className="row">
              <div className="col-sm-6">
                <div className="image" data-aos="fade-down">
                  <img
                    id="clientpages"
                    src={ayushi_dhara}
                    className="img-fluid"
                   
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div data-aos="fade-up">
                  <h3 className=" text-center ">Ayushi Dhara</h3>

                  <p className="tt text-justify mt-3">
                  A ready-to-move 3 BHK villa with a spacious area ranging from 800 to 1000 sq. ft., designed to provide a comfortable and modern living experience. This beautifully constructed villa offers ample space for families, ensuring both privacy and convenience. The interiors are thoughtfully designed, with well-ventilated rooms, elegant flooring, and premium fittings to enhance your lifestyle. The property also features a dedicated parking facility, ensuring the safety and convenience of vehicle owners. Located in a well-connected and serene neighborhood, this villa is perfect for those looking for a peaceful yet accessible living environment. Whether for investment or personal use, this property is an excellent choice for homebuyers seeking quality, comfort, and affordability.
                  </p>
                </div>
                <br />
              </div>
              <div className="col-sm-6">
                <div data-aos="fade-down">
                  <h3 className=" text-center ">Ayushi Home</h3>

                  <p className="tt text-justify mt-3">
                  A ready-to-move 3 BHK villa with a spacious area ranging from 800 to 1000 sq. ft., designed to provide a comfortable and modern living experience. This beautifully constructed villa offers ample space for families, ensuring both privacy and convenience. The interiors are thoughtfully designed, with well-ventilated rooms, elegant flooring, and premium fittings to enhance your lifestyle. The property also features a dedicated parking facility, ensuring the safety and convenience of vehicle owners. Located in a well-connected and serene neighborhood, this villa is perfect for those looking for a peaceful yet accessible living environment. Whether for investment or personal use, this property is an excellent choice for homebuyers seeking quality, comfort, and affordability.
                  </p>
                </div>
                <br />
              </div>
              <div className="col-sm-6">
                <div className="image" data-aos="fade-up">
                  <img
                    id="clientpages"
                    src={ayushi_home}
                    className="img-fluid"
                   
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="image" data-aos="fade-down">
                  <img
                    id="clientpages"
                    src={ayushi_villa}
                    className="img-fluid"
                   
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div data-aos="fade-up">
                  <h3 className=" text-center ">Ayushi Dhara</h3>

                  <p className="tt text-justify mt-3">
                  A ready-to-move 3 BHK villa with a spacious area ranging from 800 to 1000 sq. ft., designed to provide a comfortable and modern living experience. This beautifully constructed villa offers ample space for families, ensuring both privacy and convenience. The interiors are thoughtfully designed, with well-ventilated rooms, elegant flooring, and premium fittings to enhance your lifestyle. The property also features a dedicated parking facility, ensuring the safety and convenience of vehicle owners. Located in a well-connected and serene neighborhood, this villa is perfect for those looking for a peaceful yet accessible living environment. Whether for investment or personal use, this property is an excellent choice for homebuyers seeking quality, comfort, and affordability.
                  </p>
                </div>
                <br />
              </div>
              <div className="col-sm-6">
                <div data-aos="fade-down">
                  <h3 className=" text-center ">Ayushi Home</h3>

                  <p className="tt text-justify mt-3">
                  A ready-to-move 3 BHK villa with a spacious area ranging from 800 to 1000 sq. ft., designed to provide a comfortable and modern living experience. This beautifully constructed villa offers ample space for families, ensuring both privacy and convenience. The interiors are thoughtfully designed, with well-ventilated rooms, elegant flooring, and premium fittings to enhance your lifestyle. The property also features a dedicated parking facility, ensuring the safety and convenience of vehicle owners. Located in a well-connected and serene neighborhood, this villa is perfect for those looking for a peaceful yet accessible living environment. Whether for investment or personal use, this property is an excellent choice for homebuyers seeking quality, comfort, and affordability.
                  </p>
                </div>
                <br />
              </div>
              <div className="col-sm-6">
                <div className="image" data-aos="fade-up">
                  <img
                    id="clientpages"
                    src={ayushi_home}
                    className="img-fluid"
                   
                  />
                </div>
              </div>

            </div> */}

          <div className="col-lg-4 col-md-6 mt-2"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={ayushi_dhara} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Wide Range of Projects</h5>
                <div className="underline"></div>
                <p>
                  We boast a diverse portfolio of successful residential properties in Jabalpur. Each project is a testament to our commitment to excellence and our ability to meet varying customer needs and preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={ayushi_home } className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Affordable & Comfortable Homes</h5>
                <div className="underline"></div>
                <p>
                  One Realty Developers focus on creating homes that are not only affordable but also comfortable and stylish. We believe in delivering value for money, ensuring that our properties offer the perfect balance of quality, comfort, and functionality. Our homes are designed to meet your lifestyle needs without breaking the bank.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={ayushi_villa} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Innovative Design & Quality Construction</h5>
                <div className="underline"></div>
                <p>
                  Innovation and quality are at the heart of our projects. Our skilled architects and engineers use the latest construction techniques and high-quality materials to create homes that are not only aesthetically pleasing but also durable and ayushi_palm_green. We strive to exceed industry standards in every project we undertake.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={ayushi_palm_green} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                
                <h5>Sustainable Practices</h5>
                <div className="underline"></div>
                <p>
                Sustainability is a core value at One Realty Developers. We are committed to environmentally responsible building practices that reduce waste, conserve resources, and promote energy efficiency. By using eco-friendly materials and sustainable construction methods, we aim to create buildings that are not only good for our clients but also for the planet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={ayushi_hari_vihar} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Comprehensive After-Sales Support</h5>
                <div className="underline"></div>
                <p>
                  Our commitment to you doesn't end at the point of sale. We offer comprehensive after-sales support to ensure that any issues or concerns are promptly addressed. Our dedicated customer service team is always available to assist you, ensuring your complete satisfaction and peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={ayushi_vridavan} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Quality Assurance</h5>
                <div className="underline"></div>
                <p>
                At One Realty Developers, we uphold the highest standards of quality in every project. Our meticulous attention to detail ensures that each building we construct is not only aesthetically pleasing but also durable and functional. We use top-grade materials and employ rigorous quality control processes to guarantee superior results.


                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4"  data-aos="flip-left">
            <div className="card shadow" id="cardshadow">
              <img src={ayushi_rudraksha_park} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Quality Assurance</h5>
                <div className="underline"></div>
                <p>
                At One Realty Developers, we uphold the highest standards of quality in every project. Our meticulous attention to detail ensures that each building we construct is not only aesthetically pleasing but also durable and functional. We use top-grade materials and employ rigorous quality control processes to guarantee superior results.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default OurProjects;

const Wrapper = styled.div`
  .underline {
    height: 2px;
    width: 2rem;
    background-color: #373435;
    margin: 20px auto;
   
  
  }

  .card-shadow {
    border-radius: 20px;
    box-shadow: 8px 8px 10px 1px whitesmoke;
  }

  .card-shadow:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .card-img-top {
    height: 5rem;
    width: 5rem;
    @media screen and (max-width: 768px) {
      height: 4rem;
      width: 4rem;
    }
  }

  #cardres {
    height: 20rem;
    /* height: auto; */
    border: none;
    padding: 15px;
    @media screen and (max-width: 768px) {
      height: 22rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: 27rem;
    }
    @media screen and (min-width: 1024px) and (max-width: 1400px) {
      height: 27rem;
    }
  }

  p {
    color: #5a626d;
    
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h5 {
    font-size: 15px;
  
    color: #383536;
    margin-top: 2rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  h2 {
    

    color: #f26a20;
    font-family: "Playfair Display";
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .container {
    padding: 0 15px;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #clientpages{

padding: 5rem;
                 
                     
  }
  .image{
     border-radius: 13rem;
    background: antiquewhite;
   
  }

`
