import React from "react";
import { useNavigate } from "react-router-dom";

function WomenAdvBackHand() {
  const navigate = useNavigate();

  const exercises = ["One arm triceps pushdown"];

  const sets = [3];
  const reps = [15];
  const gifs = ["One-arm-triceps-pushdown"];
  const exDetails = {
    muscleName: "Back hand muscle",
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
      <h1 className="menAdv">Forearm exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>One arm triceps pushdown</td>
            <td> 3X15</td>
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

export default WomenAdvBackHand;
