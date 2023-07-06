import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import globalReducer from "state";
import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
