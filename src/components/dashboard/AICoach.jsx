import { useEffect, useState } from "react";
import { apiFetch } from "../../services/api";

function AICoach() {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiFetch("/ai/insights")
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="card">Loading AI insights...</div>;

  const pnlColor = data.totalPnL >= 0 ? "#27ae60" : "#e74c3c";
  const winColor = data.winRate >= 50 ? "#27ae60" : "#e74c3c";

  return (
    <div className="analytics-card">
      <h3 style={{ marginBottom: "1rem" }}>AI Performance Analytics</h3>

      {/* METRIC GRID */}
      <div className="analytics-grid">
        <div className="metric-box">
          <span>Win Rate</span>
          <strong style={{ color: winColor }}>
            {data.winRate}%
          </strong>
        </div>

        <div className="metric-box">
          <span>Total PnL</span>
          <strong style={{ color: pnlColor }}>
            ₹ {data.totalPnL}
          </strong>
        </div>

        <div className="metric-box">
          <span>Exposure</span>
          <strong>{data.exposureRatio}</strong>
        </div>

        <div className="metric-box">
          <span>Avg PnL</span>
          <strong>₹ {data.avgPnL}</strong>
        </div>

        <div className="metric-box">
          <span>Largest Gain</span>
          <strong style={{ color: "#27ae60" }}>
            ₹ {data.largestGain}
          </strong>
        </div>

        <div className="metric-box">
          <span>Largest Loss</span>
          <strong style={{ color: "#e74c3c" }}>
            ₹ {data.largestLoss}
          </strong>
        </div>
      </div>

      {/* AI SUGGESTIONS */}
      <div className="ai-suggestions">
        <h4>AI Suggestions</h4>
        <ul>
          {data.advice.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AICoach;