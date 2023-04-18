import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [showArticlesList, setShowArticlesList] = useState(false);
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    setShowArticlesList(!showArticlesList);
    navigate("/articles");
  };

  return (
    <div className="App">
      <Header onClick={handleHeaderClick} />
      <Nav />
      <main className="articles-list">
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
