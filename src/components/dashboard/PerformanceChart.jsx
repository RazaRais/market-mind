import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { apiFetch } from "../../services/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function PerformanceChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiFetch("/ai/performance")
      .then((res) => {
        setData({
          labels: res.map((r) =>
            new Date(r.date).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Cumulative PnL",
              data: res.map((r) => r.cumulativePnL),
              borderColor: "#27ae60",
              backgroundColor: "rgba(39,174,96,0.1)",
              tension: 0.3,
              fill: true,
            },
          ],
        });
      })
      .catch(console.error);
  }, []);

  if (!data) return <div className="card">Loading performance...</div>;

  return (
    <div className="analytics-card">
      <h3 style={{ marginBottom: "1rem" }}>
        Portfolio Performance
      </h3>

      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                color: "#eee",
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default PerformanceChart;