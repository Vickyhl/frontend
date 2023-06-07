import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AccessibilityIcon from "./AccessibilityIcon";
import { AccessibilityContext } from "./AccessibilityContext";
import "./css/createMenu.css";

const CreateMenu = () => {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;
  let mid;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [user, setUser] = useState({
    userID: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    purpuse: "",
    type: "",
    health: "",
  });

  const handleSubmitForm = async (formData) => {
    const { age, height, weight, gender, purpuse, type, health, userID } =
      formData;
    console.log(userId);
    if (type === "regular") {
      await axios
        .post("http://localhost:5000/api/menus/personalMenu", {
          age,
          height,
          weight,
          gender,
          purpuse,
          health,
          user: userId,
        })
        .then((res) => {
          console.log(res);
          console.log(type);
          window.location.assign(
            `http://localhost:3000/card/${encodeURIComponent(type)}`
          );
        });
    } else {
      const res = await axios.post(
        "http://localhost:5000/api/menus/recipesMenu",
        {
          age,
          height,
          weight,
          gender,
          purpuse,
          user: userId,
        }
      );
      mid = res.data.num;
      // setMenuNum(res.data.num);
      console.log(mid);
      window.location.assign(`http://localhost:3000/card/${mid}`);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <AccessibilityIcon />
      <div
        className={`create-menu ${fontSize} ${
          readableText ? "readableText" : ""
        } ${contrast}`}
      >
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <label htmlFor="age">Enter your age:</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "This field is required",
              min: { value: 18, message: "The required age is older than 18" },
              max: {
                value: 65,
                message: "The required age is younger than 65",
              },
            })}
            onChange={handleChange}
          />
          {errors?.age?.message && (
            <div className="validationError">{errors?.age?.message}</div>
          )}
          <label htmlFor="height">Enter your height:</label>
          <input
            type="number"
            id="height"
            {...register("height", {
              required: "This field is required",
            })}
            onChange={handleChange}
          />
          {errors?.height?.message && (
            <div className="validationError">{errors?.height?.message}</div>
          )}
          <label htmlFor="weight">Enter your weight:</label>
          <input
            type="number"
            id="weight"
            {...register("weight", {
              required: "This field is required",
              min: { value: 70, message: "The minimum possible weight is 70" },
              max: {
                value: 120,
                message: "The maximum possible weight is 120",
              },
            })}
            onChange={handleChange}
          />
          {errors?.weight?.message && (
            <div className="validationError">{errors?.weight?.message}</div>
          )}
          <label htmlFor="gender">Enter your gender:</label>
          <select
            {...register("gender", { required: "This field is required" })}
          >
            <option></option>
            <option value="female">female</option>
            <option value="male">male</option>
            onChange={handleChange}
          </select>
          {errors?.gender?.message && (
            <div className="validationError">{errors?.gender?.message}</div>
          )}
          <label htmlFor="purpuse">Enter your menu purpuse:</label>
          <select
            {...register("purpuse", { required: "This field is required" })}
          >
            <option></option>
            <option value="maintenence">Maintening the existing weight</option>
            <option value="weightLoss">Weight loss</option>
            onChange={handleChange}
          </select>
          {errors?.purpuse?.message && (
            <div className="validationError">{errors?.purpuse?.message}</div>
          )}

          <label htmlFor="type">Enter your preferable menu type:</label>
          <select {...register("type", { required: "This field is required" })}>
            <option></option>
            <option value="regular">Regular menu</option>
            <option value="recipes">Recipes based menu</option>
            onChange={handleChange}
          </select>
          {errors?.type?.message && (
            <div className="validationError">{errors?.type?.message}</div>
          )}

          <div className="form-check">
            <input
              type="checkbox"
              name="selectCheckbox"
              id="selectCheckbox"
              {...register("health", { required: "This field is required" })}
              className={`form-check-label ${
                errors?.health ? "is-invalid" : ""
              }`}
              onChange={handleChange}
            />
            <a href="/HealthDec" className="form-check-label">
              Health declaration
            </a>
            <div className="validationError">{errors?.health?.message}</div>
          </div>

          <div className="description">
            <h3>Personalized nutrition menu </h3>
            <label htmlFor="price">
              <strong>Price:</strong> $5.00
            </label>
            <p>
              (10% of it is going for donation to the Israeli Diabetes
              Association)
            </p>
          </div>

          <div className="btn-container" onClick={handleSubmit}>
            <button type="submit" className="btn">
              checkout{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateMenu;
