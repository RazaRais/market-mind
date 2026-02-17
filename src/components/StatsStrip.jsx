const StatsStrip = () => {
  return (
    <section className="section section-light">
      <div className="container" style={styles.wrapper}>
        <div>
          <h2 style={styles.heading}>Trusted by learners & investors</h2>
          <p style={styles.text}>
            Market Mind is designed as a teaching tool for universities and
            beginners exploring trading and stock markets.
          </p>
        </div>
        <div style={styles.stats}>
          <div>
            <p style={styles.number}>10K+</p>
            <p style={styles.label}>Market trades simulated*</p>
          </div>
          <div>
            <p style={styles.number}>50+</p>
            <p style={styles.label}>Tracked stocks</p>
          </div>
          <div>
            <p style={styles.number}>Real-time</p>
            <p style={styles.label}>Market data view</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "3rem",
    alignItems: "center",
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

export default StatsStrip;
