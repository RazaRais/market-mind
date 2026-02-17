import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="section">
      <div className="container">
        {/* HERO */}
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Market Mind products
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#555", maxWidth: "600px" }}>
          A full-stack stock monitoring and paper-trading toolkit built for students,
          beginner investors, and finance enthusiasts.
        </p>

        {/* GRID */}
        <div style={styles.grid}>
          {/* 1. REAL-TIME DASHBOARD */}
          <div style={styles.card}>
            <h2 style={styles.title}>Realtime Market Dashboard</h2>
            <p style={styles.text}>
              View live stock prices, basic charts, and key metrics for your favourite
              symbols in one place.
            </p>
            <ul style={styles.list}>
              <li>Live watchlist with price & % change</li>
              <li>Quick overview of index performance</li>
              <li>Mini price chart placeholders (later: actual charts)</li>
            </ul>
            <Link to="/dashboard" style={styles.link}>
              Go to dashboard →
            </Link>
          </div>

          {/* 2. PAPER TRADING TERMINAL */}
          <div style={styles.card}>
            <h2 style={styles.title}>Virtual Trading Terminal</h2>
            <p style={styles.text}>
              Simulate buy/sell orders without real money to understand market
              behaviour and your own decisions.
            </p>
            <ul style={styles.list}>
              <li>Place virtual buy/sell orders</li>
              <li>Track open positions & P&amp;L</li>
              <li>Practice strategies safely</li>
            </ul>
            <span style={styles.badge}>Feature</span>
          </div>

          {/* 3. PORTFOLIO & ANALYTICS */}
          <div style={styles.card}>
            <h2 style={styles.title}>Portfolio & Analytics</h2>
            <p style={styles.text}>
              See your simulated holdings, allocation, and profits over time through a
              clean analytics dashboard.
            </p>
            <ul style={styles.list}>
              <li>Portfolio value & daily returns</li>
              <li>Sector-wise allocation (future)</li>
              <li>Basic performance analytics</li>
            </ul>
            <span style={styles.badgeSecondary}>Coming soon</span>
          </div>

          {/* 4. AI FINANCIAL COACH */}
          <div style={styles.card}>
            <h2 style={styles.title}>AI Financial Coach</h2>
            <p style={styles.text}>
              Chat with an AI assistant for simple explanations, risk awareness, and
              concept clarification.
            </p>
            <ul style={styles.list}>
              <li>Ask doubts in plain language</li>
              <li>Risk warnings based on your trades</li>
              <li>Educational tips & definitions</li>
            </ul>
            <span style={styles.badge}>AI Powered</span>
          </div>

          {/* 5. NEWS & INSIGHTS */}
          <div style={styles.card}>
            <h2 style={styles.title}>News & Insights Feed</h2>
            <p style={styles.text}>
              View curated market headlines so you can link price moves with real
              events and sentiment.
            </p>
            <ul style={styles.list}>
              <li>Market headlines from APIs</li>
              <li>Stock-specific news sections</li>
              <li>Education-focused “What this means” notes</li>
            </ul>
            <span style={styles.badgeSecondary}>Coming soon</span>
          </div>

          {/* 6. LEARNING MODE */}
          <div style={styles.card}>
            <h2 style={styles.title}>Learning Mode</h2>
            <p style={styles.text}>
              Structured learning journeys inspired by books like <em>Rich Dad Poor Dad</em>{" "}
              and <em>The Richest Man in Babylon</em>.
            </p>
            <ul style={styles.list}>
              <li>Beginner-friendly lessons</li>
              <li>Interactive tasks using paper trades</li>
              <li>Progress tracking (future)</li>
            </ul>
            <span style={styles.badgeSecondary}>Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.75rem",
  },
  card: {
    border: "1px solid #e3e3e3",
    borderRadius: "12px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  text: {
    fontSize: "0.9rem",
    color: "#555",
  },
  list: {
    fontSize: "0.85rem",
    color: "#555",
    paddingLeft: "1.1rem",
    marginTop: "0.4rem",
  },
  badge: {
    display: "inline-block",
    marginTop: "0.6rem",
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "999px",
    backgroundColor: "#387ed1",
    color: "#fff",
    alignSelf: "flex-start",
  },
  badgeSecondary: {
    display: "inline-block",
    marginTop: "0.6rem",
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "999px",
    backgroundColor: "#f0f0f0",
    color: "#555",
    alignSelf: "flex-start",
  },
  link: {
    marginTop: "0.7rem",
    fontSize: "0.85rem",
    color: "#387ed1",
    fontWeight: 600,
  },
};

export default Products;
