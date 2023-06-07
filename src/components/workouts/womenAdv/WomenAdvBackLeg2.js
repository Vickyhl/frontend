import React from "react";
import { useNavigate } from "react-router-dom";

function WomenAdvBackLeg2() {
  const navigate = useNavigate();

  const exercises = [
    "Stiff leg deadlift",
    "Barbell squat",
    "Leg press on a device",
    "Dumbbell bench press",
    "Barbell hip thrust",
    "Standing calf raise",
  ];

  const sets = [4, 4, 4, 4, 4, 4];
  const reps = [20, 10, 25, 15, 25, 50];
  const gifs = [
    "Stiff-Leg-Deadlift",
    "BARBELL-SQUAT",
    "Leg-Press",
    "Dumbbell-Lunge",
    "Barbell-Hip-Thrust",
    "Standing-Calf-Raise",
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
            <td>Stiff leg deadlift </td>
            <td> 4X20</td>
          </tr>
          <tr>
            <td>Barbell squat </td>
            <td> 4X10 </td>
          </tr>
          <tr>
            <td>Leg press on a device </td>
            <td> 4X25</td>
          </tr>
          <tr>
            <td>Dumbbell bench press </td>
            <td> 4 sets of 15 reps each leg</td>
          </tr>
          <tr>
            <td>Barbell hip thrust </td>
            <td>4X25</td>
          </tr>
          <tr>
            <td>Standing calf raise</td>
            <td>4X50</td>
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

export default WomenAdvBackLeg2;
