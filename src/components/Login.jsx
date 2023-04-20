import * as api from "../api";
import { useState, useEffect } from "react";

export default function Login({ setCurrentUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.fetchUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  const handleUserClick = (user) => {
    setCurrentUser(user);
  };
  return (
    <main id="users">
      {users.map((user) => {
        return (
          <section key={user.username} onClick={() => handleUserClick(user)}>
            <p>{user.username}</p>
            <img src={user.avatar_url} alt={`${user.username} avatar`} />
          </section>
        );
      })}
    </main>
  );
}
