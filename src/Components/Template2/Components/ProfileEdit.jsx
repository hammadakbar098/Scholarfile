import React, { useState } from "react";
import "./About.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableComponent from "../../Modal/TableComponent";
import InputForm from "../../Modal/InputForm";

export const ProfileEdit = () => {
  const [view, setView] = useState(false);
  const [heading, setHeading] = useState("");
  const handleSidebar = (e, text) => {
    e.preventDefault();
    setView(!view);
    setHeading(text);
  };

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
  const [fun, setFun] = useState();

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
    setFun(1);
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
  return (
    <>
      <div className="profileContainer">
        <div className="childComponent">
          <p className="childComponentHeading">Profile</p>
          <ul>
            <li
              onClick={(e) => {
                handleEduInfo();
              }}
              className="profileMenuItem"
            >
              Edu information
            </li>
            <li
              onClick={(e) => {
                handleAcd();
              }}
              className="profileMenuItem"
            >
              Academic exp
            </li>
            <li
              onClick={(e) => {
                handleAward(e, "Award");
              }}
              className="profileMenuItem"
            >
              Award
            </li>
            <li
              onClick={(e) => {
                handleAchievements(e, "Achievements");
              }}
              className="profileMenuItem"
            >
              Achievements
            </li>
            <li
              onClick={(e) => {
                handleBlogs(e, "Blogs");
              }}
              className="profileMenuItem"
            >
              Blogs
            </li>
            <li
              onClick={(e) => {
                handlePictures(e, "Pictures");
              }}
              className="profileMenuItem"
            >
              Pictures
            </li>
            <li
              onClick={(e) => {
                handleJobs(e, "Job openings");
              }}
              className="profileMenuItem"
            >
              Job openings
            </li>
            <li
              onClick={(e) => {
                handleCollabs(e, "Collabration");
              }}
              className="profileMenuItem"
            >
              Collabration
            </li>
            <li
              onClick={(e) => {
                handleFunds(e, "Funding");
              }}
              className="profileMenuItem"
            >
              Funding
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: 10, marginTop: 20 }}></div>
      {/* {view && (
        <div className="alignModal">
          <div className="modalComponent">
            <p>{heading}</p>

            <AiOutlineCloseCircle
              color="white"
              size={30}
              style={{
                position: "absolute",
                top: "10px",
                right: "30px",
                cursor: "pointer",
              }}
              onClick={() => {
                setView(false);
              }}
            />

            <TableComponent />
          </div>
        </div>
      )} */}
      <div style={{ paddingTop: "130px" }}>
        {edu && (
          <InputForm
            handleClose={handleEduInfo}
            type="Educational Information"
            handleSave="1"
          />
        )}
        {acad && (
          <InputForm
            handleClose={handleAcd}
            type="Academic Information"
            handleSave="2"
          />
        )}
        {awards && (
          <InputForm
            handleClose={handleAward}
            type="Awards Information"
            handleSave="3"
          />
        )}
        {achievements && (
          <InputForm
            handleClose={handleAchievements}
            type="Achievements Information"
            handleSave="4"
          />
        )}
        {blogs && (
          <InputForm
            handleClose={handleBlogs}
            type="Blogs Information"
            handleSave="5"
          />
        )}
        {pictures && (
          <InputForm
            handleClose={handlePictures}
            type="Pictures Information"
            handleSave="6"
          />
        )}
        {jobs && (
          <InputForm
            handleClose={handleJobs}
            type="Jobs Information"
            handleSave="7"
          />
        )}
        {collabs && (
          <InputForm
            handleClose={handleCollabs}
            type="Collabrations Information"
            handleSave="8"
          />
        )}
        {funds && (
          <InputForm
            handleClose={handleFunds}
            type="Funds Information"
            handleSave="9"
          />
        )}
      </div>
    </>
  );
};
