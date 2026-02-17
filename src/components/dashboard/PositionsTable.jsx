import { useEffect, useState } from "react";
import { apiFetch } from "../../services/api";

function PositionsTable() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    apiFetch("/trades/open")
      .then(setTrades)
      .catch((err) => {
        console.error(err);
        setTrades([]);
      });
  }, []);

  const sellPosition = async (tradeId) => {
    const price = prompt("Enter sell price");

    if (!price) return;

    try {
      await apiFetch("/trades/sell", {
        method: "POST",
        body: JSON.stringify({
          tradeId,
          price: Number(price),
        }),
      });

      alert("Position sold successfully");
      window.location.reload();
    } catch (err) {
      alert(err.message || "Sell failed");
    }
  };

  return (
    <div className="card">
      <strong>Open Positions</strong>

      {trades.length === 0 ? (
        <p style={{ marginTop: "0.5rem" }}>No open positions</p>
      ) : (
        <table className="table-simple">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Qty</th>
              <th>Buy Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t) => (
              <tr key={t._id}>
                <td>{t.symbol}</td>
                <td>{t.quantity}</td>
                <td>₹ {t.buyPrice}</td>
                <td>
                  <button
                    className="btn-outline"
                    onClick={() => sellPosition(t._id)}
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PositionsTable;
