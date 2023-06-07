import React, { useState, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/shared/context/auth-context";
import "./css/Login.css";

const Register = () => {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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
    const { firstName, lastName, email, password } = user;
    if (firstName && lastName && email && password) {
      await axios
        .post("http://localhost:5000/api/users/signup", user)
        .then((res) => {
          // alert(res.data.message);
          navigate("/login");
        });
    } else {
      // alert("Enter the Required Fields");
    }
  };
  return (
    <>
      <AccessibilityIcon />
      <div
        className={`register ${fontSize} ${
          readableText ? "readableText" : ""
        } ${contrast}`}
      >
        <form>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={handleChange}
            name="firstName"
            value={user.firstName}
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={handleChange}
            name="lastName"
            value={user.lastName}
          />
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

          <div className="btn-container">
            <button className="btn" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
