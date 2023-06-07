import React from "react";
import { useNavigate } from "react-router-dom";

function WomenBegBackLeg() {
  const navigate = useNavigate();

  const exercises = [
    "Roman bench press",
    "Seated leg curl",
    "Stiff Leg in Smith machine",
    "Barbell hip thrust",
  ];
  const sets = [4, 4, 4, 4];
  const reps = [15, 15, 15, 15];
  const gifs = [
    "hyperextension",
    "Seated-Leg-Curl",
    "Stiff-Leg-Deadlift",
    "Barbell-Hip-Thrust",
  ];
  const exDetails = {
    muscleName: "Hind leg muscle",
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
      <h1 className="menAdv">Hind leg exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Roman bench press </td>
            <td> 4X15</td>
          </tr>
          <tr>
            <td>Seated leg curl </td>
            <td> 4X15</td>
          </tr>
          <tr>
            <td> Stiff Leg in Smith machine </td>
            <td> 4X15</td>
          </tr>
          <tr>
            <td>Barbell hip thrust </td>
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

export default WomenBegBackLeg;
