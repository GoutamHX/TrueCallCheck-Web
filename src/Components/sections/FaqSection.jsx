import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Style/Home.css";

const FAQ_ITEMS = [
  {
    question: "How does TrueCallCheck look up unknown phone numbers?",
    answer:
      "TrueCallCheck queries telecom directory routing networks, National Numbering Plan (NNP) circle allocation tables, and public caller identification registers across India (+91). It correlates caller names, telecom operators (Airtel, Jio, Vi, BSNL), and circle regions without logging or storing your search history.",
  },
  {
    question: "Is TrueCallCheck compliant with Indian privacy laws and DPDP Act?",
    answer:
      "Yes. TrueCallCheck operates strictly on a zero-tracking, read-only principle. Unlike contact-harvesting mobile apps that upload your entire personal address book to third-party databases, TrueCallCheck does not harvest, store, or sell any user contacts or private data.",
  },
  {
    question: "What is TRAI's CNAP (Calling Name Presentation) system?",
    answer:
      "CNAP is a regulatory initiative introduced by the Telecom Regulatory Authority of India (TRAI). It displays the verified subscriber identity (name recorded on the official Customer Acquisition Form / CAF during SIM purchase) directly on the recipient's handset for incoming cellular calls.",
  },
  {
    question: "How can I block spam or report fraudulent calls in India?",
    answer:
      "To stop unsolicited commercial calls, activate Do Not Disturb (DND) by sending 'START 0' via SMS to 1909. If you encounter cyber fraud, bank impersonation, or extortion calls, immediately file a complaint on the National Cyber Crime Portal (cybercrime.gov.in) or call the national cyber helpline 1930.",
  },
  {
    question: "How do Indian telecom circles and Mobile Number Portability (MNP) work?",
    answer:
      "India is divided into 22 Licensed Telecom Service Areas (Circles). While the initial 4 to 5 digits of a 10-digit number indicate its original issuing circle and operator, Nationwide MNP enables subscribers to retain their mobile number while switching providers across circles.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section" style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
        <span className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <FaQuestionCircle /> Telecom & Security FAQs
        </span>
        <h2 className="section-title" style={{ marginTop: "12px", fontSize: "2rem" }}>
          Frequently Asked <span className="highlight-text">Questions</span>
        </h2>
        <p className="about-desc" style={{ maxWidth: "650px", margin: "12px auto 0" }}>
          Clear, expert answers on caller identification, Indian telecom regulations, privacy safeguards, and scam prevention.
        </p>
      </div>

      <div className="faq-accordion" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className={`faq-item ${isOpen ? "is-open" : ""}`}
              style={{
                border: "1px solid var(--border-primary, rgba(255,255,255,0.1))",
                borderRadius: "14px",
                background: "var(--card-bg, rgba(255,255,255,0.03))",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "inherit",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                }}
                aria-expanded={isOpen}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <FaShieldAlt style={{ color: "var(--primary-color, #38bdf8)", flexShrink: 0 }} />
                  {item.question}
                </span>
                <FaChevronDown
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      style={{
                        padding: "0 24px 20px 52px",
                        fontSize: "0.95rem",
                        lineHeight: 1.65,
                        color: "var(--text-secondary, #94a3b8)",
                      }}
                    >
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary, #94a3b8)", marginBottom: "16px" }}>
          Need in-depth cybersecurity advice and telecom tutorials?
        </p>
        <Link
          to="/guides"
          className="nav-quick-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            textDecoration: "none",
          }}
        >
          <span>Explore All 5 Telecom & Safety Guides →</span>
        </Link>
      </div>
    </section>
  );
}

export default FaqSection;
