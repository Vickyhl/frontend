import React, { useState, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import "./css/editProfile.css";
import axios from "axios";

function EditProfile() {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const email = userData?.email;
  const gender = userData?.gender;
  const age = userData?.age;
  const weight = userData?.weight;
  const height = userData?.height;

  const [profileData, setProfileData] = useState({
    userId: userId,
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: gender,
    age: age,
    weight: weight,
    height: height,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    userData.firstName = profileData.firstName;
    userData.lastName = profileData.lastName;
    userData.email = profileData.email;
    userData.gender = profileData.gender;
    userData.age = profileData.age;
    userData.weight = profileData.weight;
    userData.height = profileData.height;
    const updatedUserData = JSON.stringify(userData);
    localStorage.setItem("user", updatedUserData);

    const result = await axios.post(
      "http://localhost:5000/api/users/updateProfile",
      profileData
    );
    console.log(result.data.message);
  };

  const handleFirstNameChange = (e) => {
    setProfileData({ ...profileData, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setProfileData({ ...profileData, lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setProfileData({ ...profileData, email: e.target.value });
  };

  const handleGenderChange = (e) => {
    setProfileData({ ...profileData, gender: e.target.value });
  };

  const handleAgeChange = (e) => {
    setProfileData({ ...profileData, age: e.target.value });
  };

  const handleHeightChange = (e) => {
    setProfileData({ ...profileData, height: e.target.value });
  };

  return (
    <>
      <AccessibilityIcon />
      <div
        className={`editProfile ${fontSize} ${
          readableText ? "readableText" : ""
        } ${contrast}`}
      >
        <h1 className="profileHeader">Update your information:</h1>
        <div className="editProfile">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            className="editProIn"
            value={profileData.firstName}
            onChange={handleFirstNameChange}
          />

          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            className="editProIn"
            value={profileData.lastName}
            onChange={handleLastNameChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={profileData.email}
            onChange={handleEmailChange}
          />

          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            value={profileData.gender}
            onChange={handleGenderChange}
          />

          <label htmlFor="age">Age:</label>
          <input
            type="text"
            value={profileData.age}
            onChange={handleAgeChange}
          />

          <label htmlFor="height">Height:</label>
          <input
            type="text"
            value={profileData.height}
            onChange={handleHeightChange}
          />

          <div className="btn-container" onClick={handleSubmit}>
            <button type="submit" className="btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
