import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import { useState, useEffect } from "react";
import Comments from "./Comments";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(id)
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div>
      <div id="full-article">
        <h2>{article.title}</h2>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <img src={article.article_img_url} alt={`${article.title}`} />
        <p className="article-body">{article.body}</p>
        <p>Date: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
      </div>
      <br />
      <br />
      <br />
      <Comments />
    </div>
  );
}
