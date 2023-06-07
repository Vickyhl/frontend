import axios from "axios";
import { useParams } from "react-router-dom";
import deleteIcon from "./images/deleteIcon.jpeg";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import React, { useState, useEffect, useContext } from "react";

function EditRegularMenu() {
  const mid = useParams().mid;
  const [menu, setMenu] = useState({});
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const [editedMenu, setEditedMenu] = useState({});
  const [editedItems, setEditedItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/menus/${mid}`
        );
        setMenu(response.data.menu);
        setEditedMenu(response.data.menu);
        setEditedItems(response.data.menu);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [mid]);

  const handleDeleteItem = (mealNumber, itemIndex) => {
    setEditedMenu((prevMenu) => {
      const updatedMenu = { ...prevMenu };
      updatedMenu[`meal${mealNumber}`].splice(itemIndex, 1);
      return updatedMenu;
    });
  };

  const handleAddItem = (mealNumber) => {
    setEditedMenu((prevMenu) => {
      const updatedMenu = { ...prevMenu };
      updatedMenu[`meal${mealNumber}`] = [
        ...(updatedMenu[`meal${mealNumber}`] || []),
        "",
      ];
      return updatedMenu;
    });
  };

  const handleItemChange = (mealNumber, itemIndex, newValue) => {
    setEditedItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (!updatedItems[mealNumber]) {
        updatedItems[mealNumber] = [];
      }
      updatedItems[mealNumber][itemIndex] = newValue;
      return updatedItems;
    });
  };

  const handleSaveChanges = async () => {
    try {
      const updatedMenu = { ...editedMenu };
      Object.keys(updatedMenu).forEach((mealNumber) => {
        updatedMenu[mealNumber] = editedItems[mealNumber] || [];
      });
      await axios.post(`http://localhost:5000/api/menus/updateMenu/${mid}`, {
        menu: updatedMenu,
      });
      setMenu(updatedMenu);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AccessibilityIcon />
      <div className={`background ${contrast}`}></div>
      <div
        className={`menu ${fontSize} ${readableText ? "readableText" : ""} ${
          contrast === "high"
            ? "white"
            : contrast === "low"
            ? "darkgray"
            : "black"
        }`}
      >
        <h1 className="menu">Your personalized menu</h1>
        <h2 className="editMenu">Category: {menu.category}</h2>
        <ul className="edit-menu-list">
          <li className="menu-item">
            <h3 className="editMenu">First meal:</h3>
            <div className="menu-item__info">
              {editedMenu.meal1 &&
                editedMenu.meal1.map((item, index) => (
                  <div className="menu-div" key={index}>
                    <input
                      type="text"
                      value={editedItems.meal1 && editedItems.meal1[index]}
                      onChange={(e) =>
                        handleItemChange("meal1", index, e.target.value)
                      }
                    />
                    <button
                      className="groceryEditBtn"
                      onClick={() => handleDeleteItem(1, index)}
                    >
                      <img className="addImg" src={deleteIcon} alt="Add Logo" />
                    </button>
                  </div>
                ))}
              <button onClick={() => handleAddItem(1)}>Add Item</button>
            </div>
            <h3 className="editMenu">Second meal:</h3>
            <div className="menu-item__info">
              {editedMenu.meal2 &&
                editedMenu.meal2.map((item, index) => (
                  <div className="menu-div" key={index}>
                    <input
                      type="text"
                      value={editedItems.meal2 && editedItems.meal2[index]}
                      onChange={(e) =>
                        handleItemChange("meal2", index, e.target.value)
                      }
                    />
                    <button
                      className="groceryEditBtn"
                      onClick={() => handleDeleteItem(2, index)}
                    >
                      <img className="addImg" src={deleteIcon} alt="Add Logo" />
                    </button>
                  </div>
                ))}
              <button onClick={() => handleAddItem(2)}>Add Item</button>
            </div>{" "}
            <h3 className="editMenu">Third meal:</h3>
            <div className="menu-item__info">
              {editedMenu.meal3 &&
                editedMenu.meal3.map((item, index) => (
                  <div className="menu-div" key={index}>
                    <input
                      type="text"
                      value={editedItems.meal3 && editedItems.meal3[index]}
                      onChange={(e) =>
                        handleItemChange("meal3", index, e.target.value)
                      }
                    />
                    <button
                      className="groceryEditBtn"
                      onClick={() => handleDeleteItem(3, index)}
                    >
                      <img className="addImg" src={deleteIcon} alt="Add Logo" />
                    </button>
                  </div>
                ))}
              <button onClick={() => handleAddItem(3)}>Add Item</button>
            </div>
            <h3 className="editMenu">Fourth meal:</h3>
            <div className="menu-item__info">
              {editedMenu.meal4 &&
                editedMenu.meal4.map((item, index) => (
                  <div className="menu-div" key={index}>
                    <input
                      type="text"
                      value={editedItems.meal4 && editedItems.meal4[index]}
                      onChange={(e) =>
                        handleItemChange("meal4", index, e.target.value)
                      }
                    />
                    <button
                      className="groceryEditBtn"
                      onClick={() => handleDeleteItem(4, index)}
                    >
                      <img className="addImg" src={deleteIcon} alt="Add Logo" />
                    </button>
                  </div>
                ))}
              <button onClick={() => handleAddItem(4)}>Add Item</button>
            </div>
            <h3 className="editMenu">Fifth meal:</h3>
            <div className="menu-item__info">
              {editedMenu.meal5 &&
                editedMenu.meal5.map((item, index) => (
                  <div className="menu-div" key={index}>
                    <input
                      type="text"
                      value={editedItems.meal5 && editedItems.meal5[index]}
                      onChange={(e) =>
                        handleItemChange("meal5", index, e.target.value)
                      }
                    />
                    <button
                      className="groceryEditBtn"
                      onClick={() => handleDeleteItem(5, index)}
                    >
                      <img className="addImg" src={deleteIcon} alt="Add Logo" />
                    </button>
                  </div>
                ))}
              <button onClick={() => handleAddItem(5)}>Add Item</button>
            </div>
          </li>
        </ul>
        <div className="editMenuBtn">
          <button className="BMIbtn" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default EditRegularMenu;
