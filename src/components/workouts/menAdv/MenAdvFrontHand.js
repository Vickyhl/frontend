import React from "react";
import { useNavigate } from "react-router-dom";

function MenAdvFrontHand() {
  const navigate = useNavigate();

  const exercises = [
    "Bending elbows with a straight bar",
    "Bending elbows with dumbbells with rotation",
    "Bending elbows with a reverse grip with a bar",
  ];
  const sets = [3, 3, 4];
  const reps = [8, 8, 12];
  const gifs = [
    "Barbell-Reverse-Curl",
    "dumbbell-reverse-curl",
    "Reverse-Grip-EZ-Bar-Curl",
  ];
  const exDetails = {
    muscleName: "Forearm muscle",
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
            <td>Bending elbows with a straight bar</td>
            <td> 3X8</td>
          </tr>
          <tr>
            <td>Bending elbows with dumbbells with rotation </td>
            <td> 3X8</td>
          </tr>
          <tr>
            <td>Bending elbows with a reverse grip with a bar </td>
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

export default MenAdvFrontHand;
