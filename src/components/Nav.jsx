import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav({ currentUser, handleSortChange }) {
  const [isAscending, setIsAscending] = useState(true);

  const handleToggle = () => {
    const newOrder = isAscending ? "desc" : "dsc";
    setIsAscending(!isAscending);
    handleSortChange({ criteria: "recent", order: newOrder });
  };

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
      <div className="dropdown">
        <button className="dropbtn">Sort By:</button>
        <div className="dropdown-content">
          <p
            onClick={() =>
              handleSortChange({ criteria: "alphabetical", order: "desc" })
            }
          >
            Alphabetical
          </p>
          <p
            onClick={() =>
              handleSortChange({ criteria: "votes", order: "desc" })
            }
          >
            Votes
          </p>
          <p
            onClick={() =>
              handleSortChange({ criteria: "recent", order: "desc" })
            }
          >
            Recent
          </p>
        </div>
      </div>
      <button className="toggle" onClick={handleToggle}>
        {isAscending ? "Asc" : "Desc"}
      </button>
      <p>Welcome, {currentUser}!</p>
    </nav>
  );
}
