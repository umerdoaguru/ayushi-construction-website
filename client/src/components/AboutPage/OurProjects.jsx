import React from 'react'
import styled from 'styled-components';


import ayushi_dhara from '../../images/ayushi-dhara.jpg'
import ayushi_home  from '../../images/ayushi-home.jpg'
import ayushi_villa from '../../images/ayushi-villa.png'
import ayushi_hari_vihar from '../../images/ayushi-hari-vihar.jpg'
import ayushi_vridavan from '../../images/ayushi-vrindavan.jpg'
import ayushi_palm_green from '../../images/ayushi-palm-green.jpg'
import ayushi_rudraksha_park from '../../images/rudraksh-park.jpg'
import { Link } from 'react-router-dom';





function OurProjects() {
  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };
  return (
  <Wrapper>
    <div className="container" style={{marginTop:"4rem"}}>
      <div className="row g-5">
                  <div className="container" style={{marginTop:"4rem"}}>
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
                
                         <div className="col-lg-6" id='desktop'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_dhara} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='desktop'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-down">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Our Ayushi Dhara</h2>
                              
                             </div>
                             <p>A ready-to-move 3 BHK villa with a spacious area ranging from 800 to 1000 sq. ft., designed to provide a comfortable and modern living experience. This beautifully constructed villa offers ample space for families, ensuring both privacy and convenience. The interiors are thoughtfully designed, with well-ventilated rooms, elegant flooring, and premium fittings to enhance your lifestyle. The property also features a dedicated parking facility, ensuring the safety and convenience of vehicle owners. Located in a well-connected and serene neighborhood, this villa is perfect for those looking for a peaceful yet accessible living environment. Whether for investment or personal use, this property is an excellent choice for homebuyers seeking quality, comfort, and affordability.
                 
               </p>
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-dhara"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
                            >
                              {" "}
                              Read More
                            </Link>
                          </button>
                            </div>
               
                           
                           </div>
                         </div>
                         <div className="col-lg-6" id='mobile'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_dhara} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='mobile'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Our Ayushi Dhara</h2>
                              
                             </div>
                             <p>A ready-to-move 3 BHK villa with a spacious area ranging from 800 to 1000 sq. ft., designed to provide a comfortable and modern living experience. This beautifully constructed villa offers ample space for families, ensuring both privacy and convenience. The interiors are thoughtfully designed, with well-ventilated rooms, elegant flooring, and premium fittings to enhance your lifestyle. The property also features a dedicated parking facility, ensuring the safety and convenience of vehicle owners. Located in a well-connected and serene neighborhood, this villa is perfect for those looking for a peaceful yet accessible living environment. Whether for investment or personal use, this property is an excellent choice for homebuyers seeking quality, comfort, and affordability.
                 
               </p>
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-dhara"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
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
                        
                         <div className="col-lg-6 mt-3" id='desktop'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Ayushi Home</h2>
                              
                             </div>
                             <p>A ready-to-move duplex offering a well-designed living space of 620 sq. ft., perfect for those seeking comfort and functionality. Situated in the heart of Jabalpur, this property is ideal for families or individuals looking for a modern home in a well-connected location. The thoughtfully planned layout ensures maximum space utilization, with well-ventilated rooms, stylish interiors, and quality finishes that enhance the overall appeal. Additionally, the property comes with a dedicated parking facility, providing convenience and security for vehicle owners. With its prime location, this duplex offers easy access to essential amenities, making it a great choice for homebuyers looking for a blend of comfort, convenience, and affordability.
               </p>
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-home"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
                            >
                              {" "}
                              Read More
                            </Link>
                          </button>
                            </div>
               
                             
                           </div>
                         </div>
                       
                         <div className="col-lg-6" id='desktop'>
                           <div className="s-about-img p-relative"data-aos= "fade-down" >
                             <img src= {ayushi_home} alt="img" />
                        
      
      
                           </div>
                         </div>
                         <div className="col-lg-6" id='mobile'>
                           <div className="s-about-img p-relative"data-aos= "fade-up"  >
                             <img src= {ayushi_home} alt="img" />
                        
                           </div>
                         </div>
        <div className="col-lg-6 mt-3" id='mobile'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up" >
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Ayushi Home</h2>
                              
                             </div>
                             <p>A ready-to-move duplex offering a well-designed living space of 620 sq. ft., perfect for those seeking comfort and functionality. Situated in the heart of Jabalpur, this property is ideal for families or individuals looking for a modern home in a well-connected location. The thoughtfully planned layout ensures maximum space utilization, with well-ventilated rooms, stylish interiors, and quality finishes that enhance the overall appeal. Additionally, the property comes with a dedicated parking facility, providing convenience and security for vehicle owners. With its prime location, this duplex offers easy access to essential amenities, making it a great choice for homebuyers looking for a blend of comfort, convenience, and affordability.
               </p>
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-home"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
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
                         <div className="col-lg-6"  id='desktop'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_villa} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='desktop'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-down">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Ayushi Villa</h2>
                              
                             </div>
                             <p>A luxurious 4 BHK villa, ready to move in, offering a spacious area ranging from 1000 to 1370 sq. ft., designed to provide an elegant and comfortable lifestyle. This beautifully crafted villa boasts modern architecture, premium-quality interiors, and ample natural light, ensuring a perfect blend of style and functionality. Each room is thoughtfully planned to maximize space and comfort, making it an ideal home for families. Additionally, the property comes with a dedicated parking facility, providing convenience and security for residents. Nestled in a prime location, this villa offers easy access to essential amenities, making it a perfect choice for those seeking a sophisticated and peaceful living environment.
               </p>
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-villa"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
                            >
                              {" "}
                              Read More
                            </Link>
                          </button>
                            </div>
               
                            
                           </div>
                         </div>
      
                         <div className="col-lg-6" id='mobile'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_villa} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='mobile'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Ayushi Villa</h2>
                              
                             </div>
                             <p>A luxurious 4 BHK villa, ready to move in, offering a spacious area ranging from 1000 to 1370 sq. ft., designed to provide an elegant and comfortable lifestyle. This beautifully crafted villa boasts modern architecture, premium-quality interiors, and ample natural light, ensuring a perfect blend of style and functionality. Each room is thoughtfully planned to maximize space and comfort, making it an ideal home for families. Additionally, the property comes with a dedicated parking facility, providing convenience and security for residents. Nestled in a prime location, this villa offers easy access to essential amenities, making it a perfect choice for those seeking a sophisticated and peaceful living environment.
               </p>
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-villa"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
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
                     
               
               
                         <div className="col-lg-6 mt-3" id='desktop'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome to Ayushi Hari Vihar</h2>
                              
                             </div>
                             <p>Choose between spacious 2 BHK or 3 BHK flats, fully ready to move in, with sizes ranging from 1473 to 1759 sq. ft. Designed for modern living, these well-crafted flats offer a perfect blend of comfort, style, and functionality. Each unit features thoughtfully planned interiors, ample natural light, and high-quality fittings to ensure a luxurious living experience. Whether you're a small family or need extra space, these flats cater to diverse lifestyle needs. Additionally, the property includes a dedicated parking facility, providing convenience and security. Located in a prime area with easy access to essential amenities, these homes are an excellent choice for those seeking a comfortable and well-connected living environment.
               </p>
                            
               
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-hari-vihar"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
                            >
                              {" "}
                              Read More
                            </Link>
                          </button>
                            </div>
                           </div>
                         </div>
                     
               
                         <div className="col-lg-6" id='desktop'>
                           <div className="s-about-img p-relative" data-aos= "fade-down" >
                             <img src= {ayushi_hari_vihar} alt="img" />
                        
                           </div>
                         </div>
      
                         <div className="col-lg-6" id='mobile'>
                           <div className="s-about-img p-relative" data-aos= "fade-up" >
                             <img src= {ayushi_hari_vihar} alt="img" />
                        
                           </div>
                         </div>
                   <div className="col-lg-6 mt-3" id='mobile'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome to Ayushi Hari Vihar</h2>
                              
                             </div>
                             <p>Choose between spacious 2 BHK or 3 BHK flats, fully ready to move in, with sizes ranging from 1473 to 1759 sq. ft. Designed for modern living, these well-crafted flats offer a perfect blend of comfort, style, and functionality. Each unit features thoughtfully planned interiors, ample natural light, and high-quality fittings to ensure a luxurious living experience. Whether you're a small family or need extra space, these flats cater to diverse lifestyle needs. Additionally, the property includes a dedicated parking facility, providing convenience and security. Located in a prime area with easy access to essential amenities, these homes are an excellent choice for those seeking a comfortable and well-connected living environment.
               </p>
                            
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-hari-vihar"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
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
                         <div className="col-lg-6" id='desktop'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_vridavan} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='desktop'>
                         <div className="about-content s-about-content pl-30" data-aos= "fade-down">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Ayushi Vrindavan</h2>
                              
                             </div>
                             <p>Choose between elegantly designed 2 BHK or 3 BHK flats, fully ready to move in, with spacious sizes ranging from 1473 to 1759 sq. ft. These modern homes are crafted to offer a perfect balance of comfort and functionality, featuring well-ventilated rooms, stylish interiors, and high-quality fittings. Whether you need a cozy space or a larger home for your growing family, these flats cater to diverse lifestyle needs. Additionally, the property includes a dedicated parking facility, ensuring convenience and security for residents. Located in a well-connected area with easy access to essential amenities, these homes provide a perfect blend of luxury and practicality for a hassle-free living experience.
               </p>
                            
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-vrindavan"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
                            >
                              {" "}
                              Read More
                            </Link>
                          </button>
                            </div>
                          
               
                           </div>
                         </div>
                         <div className="col-lg-6" id='mobile'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_vridavan} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='mobile'>
                         <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Ayushi Vrindavan</h2>
                              
                             </div>
                             <p>Choose between elegantly designed 2 BHK or 3 BHK flats, fully ready to move in, with spacious sizes ranging from 1473 to 1759 sq. ft. These modern homes are crafted to offer a perfect balance of comfort and functionality, featuring well-ventilated rooms, stylish interiors, and high-quality fittings. Whether you need a cozy space or a larger home for your growing family, these flats cater to diverse lifestyle needs. Additionally, the property includes a dedicated parking facility, ensuring convenience and security for residents. Located in a well-connected area with easy access to essential amenities, these homes provide a perfect blend of luxury and practicality for a hassle-free living experience.
               </p>
                            
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-vrindavan"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
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
                     
               
               
                         <div className="col-lg-6 mt-3" id='desktop'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome to Ayushi Palm Green</h2>
                              
                             </div>
                             <p>Choose between spacious 2 BHK or 3 BHK flats, fully ready to move in, with sizes ranging from 1473 to 1759 sq. ft. Designed for modern living, these flats offer a perfect combination of style, comfort, and functionality. Each unit features well-ventilated rooms, contemporary interiors, and premium-quality fittings to ensure a superior living experience. Whether you are looking for a cozy space or a larger home for your family, these flats cater to diverse needs. Additionally, a dedicated parking facility is provided for added convenience and security. Situated in a prime location with easy access to essential amenities, these homes offer a seamless and luxurious lifestyle.
               </p>
                            
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-palm-green"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
                            >
                              {" "}
                              Read More
                            </Link>
                          </button>
                            </div>
               
                            
                           </div>
                         </div>
                      
               
                         <div className="col-lg-6" id='desktop'>
                           <div className="s-about-img p-relative" data-aos= "fade-down" >
                             <img src= {ayushi_palm_green} alt="img" />
                        
                           </div>
                         </div>
      
      
                         <div className="col-lg-6"  id='mobile'>
                           <div className="s-about-img p-relative" data-aos= "fade-up" >
                             <img src= {ayushi_palm_green} alt="img" />
                        
                           </div>
                         </div>
               
                  <div className="col-lg-6 mt-3" id='mobile'>
                           <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome to Ayushi Palm Green</h2>
                              
                             </div>
                             <p>Choose between spacious 2 BHK or 3 BHK flats, fully ready to move in, with sizes ranging from 1473 to 1759 sq. ft. Designed for modern living, these flats offer a perfect combination of style, comfort, and functionality. Each unit features well-ventilated rooms, contemporary interiors, and premium-quality fittings to ensure a superior living experience. Whether you are looking for a cozy space or a larger home for your family, these flats cater to diverse needs. Additionally, a dedicated parking facility is provided for added convenience and security. Situated in a prime location with easy access to essential amenities, these homes offer a seamless and luxurious lifestyle.
               </p>
                            
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-palm-green"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
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
                         <div className="col-lg-6" id='desktop'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_rudraksha_park} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='desktop'>
                         <div className="about-content s-about-content pl-30" data-aos= "fade-down">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Rudraksh Park</h2>
                              
                             </div>
                             <p>Spacious 2 BHK flats available, fully ready to move in, offering a generous 1119 sq. ft. of thoughtfully designed living space. These well-planned homes provide a perfect blend of comfort and functionality, featuring modern interiors, ample natural light, and high-quality fittings. Ideal for families and professionals alike, each flat ensures a comfortable and convenient lifestyle. Additionally, the property includes a dedicated parking facility, ensuring ease and security for residents. Located in a prime area with excellent connectivity to essential amenities, these flats offer the perfect combination of luxury and practicality.
               </p>
                            
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-rudraksh-park"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
                            >
                              {" "}
                              Read More
                            </Link>
                          </button>
                            </div>
                            
               
                           </div>
                         </div>
      
                         <div className="col-lg-6"  id='mobile'>
                           <div className="s-about-img p-relative" data-aos= "fade-up">
                             <img src= {ayushi_rudraksha_park} alt="img" />
                        
                           </div>
                         </div>
                         <div className="col-lg-6 mt-3" id='mobile'>
                         <div className="about-content s-about-content pl-30" data-aos= "fade-up">
                             <div className="about-title second-atitle">
                               
                               <h2>Welcome To Rudraksh Park</h2>
                              
                             </div>
                             <p>Spacious 2 BHK flats available, fully ready to move in, offering a generous 1119 sq. ft. of thoughtfully designed living space. These well-planned homes provide a perfect blend of comfort and functionality, featuring modern interiors, ample natural light, and high-quality fittings. Ideal for families and professionals alike, each flat ensures a comfortable and convenient lifestyle. Additionally, the property includes a dedicated parking facility, ensuring ease and security for residents. Located in a prime area with excellent connectivity to essential amenities, these flats offer the perfect combination of luxury and practicality.
               </p>
               <div className="">
              <button
                            type="button"
                            className="btn   mb-3"
                            style={{ backgroundColor:" #f26a20", borderRadius:"1.5rem"  }}
                          >
                            <Link
                              to="/ayushi-rudraksh-park"
                              onClick={handleFooterLink}
                              style={{ textDecoration: "none", color:"white"}}
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
  
`