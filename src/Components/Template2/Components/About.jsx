import React from "react";
import "./About.css";

export const About = ({ bio, contact, address }) => {
  return (
    <>
      <div className="aboutContainer">
        <p className="childComponentHeading aboutBiography">Biography:</p>
        <div className="childComponent aboutBiography">
          <p>{bio}</p>
        </div>
        <div className="aboutContact">
          <div className="childComponent">
            <p className="childComponentHeading">Contact Information</p>
            <hr className="childComponentSeparator" />
            <p className="childComponentInfo">{contact}</p>
          </div>
          <div className="childComponent aboutPostalAddress">
            <p className="childComponentHeading">Postal Address</p>
            <hr className="childComponentSeparator" />
            <p className="childComponentInfo">{address} </p>
          </div>
        </div>
            
      </div>

      <div style={{ height: 10, marginTop: 20 }}></div>
    </>
  );
};
