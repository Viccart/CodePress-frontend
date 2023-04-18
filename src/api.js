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

export const fetchArticlesByTopic = (topic) => {
  return newsAPI.get(`/articles?category_name=${topic}`).then((response) => {
    return response.data;
  });
};

export const fetchArticleById = (id) => {
  return newsAPI.get(`/articles/${id}`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
