import React from 'react';

const GoogleMapCom = ({ locationUrl, width = "800", height = "450" }) => {
    return (
        <div className="container mt-4 mb-2">
            <h2 className="text-center mb-4 " style={{color:"#f26a20"}}>Our Location</h2>
            <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "3rem",
                  backgroundColor: "#34495E",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              ></div>
            <div className="d-flex justify-content-center">
                <iframe
                    title="Google Map"
                    src={locationUrl}
                    width={width}
                    height={height}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default GoogleMapCom;
