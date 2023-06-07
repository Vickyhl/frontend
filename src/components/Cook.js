import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/cook.css";
import axios from "axios";

function Cook() {
  const rid = useParams().rid;
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [activeTimers, setActiveTimers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/recipes/fetchRecipe/${rid}`
        );
        console.log(result.data);
        setRecipe(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (recipe.recipe) {
      setIngredients(recipe.recipe.ingredients);
      setInstructions(recipe.recipe.instructions);
      console.log(ingredients);
    }
  }, [recipe]);

  const handleNutrients = () => {
    window.location.assign(
      `http://localhost:3000/nutrients/${recipe.recipe.title}/${rid}`
    );
  };

  const startTimer = (index, minutes) => {
    const endTime = Date.now() + minutes * 60 * 1000;
    const timerId = setInterval(() => tick(index), 1000);

    setActiveTimers((prevTimers) => [
      ...prevTimers,
      { index, endTime, timerId, remainingTime: minutes * 60 * 1000 },
    ]);
  };

  const pauseTimer = (index) => {
    setActiveTimers((prevTimers) => {
      return prevTimers.map((t) => {
        if (t.index === index) {
          clearInterval(t.timerId);
          return { ...t, timerId: null };
        }
        return t;
      });
    });
  };

  const stopTimer = (index) => {
    setActiveTimers((prevTimers) => {
      return prevTimers.filter((t) => t.index !== index);
    });
  };

  const tick = (index) => {
    setActiveTimers((prevTimers) => {
      return prevTimers
        .map((t) => {
          if (t.index === index) {
            const timeLeft = t.endTime - Date.now();
            if (timeLeft <= 0) {
              clearInterval(t.timerId);
              //   alert(`Timer ${index + 1}: Time is up!`);
              return null;
            }
            return { ...t, remainingTime: timeLeft };
          }
          return t;
        })
        .filter((t) => t !== null);
    });
  };

  const formatRemainingTime = (time) => {
    const minutes = Math.floor(time / 1000 / 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {recipe.recipe && <h1 className="menAdv">{recipe.recipe.title}</h1>}
      <div className="recipeStrong">
        <strong>Prep time: </strong>
        {recipe.recipe && recipe.recipe.prepTime}
      </div>
      <div className="recipeStrong">
        <strong>serving: </strong>
        {recipe.recipe && recipe.recipe.serving}
      </div>
      <div className="btn-container-receipt" onClick={handleNutrients}>
        <button type="submit" className="btn">
          show nutrients{" "}
        </button>
      </div>
      <div className="recipe-container">
        {recipe.recipe && (
          <>
            <ul className="recipe">
              <strong>Ingredients:</strong>
              {ingredients.map((item, index) => (
                <li className="recipe" key={index}>
                  <input
                    className="recipe-checkbox"
                    type="checkbox"
                    checked={item.isChecked}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="recipe-instructions">
              <strong className="instructions">Instructions:</strong>
              {instructions.map((item, index) => (
                <li className="recipe-instructions" key={index}>
                  <input
                    className="recipe-checkbox"
                    type="checkbox"
                    checked={item.isChecked}
                  />
                  {item.text}
                  {item.duration && (
                    <div className="timer-container">
                      <button
                        className="timer-button"
                        onClick={() => startTimer(index, item.duration)}
                      >
                        Start {item.duration}min Timer
                      </button>
                      {activeTimers.find((t) => t.index === index) && (
                        <>
                          <button
                            className="timer-button"
                            onClick={() => pauseTimer(index)}
                          >
                            Pause
                          </button>
                          <button
                            className="timer-button"
                            onClick={() => stopTimer(index)}
                          >
                            Stop
                          </button>
                          <span className="timer-display">
                            {formatRemainingTime(
                              activeTimers.find((t) => t.index === index)
                                .remainingTime
                            )}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default Cook;
