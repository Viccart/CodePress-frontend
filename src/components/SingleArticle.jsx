import { useParams } from "react-router-dom";
import { fetchArticleById, patchArticle } from "../api";
import { useState, useEffect } from "react";
import Comments from "./Comments";

export default function SingleArticle({ currentUser }) {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState("");
  const [notFound, setNotFound] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(id).then((data) => {
      if (data.article) {
        setArticle(data.article);
        setIsLoading(false);
        setVotes(data.article.votes);
      } else {
        setNotFound(true);
        setIsLoading(false);
      }
    });
  }, [id]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  const handleClick = () => {
    const newVotes = votes + 1;
    setVotes(newVotes);
    patchArticle(id).catch(() => {
      setVotes(votes);
      setErr("something went wrong, try again later!");
    });
  };

  return (
    <div>
      {notFound ? (
        <p className="error-text">The article does not exist</p>
      ) : (
        <div>
          <div id="full-article">
            <h2>{article.title}</h2>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <img src={article.article_img_url} alt={`${article.title}`} />
            <p className="article-body">{article.body}</p>
            <p>Date: {article.created_at}</p>
            <p>Votes: {votes}</p>
            <button onClick={handleClick} disabled={votes === 1}>
              Upvote
            </button>
            {err ? <p>{err}</p> : null}
          </div>
          <br />
          <br />
          <br />
          <Comments currentUser={currentUser} articleId={article.article_id} />
        </div>
      )}
    </div>
  );
}
