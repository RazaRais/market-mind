import { useEffect, useState } from "react";
import { getMarketNews } from "../../services/newsApi";

function NewsPanel() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMarketNews()
      .then(setNews)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="card">
        <strong>Market News</strong>
        <p>Loading latest headlines...</p>
      </div>
    );
  }

  return (
    <div className="card">
      <strong>Market News</strong>

      <ul style={{ marginTop: "0.75rem", paddingLeft: "1rem" }}>
        {news.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.6rem" }}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#387ed1", fontWeight: 500 }}
            >
              {item.title}
            </a>
            <div style={{ fontSize: "0.75rem", color: "#777" }}>
              {item.source.name} •{" "}
              {new Date(item.publishedAt).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPanel;
