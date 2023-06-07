import React from "react";
import { useNavigate } from "react-router-dom";

function MenAdvBack() {
  const navigate = useNavigate();

  const exercises = [
    "Pull-ups",
    "Pulling a narrow lever",
    "Rowing with a pole",
    "Rowing on the device	",
    "Pullover",
  ];
  const sets = [1, 4, 4, 4, 4];
  const reps = [50, 12, 8, 12, 12];
  const gifs = [
    "Pull-up",
    "V-bar-Lat-Pulldown",
    "Reverse-Grip-Barbell-Row",
    "Seated-Row-Machine",
    "Rope-Straight-Arm-Pulldown",
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
            <td>pull-ups </td>
            <td> 50 repetitions</td>
          </tr>
          <tr>
            <td>Pulling a narrow lever </td>
            <td> 4X12</td>
          </tr>
          <tr>
            <td>Rowing with a pole </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Rowing on the device </td>
            <td> 4X12</td>
          </tr>
          <tr>
            <td>Pullover </td>
            <td> 4X12</td>
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

export default MenAdvBack;
