import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import {ContextProvider }from "./Context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);
