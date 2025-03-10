import React, { useState } from 'react';
import styled from 'styled-components';



const images = [
""
       
      
      
      
      
];

function Temple() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row g-5">
          {images.map((image, index) => (
            <div key={index} className="col-lg-4">
              <div className="card"
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="img-container" data-aos="zoom-in">
                  <img
                    src={image}
                   
                    className={`card-img-top }`}
                    alt={`Card image ${index + 1}`}
                  />
               
                  <div className={`hover-title}`}>
              
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Temple;

const Wrapper = styled.div`
  img {
    height: 25rem;
  }
  .card {
    position: relative;
    border: none;
  }
  .img-container {
    position: relative;
  }
  .hover-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .hovered + .hover-title {
    opacity: 1;
  }
`;
