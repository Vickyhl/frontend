import React from "react";
import { useNavigate } from "react-router-dom";

function WomenAdvFrontLeg() {
  const navigate = useNavigate();

  const exercises = [
    "Leg extension",
    "Barbell lateral lunge",
    "Barbell squat",
    "Single leg press",
    "Seated leg press",
  ];
  const sets = [4, 4, 4, 4, 4];
  const reps = [20, 20, 20, 20, 25];
  const gifs = [
    "LEG-EXTENSION",
    "Barbell-Lateral-Lunge",
    "BARBELL-SQUAT",
    "Single-Leg-Press",
    "Leg-Press",
  ];
  const exDetails = {
    muscleName: "Front leg muscle",
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
      <h1 className="menAdv">Front leg exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Leg extension </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Barbell lateral lunge </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Barbell squat </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Single leg press </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Seated leg press </td>
            <td> 4X25</td>
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

export default WomenAdvFrontLeg;
