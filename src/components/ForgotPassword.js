import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./css/style.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = (event) => {
    fetch("http://localhost:5000/api/users/forgotPassword", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (
        response.message ==
        "An email has been sent with instructions to reset your password"
      ) {
        setErrorMessage(
          "An email has been sent with instructions to reset your password"
        );
      } else {
        setErrorMessage("Failed to send reset password email");
      }
    });
  };

  const closeModal = () => {
    if (
      errorMessage ==
      "An email has been sent with instructions to reset your password"
    ) {
    } else {
      setErrorMessage(false);
    }
  };

  return (
    <div className="modal">
      {" "}
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          type="email"
          id="Email"
          value={email}
          placeholder="Email"
          {...register("Email", {
            required: "This field is required",
          })}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors?.Email?.message && (
          <div className="validationError">{errors?.Email?.message}</div>
        )}
        <div className="btn-container" onClick={handleSubmit}>
          <button type="submit" className="btn">
            Reset Password
          </button>
        </div>
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

export default ForgotPassword;
