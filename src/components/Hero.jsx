const Hero = () => {
  return (
    <section className="section">
      <div className="container" style={styles.wrapper}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Invest smarter with <span style={{ color: "#387ed1" }}>Market Mind</span>
          </h1>
          <p style={styles.subheading}>
            Track markets in real time, simulate trades, and learn stock investing
            with zero risk using our MARKET-trading dashboard.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <button className="btn-primary">Sign up for free</button>
            <button className="btn-outline">View demo</button>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.heroCard}>
            <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.75rem" }}>
              Sample portfolio snapshot
            </p>
            <p style={{ fontSize: "2rem", fontWeight: 600 }}>₹ 2,43,500</p>
            <p style={{ fontSize: "0.85rem", color: "#28a745", marginTop: "0.25rem" }}>
              ▲ +3.8% today
            </p>
            <div style={styles.heroMiniRow}>
              <span>NIFTY 50</span>
              <span>▲ 0.9%</span>
            </div>
            <div style={styles.heroMiniRow}>
              <span>BANK NIFTY</span>
              <span>▼ 0.4%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    minHeight: "60vh",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    fontSize: "2.4rem",
    lineHeight: 1.2,
    marginBottom: "0.75rem",
  },
  subheading: {
    fontSize: "1rem",
    color: "#555",
    maxWidth: "450px",
  },
  heroCard: {
    borderRadius: "16px",
    border: "1px solid #e3e3e3",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "320px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
  },
  heroMiniRow: {
    marginTop: "0.75rem",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.9rem",
    color: "#444",
  },
};

export default Hero;
