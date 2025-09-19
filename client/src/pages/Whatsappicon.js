import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "react-bootstrap";


function Whatsappicon() {
     // WhatsApp number and default message
     const whatsappNumber = "+9981268611"; 
  const defaultMessage = "Hello, I am interested in your Project!";

  // Constructing WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <Button variant="success" className="whatsapp-btn">
        <FaWhatsapp size={30} />
      </Button>

      {/* Floating Button CSS */}
      <style>
        {`
          .whatsapp-float {
            position: fixed;
               bottom: 95px;
            right: 10px;
            z-index: 1000;
            text-decoration: none;
          }

          .whatsapp-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            // box-shadow: 0px 40px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
          }

          .whatsapp-btn:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </a>
  );
};

export default Whatsappicon;

