import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <div className="App">
      <Header />
      <Nav setCurrentUser={setCurrentUser} />
      <main className="articles-list">
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route
            path="/articles"
            element={<ArticlesList currentUser={currentUser} />}
          />
          <Route
            path="/articles/:id"
            element={<SingleArticle currentUser={currentUser} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
