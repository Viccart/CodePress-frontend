import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-nt85.onrender.com/api",
});

export const fetchTopics = () => {
  return newsAPI.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const fetchArticles = () => {
  return newsAPI.get("/articles").then((response) => {
    return response;
  });
};

export const fetchArticleById = (id) => {
  return newsAPI.get(`/articles/${id}`).then((response) => {
    return response.data;
  });
};

export const fetchCommentsByArticleId = (id) => {
  return newsAPI.get(`/articles/${id}/comments`).then((response) => {
    return response.data;
  });
};

export const patchArticle = (id) => {
  return newsAPI.patch(`/articles/${id}`, { inc_votes: 1 }).then(({ data }) => {
    return data.article;
  });
};

export const postComment = (newComment) => {
  console.log(newComment);
  const { article_id, body, username } = newComment;
  const data = { body, username };
  return newsAPI
    .post(`/articles/${article_id}/comments`, data)
    .then((response) => {
      return response;
    });
};

export const fetchUsers = () => {
  return newsAPI.get("/users").then((response) => {
    return response.data;
  });
};

export const fetchArticlesByTopic = (category) => {
  return newsAPI.get("/articles").then(({ data }) => {
    const filteredArticles = data.articles.filter(
      (article) => article.topic === category
    );
    return filteredArticles;
  });
};
