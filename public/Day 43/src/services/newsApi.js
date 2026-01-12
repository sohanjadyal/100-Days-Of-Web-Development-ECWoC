const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const getTopHeadlines = async (category = "general") => {
  const response = await fetch(
    `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${API_KEY}`
  );

  const data = await response.json();

  if (data.status !== "ok") {
    throw new Error(data.message || "API Error");
  }

  return data;
};

export const searchNews = async (query) => {
  const response = await fetch(
    `${BASE_URL}/everything?q=${query}&pageSize=20&apiKey=${API_KEY}`
  );

  const data = await response.json();

  if (data.status !== "ok") {
    throw new Error(data.message || "API Error");
  }

  return data;
};
