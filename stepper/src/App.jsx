import "./App.css";
import CheckoutStepper from "./components/CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact Details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your Shipping Address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered.</div>,
  },
];

const App = () => {
  return (
    <div className="app">
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default App;
