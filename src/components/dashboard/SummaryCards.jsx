import { useEffect, useState } from "react";
import { apiFetch } from "../../services/api";

function SummaryCards() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
  apiFetch("/portfolio")
    .then(setPortfolio)
    .catch((err) => {
      console.error(err);
      setPortfolio([]); // prevent crash
    });
}, []);


  if (!portfolio) return <div className="card">Loading portfolio...</div>;

  return (
    <div className="grid-3">
      <div className="card">
        <strong>Total Value</strong>
        <p>₹ {portfolio.totalValue}</p>
      </div>

      <div className="card">
        <strong>Cash Balance</strong>
        <p>₹ {portfolio.cashBalance}</p>
      </div>

      <div className="card">
        <strong>Risk Level</strong>
        <p>{portfolio.riskLevel}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
