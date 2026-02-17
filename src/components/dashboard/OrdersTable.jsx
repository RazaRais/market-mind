import { useEffect, useState } from "react";
import { apiFetch } from "../../services/api";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  apiFetch("/orders")
    .then(setOrders)
    .catch((err) => {
      console.error(err);
      setOrders([]); // prevent crash
    });
}, []);

  return (
    <div className="card">
      <strong>Order History</strong>

      <table className="table-simple">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{o.symbol}</td>
              <td>{o.orderType}</td>
              <td>{o.quantity}</td>
              <td>₹ {o.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
