import { Link } from "react-router-dom";

function SignupSuccess() {
  return (
    <div className="section">
      <div className="container" style={styles.wrapper}>
        <div style={styles.icon}>✅</div>
        <h1 style={styles.title}>Account created successfully</h1>
        <p style={styles.text}>
          Your Market Mind demo account is now set up. You can start exploring
          the dashboard, tracking stocks, and practicing paper trades.
        </p>

        <div style={styles.buttons}>
          <Link to="/products">
            <button style={styles.primaryBtn}>Go to products</button>
          </Link>

          <Link to="/">
            <button style={styles.secondaryBtn}>Back to home</button>
          </Link>
        </div>

        <p style={styles.note}>
          Note: This is a student project and not a real trading/brokerage
          account.
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "600px",
    textAlign: "center",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1.2rem",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "0.7rem 1.6rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#387ed1",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "0.7rem 1.6rem",
    borderRadius: "6px",
    border: "1px solid #387ed1",
    backgroundColor: "#fff",
    color: "#387ed1",
    fontWeight: 600,
    cursor: "pointer",
  },
  note: {
    fontSize: "0.8rem",
    color: "#888",
    marginTop: "0.5rem",
  },
};

export default SignupSuccess;
