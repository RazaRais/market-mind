const OpenAccountBanner = () => {
  return (
    <section className="section">
      <div className="container" style={styles.banner}>
        <div>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
            Open a free Market Mind account
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#555" }}>
            Start Market trading and exploring market data in minutes.
          </p>
        </div>
        <button className="btn-primary">Sign up now</button>
      </div>
    </section>
  );
};

const styles = {
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
};

export default OpenAccountBanner;
