import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { apiFetch } from "../../services/api";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PortfolioChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    apiFetch("/trades/open")
      .then((trades) => {
        if (!trades.length) return;

        // Group investment by stock
        const investmentMap = {};

        trades.forEach((t) => {
          const value = t.buyPrice * t.quantity;
          investmentMap[t.symbol] =
            (investmentMap[t.symbol] || 0) + value;
        });

        setChartData({
          labels: Object.keys(investmentMap),
          datasets: [
            {
              label: "Portfolio Allocation",
              data: Object.values(investmentMap),
              backgroundColor: [
                "#387ed1",
                "#f39c12",
                "#27ae60",
                "#8e44ad",
                "#e74c3c",
              ],
            },
          ],
        });
      })
      .catch(console.error);
  }, []);

  if (!chartData)
    return (
      <div className="card">
        <strong>Portfolio Allocation</strong>
        <p style={{ marginTop: "0.5rem" }}>
          No open positions to visualize.
        </p>
      </div>
    );

  return (
    <div className="card">
      <strong>Portfolio Allocation</strong>
      <Pie data={chartData} />
    </div>
  );
}

export default PortfolioChart;
