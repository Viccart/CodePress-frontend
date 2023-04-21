import { useState } from "react";
import { postComment } from "../api";

export default function AddComment({ articleId, setComments, currentUser }) {
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    setIsSubmitted(true);
    e.preventDefault();

    const newComment = {
      username: currentUser,
      body: commentBody,
      article_id: articleId,
    };

    postComment(newComment)
      .then((response) => {
        setComments((prevComments) => [...prevComments, response.data]);
        setCommentBody("");
        setIsSubmitted(false);
      })
      .catch(() => {
        setIsSubmitted(false);
        setErr("something went wrong, try again later!");
      });
  };

  return (
    <form id="submitComment" onSubmit={handleSubmit}>
      <h3>Add a comment</h3>
      <textarea
        type="text"
        id="new-comment"
        value={commentBody}
        required
        onChange={(e) => setCommentBody(e.target.value)}
      ></textarea>
      <br></br>
      <button type="submit" disabled={isSubmitted}>
        Submit Comment
      </button>
      {err ? <p>{err}</p> : null}
    </form>
  );
}
