import { Link } from "react-router-dom";

export default function Header({ onClick }) {
  return (
    <header id="header">
      <Link to={`/articles`}>
        <h1>News Now</h1>
      </Link>
    </header>
  );
}
