const EducationSection = () => {
  return (
    <section className="section section-light">
      <div className="container" style={styles.wrapper}>
        <div style={{ flex: 1 }}>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            Free Market education
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#555", marginTop: "0.75rem" }}>
            Learn the basics of equity, risk management, and portfolio building
            through interactive modules, inspired by classic books like
            <em> Rich Dad Poor Dad</em> and <em>The Richest Man in Babylon</em>.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#387ed1", marginTop: "1rem" }}>
            Coming soon: integrated lessons inside the dashboard.
          </p>
        </div>
        <div style={styles.box}>
          <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
            AI-powered coach
          </p>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            Ask questions about risk, diversification, and long-term investing.
            Get friendly explanations and warnings based on your simulated
            trades.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    gap: "3rem",
    alignItems: "center",
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

export default EducationSection;
