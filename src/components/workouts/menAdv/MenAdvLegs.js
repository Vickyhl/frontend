import React from "react";
import { useNavigate } from "react-router-dom";

function MenAdvLegs() {
  const navigate = useNavigate();

  const exercises = [
    "Leg extension",
    "Free squat",
    "Smith machine lunge",
    "Machine leg press",
    "Seated leg curl",
    "Leg press calf raise",
  ];
  const sets = [5, 4, 4, 4, 4, 4];
  const reps = [7, 8, 8, 8, 8, 12];
  const gifs = [
    "LEG-EXTENSION",
    "Squat",
    "Smith-Machine-Lunge",
    "Leg-Press",
    "Seated-Leg-Curl",
    "Leg-Press-Calf-Raise",
  ];
  const exDetails = {
    muscleName: "Legs muscle",
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
            <td>Leg extension </td>
            <td>5X7 </td>
          </tr>
          <tr>
            <td>Free squat </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Smith machine lunge </td>
            <td> 4 sets of 8 reps each leg</td>
          </tr>
          <tr>
            <td>Machine leg press </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Seated leg curl</td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Leg press calf raise </td>
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

export default MenAdvLegs;
