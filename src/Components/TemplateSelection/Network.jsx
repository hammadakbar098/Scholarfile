import React, { useState, useEffect } from "react";

export const Network = () => {
  return (
    <>
      <div className="networkcontainer">
        <div className="childComponent">
          <p className="childComponentHeading">Members:</p>
          <hr className="childComponentSeparator" />
          <div className="networkMembers">
            <div className="networkMember">
              <div className="networkMemberImage"></div>
              <p className="childComponentInfo">John Doe</p>
              <p className="childComponentInfo">Web Developer</p>
            </div>
            <div className="networkMember">
              <div className="networkMemberImage"></div>
              <p className="childComponentInfo">John Doe </p>
              <p className="childComponentInfo">Project manager</p>
            </div>
          </div>
            
        </div>
      </div>
      <div style={{ height: 10, marginTop: 20 }}></div>
    </>
  );
};
