import React from "react";
import "./TemplateSelection.css";
import { templateBackground } from "../../Assets";
import { selectTemplateType } from "../../axios/Axios";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const TemplateSelection = () => {
  const navigate = useNavigate();

  const handleTemplateSelection = async (type) => {
    selectTemplateType(type);
    navigate(`/template${type}`);
  };
  return (
    <>
      <NavBar />
      <div
        className="templateSelectOverlay"
        style={{
          backgroundImage: `url(${templateBackground})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="templateSelectContainer">
          <div className="templateGrayContainer">
            {/* template1*/}
            <div className="templateDesignBox">
              <div className="alignPreview">
                <p>Template 1</p>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/template1-select-preivew");
                  }}
                >
                  <AiOutlineEye color="white" size={30} />
                </div>
              </div>
              <div
                className="templateDesign"
                onClick={() => handleTemplateSelection(1)}
              >
                <div className="templateBox1"></div>
                <div className="templateBox11"></div>
              </div>
            </div>
            {/* Template 2 */}
            <div className="templateDesignBox">
              <div className="alignPreview">
                <p>Template 2</p>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/template2-select-preivew");
                  }}
                >
                  <AiOutlineEye color="white" size={30} />
                </div>
              </div>
              <div
                className="templateDesign"
                onClick={() => {
                  handleTemplateSelection(2);
                }}
              >
                <div className="templateBox2">
                  <div className="templateBoxRound"></div>
                  <div className="templateBoxSquare"></div>
                </div>
                <div className="templateBox11"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
