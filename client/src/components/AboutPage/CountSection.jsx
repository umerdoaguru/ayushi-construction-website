import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBed, FaCar, FaBath, FaPencilRuler } from "react-icons/fa";
import CountUp from 'react-countup';


function CountSection() {
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaPencilRuler className="CountIcons rounded-circle p-3" color="#f26a20"/>
              <h2><CountUp start={0} end={1500} duration={10} delay={3} />+</h2>

              <h6>Square Feet</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaBed  className="CountIcons rounded-circle p-3" />
              <h2><CountUp start={0} end={50} duration={10} delay={3} />+</h2>
              <h6>Bedrooms</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaBath className="CountIcons rounded-circle p-3" />
              <h2><CountUp start={0} end={30} duration={10} delay={3} />+</h2>
              <h6>Bathrooms</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <FaCar className="CountIcons rounded-circle p-3" />
              <h2><CountUp start={0} end={10} duration={10} delay={3} />+</h2>
              <h6>Car Parkings</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CountSection;

const Container = styled.div`
  .CountIcons {
    font-size: 6rem;
    color: #f26a20;
  }
  h1 {
    font-size: 6rem;
    
  }
`;
