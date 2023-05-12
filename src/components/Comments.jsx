import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId, deleteComment } from "../api";
import { useState, useEffect } from "react";
import AddComment from "./AddComment";

export default function Comments({ currentUser, articleId }) {
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

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== commentId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="comments-section">
      <h4>Comments</h4>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>By: {comment.author}</p>
            {currentUser && currentUser.id === comment.authorId && (
              <button
                className="delete-button"
                onClick={() => handleDeleteComment(comment.comment_id)}
              >
                Delete
              </button>
            )}
          </div>
        ))
      )}
      <AddComment
        currentUser={currentUser}
        articleId={articleId}
        setComments={setComments}
      />
    </div>
  );
}
