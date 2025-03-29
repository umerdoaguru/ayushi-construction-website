import React from 'react'
import styled from 'styled-components';


import ayushi_dhara from '../../images/ayushi-dhara.jpg'
import ayushi_home  from '../../images/ayushi-home.jpg'
import ayushi_villa from '../../images/ayushi-villa.png'
import ayushi_hari_vihar from '../../images/ayushi-hari-vihar.jpg'
import ayushi_vridavan from '../../images/ayushi-vrindavan.jpg'
import ayushi_palm_green from '../../images/ayushi-palm-green.jpg'
import ayushi_rudraksha_park from '../../images/rudraksh-park.jpg'
import ayushi_awadh from "../../images/Ayushi Awadh.jpeg";
import ayushi_lotus_view from "../../images/Ayushi Lotus view.jpg";
import { Link } from 'react-router-dom';





function OurProjects() {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  return (
  <Wrapper>
     <div className="container mt-5">
           <div className="row g-5">
             <div className="container" style={{ marginTop: "4rem" }}>
               <h2 className="text-center">Our Projects</h2>
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
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_home} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-down"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Our Ayushi Homes</h2>
                     </div>
                     <p>
                       Experience modern living at its finest with our exclusive 2
                       BHK duplex project in Shashtrinagar, Sagra. Spanning across
                       2.84 acres, this ongoing development offers 53 well-designed
                       units, out of which 48 are already sold, showcasing its high
                       demand and appeal. These spacious and elegantly crafted
                       duplex homes are designed to provide a comfortable and
                       contemporary lifestyle, featuring well-ventilated interiors,
                       modern architecture, and premium finishes. The project is
                       located in a well-connected neighborhood, ensuring easy
                       access to schools, hospitals, shopping centers, and public
                       transport, making it an ideal choice for families and
                       professionals alike.
                     </p>
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-home"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_home} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Our Ayushi Homes </h2>
                     </div>
                     <p>
                       Experience modern living at its finest with our exclusive 2
                       BHK duplex project in Shashtrinagar, Sagra. Spanning across
                       2.84 acres, this ongoing development offers 53 well-designed
                       units, out of which 48 are already sold, showcasing its high
                       demand and appeal. These spacious and elegantly crafted
                       duplex homes are designed to provide a comfortable and
                       contemporary lifestyle, featuring well-ventilated interiors,
                       modern architecture, and premium finishes. The project is
                       located in a well-connected neighborhood, ensuring easy
                       access to schools, hospitals, shopping centers, and public
                       transport, making it an ideal choice for families and
                       professionals alike.
                     </p>
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-home"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Dhara Phase-II</h2>
                     </div>
                     <p>
                       Nestled in the prime location of Sagra, Lamheta Road, this
                       ongoing project offers a perfect blend of elegance and
                       modern living. Designed to provide a premium lifestyle
                       experience, the project features 153 well-planned units.
                       Spread across 5.81 acres, the development includes spacious
                       3 BHK duplexes, 4 BHK duplexes, and luxurious 4 BHK triplex
                       villas, catering to families looking for comfort, style, and
                       convenience. Strategically located, this project provides
                       easy access to schools, hospitals, shopping centers, and
                       major road networks, making it an ideal choice for
                       homebuyers and investors alike. Whether you're looking for a
                       dream home or a valuable investment.
                     </p>
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-dhara-phase-II"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-down">
                     <img src={ayushi_dhara} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_dhara} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Dhara Phase-II</h2>
                     </div>
                     <p>
                       Nestled in the prime location of Sagra, Lamheta Road, this
                       ongoing project offers a perfect blend of elegance and
                       modern living. Designed to provide a premium lifestyle
                       experience, the project features 153 well-planned units.
                       Spread across 5.81 acres, the development includes spacious
                       3 BHK duplexes, 4 BHK duplexes, and luxurious 4 BHK triplex
                       villas, catering to families looking for comfort, style, and
                       convenience. Strategically located, this project provides
                       easy access to schools, hospitals, shopping centers, and
                       major road networks, making it an ideal choice for
                       homebuyers and investors alike. Whether you're looking for a
                       dream home or a valuable investment.
                     </p>
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-dhara-phase-II"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_dhara} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-down"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Dhara Phase-III</h2>
                     </div>
                     <p>
                       Discover an exceptional residential development at Sagra,
                       Lamheta Road, offering a perfect blend of 3 BHK duplexes, 4
                       BHK duplexes, and residential plots. Spanning 3.14 acres,
                       this completed project features 88 well-designed units, all
                       of which have been successfully sold, highlighting the
                       project's high demand and quality construction. The 3 BHK
                       and 4 BHK duplex homes are designed to provide a modern and
                       luxurious living experience, featuring spacious interiors,
                       premium fittings, and a contemporary architectural design.
                       Situated in a prime location, residents enjoy easy access to
                       key amenities such as schools, hospitals, shopping centers,
                       and major roadways, ensuring both convenience and
                       connectivity.
                     </p>
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-dhara-phase-III"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_dhara} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Dhara Phase-III</h2>
                     </div>
                     <p>
                       Discover an exceptional residential development at Sagra,
                       Lamheta Road, offering a perfect blend of 3 BHK duplexes, 4
                       BHK duplexes, and residential plots. Spanning 3.14 acres,
                       this completed project features 88 well-designed units, all
                       of which have been successfully sold, highlighting the
                       project's high demand and quality construction. The 3 BHK
                       and 4 BHK duplex homes are designed to provide a modern and
                       luxurious living experience, featuring spacious interiors,
                       premium fittings, and a contemporary architectural design.
                       Situated in a prime location, residents enjoy easy access to
                       key amenities such as schools, hospitals, shopping centers,
                       and major roadways, ensuring both convenience and
                       connectivity.
                     </p>
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-dhara-phase-III"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Hari Vihar Phase-II</h2>
                     </div>
                     <p>
                       Discover an expansive residential project at Paraswada,
                       Dhanwantri Nagar, designed to offer modern living spaces and
                       premium plots. Spanning an impressive 7.58 acres, this
                       ongoing project features 181 thoughtfully planned units,
                       including 2 BHK Singlex homes and residential plots. This
                       development is crafted to provide a harmonious blend of
                       comfort and convenience, catering to families and investors
                       seeking a secure and well-connected neighborhood. The
                       project boasts wide roads, essential infrastructure, and
                       proximity to key amenities like schools, hospitals, shopping
                       centers, and transportation hubs, ensuring a hassle-free
                       lifestyle.
                     </p>
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-hari-vihar-phase-II"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-down">
                     <img src={ayushi_hari_vihar} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_hari_vihar} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Hari Vihar Phase-II</h2>
                     </div>
                     <p>
                       Discover an expansive residential project at Paraswada,
                       Dhanwantri Nagar, designed to offer modern living spaces and
                       premium plots. Spanning an impressive 7.58 acres, this
                       ongoing project features 181 thoughtfully planned units,
                       including 2 BHK Singlex homes and residential plots. This
                       development is crafted to provide a harmonious blend of
                       comfort and convenience, catering to families and investors
                       seeking a secure and well-connected neighborhood. The
                       project boasts wide roads, essential infrastructure, and
                       proximity to key amenities like schools, hospitals, shopping
                       centers, and transportation hubs, ensuring a hassle-free
                       lifestyle.
                     </p>
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-hari-vihar-phase-II"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_vridavan} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-down"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Vrindavan</h2>
                     </div>
                     <p>
                       Discover your ideal investment opportunity with our ongoing
                       residential plot project in Chowkital. Spanning across 6.30
                       acres, this project offers 116 well-planned plots, with 28
                       units already sold, reflecting its high demand and value.
                       Located in a prime and well-connected area, these plots
                       provide an excellent foundation for building your dream home
                       or making a long-term investment. The project is surrounded
                       by essential amenities, including schools, hospitals,
                       shopping centers, and transportation hubs, ensuring a
                       convenient and comfortable lifestyle. With limited plots
                       available, this is your golden opportunity to secure a
                       valuable piece of land in Chowkital. Don’t miss out—invest
                       today and turn your dreams into reality!
                     </p>
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-vrindavan"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_vridavan} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Vrindavan</h2>
                     </div>
                     <p>
                       Discover your ideal investment opportunity with our ongoing
                       residential plot project in Chowkital. Spanning across 6.30
                       acres, this project offers 116 well-planned plots, with 28
                       units already sold, reflecting its high demand and value.
                       Located in a prime and well-connected area, these plots
                       provide an excellent foundation for building your dream home
                       or making a long-term investment. The project is surrounded
                       by essential amenities, including schools, hospitals,
                       shopping centers, and transportation hubs, ensuring a
                       convenient and comfortable lifestyle. With limited plots
                       available, this is your golden opportunity to secure a
                       valuable piece of land in Chowkital. Don’t miss out—invest
                       today and turn your dreams into reality!
                     </p>
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-vrindavan"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Rudraksh Park</h2>
                     </div>
                     <p>
                       Experience modern living at Rudraksh Park, a fully completed residential project in the prime location of Ganganagar Garha. This well-designed 2BHK apartment complex spans across 1.86 acres, offering 152 premium units, all of which have been successfully sold—a testament to its quality and desirability.
   
   Designed for comfort and convenience, each 2BHK unit features spacious interiors, modern architecture, and high-quality finishes. The project ensures a secure and community-friendly environment, making it an ideal choice for families and professionals seeking a peaceful and well-connected living space.
   
   With its strategic location, Rudraksh Park provides easy access to schools, hospitals, shopping centers, and public transport, ensuring a seamless urban lifestyle.</p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-rudraksh-park"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-down">
                     <img src={ayushi_rudraksha_park} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_rudraksha_park} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Rudraksh Park</h2>
                     </div>
                     <p>
                       Experience modern living at Rudraksh Park, a fully completed residential project in the prime location of Ganganagar Garha. This well-designed 2BHK apartment complex spans across 1.86 acres, offering 152 premium units, all of which have been successfully sold—a testament to its quality and desirability.
   
   Designed for comfort and convenience, each 2BHK unit features spacious interiors, modern architecture, and high-quality finishes. The project ensures a secure and community-friendly environment, making it an ideal choice for families and professionals seeking a peaceful and well-connected living space.
   
   With its strategic location, Rudraksh Park provides easy access to schools, hospitals, shopping centers, and public transport, ensuring a seamless urban lifestyle.</p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-rudraksh-park"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_palm_green} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-down"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Palm Green</h2>
                     </div>
                     <p>
                      Welcome to Ayushi Palm Green, a fully completed residential project in the heart of Ganganagar Garha. Spread across 1.78 acres, this premium development features 125 meticulously designed units, all of which have been successfully sold—a true mark of its excellence and demand.
   
   Offering a mix of spacious 2 & 3 BHK apartments, Ayushi Palm Green is crafted to provide modern amenities, contemporary interiors, and a serene living experience. Each unit is designed for optimal space utilization, natural ventilation, and aesthetic appeal, ensuring a perfect home for families and professionals.
   
   Located in a well-connected neighborhood, residents enjoy proximity to essential services such as schools, hospitals, shopping centers, and transport hubs, making everyday life convenient and hassle-free.</p>
                
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-rudraksh-park"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_palm_green} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Palm Green</h2>
                     </div>
                     <p>
                      Welcome to Ayushi Palm Green, a fully completed residential project in the heart of Ganganagar Garha. Spread across 1.78 acres, this premium development features 125 meticulously designed units, all of which have been successfully sold—a true mark of its excellence and demand.
   
   Offering a mix of spacious 2 & 3 BHK apartments, Ayushi Palm Green is crafted to provide modern amenities, contemporary interiors, and a serene living experience. Each unit is designed for optimal space utilization, natural ventilation, and aesthetic appeal, ensuring a perfect home for families and professionals.
   
   Located in a well-connected neighborhood, residents enjoy proximity to essential services such as schools, hospitals, shopping centers, and transport hubs, making everyday life convenient and hassle-free.</p>
                
                
                     
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-rudraksh-park"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
   
               
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Villa</h2>
                     </div>
                     <p>
                       A prestigious residential project located in the prime area of Ganganagar Garha. Spanning across 1.52 acres, this fully completed project features 39 exquisitely designed 4 BHK Triplex Villas, all of which have been successfully sold, reflecting its unmatched demand and exclusivity.
   
   Each villa is thoughtfully crafted to offer a premium living experience, with modern architecture, spacious interiors, and top-notch amenities. Designed for comfort and elegance, these triplex villas provide ample natural light, open spaces, and luxurious finishes.
   
   Strategically located, Ayushi Villa ensures seamless connectivity to major city landmarks, schools, hospitals, and shopping centers, offering convenience and a high standard of living.
                </p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-villa"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-down">
                     <img src={ayushi_villa} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_villa} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Villa</h2>
                     </div>
                     <p>
                       A prestigious residential project located in the prime area of Ganganagar Garha. Spanning across 1.52 acres, this fully completed project features 39 exquisitely designed 4 BHK Triplex Villas, all of which have been successfully sold, reflecting its unmatched demand and exclusivity.
   
   Each villa is thoughtfully crafted to offer a premium living experience, with modern architecture, spacious interiors, and top-notch amenities. Designed for comfort and elegance, these triplex villas provide ample natural light, open spaces, and luxurious finishes.
   
   Strategically located, Ayushi Villa ensures seamless connectivity to major city landmarks, schools, hospitals, and shopping centers, offering convenience and a high standard of living.
                </p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-villa"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_dhara} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-down"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Dhara</h2>
                     </div>
                     <p>
                     Discover the perfect opportunity to build your dream home in the completed residential project at Sagra, Lamheta Road. This meticulously planned development offers 148 fully sold-out plots, spread across 5.20 acres of prime land, making it an ideal investment for homeowners and developers alike. With a strategic location, the project provides easy access to schools, hospitals, shopping centers, and major transportation routes, ensuring convenience and connectivity. Each plot is designed to offer ample space, excellent infrastructure, and a peaceful environment. The project has been successfully completed, making it a ready-to-build location with essential amenities in place.</p>
                
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-dhara"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_dhara} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Dhara</h2>
                     </div>
                     <p>
                     Discover the perfect opportunity to build your dream home in the completed residential project at Sagra, Lamheta Road. This meticulously planned development offers 148 fully sold-out plots, spread across 5.20 acres of prime land, making it an ideal investment for homeowners and developers alike. With a strategic location, the project provides easy access to schools, hospitals, shopping centers, and major transportation routes, ensuring convenience and connectivity. Each plot is designed to offer ample space, excellent infrastructure, and a peaceful environment. The project has been successfully completed, making it a ready-to-build location with essential amenities in place.</p>
                
                
                     
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-dhara"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
   
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Hari Vihar Phase-I</h2>
                     </div>
                     <p>
                       Presenting an exclusive residential development at Paraswada, Dhanwantri Nagar, offering fully developed plots in a prime location. Spanning 2.32 acres, this completed project consists of 56 meticulously planned units, all of which have been successfully sold, reflecting its high demand and superior quality. These residential plots provide an excellent opportunity for homeowners and investors alike, allowing for the construction of custom dream homes in a well-planned, thriving community. Located in Paraswada, Dhanwantri Nagar, residents benefit from proximity to key amenities such as educational institutions, healthcare centers, shopping hubs, and major transport links, ensuring convenience and connectivity.
                </p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-hari-vihar-phase-I"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-down">
                     <img src={ayushi_hari_vihar} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_hari_vihar} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Hari Vihar Phase-I</h2>
                     </div>
                     <p>
                       Presenting an exclusive residential development at Paraswada, Dhanwantri Nagar, offering fully developed plots in a prime location. Spanning 2.32 acres, this completed project consists of 56 meticulously planned units, all of which have been successfully sold, reflecting its high demand and superior quality. These residential plots provide an excellent opportunity for homeowners and investors alike, allowing for the construction of custom dream homes in a well-planned, thriving community. Located in Paraswada, Dhanwantri Nagar, residents benefit from proximity to key amenities such as educational institutions, healthcare centers, shopping hubs, and major transport links, ensuring convenience and connectivity.
                </p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-hari-vihar-phase-I"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_awadh} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-down"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Awadh</h2>
                     </div>
                     <p>
                    Discover Ayushi Awadh, an upcoming premium residential project situated at Purwa Road, Garha. Spanning across 9 acres, this elite development will offer 200 opulent 4 BHK Triplex Villas, designed to provide spacious living, modern architecture, and a luxurious lifestyle.
   
   Each villa boasts thoughtfully crafted interiors, ensuring ample natural light, elegant aesthetics, and top-tier fittings. Nestled within a secure gated community, residents will enjoy privacy, exclusivity, and world-class amenities for an unmatched living experience.</p>
                
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-awadh"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_awadh} alt="img" />
                   </div>
                 </div>
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome To Ayushi Awadh</h2>
                     </div>
                     <p>
                    Discover Ayushi Awadh, an upcoming premium residential project situated at Purwa Road, Garha. Spanning across 9 acres, this elite development will offer 200 opulent 4 BHK Triplex Villas, designed to provide spacious living, modern architecture, and a luxurious lifestyle.
   
   Each villa boasts thoughtfully crafted interiors, ensuring ample natural light, elegant aesthetics, and top-tier fittings. Nestled within a secure gated community, residents will enjoy privacy, exclusivity, and world-class amenities for an unmatched living experience.</p>
                
                
                     
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-awadh"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="row align-items-center mt-5">
                 <div className="col-lg-6 mt-3" id="desktop">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Lotus View</h2>
                     </div>
                     <p>
                       Ayushi Lotus View is an exclusive upcoming project located at Sagra, near Sai Mandir. Spanning 41,763.97 sq. ft., this elite development offers 28 premium units, combining modern commercial shops and luxurious triplex villas, designed for a harmonious blend of business and upscale living.
   
   Each unit is meticulously planned to provide spacious layouts, contemporary architecture, and high-end amenities. The commercial spaces are designed to cater to business owners and entrepreneurs, while the villa triplexes offer a serene and comfortable lifestyle for families seeking elegance and convenience.
                </p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-lotus-view"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="desktop">
                   <div className="s-about-img p-relative" data-aos="fade-down">
                     <img src={ayushi_lotus_view} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6" id="mobile">
                   <div className="s-about-img p-relative" data-aos="fade-up">
                     <img src={ayushi_lotus_view} alt="img" />
                   </div>
                 </div>
   
                 <div className="col-lg-6 mt-3" id="mobile">
                   <div
                     className="about-content s-about-content pl-30"
                     data-aos="fade-up"
                   >
                     <div className="about-title second-atitle">
                       <h2>Welcome to Ayushi Lotus View</h2>
                     </div>
                     <p>
                       Ayushi Lotus View is an exclusive upcoming project located at Sagra, near Sai Mandir. Spanning 41,763.97 sq. ft., this elite development offers 28 premium units, combining modern commercial shops and luxurious triplex villas, designed for a harmonious blend of business and upscale living.
   
   Each unit is meticulously planned to provide spacious layouts, contemporary architecture, and high-end amenities. The commercial spaces are designed to cater to business owners and entrepreneurs, while the villa triplexes offer a serene and comfortable lifestyle for families seeking elegance and convenience.
                </p>
                
                     
   
                     <div className="">
                       <button
                         type="button"
                         className="btn   mb-3"
                         style={{
                           backgroundColor: " #f26a20",
                           borderRadius: "1.5rem",
                         }}
                       >
                         <Link
                           to="/ayushi-lotus-view"
                           onClick={handleFooterLink}
                           style={{ textDecoration: "none", color: "white" }}
                         >
                           {" "}
                           Read More
                         </Link>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
   
   
             </div>
           </div>
         </div>



   

  
  </Wrapper>
  )
}

export default OurProjects;
const Wrapper = styled.div`
img{
  width: 100%;
}
h2{
   
    color: #f26a20;
   
      
  }
  #mobile {
   display:none;
    
    @media screen and (max-width: 768px) {
      display: block;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px)  {
      display: block;
    }
  }

  #desktop {
    display: block;
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }
  }
  p{
    text-align: justify;
  }
  
`