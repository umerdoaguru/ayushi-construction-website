import React, { useState } from "react";
import styled from "styled-components";

function Heros(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <Container>
        <div
          className="main container-fluid bg-secondary position-relative"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30rem",
          }}
        >
          {/* Loader */}
          {!isImageLoaded && (
            <div className="loader-container">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* Background Image (Hidden until loaded) */}
          <img
            src={props.backgroundImage}
            alt="Hero Background"
            className={`background-image ${isImageLoaded ? "loaded" : ""}`}
            onLoad={() => setIsImageLoaded(true)}
          />

          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-white">{props.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Heros;

const Container = styled.div`
  h1 {
    font-size: 4rem;
    margin-top: 12rem;
    margin-left: 5rem;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
      margin-top: 12rem;
      margin-left: 1rem;
    }
  }

  .main {
    margin-top: 6.5rem;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      margin-top: 4.5rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      margin-top: 5.5rem;
    }
    @media screen and (min-width: 1021px) and (max-width: 1400px) {
      margin-top: 5.5rem;
    }
  }

  /* Background Image (Initially hidden) */
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  /* When image is loaded */
  .background-image.loaded {
    opacity: 1;
  }

  /* Loader Styling */
  .loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
