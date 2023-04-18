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
    console.log(response);
    return response;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return newsAPI.get(`/items?category_name=${topic}`).then((response) => {
    return response.data;
  });
};
