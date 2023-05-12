import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState("tickle122");
  const [sortOrder, setSortOrder] = useState("recent");

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="App">
      <Header />
      <Nav currentUser={currentUser} handleSortChange={handleSortChange} />
      <main className="articles-list">
        <Routes>
          <Route path="/" element={<ArticlesList sortCriteria={sortOrder} />} />
          <Route
            path="/articles"
            element={
              <ArticlesList
                currentUser={currentUser}
                sortCriteria={sortOrder}
              />
            }
          />
          <Route
            path="/articles/:id"
            element={<SingleArticle currentUser={currentUser} />}
          />
          <Route
            path="/articles/categories/:category?"
            element={
              <ArticlesList
                currentUser={currentUser}
                sortCriteria={sortOrder}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
