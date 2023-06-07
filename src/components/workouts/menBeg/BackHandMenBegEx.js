import React from "react";
import { useNavigate } from "react-router-dom";

function BackHandMenBegEx() {
  const navigate = useNavigate();

  const exercises = ["Cable rope overhead triceps extension"];
  const sets = [3];
  const reps = [15];
  const gifs = ["Cable-Rope-Overhead-Triceps-Extension"];
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
            <td>Cable rope overhead triceps extension</td>
            <td>3X15</td>
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

export default BackHandMenBegEx;
