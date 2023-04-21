import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ currentUser }) {
  return (
    <nav className="navBar">
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <Link to="/articles">
            <p>All</p>
          </Link>
          <Link to="/articles/categories/coding">
            <p>Coding</p>
          </Link>
          <Link to="/articles/categories/cooking">
            <p>Cooking</p>
          </Link>
          <Link to="/articles/categories/football">
            <p>Football</p>
          </Link>
        </div>
      </div>
      <button className="sort">Sort</button>
      <p>Welcome, {currentUser}!</p>
    </nav>
  );
}
