import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./styles.css";

export default function Root(props) {
  return (
    <Router>
      <nav>
        <div className="container">
          <Link to="/home">Home</Link>
          <Link to="/chart">Chart</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </Router>
  );
}
