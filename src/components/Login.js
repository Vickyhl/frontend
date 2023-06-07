import React, { useState, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import axios from "axios";
import "./css/Login.css";

export const Login = () => {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios
      .post("http://localhost:5000/api/users/login", user)
      .then((res) => {
        console.log(res.data.existingUser);
        if (res.data.existingUser) {
          window.location.assign("/home");
          localStorage.setItem("user", JSON.stringify(res.data.existingUser));
        } else {
          setErrorMessage(true);
        }
      });
  };

  const closeModal = () => {
    setErrorMessage(false);
  };

  return (
    <>
      <AccessibilityIcon />
      <div
        className={`login ${fontSize} ${
          readableText ? "readableText" : ""
        } ${contrast}`}
      >
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <a href="/ForgotPassword" className="link-Forgot-Password">
            Forgot Password?
          </a>
          <div className="btn-container">
            <button className="btn" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
      {errorMessage && (
        <div className="modal hidden">
          <div className="flex">
            <button className="btn-close" onClick={closeModal}>
              ⨉
            </button>
            <div className="modal-text">
              Your email or password is incorrect
            </div>
            <button className="btn-ok" onClick={closeModal}>
              Okay
            </button>
          </div>
        </div>
      )}
      <div className="overlay hidden"></div>
    </>
  );
};

export default Login;
