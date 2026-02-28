import { useState, useEffect } from "react";
import { apiFetch } from "../../services/api";
import { getLivePrice } from "../../services/stockApi";

function TradePanel({ onTradeComplete }) {
  const [symbol, setSymbol] = useState("INFY");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1500);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [priceLoading, setPriceLoading] = useState(false);

  /* 
     LIVE PRICE FETCH 
     */
  useEffect(() => {
    if (!symbol) return;

    setPriceLoading(true);

    const timer = setTimeout(async () => {
      try {
        const livePrice = await getLivePrice(symbol);
        setPrice(Number(livePrice).toFixed(2));
      } catch (err) {
        console.error(err.message);
      } finally {
        setPriceLoading(false);
      }
    }, 800); // debounce to avoid API limit

    return () => clearTimeout(timer);
  }, [symbol]);

  /* 
     BUY / SELL HANDLER */
  const placeOrder = async (type) => {
    setLoading(true);
    setError("");

    try {
      const endpoint =
        type === "BUY" ? "/trades/buy" : "/trades/sell";

      await apiFetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          symbol,
          quantity,
          price,
        }),
      });

      alert(`${type} order placed successfully`);

      if (onTradeComplete) onTradeComplete();
    } catch (err) {
      setError(err.message || "Trade failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <strong>Trade</strong>

      <div style={{ marginTop: "0.75rem" }}>
        {/* SYMBOL */}
        <label className="form-label">Stock Symbol</label>
        <input
          className="input"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        />

        {/* QUANTITY */}
        <label className="form-label" style={{ marginTop: "0.5rem" }}>
          Quantity
        </label>
        <input
          className="input"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        {/* PRICE */}
        <label className="form-label" style={{ marginTop: "0.5rem" }}>
          Price {priceLoading && <span style={{ fontSize: "0.75rem" }}>(live)</span>}
        </label>
        <input
          className="input"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        {/* ERROR */}
        {error && (
          <div className="error-text" style={{ marginTop: "0.5rem" }}>
            {error}
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
          <button
            className="btn-full"
            disabled={loading}
            onClick={() => placeOrder("BUY")}
          >
            Buy
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default TradePanel;
