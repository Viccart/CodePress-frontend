import React from "react";

export default function Nav({ currentUser }) {
  return (
    <nav className="navBar">
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
      </div>
      <button className="sort">Sort</button>
      <p>Welcome, {currentUser}!</p>
    </nav>
  );
}
