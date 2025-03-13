import React, { useState } from 'react'

import {  Nav } from "react-bootstrap";
import styled from 'styled-components';
import All from './All';
import Garden from './Garden';
import Housing from './Housing';
import Contruction from './Contruction';
import Other from './Other';
import Temple from './Temple';



function GalleryType() {
    const initialTab = localStorage.getItem("selectedTab") || "tab1";
    const [selectedTab, setSelectedTab] = useState(initialTab);
  return (
    <Wrapper>
    
    <div className="container-fluid " id='about' >
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
            <All/>
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
`