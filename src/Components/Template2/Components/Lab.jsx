import React from "react";
import "./About.css";

export const Lab = ({ lab }) => {
  return (
    <>
      <div className="labContainer">
        <div className="childComponent labDetails">
          <p className="childComponentHeading">Lab details:</p>
          <hr className="childComponentSeparator" />
          <p>{lab}</p>
            
        </div>
      </div>
      <div style={{ height: 100, marginTop: 20 }}></div>
    </>
  );
};
