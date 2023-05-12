import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../api";
import { useParams, Link } from "react-router-dom";

export default function ArticlesList({ currentUser, sortCriteria }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic(category, sortCriteria).then((sortedArticles) => {
      if (sortedArticles.length === 0) {
        setIsLoading(false);
        setError("This topic does not exist");
      } else setError("");
      setArticles(sortedArticles);
      setIsLoading(false);
    });
  }, [category, sortCriteria]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  return (
    <main className="articles">
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <section className="article-card">
                <img src={article.article_img_url} alt={`${article.title}`} />
                <h3>{article.title}</h3>
              </section>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
