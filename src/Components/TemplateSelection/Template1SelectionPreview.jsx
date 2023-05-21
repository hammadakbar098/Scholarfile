//
import React, { useState } from "react";
import "./Temp.css";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableComponent from "../Modal/TableComponent";
import { NavBar } from "../NavBar/NavBar";

export const Template1SelectionPreview = () => {
  const [view, setView] = useState(false);
  const [heading, setHeading] = useState("");
  const handleSidebar = (e, text) => {
    e.preventDefault();
    setView(!view);
    setHeading(text);
  };
  //
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/template1");
  };
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className={view ? "blurr" : "bgGradient"}>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            color: "black",
            paddingTop: "10px",
          }}
        >
          Welcome To Your Profile
        </p>
        <div className="btns ">
          <div
            className="btn"
            onClick={(e) => {
              handleNavigate(e);
            }}
          >
            <p>Select</p>
          </div>
        </div>
        <div className="template1Main">
          <div className="child1">
            <div className="child1Container">
              <div className="child1Data">
                <div>
                  <p className="data1Name">John Doe</p>
                  <p className="data1Heading">Web Developer</p>
                  <p className="data1Info">COMSATS WAH Islamabad</p>
                  <p className="data1Heading">Contact Information</p>
                  <p className="data1Info">000-000-00000</p>
                </div>
              </div>
              <div className="child1img"></div>
            </div>
            {/* Biography */}
            <div className="parentInfo">
              <p className="data1Heading">Biography:</p>
              <div className="data1OutlineBox">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            {/* Lab details */}
            <div className="parentInfo">
              <p className="data1Heading">Lab details:</p>
              <hr />
              <div className="data1OutlineBox">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            {/* Lab members */}
            <div className="parentInfo">
              <p className="data1Heading">Members:</p>
              <hr />
              <div className="data1Members">
                <div>
                  <div className="data1Img"></div>
                  <p className="data1Info">John Doe</p>

                  <p className="data1Info">Project manager</p>
                </div>
                <div>
                  <div className="data1Img"></div>
                  <p className="data1Info">John Doe</p>

                  <p className="data1Info">Graphic Designer</p>
                </div>
              </div>
            </div>

            {/* Postal address */}
            <div className="parentInfo">
              <p className="data1Heading">Postal Address:</p>
              <hr />
              <div className="data1Address">
                <p className="data1InfoAddress">wah Cantt, Islamabad</p>
              </div>
            </div>
          </div>
          <div className="child2">
            {/* Profile */}
            <div>
              <p className="child2Heading">Profile</p>
              <ul>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Edu Information");
                  }}
                >
                  Edu information
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Academin Exp");
                  }}
                >
                  Academic exp
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Award");
                  }}
                >
                  Award
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Achievements");
                  }}
                >
                  Achievements
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Blogs");
                  }}
                >
                  Blogs
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Pictures");
                  }}
                >
                  Pictures
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Job openings");
                  }}
                >
                  Job openings
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Collabration");
                  }}
                >
                  Collabration
                </a>
                <a
                  onClick={(e) => {
                    handleSidebar(e, "Funding");
                  }}
                >
                  Funding
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
