import React from "react";

export const Lab = ({ lab }) => {
  return (
    <>
      <div className="labContainer">
        <div className="childComponent labDetails">
          <p className="childComponentHeading">Lab details:</p>
          <hr className="childComponentSeparator" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
            
        </div>
      </div>
      <div style={{ height: 100, marginTop: 20 }}></div>
    </>
  );
};
