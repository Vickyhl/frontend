import React, { useState, useEffect } from "react";
import "./css/editGrocery.css";
import addIcon from "./images/addIcon.jpeg";
import deleteIcon from "./images/deleteIcon.jpeg";
import axios from "axios";

function EditGrocery() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;
  const [regularList, setRegularList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [showRegularList, setShowRegularList] = useState(false);
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      const newItemObject = newItem.trim();
      setNewItem(""); // Clear the input field first
      setList((prevList) => [...prevList, newItemObject]); // Update the list state with the new item
      console.log(list);
    }
  };

  const handleRemoveItem = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const fetchRegular = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/grocery/fetchRegularGrocery/${userId}`
    );
    setList(result.data.groceryList);
    setShowRegularList(true);
  };

  const fetchRecipe = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/grocery/fetchRecipeGrocery/${userId}`
    );
    setList(result.data.groceryList);
    setShowRegularList(true);
  };

  return (
    <>
      <div className="groceryClass">
        <h1>Edit my grocery list</h1>
        <div className="btn-container">
          <button aria-label="Submit" className="BMIbtn" onClick={fetchRegular}>
            Edit grocery list for my regular menu
          </button>
        </div>
        <div className="btn-container">
          <button aria-label="Submit" className="BMIbtn" onClick={fetchRecipe}>
            Edit grocery list for my recipe based menu
          </button>
        </div>
        {showRegularList && (
          <div className="inputContainer">
            <input
              className="inputBtn"
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter item"
            />
            <button className="groceryEditBtn" onClick={handleAddItem}>
              <img className="addImg" src={addIcon} alt="Add Logo" />
            </button>
          </div>
        )}
        <ul>
          {list &&
            list.map((item, index) => (
              <li className="recipe" key={index}>
                <input type="checkbox" checked={item.checked} />
                {item}
                <button
                  className="groceryEditBtn"
                  onClick={() => handleRemoveItem(index)}
                >
                  <img className="addImg" src={deleteIcon} alt="Add Logo" />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default EditGrocery;
