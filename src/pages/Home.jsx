// Hero section component
import { Link } from "react-router-dom";


function HeroSection() {
  return (
    <div className="section">
      <div className="container" style={heroStyles.wrapper}>
        {/* LEFT TEXT */}
        <div style={heroStyles.left}>
          <h1 style={heroStyles.heading}>
            Invest smarter with <span style={{ color: "#387ed1" }}>Market Mind</span>
          </h1>

          <p style={heroStyles.subheading}>
            Track the stock market in real-time, simulate trades, and learn investing —
            all without risking real money.
          </p>

          <Link to="/signup">
  <button style={heroStyles.btn}>Get Started — Free</button>
</Link>

        </div>

        {/* RIGHT CARD */}
        <div style={heroStyles.right}>
          <div style={heroStyles.heroCard}>
            <p style={heroStyles.cardTitle}>Portfolio Value</p>
            <p style={heroStyles.bigNumber}>₹ 2,43,500</p>
            <p style={heroStyles.greenText}>▲ +3.8% today</p>

            <div style={heroStyles.row}>
              <span>NIFTY 50</span>
              <span style={heroStyles.greenText}>▲ +0.92%</span>
            </div>

            <div style={heroStyles.row}>
              <span>BANK NIFTY</span>
              <span style={{ color: "#d9534f" }}>▼ -0.41%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const heroStyles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
  },
  subheading: {
    fontSize: "1rem",
    color: "#555",
    maxWidth: "420px",
    lineHeight: "1.5rem",
    marginBottom: "1.5rem",
  },
  btn: {
    padding: "0.9rem 1.8rem",
    backgroundColor: "#387ed1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  heroCard: {
    border: "1px solid #e3e3e3",
    borderRadius: "16px",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "300px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "0.9rem",
    color: "#777",
    marginBottom: "0.5rem",
  },
  bigNumber: {
    fontSize: "2rem",
    fontWeight: 600,
  },
  greenText: {
    color: "#28a745",
    marginBottom: "0.8rem",
    fontSize: "0.9rem",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },
};

// Stats strip
function StatsSection() {
  return (
    <div className="section section-light">
      <div className="container" style={statsStyles.wrapper}>
        <div>
          <h2 style={statsStyles.heading}>Built for learners & investors</h2>
          <p style={statsStyles.text}>
            Market Mind is a demo trading platform designed for students and
            beginners to practice stock investing with virtual money.
          </p>
        </div>
        <div style={statsStyles.stats}>
          <div>
            <p style={statsStyles.number}>10K+</p>
            <p style={statsStyles.label}>paper trades executed*</p>
          </div>
          <div>
            <p style={statsStyles.number}>50+</p>
            <p style={statsStyles.label}>stocks to experiment with</p>
          </div>
          <div>
            <p style={statsStyles.number}>Real-time</p>
            <p style={statsStyles.label}>price tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const statsStyles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "3rem",
    alignItems: "center",
    flexWrap: "wrap",
  },
  heading: {
    fontSize: "1.6rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.95rem",
    color: "#555",
    maxWidth: "380px",
  },
  stats: {
    display: "flex",
    gap: "3rem",
    flexWrap: "wrap",
  },
  number: {
    fontSize: "1.4rem",
    fontWeight: 600,
  },
  label: {
    fontSize: "0.85rem",
    color: "#555",
  },
};

// Pricing section
function PricingSection() {
  return (
    <div className="section">
      <div className="container center">
        <h2 className="section-title">Simple, free pricing</h2>
        <p className="section-subtitle">
          Market Mind is completely free for educational and demo use.
          No brokerage, no hidden fees — all trades are simulated.
        </p>

        <div style={pricingStyles.cards}>
          <div style={pricingStyles.card}>
            <h3 style={pricingStyles.price}>₹0</h3>
            <p style={pricingStyles.cardTitle}>Account opening</p>
          </div>
          <div style={pricingStyles.card}>
            <h3 style={pricingStyles.price}>₹0</h3>
            <p style={pricingStyles.cardTitle}>Platform usage</p>
          </div>
          <div style={pricingStyles.card}>
            <h3 style={pricingStyles.price}>₹0</h3>
            <p style={pricingStyles.cardTitle}>Per order (equity)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const pricingStyles = {
  cards: {
    marginTop: "2.5rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  card: {
    minWidth: "180px",
    borderRadius: "12px",
    border: "1px solid #e3e3e3",
    padding: "1.5rem 1.8rem",
  },
  price: {
    fontSize: "2rem",
    marginBottom: "0.25rem",
  },
  cardTitle: {
    fontSize: "0.9rem",
    color: "#555",
  },
};

// Education / learning section
function EducationSection() {
  return (
    <div className="section section-light">
      <div className="container" style={eduStyles.wrapper}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
            Learn markets the right way
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "0.75rem" }}>
            Combine classic financial wisdom from books like
            <em> Rich Dad Poor Dad</em> and <em>The Richest Man in Babylon</em>
            with hands-on practice using our paper-trading dashboard.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#387ed1" }}>
            Coming soon: in-app lessons, quizzes, and progress tracking.
          </p>
        </div>

        <div style={eduStyles.box}>
          <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>AI market coach</p>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            Ask questions about stocks, risk, and diversification in simple language.
            Get friendly explanations based on your simulated portfolio moves.
          </p>
        </div>
      </div>
    </div>
  );
}

const eduStyles = {
  wrapper: {
    display: "flex",
    gap: "3rem",
    alignItems: "center",
    flexWrap: "wrap",
  },
  box: {
    flex: 1,
    borderRadius: "16px",
    border: "1px solid #e3e3e3",
    padding: "1.5rem",
    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
    fontSize: "0.9rem",
  },
};

// Final CTA
function CtaSection() {
  return (
    <div className="section">
      <div className="container" style={ctaStyles.banner}>
        <div>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
            Open your free Market Mind account
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#555" }}>
            Start paper trading, monitoring markets, and learning investing in minutes.
          </p>
        </div>
        <Link to="/signup">
  <button style={ctaStyles.btn}>Sign up now</button>
</Link>

      </div>
    </div>
  );
}

const ctaStyles = {
  banner: {
    borderRadius: "16px",
    border: "1px solid #e3e3e3",
    padding: "2rem 2.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  btn: {
    padding: "0.9rem 1.8rem",
    backgroundColor: "#387ed1",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: 600,
    cursor: "pointer",
  },
};

// Main Home component rendering all sections
function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PricingSection />
      <EducationSection />
      <CtaSection />
    </>
  );
}

export default Home;
