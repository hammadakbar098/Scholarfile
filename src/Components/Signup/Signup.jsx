import React, { useState, useEffect } from "react";
import "./Signup.css";
// Api function import
import { signup } from "../../axios/Axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [university, setUniversity] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSignup = () => {
    if (password === confirmPassword) {
      signup(
        email,
        password,
        firstName,
        lastName,
        university,
        phone,
        designation
      );
    } else {
      alert("Password and confirm password is not same");
    }
  };

  return (
    <>
      <div className="signup_main">
        <h1 className="signup_text">Create Account</h1>
        <div className="signup_container">
          <div className="signup_input_box">
            <div className="full_name">
              <div className="first_name">
                <p className="signup_input_title">First Name</p>
                <input
                  type="text"
                  placeholder="John"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="last_name">
                <p className="signup_input_title">Last Name</p>
                <input
                  type="text"
                  placeholder="Doe"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="signup_input_box">
            <div className="email_phonenumber">
              <div className="email_box">
                <p className="signup_input_title">Email Address</p>
                <input
                  type="email"
                  placeholder="manahiltariq2001@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="phone_number_box">
                <p className="signup_input_title">Phone Number</p>
                <input
                  type="number"
                  placeholder="xxxx-xxx-xxxx"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="signup_input_box">
            <p className="signup_input_title">Password</p>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="signup_input_box">
            <p className="signup_input_title">Confirm Password</p>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="signup_input_box">
            <p className="signup_input_title">University</p>
            <input
              type="text"
              placeholder="COMSATS university Islambad"
              onChange={(e) => {
                setUniversity(e.target.value);
              }}
            />
          </div>
          <div className="signup_input_box">
            <p className="signup_input_title">Organization</p>
            <input
              type="text"
              placeholder="IEE"
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
            />
          </div>
          <div className="signup_input_box">
            <p className="signup_input_title">Designation</p>
            <input
              type="text"
              placeholder="Web Developer"
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
            />
          </div>
          <button onClick={() => handleSignup()}>Create Account</button>
          <p className="login_tag">
            Already have an account?{" "}
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Login!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
