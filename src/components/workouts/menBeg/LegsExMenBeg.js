import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./legEx.css";

function LegsEx() {
  const navigate = useNavigate();

  const exercises = [
    "Seated knee strikes on the machine",
    "Free squat",
    "Machine leg press",
  ];
  const sets = [4, 4, 4];
  const reps = [15, 8, 15];
  const gifs = ["SeatedKneeStrikesOnTheMachine", "Squat", "MachineLegPress"];
  const exDetails = {
    muscleName: "Legs muscle",
    exName: exercises,
    sets: sets,
    repsNum: reps,
    gif: gifs,
  };

  const handleSubmit = async () => {
    navigate("/ExTemplate", { state: { exDetails } });
  };

  return (
    <div>
      <h1 className="menAdv">Legs exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seated knee strikes on the machine</td>
            <td>4X15</td>
          </tr>
          <tr>
            <td>Free squat</td>
            <td>4X8</td>
          </tr>
          <tr>
            <td>Machine leg press</td>
            <td>4X15</td>
          </tr>
        </tbody>
      </table>
      <div className="btn-container-receipt">
        <button type="submit" className="btn" onClick={handleSubmit}>
          Start a workout
        </button>
      </div>
    </div>
  );
}

export default LegsEx;
