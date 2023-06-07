import React from "react";
import { useNavigate } from "react-router-dom";

function WomenBegBack() {
  const navigate = useNavigate();

  const exercises = [
    "Wide grip lever to the chest",
    "Close reverse grip lever pull",
    "Rowing in a bottom poly with a triangle to the lower stomach",
  ];
  const sets = [4, 4, 4];
  const reps = [15, 15, 15];
  const gifs = [
    "Reverse-Lat-Pulldown",
    "Close-Grip-Lat-Pulldown",
    "Seated-Cable-Row",
  ];
  const exDetails = {
    muscleName: "Back muscle",
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
      <h1 className="menAdv">Back exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wide grip lever to the chest </td>
            <td> 4X15</td>
          </tr>
          <tr>
            <td>Close reverse grip lever pull </td>
            <td> 4X15</td>
          </tr>
          <tr>
            <td>
              Rowing in a bottom poly with a triangle to the lower stomach{" "}
            </td>
            <td> 4X15</td>
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

export default WomenBegBack;
