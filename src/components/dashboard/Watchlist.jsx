function Watchlist() {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
        <strong>Watchlist</strong>
        <button
          type="button"
          style={{
            border: "none",
            background: "none",
            color: "#387ed1",
            fontSize: "0.8rem",
            cursor: "pointer",
            padding: 0,
          }}
        >
          + Add
        </button>
      </div>

      <table className="table-simple">
        <thead>
          <tr>
            <th align="left">Symbol</th>
            <th align="right">LTP</th>
            <th align="right">Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INFY</td>
            <td align="right">₹ 1,520.40</td>
            <td align="right" style={{ color: "#28a745" }}>
              +1.24%
            </td>
          </tr>
          <tr>
            <td>RELIANCE</td>
            <td align="right">₹ 2,485.00</td>
            <td align="right" style={{ color: "#d9534f" }}>
              -0.38%
            </td>
          </tr>
          <tr>
            <td>TCS</td>
            <td align="right">₹ 3,460.20</td>
            <td align="right" style={{ color: "#28a745" }}>
              +0.75%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
