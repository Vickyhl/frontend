import React from "react";
import logo from "./images/logo.png";

function Contact() {
  return (
    <div className="donation">
      <h1>
        <strong>Always at your disposal</strong>
      </h1>
      <p>
        In any matter, our customer service will gladly and kindly answer you.
      </p>
      <p>You are welcome to try...</p>
      <p>Email: eatandfitservice@gmail.com</p>
      <img className="donationImg" src={logo} alt="Eat&Fit logo"></img>
    </div>
  );
}

export default Contact;
