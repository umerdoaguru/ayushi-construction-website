
import React, { useState } from "react";
import img from "../images/ayushi_log.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const handleFooterLink = (url) => {
    window.scrollTo(0, 0);
    setExpanded(false); // Closes the navbar toggle
    navigate(url);
  };
  return (
    <Wrapper>
  
       
       
  <Navbar expand="lg" expanded={expanded} className="">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={img} alt="Ayushi Construction" width="200" height="60" className="" />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbarNav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto gap-3">
            <Nav.Link as={Link} to="/" onClick={() => handleFooterLink("/")}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => handleFooterLink("/about")}>About Us</Nav.Link>
            
            <NavDropdown title="Our Project" id="basic-nav-dropdown">
              <NavDropdown title="Ongoing Project" id="ongoing-project-dropdown" drop="end">
       
                <NavDropdown.Item as={Link} to="/ayushi-home" onClick={() => handleFooterLink("/ayushi-home")}>Ayushi Homes</NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/ayushi-dhara-phase-II" onClick={() => handleFooterLink("/ayushi-dhara-phase-II")}>Shiv Malti Vihar Ayushi Dhara Phase-II</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-dhara-phase-III" onClick={() => handleFooterLink("/ayushi-dhara-phase-III")}>Ayushi Dhara Phase-III</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-hari-vihar-phase-II" onClick={() => handleFooterLink("/ayushi-hari-vihar-phase-II")}>Ayushi Hari Vihar Phase-II</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-vrindavan" onClick={() => handleFooterLink("/ayushi-vrindavan")}>Ayushi Vrindavan</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Completed Project" id="completed-project-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/ayushi-rudraksh-park" onClick={() => handleFooterLink("/ayushi-rudraksh-park")}>Rudraksh Park</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-palm-green" onClick={() => handleFooterLink("/ayushi-palm-green")}>Ayushi Palm Green</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-villa" onClick={() => handleFooterLink("/ayushi-villa")}>Ayushi Villa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-dhara" onClick={() => handleFooterLink("/ayushi-dhara")}>Ayushi Dhara</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-dhara-phase-I" onClick={() => handleFooterLink("/ayushi-dhara-phase-I")}>Ayushi Dhara Phase-I</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ayushi-hari-vihar-phase-I" onClick={() => handleFooterLink("/ayushi-hari-vihar-phase-I")}>Ayushi Hari Vihar Phase-I</NavDropdown.Item>
               
              </NavDropdown>

              <NavDropdown title="Upcoming Project" id="upcoming-project-dropdown" drop="end">
              <NavDropdown.Item as={Link} to="ayushi-awadh" onClick={() => handleFooterLink("ayushi-awadh")}>Ayushi Awadh</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="ayushi-lotus-view" onClick={() => handleFooterLink("ayushi-lotus-view")}>Ayushi Lotus View </NavDropdown.Item>

              </NavDropdown>
            </NavDropdown>

            <Nav.Link as={Link} to="/gallery" onClick={() => handleFooterLink("/gallery")}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/blogs" onClick={() => handleFooterLink("/blogs")}>Blogs</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => handleFooterLink("/contact")}>Contact Us</Nav.Link>
          </Nav>

          <div className="d-flex justify-content-center gap-3" id="logo">
            <a href="https://www.facebook.com/AyushiConstructionJabalpur" target="_blank" rel="noreferrer">
              <FaFacebook size="25px" />
            </a>
            <a href="https://www.instagram.com/ayushiconstruction2/" target="_blank" rel="noreferrer">
              <FaInstagram size="25px" />
            </a>
            <a href="https://www.youtube.com/@AyushiConstruction-ig8bv/featured" target="_blank" rel="noreferrer">
              <FaYoutube size="30px" />
            </a>
            <a href="https://twitter.com/AyushiHomes" target="_blank" rel="noreferrer">
              <FaTwitterSquare size="25px" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
     

    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: #f26a20;
    font-size: 1.07rem;
    font-weight: 500;
    
  }
  li {
    list-style-type: none;
  }
  span {
    margin-left: 0.3rem;
  }
  ul {
    white-space: nowrap;
  }
  .top-header {
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }
  }
  a:hover {
  color: #373435;
}
.hoverlink{
  color: white;
}
  .hoverlink:hover{
    color:  #373435;
  }
 .container-fluid{
  padding: 1.5rem;


  background-color: whitesmoke;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensures it stays above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
      
  }
  @media screen and (min-width: 768px) and (max-width: 1020px) {
    padding: 1rem;
    
  }
  @media screen and (min-width: 1021px) and (max-width: 1400px) {
  
    padding: 1rem;
  }
  
 }
 #logo{
  @media screen and (max-width: 768px) {
     margin-right: 23rem;
     margin-top:1rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
    margin-right: 46rem;
     margin-top:1rem;
      
    }
 }
`;
