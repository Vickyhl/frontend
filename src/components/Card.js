import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import "./css/card.css";

function Card() {
  const url = window.location.pathname; // get the path of the current URL
  const lastWord = url.split("/").pop(); // split the path using '/' as delimiter and get the last element
  console.log(lastWord); // print the last word

  async function handleSubmitClick() {
    const stripe = await loadStripe(
      "pk_test_51MsU99ESZ6jwBd5mZ07t7amESyMsjXDDVhGcdVnFbdkbpb0zYVmmw4RmFI5LshKqlIkPbzGhmLSMgfE4aY8AYVx400sfpkpWyQ"
    );

    stripe.redirectToCheckout({
      lineItems: [
        {
          // Define the product and price in the Dashboard first, and use the price
          // ID in your client-side code.
          price: "price_1MshYLESZ6jwBd5mgcLL54sL",
          quantity: 1,
        },
      ],
      mode: "payment",
      //redirect to the last created menu
      successUrl: `http://localhost:3000/receipt/${lastWord}`,
      cancelUrl: "https://www.example.com/cancel",
    });
  }

  return (
    <div className="container">
      <h1>Payment</h1>
      <ul>
        <li>
          The menu is customized and created in collaboration with a qualified
          dietician.
        </li>{" "}
        <li>The use of the menu is for an unlimited time.</li>{" "}
        <li>
          Refunds and transaction cancellations will be made in accordance with
          the provisions of the law.
        </li>
      </ul>
      <script src="https://js.stripe.com/v3"></script>
      <div className="btn-container">
        <button
          type="button"
          id="checkout-button"
          className="btn"
          onClick={handleSubmitClick}
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Card;
