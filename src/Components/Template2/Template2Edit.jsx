import React, { useState, useEffect } from "react";
import "./Template2.css";
import { AboutEdit } from "./Components/AboutEdit";
import { LabEdit } from "./Components/LabEdit";
import { NetworkEdit } from "./Components/NetworkEdit";
import { ProfileEdit } from "./Components/ProfileEdit";
import { About } from "./Components/About";
import { Lab } from "./Components/Lab";
import { Network } from "./Components/Network";
import { Profile } from "./Components/Profile";
import { useLocation } from "react-router-dom";
import { profileData, getProfile, userBio } from "../../axios/Axios";
import { NavBar } from "../NavBar/NavBar";

export const Template2Edit = ({ props }) => {
  const location = useLocation();
  const { namee, designationn, institutee, contactt, bioo, addresss, labb } =
    location.state;
  const [about, setAbout] = useState(true);
  const [labs, setLabs] = useState(false);
  const [network, setNetwork] = useState(false);
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState("");
  // Input useState
  const [name, setName] = useState(namee);
  const [institute, setInstitute] = useState(institutee);
  const [designation, setDesignation] = useState(designationn);

  const handleData = async () => {
    userBio(designation, institute, name);
  };

  const getProfileData = async () => {
    let res = await getProfile();
    setData(res.data);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleAbout = () => {
    setAbout(true);
    setLabs(false);
    setNetwork(false);
    setProfile(false);
  };
  const handsLabs = () => {
    setAbout(false);
    setLabs(true);
    setNetwork(false);
    setProfile(false);
  };
  const handleNetwork = () => {
    setAbout(false);
    setLabs(false);
    setNetwork(true);
    setProfile(false);
  };
  const handleProfile = () => {
    setAbout(false);
    setLabs(false);
    setNetwork(false);
    setProfile(true);
  };

  return (
    <>
      <NavBar />
      <div className="body">
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            color: "white",
            paddingTop: "10px",
          }}
        >
          Please Edit Your Profile
        </p>

        <div className="btns">
          <div
            className="btn"
            onClick={(e) => {
              handleData();
            }}
          >
            <p>Save</p>
          </div>
        </div>
        <div className="template2PreviewContainer">
          <div className="profileTemplate2PreviewImg"></div>
          <div className="profileTemplate2PreviewData">
            <p className="profile2PreviewHeading">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </p>
            <p className="profile2PreviewInfo">
              <input
                type="text"
                onChange={(e) => setDesignation(e.target.value)}
                value={designation}
              />
            </p>
            <p className="profile2PreviewInfo">
              <input
                type="text"
                onChange={(e) => setInstitute(e.target.value)}
                value={institute}
              />
            </p>
          </div>
        </div>
        <div className="template2PreviewMenu">
          <ul className="menuItems2Preview">
            <li className="hover-underline-animation2" onClick={handleAbout}>
              About
            </li>
            <li className="hover-underline-animation2" onClick={handsLabs}>
              Labs
            </li>
            <li className="hover-underline-animation2" onClick={handleNetwork}>
              Network
            </li>
            <li className="hover-underline-animation2" onClick={handleProfile}>
              Profile
            </li>
          </ul>
        </div>
        {about && (
          <AboutEdit
            bio={data?.biography}
            contact={data?.phone}
            address={data?.postal_address}
            value1={bioo}
            value2={contactt}
            value3={addresss}
          />
        )}
        {labs && <LabEdit lab={labb} />}
        {network && <NetworkEdit />}
        {profile && <ProfileEdit />}
      </div>
    </>
  );
};
