import React from "react";
import { useNavigate } from "react-router-dom";

function ShouldersMenBegEx() {
  const navigate = useNavigate();

  const exercises = [
    "Standing shoulder press with a bar",
    "Moving arms to the sides while standing with dumbbells",
    "Rowing standing with a W bar",
  ];
  const sets = [4, 4, 4];
  const reps = [8, 15, 10];
  const gifs = [
    "Standing-Smith-Machine-Shoulder-Press",
    "Dumbbell-Lateral-Raise",
    "Barbell-Upright-Row",
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
      {" "}
      <h1 className="menAdv">Shoulders exercise</h1>{" "}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>The exercise</th> <th>sets and repetitions</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          <tr>
            {" "}
            <td>Standing shoulder press with a bar</td> <td>4X8</td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td>Moving arms to the sides while standing with dumbbells</td>{" "}
            <td>4X15</td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td>Rowing standing with a W bar</td> <td>4X10 </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>{" "}
      <div className="btn-container-receipt">
        <button type="submit" className="btn" onClick={handleSubmit}>
          Start a workout
        </button>
      </div>
    </div>
  );
}

export default ShouldersMenBegEx;
