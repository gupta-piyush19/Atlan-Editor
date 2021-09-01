import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import QueryState from "./context/query/QueryState";

ReactDOM.render(
  <React.StrictMode>
    <QueryState>
      <Router>
        <App />
      </Router>
    </QueryState>
  </React.StrictMode>,
  document.getElementById("root")
);
