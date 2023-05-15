import React, { useState } from "react";
import "./About.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableComponent from "../../Modal/TableComponent";

export const ProfileEdit = () => {
  const [view, setView] = useState(false);
  const [heading, setHeading] = useState("");
  const handleSidebar = (e, text) => {
    e.preventDefault();
    setView(!view);
    setHeading(text);
  };
  return (
    <>
      <div className="profileContainer">
        <div className="childComponent">
          <p className="childComponentHeading">Profile</p>
          <ul>
            <li
              onClick={(e) => {
                handleSidebar(e, "Edu Information");
              }}
              className="profileMenuItem"
            >
              Edu information
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Academin Exp");
              }}
              className="profileMenuItem"
            >
              Academic exp
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Award");
              }}
              className="profileMenuItem"
            >
              Award
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Achievements");
              }}
              className="profileMenuItem"
            >
              Achievements
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Blogs");
              }}
              className="profileMenuItem"
            >
              Blogs
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Pictures");
              }}
              className="profileMenuItem"
            >
              Pictures
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Job openings");
              }}
              className="profileMenuItem"
            >
              Job openings
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Collabration");
              }}
              className="profileMenuItem"
            >
              Collabration
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Funding");
              }}
              className="profileMenuItem"
            >
              Funding
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: 10, marginTop: 20 }}></div>
      {view && (
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
      )}
    </>
  );
};
