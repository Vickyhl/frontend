import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/ex.css";

function ExTemplate() {
  const location = useLocation();
  const details = location.state.exDetails;
  const exNum = details.exName.length;

  const [sets, setSets] = useState(3); // Use state for sets
  const [reps, setReps] = useState(0); // Use state for reps
  const [exercise, setExercise] = useState(0);
  const [finishEx, setFinishEx] = useState(false);
  const [finish, setFinish] = useState(false);
  const [timer, setTimer] = useState(60); // Use state for timer
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Use state to track if timer is running

  const handleNextRepetition = () => {
    // Update reps based on previous state
    setReps((prevReps) => prevReps + 1);
    // Reset timer to 60 seconds
    setTimer(60);

    // Start the timer
    // setIsTimerRunning(true);

    // Check if reps is equal to details.repsNum[exercise]
    if (reps + 1 === details.repsNum[exercise]) {
      // Increase sets by 1
      setSets(sets + 1);
      setIsTimerRunning(true);
      // Reset reps to 0
      setReps(0);
      // Reset timer to 60 seconds
      setTimer(60);
    }

    if (sets === details.sets[exercise]) {
      setFinishEx(true);
      // Check if exercise is not the last exercise
      if (exercise < exNum - 1) {
        // Move to the next exercise
        setExercise(exercise + 1);
        // Reset sets to 0
        setSets(0);
        // Reset reps to 0
        setReps(0);
        setFinishEx(false);
        // Stop the timer
        setIsTimerRunning(false);
      } else {
        // Finish the workout
        setFinish(true);
      }
    } else {
      // Start the timer
      //   setIsTimerRunning(true);
    }
  };

  // Render different button text based on finishEx and finish values
  const renderButtonText = () => {
    if (finish) {
      return "Finish workout";
    } else if (finishEx || sets === details.sets[exercise]) {
      return "Next exercise >>";
    } else {
      return "Next repetition >";
    }
  };

  useEffect(() => {
    // Update timer every second only when sets and reps increase by 1 and when isTimerRunning is true
    const interval = setInterval(() => {
      // Check if sets and reps have increased by 1 before updating timer and if isTimerRunning is true
      if (isTimerRunning) {
        setTimer(timer - 1);
      }

      // Reset timer when it reaches 0
      if (timer === 0) {
        // Stop the timer
        setIsTimerRunning(false);

        setTimer(60);
      }
    }, 1000);

    // Clean up the interval when component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [timer, sets, reps, exercise, isTimerRunning]);

  useEffect(() => {
    renderButtonText();
  }, [finish, finishEx]);

  return (
    <>
      <h1 className="menAdv">{details.muscleName}</h1>
      <h2 className="menu">{details.exName[exercise]}</h2>
      <img
        className="exGif"
        alt="exercise gif"
        src={require(`./workouts/workoutGifs//${details.gif[exercise]}.gif`)}
      />
      <h3 className="exercise">Num of set: </h3>
      <p className="exercise">
        {sets}/{details.sets[exercise]}
      </p>
      <h3 className="exercise">Num of repetition: </h3>
      <p className="exercise">
        {reps}/{details.repsNum[exercise]}
      </p>

      <h3 className="exercise">Timer: </h3>
      <p className="exercise">{timer} seconds</p>
      <div className="btn-container-receipt" onClick={handleNextRepetition}>
        <button type="submit" className="btn">
          {renderButtonText()} {/* Render button text dynamically */}
        </button>
        {finish && <p className="finishMsg">Workout completed!</p>}
      </div>
    </>
  );
}

export default ExTemplate;
