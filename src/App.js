import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {

  return (
    <div className="App">
      <Header />
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
