function ChartPanel() {
  return (
    <div className="card" style={{ minHeight: "220px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>NIFTY 50</strong>
          <p style={{ fontSize: "0.8rem", color: "#777" }}>
            Market index chart (placeholder)
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontWeight: 600 }}>22,540.30</p>
          <p style={{ fontSize: "0.8rem", color: "#28a745" }}>+0.92%</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "0.75rem",
          height: "150px",
          border: "1px dashed #ccc",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
          color: "#999",
        }}
      >
        Chart API integration point
      </div>
    </div>
  );
}

export default ChartPanel;
