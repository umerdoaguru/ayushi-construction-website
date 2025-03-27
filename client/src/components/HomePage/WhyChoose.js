import React from 'react'
import styled, { keyframes } from 'styled-components';
import wide from '../../images/card1.jpg'
import comfortable from '../../images/card2.jfif'
import quality from '../../images/card3.png'
import support from '../../images/card5.png'
import assurance from '../../images/card6.png'
import sustainable from '../../images/card4.png'



function WhyChoose() {
  return (
    <Wrapper>
      <div className="container mt-5">
        <div className="row g-5">
          
          <div className="col-lg-12 mb-4 mt-5 text-center">
            <h2>Why Choose Ayushi Construction?</h2>
            <div className="underline mx-auto"></div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 flash-animation"  >
            <div className="card shadow" id="cardshadow">
              <img src={wide} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Expertise & Experience</h5>
                <div className="underline"></div>
                <p>
                With years of experience in the real estate industry, we have established ourselves as one of the most reliable and efficient builders in Jabalpur. Our expertise spans across residential and commercial projects, ensuring we meet diverse needs with excellence.     </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 flash-animation"  >
            <div className="card shadow" id="cardshadow">
              <img src={comfortable} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Quality Construction:
                </h5>
                <div className="underline"></div>
                <p>
                We are known for our uncompromising approach to quality. Every project is built with top-grade materials, advanced engineering techniques, and meticulous attention to detail, ensuring durability and elegance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 flash-animation"  >
            <div className="card shadow" id="cardshadow">
              <img src={quality} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Innovative Design:</h5>
                <div className="underline"></div>
                <p>
                Our projects are thoughtfully designed to offer contemporary living spaces that are not only beautiful but also functional. From luxurious villas to stylish apartments, each property reflects superior craftsmanship.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 flash-animation"  >
            <div className="card shadow" id="cardshadow">
              <img src={sustainable} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                
                <h5>Timely Delivery:</h5>
                <div className="underline"></div>
                <p>
                At Ayushi Construction, we value your time. We adhere to strict timelines and ensure projects are completed and delivered as promised, without compromising on quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 flash-animation"  >
            <div className="card shadow" id="cardshadow">
              <img src={support} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>After-Sales Support:</h5>
                <div className="underline"></div>
                <p>
                Our commitment doesn’t end at handing over the keys. We provide excellent after-sales support, making sure you are completely satisfied with your new home or office.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 flash-animation"  >
            <div className="card shadow" id="cardshadow">
              <img src={assurance} className="m-auto mt-3 card-img-top" />
              <div className="card-body" id="cardres">
                <h5>Affordable Pricing:</h5>
                <div className="underline"></div>
                <p>
                Quality construction doesn’t have to be expensive. We offer competitive pricing without compromising on the standards you deserve.



                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WhyChoose;
const moveIn = keyframes`
0% {
  opacity: 1;
  transform: rotate(5deg); /* Rotate to the right */
}
50% {
  opacity: 1;
  transform: rotate(0deg); /* Return to normal */
}
100% {
  opacity: 1;
  transform: rotate(-5deg); /* Rotate to the left */
}
`;


const Wrapper = styled.div`
  .underline {
    height: 2px;
    width: 2rem;
    background-color: #34495e;
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
      height: 18rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: 18rem;
    }
    @media screen and (min-width: 1024px) and (max-width: 1400px) {
      height: 20rem;
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
    color:#373435;
    /* color: #01614e; */
    margin-top: 1rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  h2 {
    /* color: #006c28; */
    color: #f26a20;
    /* color: #d29b33; */
    
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



.flash-animation {
  display: inline-block;
  margin-top: 20px;
  &:hover {
    animation: ${moveIn} 2s ease-out;
  }
}

`
