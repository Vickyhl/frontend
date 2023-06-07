import React from "react";
import { useNavigate } from "react-router-dom";

function WomenAdvBackLeg() {
  const navigate = useNavigate();

  const exercises = [
    "Roman bench press with weight",
    "Leg curl while lying on a bench",
    "Stiff Leg deadlift",
    "Barbell hip thrust",
    "Hip abduction machine",
  ];

  const sets = [4, 4, 4, 4, 4];
  const reps = [20, 20, 20, 20, 30];
  const gifs = [
    "hyperextension",
    "Leg-Curl",
    "Stiff-Leg-Deadlift",
    "Barbell-Hip-Thrust",
    "HiP-ABDUCTION-MACHINE",
  ];
  const exDetails = {
    muscleName: "Back leg muscle",
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
            <td>Roman bench press with weight </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Leg curl while lying on a bench </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Stiff Leg deadlift </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Barbell hip thrust </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td> Hip abduction machine </td>
            <td> 4X30</td>
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

export default WomenAdvBackLeg;
