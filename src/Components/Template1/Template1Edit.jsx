import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Template1.css";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  profileData,
  handleAddMembers,
  getCollabrators,
} from "../../axios/Axios";
import { useLocation } from "react-router-dom";
import InputForm from "../Modal/InputForm";

export const Template1Edit = ({ props }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { namee, designationn, institutee, contactt, bioo, addresss, labb } =
    location.state;
  // UseState for variables
  const [collabrators, setCollabrators] = useState([]);
  const [color, setColor] = useState("#fffff");
  const [name, setName] = useState(namee);
  const [contact, setContact] = useState(contactt);
  const [institute, setInstitute] = useState(institutee);
  const [designation, setDesignation] = useState(designationn);
  const [address, setAddress] = useState(addresss);
  const [lab, setLab] = useState(labb);
  const [bio, setBio] = useState(bioo);
  const [role, setRole] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [memberName, setMemeberName] = useState("");
  const [uploadData, setUploadData] = useState(false);
  // <a>Edu information</a>
  // <a>Academic exp</a>
  // <a>Award</a>
  // <a>Achievements</a>
  // <a>Blogs</a>
  // <a>Pictures</a>
  // <a>Job openings</a>
  // <a>Collabration</a>
  // <a>Funding</a>
  const [edu, setEdu] = useState(false);
  const [acad, setAcad] = useState(false);
  const [awards, setAwards] = useState(false);
  const [achievements, setAchievements] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [pictures, setPictures] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [collabs, setCollabs] = useState(false);
  const [funds, setFunds] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleEduInfo = () => {
    setEdu(!edu);
    setAcad(false);
    setAwards(false);
    setAchievements(false);
    setBlogs(false);
    setPictures(false);
    setJobs(false);
    setCollabs(false);
    setFunds(false);
    setBlur(!blur);
  };
  const handleAcd = () => {
    setEdu(false);
    setAcad(!acad);
    setAwards(false);
    setAchievements(false);
    setBlogs(false);
    setPictures(false);
    setJobs(false);
    setCollabs(false);
    setFunds(false);
    setBlur(!blur);
  };
  const handleAward = () => {
    setEdu(false);
    setAcad(false);
    setAwards(!awards);
    setAchievements(false);
    setBlogs(false);
    setPictures(false);
    setJobs(false);
    setCollabs(false);
    setFunds(false);
    setBlur(!blur);
  };
  const handleAchievements = () => {
    setEdu(false);
    setAcad(false);
    setAwards(false);
    setAchievements(!achievements);
    setBlogs(false);
    setPictures(false);
    setJobs(false);
    setCollabs(false);
    setFunds(false);
    setBlur(!blur);
  };
  const handleBlogs = () => {
    setEdu(false);
    setAcad(false);
    setAwards(false);
    setAchievements(false);
    setBlogs(!blogs);
    setPictures(false);
    setJobs(false);
    setCollabs(false);
    setFunds(false);
    setBlur(!blur);
  };
  const handlePictures = () => {
    setEdu(false);
    setAcad(false);
    setAwards(false);
    setAchievements(false);
    setBlogs(false);
    setPictures(!pictures);
    setJobs(false);
    setCollabs(false);
    setFunds(false);
    setBlur(!blur);
  };
  const handleJobs = () => {
    setEdu(false);
    setAcad(false);
    setAwards(false);
    setAchievements(false);
    setBlogs(false);
    setPictures(false);
    setJobs(!jobs);
    setCollabs(false);
    setFunds(false);
    setBlur(!blur);
  };

  const handleCollabs = () => {
    setEdu(false);
    setAcad(false);
    setAwards(false);
    setAchievements(false);
    setBlogs(false);
    setPictures(false);
    setJobs(false);
    setCollabs(!collabs);
    setFunds(false);
    setBlur(!blur);
  };
  const handleFunds = () => {
    setEdu(false);
    setAcad(false);
    setAwards(false);
    setAchievements(false);
    setBlogs(false);
    setPictures(false);
    setJobs(false);
    setCollabs(false);
    setFunds(!funds);
    setBlur(!blur);
  };

  const apiCall = async () => {
    const collab = await getCollabrators();

    setCollabrators(collab);
  };

  useEffect(() => {
    apiCall();
  }, []);
  const handleSave = () => {
    profileData(bio, lab, address, designation, institute, contact, name);
    console.log(bio, lab, address, designation, institute, contact, name);
    navigate("/template1");
  };
  const addMembers = async () => {
    let res = await handleAddMembers(memberName, role, imageFile);
    setUploadData(res.error);
  };
  const handleError = () => {
    alert("Failed to add member try again");
    setShowAdd(false);
  };

  return (
    <>
      <div className={blur ? "blur" : null} style={{ backgroundColor: color }}>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            color: "black",
            paddingTop: "10px",
          }}
        >
          Please Edit Your Profile
        </p>
        <div className="alignChangeColor">
          <button
            className="save-btn"
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </button>
          <div>
            <p style={{ color: "black" }}>Change Background Color</p>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
          </div>
        </div>
        <div className={showAdd ? "template1Main blurr" : "template1Main"}>
          <div className="child1">
            <div className="child1Container">
              <div className="child1Data">
                <div>
                  <p className="data1Name my-heading">
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      placeholder="Enter Name"
                      // contentEditable={true}
                    />
                  </p>
                  <p className="data1Heading designation">
                    <input
                      type="text"
                      onChange={(e) => {
                        setDesignation(e.target.value);
                      }}
                      value={designation}
                      placeholder="Enter Designation"
                    />
                  </p>
                  <p className="data1Info institute">
                    <input
                      type="text"
                      onChange={(e) => {
                        setInstitute(e.target.value);
                      }}
                      value={institute}
                      placeholder="Enter Institute"
                    />
                  </p>
                  <p className="data1Heading">Contact Information</p>
                  <p className="data1Info phn-number" c>
                    <input
                      type="number"
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                      value={contact}
                      placeholder="Enter Contact Information"
                    />
                  </p>
                </div>
              </div>
              <div className="child1img"></div>
            </div>
            {/* Biography */}
            <div className="parentInfo">
              <p className="data1Heading">Biography:</p>
              <div className="data1OutlineBox">
                <p className="bio-data">
                  <textarea
                    type="textarea"
                    wrap="soft"
                    maxLength={1000000}
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
                    value={bio}
                    placeholder="Enter Bio"
                  />
                </p>
              </div>
            </div>
            {/* Lab details */}
            <div className="parentInfo">
              <p className="data1Heading">Lab details:</p>
              <hr />
              <div className="data1OutlineBox">
                <p className="lab-info">
                  {/* Welcome to our website! We are a team of experienced web
                developers dedicated to crafting beautiful and functional
                websites for our clients. With a focus on user experience and
                responsive design, we create sites that are easy to navigate and
                visually appealing. */}
                  {/* <input type="text" /> */}
                  <textarea
                    type="textarea"
                    wrap="soft"
                    maxLength={1000000}
                    onChange={(e) => {
                      setLab(e.target.value);
                    }}
                    value={lab}
                    placeholder="Enter lab details"
                  />
                </p>
              </div>
            </div>
            {/* Lab members */}
            <div className="parentInfo">
              <p className="data1Heading">Members:</p>
              <hr />
              <div className="addMemberBtn1">
                <div className="data1Members">
                  {collabrators?.data?.map((item, index) => (
                    <div className="m-rMembers">
                      <div className="data1Img">
                        <img src={item?.image} alt="" />
                      </div>
                      <p className="data1Info">{item?.title} </p>

                      <p className="data1Info">Web Developer</p>
                    </div>
                  ))}
                </div>
                <div>
                  <div
                    className="addMemberBtn"
                    onClick={() => {
                      setShowAdd(true);
                    }}
                  >
                    <AiOutlineUsergroupAdd color="white" size={30} />
                  </div>
                </div>
              </div>
            </div>

            {/* Postal address */}
            <div className="parentInfo">
              <p className="data1Heading">Address:</p>
              <hr />
              <div className="data1Address">
                <textarea
                  type="textarea"
                  wrap="soft"
                  maxLength={1000000}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
          <div className="child2">
            <div>
              <p className="child2Heading">Profile</p>
              <ul>
                <a onClick={handleEduInfo}>Edu information</a>
                <a onClick={handleAcd}>Academic exp</a>
                <a onClick={handleAward}>Award</a>
                <a onClick={handleAchievements}>Achievements</a>
                <a onClick={handleBlogs}>Blogs</a>
                <a onClick={handlePictures}>Pictures</a>
                <a onClick={handleJobs}>Job openings</a>
                <a onClick={handleCollabs}>Collabration</a>
                <a onClick={handleFunds}>Funding</a>
              </ul>
            </div>
          </div>
        </div>
        {showAdd && (
          <div className="marginTopEditTemplate1">
            <div className="memberAddChild">
              <div className="closeIcon1">
                <GrFormClose size={35} onClick={() => setShowAdd(false)} />
              </div>
              <div className="addMemberArea">
                <div className="addMemberInfo">
                  <input
                    type="text"
                    placeholder="Add Member Name"
                    onChange={(e) => {
                      setMemeberName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Add Member Role"
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />
                </div>
                <div className="addMemberImg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setImageFile(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className="savebtn">
                <button
                  onClick={() => {
                    // handleAddMembers(memberName, role, imageFile);
                    addMembers();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {edu && (
        <InputForm handleClose={handleEduInfo} type="Educational Information" />
      )}
      {acad && (
        <InputForm handleClose={handleAcd} type="Academic Information" />
      )}
      {awards && (
        <InputForm handleClose={handleAward} type="Awards Information" />
      )}
      {achievements && (
        <InputForm
          handleClose={handleAchievements}
          type="Achievements Information"
        />
      )}
      {blogs && (
        <InputForm handleClose={handleBlogs} type="Blogs Information" />
      )}
      {pictures && (
        <InputForm handleClose={handlePictures} type="Pictures Information" />
      )}
      {jobs && <InputForm handleClose={handleJobs} type="Jobs Information" />}
      {collabs && (
        <InputForm
          handleClose={handleCollabs}
          type="Collabrations Information"
        />
      )}
      {funds && (
        <InputForm handleClose={handleFunds} type="Funds Information" />
      )}
    </>
  );
};
