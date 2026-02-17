const PricingSection = () => {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="section-title">Unbeatable pricing</h2>
        <p className="section-subtitle">
          Market Mind is completely free for educational and demo use.  
          No brokerage, no hidden charges – because trades are simulated.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.price}>₹0</h3>
            <p style={styles.cardTitle}>Account opening</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.price}>₹0</h3>
            <p style={styles.cardTitle}>Platform charges</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.price}>₹0</h3>
            <p style={styles.cardTitle}>Per order (equity)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
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

export default PricingSection;
