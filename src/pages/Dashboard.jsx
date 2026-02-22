import TradePanel from "../components/dashboard/TradePanel";
import SummaryCards from "../components/dashboard/SummaryCards";
import ChartPanel from "../components/dashboard/ChartPanel";
import Watchlist from "../components/dashboard/Watchlist";
import AICoach from "../components/dashboard/AICoach";
import NewsPanel from "../components/dashboard/NewsPanel";
import PositionsTable from "../components/dashboard/PositionsTable";
import OrdersTable from "../components/dashboard/OrdersTable";
import PortfolioChart from "../components/dashboard/PortfolioChart";
import PerformanceChart from "../components/dashboard/PerformanceChart";

function Dashboard() {
  return (
    <div className="section section-light">
      <div className="container">
        <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          Market Dashboard
        </h1>

        {/* TOP SUMMARY */}
        <SummaryCards />

        {/* BUY / SELL PANEL */}
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <TradePanel onTradeComplete={() => window.location.reload()} />
        </div>

        {/* PORTFOLIO ALLOCATION CHART (NEW) */}
        <div style={{ marginTop: "1rem" }}>
          <PortfolioChart />
        </div>
        <div style={{ marginTop: "1rem" }}>
  <PerformanceChart />
</div>

        {/* OTHER CHARTS & WATCHLIST */}
        <ChartPanel />
        <Watchlist />

        {/* AI + NEWS */}
        <AICoach />
        <NewsPanel />

        {/* POSITIONS */}
        <div style={{ marginTop: "1rem" }}>
          <PositionsTable />
        </div>

        {/* ORDERS */}
        <div style={{ marginTop: "1rem" }}>
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
