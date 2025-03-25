import React, { useState } from 'react'

import {  Nav } from "react-bootstrap";
import styled from 'styled-components';
import All from './All';
import Garden from './Garden';
import Housing from './Housing';
import Contruction from './Contruction';
import Other from './Other';
import Temple from './Temple';
import { Link } from 'react-router-dom';


import ayushi_dhara from '../../images/ayushi-dhara.jpg'
import ayushi_home  from '../../images/ayushi-home.jpg'
import ayushi_villa from '../../images/ayushi-villa.png'
import ayushi_hari_vihar from '../../images/ayushi-hari-vihar.jpg'
import ayushi_vridavan from '../../images/ayushi-vrindavan.jpg'
import ayushi_palm_green from '../../images/ayushi-palm-green.jpg'
import ayushi_rudraksha_park from '../../images/rudraksh-park.jpg'

function GalleryType() {
    const initialTab = localStorage.getItem("selectedTab") || "tab1";
    const [selectedTab, setSelectedTab] = useState(initialTab);
    const handleFooterLink = () => {
      window.scrollTo(0, 0);
      
    };
    const projects = [
      {
        id: "ayushi-dhara",
        name: "Ayushi Dhara",
        image: ayushi_dhara,
        description: "A premium residential project offering modern homes with top-notch amenities and a serene environment.",
    },
    // {
    //     id: "ayushi-villa",
    //     name: "Ayushi Villa",
    //     image: ayushi_villa,
    //     description: "Exclusive luxury villas featuring contemporary architecture, spacious interiors, and world-class facilities.",
    // },
    {
        id: "ayushi-homes",
        name: "Ayushi Homes",
        image: ayushi_home,
        description: "A well-planned residential township surrounded by lush greenery, providing a peaceful and comfortable living experience.",
    },    
      {
        id: "ayushi-hari-vihar",
        name: "Ayushi Hari Vihar",
        image: ayushi_hari_vihar,
        description: "A premium plotted residential township offering well-planned plots with modern amenities and lush green surroundings.",
    },
    {
        id: "ayushi-vrindavan",
        name: "Ayushi Vrindavan",
        image: ayushi_vridavan,
        description: "A thoughtfully designed plotted development featuring spacious plots, excellent connectivity, and a serene living environment.",
    },
    
      // {
      //     id: "ayushi-palm-green",
      //     name: "Ayushi Plam Green",
      //     image: ayushi_palm_green,
      //     description: "A peaceful residential township with greenery.",
      // },
      // {
      //     id: "ayushi-rudraksh-park",
      //     name: "Ayushi Rudraksh Park",
      //     image: ayushi_rudraksha_park,
      //     description: "A peaceful residential township with greenery.",
      // },
      
  ];
  
  return (
    <Wrapper>
    
    <div className="container" id='about' >
                  <h1 className="text-center">Welcome to Aysuhi Construction Gallery Page</h1>
                  <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",

                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></div>
            {/* <All/> */}
            <div className="row">
                {projects.map((project) => (
                    <div key={project.id} className="col-md-6 mb-4">
                        <div className="card shadow">
                            <img
                                src={project.image}
                                className="card-img-top"
                                alt={project.name}
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{project.name}</h5>
                                {/* <p className="card-text">{project.description}</p> */}
                                <Link to={`/projects-image/${project.id}`} onClick={handleFooterLink} className="btn">
                                    View Images
                                </Link>
                            </div>
                        </div> 
                    </div>
                ))}
            </div>
                </div>
    
    
    </Wrapper>
  )
}

export default GalleryType;
const Wrapper  = styled.div`
 .navlink.active {
    /* background-color: #006c28 !important; */
    background-color: #f26a20 !important;
    border-radius: 1rem;
    color: white !important;
  }

  .navlink {
    background-color: #ffff !important;
    color: black;
    border-radius: 1rem;
  }
  h1{

    color: #f26a20;
    
  }
  .selectors{
    @media screen and (max-width: 768px) {
      overflow-x: auto;
      height: 5rem;
    }
  
  }
  .allnav{
    @media screen and (max-width: 768px) {
     margin-left: 14rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
     margin-left: 0rem;
    }
  }
  #about{
  margin-top: 2.5rem;
  @media screen and (max-width: 768px) {
            margin-top:1rem;
            
      }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
            margin-top:1rem;
            
      }
}
.btn{
  background-color: #f26a18;
  color: white;
}
`