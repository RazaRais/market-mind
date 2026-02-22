import { useState } from "react";

const faqs = [
  {
    q: "Is Market Mind a real trading platform?",
    a: "No. Market Mind is a student-built, educational paper-trading platform. All trades are simulated and use virtual money only.",
  },
  {
    q: "Where does the stock data come from?",
    a: "Stock and market data is planned to be fetched from third-party stock APIs. In early versions, some data may be mocked or delayed for demo purposes.",
  },
  {
    q: "Can I lose real money using Market Mind?",
    a: "No. All trading in Market Mind is simulated. The goal is to learn market behaviour and risk management without financial loss.",
  },
  {
    q: "What is the AI financial coach?",
    a: "It is an AI chatbot that explains market concepts, warns about risky behaviour, and answers basic finance questions in simple language.",
  },
  {
    q: "How can I report a bug or request a feature?",
    a: "You can raise a ticket using the support form (planned) or by contacting the developer via email.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onToggle}>
        <span>{item.q}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{item.a}</div>}
    </div>
  );
}

function Support() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="section section-light">
      <div className="container" style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
        {/* LEFT: SEARCH + FAQ */}
        <div style={{ flex: 2, minWidth: "280px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Support</h1>
          <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "1rem" }}>
            Find answers to common questions about Market Mind, or reach out for help.
          </p>

          <input
            type="text"
            placeholder="Search help articles (UI only)"
            className="input"
            style={{ width: "100%", marginBottom: "1rem" }}
          />

          <div>
            {faqs.map((item, idx) => (
              <FaqItem
                key={idx}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: CONTACT / TICKET */}
        <div
          style={{
            flex: 1,
            minWidth: "260px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              border: "1px solid #e3e3e3",
              borderRadius: "12px",
              padding: "1.5rem",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Need more help?
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.8rem" }}>
              If you didn&apos;t find what you were looking for, you can raise a support
              ticket or email the developer directly.
            </p>
            <p style={{ fontSize: "0.85rem", color: "#555" }}>
              Email:{" "}
              <a href="mailto:student@example.com" style={{ color: "#387ed1" }}>
                2022ebcs007@online.bits-pilani.ac.in
              </a>
            </p>
            <p style={{ fontSize: "0.8rem", color: "#999", marginTop: "0.8rem" }}>
              (In the final version, this card can become a full ticket form with
              subject, category, and description fields.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
