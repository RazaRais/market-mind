function AICoach() {
  return (
    <div className="card">
      <strong>AI Market Coach</strong>

      <p style={{ fontSize: "0.85rem", color: "#555", marginTop: "0.4rem" }}>
        Ask questions about your portfolio, risk, and basic market concepts.
      </p>

      <div
        style={{
          marginTop: "0.6rem",
          fontSize: "0.85rem",
          color: "#555",
        }}
      >
        <p>
          <strong>You:</strong> Why is my risk level marked high?
        </p>
        <p>
          <strong>AI:</strong> More than 60% of your portfolio is invested in a
          single stock. Diversification can help reduce risk.
        </p>
      </div>

      <input
        className="input"
        type="text"
        placeholder="Ask the AI coach..."
        style={{ marginTop: "0.6rem", width: "100%" }}
      />
    </div>
  );
}

export default AICoach;
