import React, { useState } from 'react';
import styled from 'styled-components';
import photo1 from "../../images/Ayushi Construction images/1.jpg";
import photo2 from "../../images/Ayushi Construction images/2.jpg";
import photo3 from "../../images/Ayushi Construction images/3.jpg";
import photo4 from "../../images/Ayushi Construction images/4.jpg";
import photo5 from "../../images/Ayushi Construction images/5.jpg";
import photo6 from "../../images/Ayushi Construction images/6.jpg";
import photo7 from "../../images/Ayushi Construction images/7.jpg";
import photo8 from "../../images/Ayushi Construction images/8.jpg";
import photo9 from "../../images/Ayushi Construction images/9.jpg";
import photo10 from "../../images/Ayushi Construction images/10.jpg";
import photo11  from "../../images/Ayushi Construction images/11.jpg";
import photo12 from "../../images/Ayushi Construction images/12.jpg";
import photo13 from "../../images/Ayushi Construction images/13.jpg";
import photo14 from "../../images/Ayushi Construction images/14.jpg";
import photo15 from "../../images/Ayushi Construction images/15.jpg";
import photo16 from "../../images/Ayushi Construction images/16.jpg";
import photo17 from "../../images/Ayushi Construction images/17.jpg";
import photo18 from "../../images/Ayushi Construction images/18.jpg";
import photo19 from "../../images/Ayushi Construction images/19.jpg";
import photo20 from "../../images/Ayushi Construction images/20.jpg";
import photo21 from "../../images/Ayushi Construction images/21.jpg";
import photo22 from "../../images/Ayushi Construction images/22.jpg";
import photo23 from "../../images/Ayushi Construction images/23.jpeg";
import photo24 from "../../images/Ayushi Construction images/24.jpeg";
import photo25 from "../../images/Ayushi Construction images/25.jpeg";
import photo26 from "../../images/Ayushi Construction images/26.jpeg";
import photo27 from "../../images/Ayushi Construction images/27.jpeg";
import photo28 from "../../images/Ayushi Construction images/28.jpeg";
import photo29 from "../../images/Ayushi Construction images/29.jpeg";
import photo30 from "../../images/Ayushi Construction images/30.jpeg";
import photo31 from "../../images/Ayushi Construction images/31.jpeg";
import photo32 from "../../images/Ayushi Construction images/32.jpeg";
import photo33 from "../../images/Ayushi Construction images/33.jpeg";


const images = [
  { src: photo1, },
  { src: photo2, },
  { src: photo3, },
  { src: photo4, },
  { src: photo5, },
  { src: photo6, },
  { src: photo7, },
  { src: photo8, },
  { src: photo9, },
  { src: photo10, },
  { src: photo11, },
  { src: photo12, },
  { src: photo13, },
  { src: photo14, },
  { src: photo15, },
  { src: photo16, },
  { src: photo17, },
  { src: photo18, },
  { src: photo19, },
  { src: photo20, },
  { src: photo21, },
  { src: photo22, },
  // { src: photo23, },
  { src: photo24, },
  { src: photo25, },
  { src: photo26, },
  { src: photo27, },
  { src: photo28, },
  { src: photo29, },
  { src: photo30, },
  { src: photo31, },
  { src: photo32, },
  { src: photo33, },
 
 

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
  }
  .card {
    position: relative;
    border: none;
  }
  .card-title{
    color:#f26a20;
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
