import React, { useState } from "react";

import "./Login.css";
// API call
import { login } from "../../axios/Axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const getTempId = async () => {
    try {
      var template_type = sessionStorage.getItem("template_type");
      return template_type;
    } catch (e) {
      console.log(e);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    var data = await login(email, password);
    if (data?.error === false) {
      if (data?.data.template_type === "1") {
        navigate("/template1");
      } else if (data?.data.template_type === "2") {
        navigate("/template2");
      } else if (data?.data.template_type === "0") {
        navigate("/template-select");
      }
    }
    if (data?.error === true) {
      alert(data?.message);
    }
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="login_main">
        <h1 className="login_text">Scholar File</h1>
        <div className="login_container">
          <div className="input_box">
            <label htmlFor="email" className="input_title">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="manahiltariq2001@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input_box">
            <label htmlFor="password" className="input_title">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="***"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>
          <p>Don't have an account yet?</p>
          <a onClick={handleSignup} style={{ cursor: "pointer" }}>
            Create account!
          </a>
        </div>
      </div>
      {/* <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img
              src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
              alt="Login"
            />
          </div>
          <antd.Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <p className="form-title">Welcome back</p>
            <p>Login to the Dashboard</p>
            <antd.Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <antd.Input placeholder="Username" />
            </antd.Form.Item>

            <antd.Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <antd.Input.Password placeholder="Password" />
            </antd.Form.Item>

            <antd.Form.Item name="remember" valuePropName="checked">
              <antd.Checkbox>Remember me</antd.Checkbox>
            </antd.Form.Item>

            <antd.Form.Item>
              <antd.Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                LOGIN
              </antd.Button>
            </antd.Form.Item>
          </antd.Form>
        </div>
      </div> */}
    </>
  );
};

export default Login;
