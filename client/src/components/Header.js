
import React from "react";
import img from "../images/ayushi_log.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";

function Header() {
  
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Wrapper>
      <div className="">
        <div className="container-fluid top-header" style={{ backgroundColor: "#f26a20" }}>
          <div className="container">
            <div className="row text-white">
              <div className="col-lg-4 mt-3">
                <div className="mx-3">
                  <p>Welcome to Ayushi Construction</p>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="header-cta">
                  <ul className="d-flex gap-4">
                    <li>
                      <IoCallOutline />
                      <span>  <Link
                  to="tel:+91- 9981268611"
                 
                  className=" hoverlink"
                >
                
                 
                9981268611  </Link></span>,<span><Link
                  to="tel:+91-9575809888"
                 
                  className=" hoverlink"
                >9575809888</Link></span>
                    </li>
                    <li>
                      <CiMail />
                      <span className="">
                        <Link to="mailto:info@ayushiconstruction.com" className=" hoverlink">
                       
info@ayushiconstruction.com
                        </Link>
                      </span>
                    </li>
                    <li>
                      <IoMdTime />
                      <span>Mon-Sat: 10am - 7pm</span>
                    </li>
                    <li>
                    <div className="d-flex justify-content-center gap-3" id="logo">
                  <Link
                                to="https://www.facebook.com/Onerealty/"
                                onClick={handleFooterLink}
                                target="_blank"
                                rel="norefferel"
                                className="text-white "
                              >
                               
                                <FaFacebook  size="25px"
                                  onMouseOver={({ target }) =>
                                    (target.style.color = "#3b5998")
                                  }
                                  onMouseOut={({ target }) => (target.style.color = "white")}/>
                              </Link>
              
                              <Link
                                to="https://www.instagram.com/onerealtydevelopers/"
                                onClick={handleFooterLink}
                                target="_blank"
                                rel="norefferel"
                                className="text-white "
                              >
                                <FaInstagram
                                  size="25px"
                                  onMouseOver={({ target }) =>
                                    (target.style.color = "#da1e1e")
                                  }
                                  onMouseOut={({ target }) => (target.style.color = "white")}

                                />
                              </Link>
                               <Link
                                             to=  "https://www.youtube.com/@AyushiConstruction-ig8bv/featured"
                                              onClick={handleFooterLink}
                                              target="_blank"
                                              rel="norefferel"
                                              className=" text-white "
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
                                             <Link
                                                           to=  "https://twitter.com/AyushiHomes"
                                                            onClick={handleFooterLink}
                                                            target="_blank"
                                                            rel="norefferel"
                                                            className=" text-white"
                                                          >
                                                            <FaTwitterSquare
                                                              size="25px"
                                                              onMouseOver={({ target }) =>
                                                                (target.style.color = "#1da1f2")
                                                              }
                                                              onMouseOut={({ target }) =>
                                                                (target.style.color = "white")
                                                              }
                                                            />
                                                          </Link>
                                            </div>
                    </li>
                  </ul>
                </div>
              </div>
        
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light">
          <div className="container">
            <Navbar expand="lg" className="navbar-light py-2">
              <Container fluid>
                <Navbar.Brand href="/">
                  <img src={img} alt="" width="200" height="60" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                  <Nav className="mx-auto gap-3">
                    <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <NavDropdown title="Our Project" id="basic-nav-dropdown" style={{ color: "#f26a20" }}>
                       <NavDropdown title="Current Project" id="current-project-dropdown" drop="end">
                        <NavDropdown.Item as={Link} to="/ayushi-dhara">Ayushi Dhara</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ayushi-home">Ayushi Home</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ayushi-villa">Ayushi Villa</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ayushi-hari-vihar">Ayushi Hari Vihar</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ayushi-vrindavan">Ayushi Vrindavan</NavDropdown.Item>
                      
                      </NavDropdown>
                      <NavDropdown title="Completed Project" id="completed-project-dropdown" drop="end">
                      <NavDropdown.Item as={Link} to="/ayushi-palm-green">Ayushi Palm Green</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/ayushi-rudraksh-park">Rudraksh Park</NavDropdown.Item>
                        </NavDropdown>
                    
                      <NavDropdown title="Upcoming Project" id="upcoming-project-dropdown" drop="end">
                      <NavDropdown.Item as={Link} >Coming Soon</NavDropdown.Item>
                        </NavDropdown>
                      
                      
                    </NavDropdown>
                    <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: #f26a20;
    font-size: 1.05rem;
    
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
`;
