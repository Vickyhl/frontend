import React from "react";
import { useNavigate } from "react-router-dom";

function MenAdvChest() {
  const navigate = useNavigate();

  const exercises = [
    "Chest press at a 30 degree incline with a bar",
    "Dumbbell chest press on a positive incline",
    "Chest press with a bar",
    "Negative incline chest press with a bar",
    "Butterfly in the crossover",
  ];
  const sets = [4, 4, 4, 4, 4];
  const reps = [8, 8, 8, 8, 12];
  const gifs = [
    "LyingChestPressInAnUpperInclineWithABar",
    "Incline-Dumbbell-Press",
    "Barbell-Bench-Press",
    "Smith-Machine-Decline-Bench-Press",
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
    <div>
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
            <td>Chest press at a 30 degree incline with a bar </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Dumbbell chest press on a positive incline </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Chest press with a bar </td>
            <td> 4X8 </td>
          </tr>
          <tr>
            <td>Negative incline chest press with a bar </td>
            <td>4X8 </td>
          </tr>
          <tr>
            <td>Butterfly in the crossover </td>
            <td>4X12 </td>
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

export default MenAdvChest;
