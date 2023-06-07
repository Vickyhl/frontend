import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AccessibilityProvider } from "./components/AccessibilityContext";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <AccessibilityProvider>
        <App />
      </AccessibilityProvider>
    </Provider>
  </Router>
);
