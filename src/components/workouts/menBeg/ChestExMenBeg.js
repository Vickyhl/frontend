import { useNavigate } from "react-router-dom";
import React from "react";
import "./legEx.css";

function ChestExMenBeg() {
  const navigate = useNavigate();

  const exercises = [
    "Lying chest press in an upper incline with a bar",
    "Lying chest press in an upper incline with dumbbells",
    "Lying chest press with a bar",
    "Butterfly in poly with cables",
  ];
  const sets = [4, 4, 4, 4];
  const reps = [15, 15, 8, 15];
  const gifs = [
    "LyingChestPressInAnUpperInclineWithABar",
    "Incline-Dumbbell-Press",
    "Barbell-Bench-Press",
    "High-Cable-Crossover",
  ];
  const exDetails = {
    muscleName: "Chest muscle",
    exName: exercises,
    sets: sets,
    repsNum: reps,
    gif: gifs,
  };

  const handleSubmit = async () => {
    navigate("/ExTemplate", { state: { exDetails } });
  };

  return (
    <div className="exTable">
      <h1 className="menAdv">Chest exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lying chest press in an upper incline with a bar</td>
            <td>4X15</td>
          </tr>
          <tr>
            <td>Lying chest press in an upper incline with dumbbells</td>
            <td>4X15</td>
          </tr>
          <tr>
            <td>Lying chest press with a bar</td>
            <td>4X8</td>
          </tr>
          <tr>
            <td>Butterfly in poly with cables</td>
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

export default ChestExMenBeg;
