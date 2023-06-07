import React from "react";
import { useNavigate } from "react-router-dom";

function MenAdvBackHand() {
  const navigate = useNavigate();

  const exercises = [
    "Decline close grip bench to skull crusher",
    "Cable rope overhead triceps extension",
    "Rope pushdown",
  ];
  const sets = [3, 3, 3];
  const reps = [8, 8, 8];
  const gifs = [
    "Decline-Close-Grip-Bench-To-Skull-Crusher",
    "Cable-Rope-Overhead-Triceps-Extension",
    "Rope-Pushdown",
  ];
  const exDetails = {
    muscleName: "Posterior hand muscle",
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
      <h1 className="menAdv">Posterior hand exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decline close grip bench to skull crusher </td>
            <td> 3X8</td>
          </tr>
          <tr>
            <td>Cable rope overhead triceps extension </td>
            <td> 3X8</td>
          </tr>
          <tr>
            <td>Rope pushdown </td>
            <td> 3X8 </td>
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

export default MenAdvBackHand;
