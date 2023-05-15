import React, { useState, useEffect } from "react";
import "./About.css";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  addMembers,
  getCollabrators,
  handleAddMembers,
} from "../../../axios/Axios";
export const NetworkEdit = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [memberName, setMemeberName] = useState("");
  const [role, setRole] = useState();
  const [collabrators, setCollabrators] = useState([]);
  const [uploadData, setUploadData] = useState();

  const apiCall = async () => {
    const collab = await getCollabrators();

    setCollabrators(collab.data);
  };

  const addMembers = async () => {
    let res = await handleAddMembers(memberName, role, imageFile);
    setUploadData(res.error);
  };

  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <div className={showAdd ? "networkcontainer blur" : "networkcontainer"}>
        <div className="childComponent">
          <p className="childComponentHeading">Members:</p>
          <hr className="childComponentSeparator" />
          <div className="alignMembersCollab">
            <div className="networkMembers">
              {collabrators?.map((item, index) => (
                <div className="networkMember" key={index}>
                  <div className="networkMemberImage">
                    <img src={item?.image} alt="" />
                  </div>
                  <p className="childComponentInfo">{item.title}</p>
                  <p className="childComponentInfo">Web Developer</p>
                </div>
              ))}
              {/* <div className="networkMember">
                <div className="networkMemberImage"></div>
                <p className="childComponentInfo">Farman khuwaja</p>
                <p className="childComponentInfo">Project manager</p>
              </div>
              <div className="networkMember">
                <div className="networkMemberImage"></div>
                <p className="childComponentInfo">Abdar Khan</p>
                <p className="childComponentInfo">Graphic Designer</p>
              </div> */}
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
      </div>
      <div style={{ height: 150, marginTop: 20 }}></div>
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
                  addMembers(memberName, role, imageFile);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
