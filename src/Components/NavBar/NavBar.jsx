import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate("/");
    sessionStorage.clear("token");
    sessionStorage.clear("userId");
  };
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li
          className="navbar-item"
          onClick={() => {
            navigate("/template-select");
          }}
        >
          <p>Change Template</p>
        </li>
        <li
          className="navbar-item"
          onClick={async () => {
            await handleLogout();
          }}
        >
          <p>Logout</p>
        </li>
      </ul>
    </nav>
  );
};
