import { useState } from "react";
import { postComment } from "../api";

export default function AddComment({ articleId, isLoading, setComments }) {
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const newComment = {
      username: "tickle122",
      body: commentBody,
      article_id: articleId,
    };

    postComment(newComment).then((response) => {
      setComments((prevComments) => [...prevComments, response.data]);
      setIsSubmitted(true);
    });
  };

  if (isSubmitted) {
    return <h2>Your comment has been submitted</h2>;
  }

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
      <button type="submit" disabled={isLoading}>
        Submit Comment
      </button>
    </form>
  );
}
