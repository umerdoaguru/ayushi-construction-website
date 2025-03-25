import React, { useState } from 'react';
import styled from 'styled-components';



const images = [
  
 

];


function All() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row g-5" >
        {images.map((image, index) => (
        <div key={index} className="col-lg-4">
          <div className="card">
            <div className="img-container" data-aos="zoom-in">
              <img
                src={image.src}
                className="card-img-top imgset"
                alt={`Card image ${index + 1}`}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{image.title}</h5>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default All;


const Wrapper = styled.div`
  img {
    height: 25rem;
    transition: transform 0.3s ease; /* Smooth transition for zoom effect */
    width: 100%;
  }
  .card {
    position: relative;
    border: none;
    overflow: hidden; 
  }
  .card-title {
    color: #f26a20;
  }
  .img-container {
    position: relative;
  }
  .img-container img:hover {
    transform: scale(1.1); 
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
