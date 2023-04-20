import { Link } from "react-router-dom";
import React from "react";

export default function Nav({ setCurrentUser }) {
  return (
    <nav className="navBar">
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
      </div>
      <button className="sort">Sort</button>
    </nav>
  );
}
