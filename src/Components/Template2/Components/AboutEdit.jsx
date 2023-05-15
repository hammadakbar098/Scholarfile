import React, { useState, useEffect } from "react";
import "./About.css";
import { profileData, getProfile, userDetail } from "../../../axios/Axios";

export const AboutEdit = ({
  bio,
  contact,
  address,
  value1,
  value2,
  value3,
}) => {
  const [userData, setUserData] = useState();
  const [biography, setBiography] = useState(value1);
  const [phone, setPhone] = useState(value2);
  const [postalAddress, setPostalAddress] = useState(value3);

  const data =
    "Welcome to our website! We are a team of experienced web developers dedicated to crafting beautiful and functional websites for our clients. With a focus on user experience and responsive design, we create sites that are easy to navigate and visually appealing.";
  const getHeight = (dataa) => {
    // Calculate the height of the input value
    const rows = dataa;
    return `${rows}px`;
  };
  const handleSave = async () => {
    let res = await userDetail(biography, postalAddress, phone);
  };
  const apiCall = async () => {
    let res = await getProfile();
    setUserData(res.data);
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div className="aboutContainer">
        <p className="childComponentHeading aboutBiography">Biography:</p>
        <div className="childComponent aboutBiography">
          <p>
            <textarea
              type="textarea"
              wrap="soft"
              maxLength={1000000}
              placeholder="Enter lab details"
              style={{ height: getHeight(data.length), lineHeight: 1.6 }}
              onChange={(e) => setBiography(e.target.value)}
              value={biography}
            />
          </p>
        </div>
        <div className="aboutContact">
          <div className="childComponent">
            <p className="childComponentHeading">Contact Information</p>
            <hr className="childComponentSeparator" />
            <p className="childComponentInfo">
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
          </div>
          <div className="childComponent aboutPostalAddress">
            <p className="childComponentHeading">Postal Address</p>
            <hr className="childComponentSeparator" />
            <p className="childComponentInfo">
              <textarea
                type="textarea"
                wrap="soft"
                maxLength={1000000}
                placeholder="Enter address here"
                style={{ height: getHeight(data.length), lineHeight: 1.6 }}
                value={postalAddress}
                onChange={(e) => setPostalAddress(e.target.value)}
              />
            </p>
          </div>
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

      <div style={{ height: 10, marginTop: 20 }}></div>
    </>
  );
};
