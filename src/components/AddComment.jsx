import { useState } from "react";
import { postComment } from "../api";

export default function AddComment({ currentUser, articleId }) {
  const [commentBody, setCommentBody] = useState("");
  const [votes, setVotes] = useState(0);
  const [date, setDate] = useState(new Date());

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const newComment = {
      votes,
      created_at: date,
      author: currentUser,
      body: commentBody,
      article_id: articleId,
    };
    console.log(newComment);
    postComment(newComment).then((response) => {
      setIsSubmitted(true);
    });
  };

  if (isSubmitted) {
    return <h1>Your item has been listed 😁</h1>;
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
      <button type="submit">Submit Comment</button>
    </form>
  );
}
