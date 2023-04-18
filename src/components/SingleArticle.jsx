import { useParams } from "react-router-dom";
import { fetchArticleById, fetchCommentsByArticleId } from "../api";
import { useState, useEffect } from "react";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchArticleById(id)
      .then((data) => {
        setArticle(data.article);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchCommentsByArticleId(id)
      .then((data) => {
        setComments(data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>By: {comment.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
