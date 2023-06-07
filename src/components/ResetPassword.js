import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./css/style.css";

function ResetPassword() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = async (formData) => {
    const password = user.password;
    const confirmPassword = user.confirmPassword;
    console.log("the user is:", user.password);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const queryParams = new URLSearchParams(window.location.search);
    const resetToken = queryParams.get("token");
    formData = { password, resetToken };

    await axios
      .put("http://localhost:5000/api/users/resetPassword", formData)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "Invalid or expired token") {
          setErrorMessage("Invalid or expired token, please try again");
        } else {
          setErrorMessage("Password reset successfully");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const closeModal = () => {
    if (errorMessage == "Password reset successfully") {
      window.location.assign("http://localhost:3000/login");
    } else {
      window.location.assign("http://localhost:3000/forgotPassword");
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          onChange={handleChange}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Reset Password
        </button>{" "}
      </form>
      {errorMessage && (
        <div className="modal hidden">
          <div className="flex">
            <button className="btn-close" onClick={closeModal}>
              ⨉
            </button>
            <div className="modal-text">{errorMessage}</div>
            <button className="btn-ok" onClick={closeModal}>
              Okay
            </button>
          </div>
        </div>
      )}
      <div className="overlay hidden"></div>
    </div>
  );
}
export default ResetPassword;
