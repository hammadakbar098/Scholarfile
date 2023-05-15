import React, { useState } from "react";
import "./About.css";
import { userLab } from "../../../axios/Axios";

export const LabEdit = ({ lab }) => {
  const [labDetails, setLabDetails] = useState(lab);
  const data =
    "Welcome to our website! We are a team of experienced web developers dedicated to crafting beautiful and functional websites for our clients. With a focus on user experience and responsive design, we create sites that are easy to navigate and visually appealing.";
  const getHeight = (dataa) => {
    // Calculate the height of the input value
    const rows = dataa;
    return `${rows}px`;
  };

  const handleSave = async () => {
    await userLab(labDetails);
  };
  return (
    <>
      <div className="labContainer">
        <div className="childComponent labDetails">
          <p className="childComponentHeading">Lab details:</p>
          <hr className="childComponentSeparator" />
          <p>
            <textarea
              type="textarea"
              wrap="soft"
              maxLength={1000000}
              placeholder="Enter lab details"
              style={{ height: getHeight(data.length), lineHeight: 1.6 }}
              value={labDetails}
              onChange={(e) => setLabDetails(e.target.value)}
            />
          </p>
            
        </div>
        <button
          className="btnSave"
          onClick={() => {
            handleSave();
          }}
        >
          Save
        </button>
      </div>
      <div style={{ height: 100, marginTop: 20 }}></div>
    </>
  );
};
