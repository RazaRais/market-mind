import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1 state
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  // Step 2 state
  const [otp, setOtp] = useState("");
  const [otpTouched, setOtpTouched] = useState(false);

  const [fullName, setFullName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  // VALIDATIONS
  const isValidPhone = phone.length === 10 && /^[0-9]+$/.test(phone);
  const isValidOtp = otp.length === 6 && /^[0-9]+$/.test(otp); // demo: 6-digit OTP
  const isValidName = fullName.trim().length >= 3;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // --- STEP 1 HANDLERS ---
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handlePhoneBlur = () => {
    setPhoneTouched(true);
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    if (!isValidPhone) return;

    // DEMO: In a real app, you'd call backend API to send OTP here.
    alert(`Demo: OTP "123456" would be sent to +91 ${phone}`);

    setStep(2);
  };

  // --- STEP 2 HANDLERS ---
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleOtpBlur = () => {
    setOtpTouched(true);
  };

  const handleNameBlur = () => {
    setNameTouched(true);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();

    setOtpTouched(true);
    setNameTouched(true);
    setEmailTouched(true);

    if (!isValidOtp || !isValidName || !isValidEmail) return;

    navigate("/signup/success");
  };

  return (
    <div className="section">
      <div className="container form-layout">
        {/* LEFT INFO PANEL */}
        <div className="form-left">
          <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
            Open a free Market Mind account
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "1.5rem" }}>
            Sign up in a few simple steps and start paper trading in the stock market.
          </p>

          <ul style={{ fontSize: "0.9rem", color: "#555", paddingLeft: "1rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              Practice equity investing with virtual money
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Track real-time prices for selected stocks
            </li>
            <li>Learn risk management</li>
          </ul>

          <p style={{ fontSize: "0.8rem", color: "#999", marginTop: "1.5rem" }}>
            Note: Market Mind is a project for educational purpose.
          </p>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="form-right">
          <div className="form-card">
            {step === 1 && (
              <>
                <p className="step-indicator">Step 1 of 2</p>
                <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
                  Enter your mobile number
                </h2>

                <form onSubmit={handleStep1Submit}>
                  <label className="form-label" htmlFor="phone">
                    Mobile number
                  </label>

                  <div className="phone-row">
                    <div className="phone-prefix">+91</div>
                    <input
                      id="phone"
                      className="input"
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                      onBlur={handlePhoneBlur}
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  {phoneTouched && !isValidPhone && (
                    <div className="error-text">
                      Please enter a valid 10-digit Indian mobile number.
                    </div>
                  )}

                  {!phoneTouched || isValidPhone ? (
                    <div className="helper-text">
                      We&apos;ll send an OTP to this number to verify your identity.
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    className="btn-full"
                    disabled={!isValidPhone}
                  >
                    Get OTP
                  </button>
                </form>

                <div
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.8rem",
                    color: "#777",
                  }}
                >
                  <p>
                    By continuing, you agree to receive OTP and account-related
                    communication on this number.
                  </p>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="step-indicator">Step 2 of 2</p>
                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                  Verify OTP & details
                </h2>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#777",
                    marginBottom: "1rem",
                  }}
                >
                  We&apos;ve sent an OTP to <strong>+91 {phone}</strong>.{" "}
                  <span style={{ color: "#387ed1" }}>
                    (Demo: use OTP <strong>123456</strong>)
                  </span>
                </p>

                <form onSubmit={handleStep2Submit}>
                  <label className="form-label" htmlFor="otp">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    className="input"
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                    onBlur={handleOtpBlur}
                    placeholder="6-digit OTP"
                  />
                  {otpTouched && !isValidOtp && (
                    <div className="error-text">
                      Enter a valid 6-digit OTP (demo: 123456).
                    </div>
                  )}

                  <label
                    className="form-label"
                    htmlFor="fullName"
                    style={{ marginTop: "1rem" }}
                  >
                    Full name
                  </label>
                  <input
                    id="fullName"
                    className="input"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={handleNameBlur}
                    placeholder="As per your PAN / ID"
                  />
                  {nameTouched && !isValidName && (
                    <div className="error-text">
                      Please enter your full name (min 3 characters).
                    </div>
                  )}

                  <label
                    className="form-label"
                    htmlFor="email"
                    style={{ marginTop: "1rem" }}
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="you@example.com"
                  />
                  {emailTouched && !isValidEmail && (
                    <div className="error-text">
                      Please enter a valid email address.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-full"
                    style={{ marginTop: "1.25rem" }}
                    disabled={!isValidOtp || !isValidName || !isValidEmail}
                  >
                    Create account
                  </button>
                </form>

                <button
                  type="button"
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.8rem",
                    background: "none",
                    border: "none",
                    color: "#387ed1",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onClick={() => setStep(1)}
                >
                  ← Edit mobile number
                </button>
              </>
            )}

            {/* STEP 3 — LOGIN LINK */}
            <div
              style={{
                marginTop: "1.5rem",
                textAlign: "center",
                fontSize: "0.85rem",
                color: "#555",
              }}
            >
              Already have an account?{" "}
              <span
                style={{ color: "#387ed1", cursor: "pointer", fontWeight: 500 }}
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
