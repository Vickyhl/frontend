import React from "react";
import { useNavigate } from "react-router-dom";

function WomenBegFrontHand() {
  const navigate = useNavigate();

  const exercises = ["Bent elbows with a bar in lower poly"];

  const sets = [3];
  const reps = [15];
  const gifs = ["Cable-Reverse-Grip-EZ-bar-Biceps-Curl"];
  const exDetails = {
    muscleName: "Forearm muscle",
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
      <h1 className="menAdv">Forearm exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bent elbows with a bar in lower poly </td>
            <td> 3X15</td>
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

export default WomenBegFrontHand;
