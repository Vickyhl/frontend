import "./components/css/progressBar.css";
import React from "react";

function BMIProgressBar({ bmi }) {
  const getProgressColor = () => {
    if (bmi < 18.5) {
      return "#FF9800"; // Orange color for underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return "#4CAF50"; // Green color for normal weight
    } else if (bmi >= 25 && bmi < 30) {
      return "#FFC107"; // Yellow color for overweight
    } else {
      return "#F44336"; // Red color for obesity
    }
  };

  const getProgressWidth = () => {
    if (bmi < 0) {
      return "0%"; // Minimum width when BMI is negative or invalid
    } else if (bmi > 40) {
      return "100%"; // Maximum width when BMI exceeds 40
    } else {
      const percentage = (bmi / 40) * 100; // Calculate the percentage of BMI value
      return `${percentage}%`; // Width proportional to the BMI value
    }
  };

  const getTitle = () => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  };

  const getArrowPosition = () => {
    if (bmi < 0) {
      return "0%"; // Minimum position when BMI is negative or invalid
    } else if (bmi > 40) {
      return "100%"; // Maximum position when BMI exceeds 40
    } else {
      const percentage = (bmi / 40) * 100; // Calculate the percentage of BMI value
      return `${percentage}%`;
    }
  };

  const arrowStyle = {
    left: getArrowPosition(),
    backgroundColor: getProgressColor(),
  };

  return (
    <>
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{
            width: getProgressWidth(),
            background: getProgressColor(),
          }}
        ></div>
        <div className="progress-arrow" style={arrowStyle}></div>
      </div>
      <div className="progress-titles">
        <div className="progress-title">Underweight</div>
        <div className="progress-title">Normal Weight</div>
        <div className="progress-title">Overweight</div>
        <div className="progress-title">Obesity</div>
      </div>
    </>
  );
}

export default BMIProgressBar;
