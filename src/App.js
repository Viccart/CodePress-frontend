import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main className="articles-list">
        <ArticlesList />
        {/* <Routes>
        <Route path="/articles/:topic?" element={<ArticlesList />} />
      </Routes> */}
      </main>
    </div>
  );
}

export default App;
