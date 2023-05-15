import React, { useState, useEffect } from "react";
import "./About.css";
import { getCollabrators } from "../../../axios/Axios";

export const Network = () => {
  const [collabrators, setCollabrators] = useState([]);
  const [uploadData, setUploadData] = useState();
  const apiCall = async () => {
    const collab = await getCollabrators();

    setCollabrators(collab.data);
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <div className="networkcontainer">
        <div className="childComponent">
          <p className="childComponentHeading">Members:</p>
          <hr className="childComponentSeparator" />
          <div className="networkMembers">
            {/* <div className="networkMember">
              <div className="networkMemberImage"></div>
              <p className="childComponentInfo">Muhammad Hammad</p>
              <p className="childComponentInfo">Web Developer</p>
            </div>
            <div className="networkMember">
              <div className="networkMemberImage"></div>
              <p className="childComponentInfo">Farman khuwaja</p>
              <p className="childComponentInfo">Project manager</p>
            </div> */}
            {collabrators?.map((item, index) => (
              <div className="networkMember" key={index}>
                <div className="networkMemberImage">
                  <img src={item?.image} alt="" />
                </div>
                <p className="childComponentInfo">{item.title}</p>
                <p className="childComponentInfo">Web Developer</p>
              </div>
            ))}
          </div>
            
        </div>
      </div>
      <div style={{ height: 10, marginTop: 20 }}></div>
    </>
  );
};
