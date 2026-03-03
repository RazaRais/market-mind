import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import About from "./pages/About";
import Support from "./pages/Support";
import SignupSuccess from "./pages/SignupSuccess";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Chatbot from "./pages/Chatbot";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/success" element={<SignupSuccess />} />
        <Route path="/products" element={<Products />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
