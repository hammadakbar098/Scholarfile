import React, { useState, useEffect } from "react";
import "./Template1.css";
import { getProfile, getCollabrators } from "../../axios/Axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableComponent from "../Modal/TableComponent";

export const Template1Preview = () => {
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
    navigate("/template1-edit", {
      state: {
        namee: `${data?.first_name} ${data?.last_name}`,
        designationn: data?.designation,
        institutee: data?.institute,
        contactt: data?.phone,
        bioo: data?.biography,
        labb: data?.lab_details,
        addresss: data?.postal_address,
      },
    });
  };
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [collabrators, setCollabrators] = useState([]);
  const apiCall = async () => {
    const data = await getProfile();
    const collab = await getCollabrators();

    setData(data.data);
    setCollabrators(collab.data);
  };

  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
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
            <p>Edit</p>
          </div>
        </div>
        <div className="template1Main">
          <div className="child1">
            <div className="child1Container">
              <div className="child1Data">
                <div>
                  <p className="data1Name">
                    {data?.first_name} {data?.last_name}
                    {/* Muhammad Hammad */}
                  </p>
                  <p className="data1Heading">{data?.designation}</p>
                  <p className="data1Info">{data?.institute}</p>
                  <p className="data1Heading">Contact Information</p>
                  <p className="data1Info">{data?.phone}</p>
                </div>
              </div>
              <div className="child1img"></div>
            </div>
            {/* Biography */}
            <div className="parentInfo">
              <p className="data1Heading">Biography:</p>
              <div className="data1OutlineBox">
                <p>{data?.biography}</p>
              </div>
            </div>
            {/* Lab details */}
            <div className="parentInfo">
              <p className="data1Heading">Lab details:</p>
              <hr />
              <div className="data1OutlineBox">
                <p>{data?.lab_details}</p>
              </div>
            </div>
            {/* Lab members */}
            <div className="parentInfo">
              <p className="data1Heading">Members:</p>
              <hr />
              <div className="data1Members">
                {collabrators?.map((item, index) => (
                  <div key={index} className="m-rMembers">
                    <div className="data1Img">
                      <img src={item?.image} alt="" />
                    </div>
                    <p className="data1Info">{item?.title} </p>

                    <p className="data1Info">Web Developer</p>
                  </div>
                ))}
                {/* <div>
                  <div className="data1Img"></div>
                  <p className="data1Info">Farman khuwaja</p>

                  <p className="data1Info">Project manager</p>
                </div>
                <div>
                  <div className="data1Img"></div>
                  <p className="data1Info">Abdar Khan</p>

                  <p className="data1Info">Graphic Designer</p>
                </div> */}
              </div>
            </div>

            {/* Postal address */}
            <div className="parentInfo">
              <p className="data1Heading">Postal Address:</p>
              <hr />
              <div className="data1Address">
                <p className="data1InfoAddress">{data?.postal_address}</p>
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
