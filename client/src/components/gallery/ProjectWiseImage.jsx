import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import photo1 from '../../images/Ayushi Dhara-I/photo1.jpeg'
import photo2 from '../../images/Ayushi Dhara-I/photo2.jpeg'
import photo3 from '../../images/Ayushi Dhara-I/photo3.jpeg'
import photo4 from '../../images/Ayushi Dhara-I/photo4.jpeg'
import photo5 from '../../images/Ayushi Dhara-I/photo5.jpeg'
import photo6 from '../../images/Ayushi Dhara-I/7.jpg'
import photo7 from '../../images/Ayushi Dhara-I/8.jpg'
import photo8 from '../../images/Ayushi Dhara-I/9.jpg'
import photo9 from '../../images/Ayushi Dhara-I/10.jpeg'
import photo10 from '../../images/Ayushi Dhara-I/11.jpg'
import photo11 from '../../images/Ayushi Dhara-I/12.jpg'
import photo12 from '../../images/Ayushi Dhara-I/13.jpg'
import photo13 from '../../images/Ayushi Dhara-I/14.jpg'
import photo14 from '../../images/Ayushi Dhara-I/15.jpg'
import photo15 from '../../images/Ayushi Dhara-I/16.jpeg'
import photo16 from '../../images/Ayushi Dhara-I/17.jpg'
import photo17 from '../../images/Ayushi Dhara-I/18.jpg'
import photo18 from '../../images/Ayushi Dhara-I/19.jpg'
import photo19 from '../../images/Ayushi Dhara-I/20.jpeg'
import photo20 from '../../images/Ayushi Dhara-I/21.jpeg'









import image1 from '../../images/Aysuhi Home/image1.jpeg'
import image2 from '../../images/Aysuhi Home/image2.jpeg'
import image3 from '../../images/Aysuhi Home/image3.jpeg'
import image4 from '../../images/Aysuhi Home/image4.jpeg'
import image5 from '../../images/Aysuhi Home/image5.jpeg'
import image6 from '../../images/Aysuhi Home/image6.jpeg'
import image7 from '../../images/Aysuhi Home/image7.jpeg'
import image8 from '../../images/Aysuhi Home/image8.jpeg'
import image9 from '../../images/Aysuhi Home/image9.jpeg'
import image10 from '../../images/Aysuhi Home/image10.jpeg'
import image11 from '../../images/Aysuhi Home/image11.jpeg'
import image12 from '../../images/Aysuhi Home/image12.jpeg'
import image13 from '../../images/Aysuhi Home/image13.jpeg'
import image14 from '../../images/Aysuhi Home/image14.jpeg'
import image15 from '../../images/Aysuhi Home/image15.jpg'
import image16 from '../../images/Aysuhi Home/image16.jpg'
import image17 from '../../images/Aysuhi Home/image17.jpg'
import image18 from '../../images/Aysuhi Home/image18.jpg'



import hariimage from '../../images/Ayushi Hari vihar/1.jpg'
import hariimage1 from '../../images/Ayushi Hari vihar/2.jpg'


import vrindavanimage from '../../images/Ayushi vrindavan/2.jpg'
import vrindavanimage1 from '../../images/Ayushi vrindavan/3.jpg'
import vrindavanimage2 from '../../images/Ayushi vrindavan/4.jpg'
import vrindavanimage3 from '../../images/Ayushi vrindavan/5.jpg'
import vrindavanimage4 from '../../images/Ayushi vrindavan/6.jpg'
import vrindavanimage5 from '../../images/Ayushi vrindavan/7.jpg'
import vrindavanimage6 from '../../images/Ayushi vrindavan/8.jpg'
import vrindavanimage7 from '../../images/Ayushi vrindavan/9.jpeg'
import vrindavanimage8 from '../../images/Ayushi vrindavan/10.jpeg'
import vrindavanimage9 from '../../images/Ayushi vrindavan/11.jpeg'
import vrindavanimage10 from '../../images/Ayushi vrindavan/12.jpeg'
import vrindavanimage11 from '../../images/Ayushi vrindavan/13.jpeg'



const projectImages = {
    
    "ayushi-homes": [
        { url: image1,  },
        { url: image2,  },
        { url: image3,  },
        { url: image4,  },
        { url: image5,  },
        { url: image6,  },
        { url: image7,  },
        { url: image8,  },
        { url: image9,  },
        { url: image10,  },
        { url: image11,  },
        { url: image12,  },
        { url: image13,  },
        { url: image14,  },
        { url: image15,  },
        { url: image16,  },
        { url: image17,  },
        { url: image18,  },
       
      
    ],
    
    "ayushi-hari-vihar": [
        { url: hariimage,  },
        { url: hariimage1,  },
        
    ],
    "ayushi-vrindavan": [
        { url: vrindavanimage,  },
        { url: vrindavanimage1,  },
        { url: vrindavanimage2,  },
        { url: vrindavanimage3,  },
        { url: vrindavanimage4,  },
        { url: vrindavanimage5,  },
        { url: vrindavanimage6,  },
        { url: vrindavanimage7,  },
        { url: vrindavanimage8,  },
        { url: vrindavanimage9,  },
        { url: vrindavanimage10,  },
        { url: vrindavanimage11,  },
      
       
      
    ],
    "ayushi-dhara": [
        { url: photo1, },
        { url: photo2,},
        { url: photo3,  },
        { url: photo4,  },
        { url: photo5,  },
        { url: photo6,  },
        { url: photo7,  },
        { url: photo8,  },
        { url: photo9,  },
        { url: photo10,  },
        { url: photo11,  },
        { url: photo12,  },
        { url: photo13,  },
        { url: photo14,  },
        { url: photo15,  },
        { url: photo16,  },
        { url: photo17,  },
        { url: photo18,  },
        { url: photo19,  },
        { url: photo20,  },
   
    ],
};


const ProjectWiseImage = () => {
    const { projectId } = useParams();
    const images = projectImages[projectId] || [];
    const handleFooterLink = () => {
        window.scrollTo(0, 0);
        
      };

    return (
        <Wrapper>
         <div className="container">
            <h2 className="text-center mb-4 maintext">
                {projectId.replace("-", " ").toUpperCase()} GALLERY
            </h2>
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

            <div className="row">
                {images.map((image, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src={image.url}
                                className="card-img-top"
                                alt={image.caption}
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <p className="card-text">{image.caption}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4 mb-5">
                <Link to="/gallery" onClick={handleFooterLink} className="btn btn-secondary">
                    Back to Projects Gallery Page
                </Link>
            </div>
        </div>
        </Wrapper>
       
    );
};

export default ProjectWiseImage;
const Wrapper = styled.div`
.container{
margin-top: 8rem;
}
.maintext{
    color: #f26a20;
}
`;
