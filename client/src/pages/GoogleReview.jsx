import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import "slick-carousel/slick/slick.css"; 
import styled from 'styled-components';


const GoogleReview = () => {
    // Mock reviews data
    const reviews = [
        {
            author_name: "Indu Patel",
            rating: 5,
            text: "Definately they provide good property for sale",
           
        },
        {
            author_name: "Pravesh Rajput",
            rating: 5,
            text: "Build quality awsome 👌good construction 👌👌",
        },
        {
            author_name: "Divya Shrivastava",
            rating: 5,
            text: "Perfect residential area good investment for property 😊",
        },
        {
            author_name: "Tanuj Shrivastava",
            rating: 4,
            text: "Best in town, very genuine ☺️",
        },
        {
            author_name: "Pushpa Yadav",
            rating: 5,
            text: "Great designs and infrastructure",
        },
        {
            author_name: "Dilip Verma",
            rating: 5,
            text: "Very good quality",
        },
        {
            author_name: "priyanshi chouhan",
            rating: 5,
            text: "Best experience",
        },
        {
            author_name: "Third eye Events and promotion",
            rating: 5,
            text: "Nice",
        },
        {
            author_name: "Sandeep Rajak",
            rating: 4,
            text: "He took 4 rating of Ayushi Construction",
        },
        {
            author_name: "Earth infrastructure",
            rating: 5,
            text: "He took 5 rating of Ayushi Construction"
        },
        {
            author_name: "Nishant Gupta",
            rating: 4,
            text: "He took 5 rating of Ayushi Construction",
        },
        {
            author_name: "Mayank Choubey",
            rating: 4,
            text: "Good",
        },
        {
            author_name: "Divyansh Singh Yadav",
            rating: 5,
            text: "He took 5 rating of Ayushi Construction",
        },
        {
            author_name: "reetesh vishwakarma",
            rating: 5,
            text: "Responsiveness, Quality, Professionalism, Value",
        },
        {
            author_name: "Sumit Yadav",
            rating: 5,
            text: "He took 5 rating of Ayushi Construction",
        },
        {
            author_name: "Kaushlendra Tiwari",
            rating: 1,
            text: "He took 1 rating of Ayushi Construction",
        },
        {
            author_name: "Ayushi Yadav",
            rating: 5,
            text: "He took 5 rating of Ayushi Construction",
        },
        {
            author_name: "Er.Bijendra Yadav",
            rating: 5,
            text: "He took 5 rating of Ayushi Construction",
        },
        {
            author_name: "rohit jhariya",
            rating: 5,
            text: "He took 5 rating of Ayushi Construction",
        },
        {
            author_name: "ankita soni",
            rating: 2,
            text: "He took 2 rating of Ayushi Construction",
        },
        {
            author_name: "PD Agrawal",
            rating: 2,
            text: "He took 2 rating of Ayushi Construction",
        },
        {
            author_name: "technical India",
            rating: 1,
            text: "He took 1 rating of Ayushi Construction",
        },
        {
            author_name: "rahul pratap",
            rating: 3,
            text: "He took 3 rating of Ayushi Construction",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Wrapper>
         <div className="container mt-5 mb-3">
            <h2 className="text-center  " style={{color:"#f26a20"}}>Google Reviews</h2>
            <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",
                  marginTop: 20,
                  marginBottom: 10,
                }}
              ></div>

            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="p-3 ">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{review.author_name}</h5>
                                <div className="d-flex mb-2">
                                    {Array.from({ length: review.rating }, (_, i) => (
                                        <Star key={i} className="text-warning" />
                                    ))}
                                </div>
                                <p className="card-text text-dark fw-bold">{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </Wrapper>

       
        
    );
};

export default GoogleReview;
const Wrapper  = styled.div`
.card-body{
    height: 10rem;
    /* height: auto; */
    border: none;
    padding: 15px;
    @media screen and (max-width: 768px) {
      height: 10rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: 10rem;
    }
    @media screen and (min-width: 1024px) and (max-width: 1400px) {
      height: 11rem;
    }
}

`
