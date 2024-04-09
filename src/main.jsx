import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
