const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getMarketNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=6&apiKey=${API_KEY}`
  );

  const data = await res.json();

  if (!data.articles) {
    throw new Error("Failed to fetch news");
  }

  return data.articles;
};
