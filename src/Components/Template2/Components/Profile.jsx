import React, { useState } from "react";
import "./About.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableComponent from "../../Modal/TableComponent";
export const Profile = () => {
  const [view, setView] = useState(false);
  const [heading, setHeading] = useState("");
  const [fun, setFun] = useState();

  const handleSidebar = (e, text, funCall) => {
    e.preventDefault();
    setView(!view);
    setHeading(text);
    setFun(funCall);
  };
  return (
    <>
      <div className="profileContainer">
        <div className="childComponent">
          <p className="childComponentHeading">Profile</p>
          <ul>
            <li
              onClick={(e) => {
                handleSidebar(e, "Edu Information", 1);
              }}
              className="profileMenuItem"
            >
              Edu information
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Academin Exp", 2);
              }}
              className="profileMenuItem"
            >
              Academic exp
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Award", 3);
              }}
              className="profileMenuItem"
            >
              Award
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Achievements", 4);
              }}
              className="profileMenuItem"
            >
              Achievements
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Blogs", 5);
              }}
              className="profileMenuItem"
            >
              Blogs
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Pictures", 6);
              }}
              className="profileMenuItem"
            >
              Pictures
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Job openings", 7);
              }}
              className="profileMenuItem"
            >
              Job openings
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Collabration", 8);
              }}
              className="profileMenuItem"
            >
              Collabration
            </li>
            <li
              onClick={(e) => {
                handleSidebar(e, "Funding", 9);
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
          <div className="modalComponent" style={{ marginTop: "330px" }}>
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

            <TableComponent apiCheck={fun} />
          </div>
        </div>
      )}
    </>
  );
};
