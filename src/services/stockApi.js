const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

export const getLivePrice = async (symbol) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
  );

  const data = await res.json();

  if (!data["Global Quote"]) {
    throw new Error("Price not available");
  }

  return Number(data["Global Quote"]["05. price"]);
};
