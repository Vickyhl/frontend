import React from "react";
import { useNavigate } from "react-router-dom";

function WomenAdvBack() {
  const navigate = useNavigate();

  const exercises = [
    "Wide grip lever to the chest",
    "Close reverse grip lever pull",
    "Rope straight arm pulldown",
    "Rowing in a bottom poly with a triangle to the lower stomach",
    "Backbend rowing on a bench with a dumbbell",
  ];
  const sets = [4, 4, 4, 4, 4];
  const reps = [20, 20, 30, 20, 20];
  const gifs = [
    "Reverse-Lat-Pulldown",
    "Close-Grip-Lat-Pulldown",
    "Rope-Straight-Arm-Pulldown",
    "Seated-Cable-Row",
    "Dumbbell-Row",
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
            <td>Wide grip lever to the chest </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Close reverse grip lever pull </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Rope straight arm pulldown</td>
            <td> 4X30</td>
          </tr>
          <tr>
            <td>
              Rowing in a bottom poly with a triangle to the lower stomach{" "}
            </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Backbend rowing on a bench with a dumbbell </td>
            <td> 4X20</td>
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

export default WomenAdvBack;
