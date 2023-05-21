//
import React, { useState, useEffect } from "react";
import { About } from "./About";
import { Lab } from "./Lab";
import { Network } from "./Network";
import { Profile } from "./Profile";
import { getProfile, getCollabrators } from "../../axios/Axios";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const Template2SelectionPreview = () => {
  const [collabrators, setCollabrators] = useState([]);
  const [uploadData, setUploadData] = useState();
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/template2");
  };
  const [about, setAbout] = useState(true);
  const [labs, setLabs] = useState(false);
  const [network, setNetwork] = useState(false);
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState("");

  const apiCall = async () => {
    const data = await getProfile();
    setData(data.data);
    const collab = await getCollabrators();

    setCollabrators(collab.data);
  };
  useEffect(() => {
    apiCall();
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
          Welcome To Your Profile
        </p>
        <div className="btns">
          <div
            className="btn"
            onClick={(e) => {
              handleNavigate(e);
            }}
          >
            <p>Select</p>
          </div>
        </div>
        <div className="template2PreviewContainer">
          <div className="profileTemplate2PreviewImg"></div>
          <div className="profileTemplate2PreviewData">
            <p className="profile2PreviewHeading">John Doe</p>
            <p className="profile2PreviewInfo">Web Developer</p>
            <p className="profile2PreviewInfo">COMSATS Wah Islamabad </p>
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
          <About
            bio={data?.biography}
            contact={data?.phone}
            address={data?.postal_address}
          />
        )}
        {labs && <Lab lab={data?.lab_details} />}
        {network && <Network />}
        {profile && <Profile />}
      </div>
    </>
  );
};
