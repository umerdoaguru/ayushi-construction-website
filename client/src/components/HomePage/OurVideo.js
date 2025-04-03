import React from 'react';
import styled from 'styled-components';
import video from '../../video/HomePage.mp4'
function OurVideo() {
  return (
    <Wrapper>
      <div className="container mt-3 mb-4" data-aos="fade-up">
        <div className="video-responsive">
        <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/9S7uPpa4QZA?si=wWjiAEOKBP38ur3y&autoplay=1&mute=1&loop=1&playlist=9S7uPpa4QZA"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>


        </div>
      </div>
    </Wrapper>
  );
}

export default OurVideo;

const Wrapper = styled.div`
  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;
