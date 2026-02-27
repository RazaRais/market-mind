import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api"; // adjust path if needed

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidPhone = phone.length === 10 && /^[0-9]+$/.test(phone);
  const isValidOtp = otp === "123456"; // demo OTP
  const isValidName = fullName.trim().length >= 3;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password.length >= 6;

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!isValidPhone) return;
    alert(`Demo: OTP "123456" sent to +91 ${phone}`);
    setStep(2);
  };

  const handleStep2Submit = async (e) => {
    e.preventDefault();

    if (
      !isValidOtp ||
      !isValidName ||
      !isValidEmail ||
      !isValidPassword
    )
      return;

    try {
      await apiFetch("/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          fullName,
          email,
          password,
          phone,
        }),
      });

      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="section">
      <div className="container form-layout">

        <div className="form-left">
          <h1>Open a free Market Mind account</h1>
          <p>Practice stock trading with virtual money.</p>
        </div>

        <div className="form-right">
          <div className="form-card">

            {step === 1 && (
              <>
                <h2>Enter Mobile Number</h2>
                <form onSubmit={handleStep1Submit}>
                  <input
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                  />
                  <button
                    type="submit"
                    className="btn-full"
                    disabled={!isValidPhone}
                  >
                    Get OTP
                  </button>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Verify OTP & Create Account</h2>

                <form onSubmit={handleStep2Submit}>
                  <input
                    className="input"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP (123456)"
                  />

                  <input
                    className="input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                  />

                  <input
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />

                  <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password (min 6 chars)"
                  />

                  <button
                    type="submit"
                    className="btn-full"
                    disabled={
                      !isValidOtp ||
                      !isValidName ||
                      !isValidEmail ||
                      !isValidPassword
                    }
                  >
                    Create Account
                  </button>
                </form>
              </>
            )}

            <div style={{ marginTop: "1rem" }}>
              Already have an account?{" "}
              <span
                style={{ color: "#387ed1", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;