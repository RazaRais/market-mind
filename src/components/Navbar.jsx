import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
          Market Mind--BITS P
        </Link>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.95rem" }}>
          <Link to="/products">Products</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
          <Link to="/support">Support</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
