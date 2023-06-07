import React from "react";
import { useNavigate } from "react-router-dom";

function BackMenBegEx() {
  const navigate = useNavigate();

  const exercises = [
    "Pull-up",
    "Narrow grip upper poly pull with triangle",
    "Narrow grip seated rowing on the machine",
    "Pullover in upper poly	",
  ];
  const sets = [1, 4, 4, 4];
  const reps = [50, 15, 15, 15];
  const gifs = [
    "Pull-up",
    "V-bar-Lat-Pulldown",
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
      <h1 className="menAdv">Back exercise</h1>{" "}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>The exercise</th> <th>sets and repetitions</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          <tr>
            {" "}
            <td> Pull-up </td> <td> Maximum repetitions </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td> Narrow grip upper poly pull with triangle </td> <td> 4X15</td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td> Narrow grip seated rowing on the machine </td> <td> 4X15 </td>{" "}
          </tr>
          <tr>
            {" "}
            <td>Pullover in Upper Poly </td> <td>4X15 </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>
      <div className="btn-container-receipt">
        <button type="submit" className="btn" onClick={handleSubmit}>
          Start a workout
        </button>
      </div>
    </div>
  );
}

export default BackMenBegEx;
