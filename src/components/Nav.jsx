import { fetchTopics } from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navBar">
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
      </div>
      <button>Sort</button>
    </nav>
  );
}
