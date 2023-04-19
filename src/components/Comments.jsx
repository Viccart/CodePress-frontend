import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../api";
import { useState, useEffect } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(id)
      .then((data) => {
        setComments(data.comments);
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
    <div className="comments-section">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <p>{comment.body}</p>
          <p>By: {comment.author}</p>
        </div>
      ))}
    </div>
  );
}
