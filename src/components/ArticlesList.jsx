import { useState, useEffect } from "react";
import { fetchArticles, fetchArticlesByTopic } from "../api";
import { useParams, Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <main className="articles">
      {articles.map((article) => {
        return (
          <div>
            <Link to={`/articles/${article.article_id}`}>
              <section className="article-card" key={article.article_id}>
                <img src={article.article_img_url} alt={`${article.title}`} />
                <h3>{article.title}</h3>
                <Link to={`/articles/${article.topic}`}>
                  {" "}
                  <p>{article.topic}</p>
                </Link>
              </section>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
