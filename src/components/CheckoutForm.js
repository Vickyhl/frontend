import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Collect the card details
    const cardElement = elements.getElement(CardElement);

    // Use the Stripe API to create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[createPaymentMethod error]", error);
    } else {
      console.log("[createPaymentMethod success]", paymentMethod);
      // Submit the payment method ID to your server for processing
      // Your server would then use the Stripe API to create a charge
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default CheckoutForm;
