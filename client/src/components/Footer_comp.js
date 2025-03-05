import React from 'react'

import { Link } from "react-router-dom";
import styled from "styled-components";

import {
 
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
 
} from "react-icons/ai";
import { FaPinterestSquare, FaTwitterSquare, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import img from "../images/ayushi_log.png";




function Footer_comp() {
    const handleFooterLink = () => {
        window.scrollTo(0, 0);
      };
    
  return (
    <Container>
    <footer
      style={{
        // backgroundColor:"#006c28"
        backgroundColor:"#f26a20"
       
      }}
    >
      <div className="content ">
        <div className="left box text-black">
          <div className="lower">
            <div className="topic mt-4">Contact us</div>
            <div className="ct text-white ">
              <div className="loc d-flex">
                <div>
                <IoLocationOutline />
                </div>
                <div>
                  <span className="m-1 text-white">
                  Ayushi Construction, Infront of Garha Thana, <br /> Tripuri Chowk, Jabalpur,<br /> Madhya Pradesh 482002
                  </span>
                </div>
              </div>

              <br />
              <IoCallOutline />
              <span className="m-2">
                <Link
                  to="tel:+91-9981268611"
                 
                  className=""
                >
                 9981268611 ,</Link>
              
              </span>
              <span className="">
                <Link
                  to="tel:+91-9575809888"
                 
                  className=""
                >
                9575809888
                </Link>
              </span>
              <br />
         
              
              
              <br />
              <CiMail />
              <span className="m-2 ">
                {" "}
                <Link
                  to="mailto:info@ayushiconstruction.com"
                 
                  className=""
                >
                  info@ayushiconstruction.com
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="middle box" id="middle2">
          <div className="topic mt-4">Quick Links</div>
          <div className="hd">
            {" "}
            <Link
              to="/"
              onClick={handleFooterLink}
              className=""
             
            >
       Home
            </Link>
          </div>

          <div className="hd">
            {" "}
            <Link
              to="/about"
              onClick={handleFooterLink}
              className=""
             
            >
            About Us
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              onClick={handleFooterLink}
             
              className=""
            >
             Conatct Us 
            </Link>
          </div>
          <div>
            <Link
              to="/blogs"
              onClick={handleFooterLink}
             
              className=""
            >
             Blogs
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/gallery"
              onClick={handleFooterLink}
             
              className=""
            >
            Gallery
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/privacy-policy"
              onClick={handleFooterLink}
             
              className=""
            >
          Privacy Policy
            </Link>
          </div>
        
        </div>
        <div className="middle box">
          <div className="topic mt-4">Our Projects</div>
          <div>
            {" "}
            <Link
              to="/ayushi-dhara"
              onClick={handleFooterLink}
             
              className=""
            >
             Ayushi Dhara
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/ayushi-villa"
              onClick={handleFooterLink}
             
              className=""
            >
              Ayushi Villa 
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/ayushi-hari-vihar"
              onClick={handleFooterLink}
             
              className=""
            >
           Ayushi Hari Vihar
            </Link>
          </div>

          <div>
            {" "}
            <Link
              to="/ayushi-home"
              onClick={handleFooterLink}
             
              className=""
            >
              Ayushi Home
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/ayushi-vrindavan"
              onClick={handleFooterLink}
             
              className=""
            >
             Ayushi Vrindavan
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/ayushi-palm-green"
              onClick={handleFooterLink}
             
              className=""
            >
             Ayushi Palm Green
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="/ayushi-rudraksh-park"
              onClick={handleFooterLink}
             
              className=""
            >
             Ayushi Rudraksh Park
            </Link>
          </div>
         
        </div>

        <div className="right box mt-4">
          <div className="image">
            <Link to="/" onClick={handleFooterLink}>
              {/* <img src={doaguru} alt="doaguru logo" id="doagurulogo" /> */}
              <img src={img} alt="" id="doagurulogo" width="200" height="90" />

            </Link>
          </div>
          <div>
            <div className="topic text-center  mt-4" id="follow">
              Follow us on
            </div>
            <div className="d-flex justify-content-center" id="logo">
              <Link
                to="https://www.facebook.com/AyushiConstructionJabalpur"
                onClick={handleFooterLink}
                target="_blank"
                rel="norefferel"
                className=" m-2"
              >
                <AiFillFacebook
                  size="30px"
                  onMouseOver={({ target }) =>
                    (target.style.color = "#3b5998")
                  }
                  onMouseOut={({ target }) =>
                    (target.style.color = "white")
                  }
                />
              </Link>
             
              <Link
                to="https://www.instagram.com/ayushiconstruction2/"
                onClick={handleFooterLink}
                target="_blank"
                rel="norefferel"
                className=" m-2"
              >
                <AiFillInstagram
                  size="30px"
                  onMouseOver={({ target }) =>
                    (target.style.color = "#da1e1e")
                  }
                  onMouseOut={({ target }) =>
                    (target.style.color = "white")
                  }
                />
              </Link>
              <Link
               to=  "https://www.youtube.com/@AyushiConstruction-ig8bv/featured"
                onClick={handleFooterLink}
                target="_blank"
                rel="norefferel"
                className=" m-2"
              >
                <FaYoutube
                  size="30px"
                  onMouseOver={({ target }) =>
                    (target.style.color = "#FF0000")
                  }
                  onMouseOut={({ target }) =>
                    (target.style.color = "white")
                  }
                />
              </Link>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
          <p><Link to='https://doaguru.com/' target='_blank'>© DOAGuru InfoSystems</Link> || Powered by Ayushi Construction</p>
         
        </div>
    </footer>
  </Container>
  )
}

export default Footer_comp;
const Container = styled.div`
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .span-li {
    padding: 5px;
  }
   .content{
  max-width: 1150px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


 .content .topic{
  font-size: 22px;
  font-weight: 600;
  color: #f3ecec;
  margin-bottom: 16px;

}

.content .middle a{
  line-height: 32px;
}

.bottom {
    width: 100%;
    text-align: center;
    color: #f6f1f1;
    padding: 20px 0;
    background-color: #f26a20;
  }

.image img {
  width: 200px;
  height: 60px;
  background-color: white;
  padding: 0.5rem;
}





 

`;