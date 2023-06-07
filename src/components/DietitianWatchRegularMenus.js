import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import "./css/showMenu.css";

const DietitianWatchRegularMenus = () => {
  const [menuDetails, setMenuDetails] = useState({});

  const fetchRegularMenus = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/dietician/usersMenus`
    );
    setMenuDetails(result.data.menuDetails);
  };

  const fetchRecipesMenus = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/api/dietician/usersRecipeMenus`
    );
    setMenuDetails(result.data.menuDetails);
  };

  const handleMenuSelect = async (index) => {
    if (menuDetails.menuType == "regMenu") {
      window.location.assign(
        `http://localhost:3000/editMenu/${menuDetails.menuIds[index]}`
      );
    } else {
      window.location.assign(
        `http://localhost:3000/dietician/${menuDetails.menuIds[index]}`
      );
    }
  };

  return (
    <div className="groceryClass">
      <h1>Nutrition menus</h1>
      <div className="btn-container">
        <button
          aria-label="Submit"
          className="BMIbtn"
          onClick={fetchRegularMenus}
        >
          Show regular menus
        </button>
      </div>
      <div className="btn-container">
        <button
          aria-label="Submit"
          className="showRecipes"
          onClick={fetchRecipesMenus}
        >
          Show recipe based menus
        </button>
      </div>
      {menuDetails && (
        <div className="tile-container">
          {menuDetails.menuDates &&
            menuDetails.menuDates.map((menu, i) => (
              <div
                className="tile"
                key={i}
                data-index={i}
                onClick={() => handleMenuSelect(i)}
              >
                <div className="tile-content">
                  <h3>
                    {menuDetails.menuNames[i].firstName}{" "}
                    {menuDetails.menuNames[i].lastName}{" "}
                  </h3>
                  <p>{moment(menu).format("DD/MM/YYYY")}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DietitianWatchRegularMenus;
