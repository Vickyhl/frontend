import React, { useState } from "react";
import axios from "axios";
import "./css/watchGrocery.css";
import { exportToPDF } from "./exportDataToCSV";

function WachGrocery() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;
  const filename = "output.pdf";
  const [regularList, setRegularList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [showRegularList, setShowRegularList] = useState(true);

  const fetchRegular = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/grocery/fetchRegularGrocery/${userId}`
    );
    setRegularList(result.data.groceryList);
    setShowRegularList(true);
    if (regularList) {
      console.log(regularList);
    }
  };

  const fetchRecipe = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/grocery/fetchRecipeGrocery/${userId}`
    );
    setRecipeList(result.data.groceryList);
    setShowRegularList(false);
    if (recipeList) {
      console.log(recipeList);
    }
  };

  const exportRegular = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/grocery/fetchRegularGrocery/${userId}`
    );
    exportToPDF(result.data.groceryList, filename);
  };

  const exportRecipe = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/grocery/fetchRegularGrocery/${userId}`
    );
    exportToPDF(result.data.groceryList, filename);
  };

  return (
    <>
      <div className="groceryClass">
        <h1>My grocery list</h1>
        <div className="btn-container">
          <button aria-label="Submit" className="BMIbtn" onClick={fetchRegular}>
            Show grocery list for my regular menu
          </button>
        </div>
        <div className="btn-container">
          <button aria-label="Submit" className="BMIbtn" onClick={fetchRecipe}>
            Show grocery list for my recipe based menu
          </button>
        </div>
        <div className="btn-container">
          <button
            aria-label="Submit"
            className="BMIbtn"
            onClick={exportRegular}
          >
            Export grocery list for my regular menu
          </button>
        </div>
        <div className="btn-container">
          <button aria-label="Submit" className="BMIbtn" onClick={exportRecipe}>
            Export grocery list for my recipe based menu
          </button>
        </div>
        {showRegularList ? (
          <ul className="grocery">
            {regularList &&
              regularList.map((item, index) => (
                <li className="recipe" key={index}>
                  <div key={index}>
                    <input type="checkbox" name={item} />
                    {item}
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <ul className="grocery">
            {recipeList &&
              recipeList.map((item, index) => (
                <li className="recipe" key={index}>
                  <div key={index}>
                    <input type="checkbox" name={item} />
                    {item}
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default WachGrocery;
