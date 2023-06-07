import React from "react";
import { useNavigate } from "react-router-dom";

function MenAdvShoulders() {
  const navigate = useNavigate();

  const exercises = [
    "Standing shoulder press with a bar	",
    "Dumbbell shoulder press",
    "Dumbbell lateral raise",
    "Barbell upright row",
    "Bent over lateral raise",
    "Face pull in upper poly to back shoulder",
    "Barbell rear delt raise",
  ];
  const sets = [4, 4, 4, 4, 4, 4, 4];
  const reps = [8, 8, 8, 8, 8, 8, 8];
  const gifs = [
    "Standing-Smith-Machine-Shoulder-Press",
    "Dumbbell-Shoulder-Press",
    "Dumbbell-Lateral-Raise",
    "Barbell-Upright-Row",
    "Bent-Over-Lateral-Raise",
    "Face-Pull",
    "Barbell-Rear-Delt-Raise",
  ];
  const exDetails = {
    muscleName: "Shoulders muscle",
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
      <h1 className="menAdv">Shoulders exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standing shoulder press with a bar </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Dumbbell shoulder press </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Dumbbell lateral raise </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Barbell upright row </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Bent over lateral raise </td>
            <td> 4X8</td>
          </tr>
          <tr>
            <td>Face pull in upper poly to back shoulder </td>
            <td> 4X8 </td>
          </tr>
          <tr>
            <td>Barbell rear delt raise</td>
            <td> 4X8</td>
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

export default MenAdvShoulders;
