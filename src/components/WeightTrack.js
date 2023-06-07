import React, { useState } from "react";
import BMIProgressBar from "../BMIProgressBar";
import axios from "axios";
import LineChart from "./LineChart";

function WeightTrack() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;
  const userHeight = userData?.height;
  const [existingData, setExistingData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [BMI, setBMI] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const weight = parseFloat(userInput);
    const heightInMeters = userHeight / 100; // Convert userHeight from centimeters to meters

    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmi);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const result = await axios.post(
      `http://localhost:5000/api/users/updateWeight/${userId}`,
      userInput
    );
  };

  const fetchData = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/users/fetchWeight/${userId}`
    );
    setExistingData(result.data.existingData);
    console.log(existingData);
  };

  return (
    <>
      <div className="weightClass">
        <h1>Tracking my weight</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="weightInput"
            id="user-weight"
            placeholder="Enter your weight"
            value={userInput}
            onChange={handleChange}
          />
          {BMI && <BMIProgressBar bmi={BMI} />}
          <div className="btn-container">
            <button
              aria-label="Submit"
              className="BMIbtn"
              onClick={handleSubmit}
            >
              Show my BMI
            </button>
          </div>
          <div className="btn-container">
            <button
              aria-label="Submit"
              className="BMIbtn"
              onClick={handleUpdate}
            >
              Update my weight{" "}
            </button>
          </div>
          <div className="btn-container">
            <button aria-label="Submit" className="BMIbtn" onClick={fetchData}>
              Show my weight progress
            </button>
          </div>
        </form>
      </div>
      {existingData && <LineChart data={existingData} />}
    </>
  );
}

export default WeightTrack;
