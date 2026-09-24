import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Style/Home.css";

const FAQ_ITEMS = [
  {
    question: "How does TrueCallCheck work?",
    answer:
      "TrueCallCheck provides a clean web interface to search Indian 10-digit phone numbers. Our private backend service fetches and filters records from available third-party and public lookup sources to display available name and circle details directly on your screen.",
  },
  {
    question: "Do you save or log my search data?",
    answer:
      "No. From our side, we do not require any login, user registration, or contact synchronization. We do not store your search queries, phone lookups, or IP logs in our databases.",
  },
  {
    question: "Where does the caller details come from?",
    answer:
      "The information shown is aggregated and filtered via third-party web directory sources and previously indexed public records. We do not maintain or claim ownership of third-party upstream data.",
  },
  {
    question: "Is TrueCallCheck free to use?",
    answer:
      "Yes. The web lookup tool is 100% free to use for looking up numbers without paying any subscription fees or installing intrusive apps.",
  },
  {
    question: "What should I do if I get spam or scam calls?",
    answer:
      "Never share OTPs, bank details, or passwords with unknown callers. You can register your number with TRAI's Do Not Disturb (DND) by sending 'START 0' via SMS to 1909, or report cyber fraud on the National Cyber Helpline 1930.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section" style={{ padding: "70px 20px", maxWidth: "960px", margin: "0 auto" }}>
      <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
        <span className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <FaQuestionCircle /> General FAQs
        </span>
        <h2 className="section-title" style={{ marginTop: "12px", fontSize: "2rem" }}>
          Frequently Asked <span className="highlight-text">Questions</span>
        </h2>
        <p className="about-desc" style={{ maxWidth: "600px", margin: "12px auto 0" }}>
          Simple and honest answers about TrueCallCheck and how the lookup service works.
        </p>
      </div>

      <div className="faq-accordion" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
                transition: "all 0.25s ease",
              }}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                style={{
                  width: "100%",
                  padding: "18px 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "inherit",
                  fontSize: "1.02rem",
                  fontWeight: 600,
                }}
                aria-expanded={isOpen}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <FaInfoCircle style={{ color: "var(--primary-color, #38bdf8)", flexShrink: 0 }} />
                  {item.question}
                </span>
                <FaChevronDown
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
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
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      style={{
                        padding: "0 22px 18px 48px",
                        fontSize: "0.93rem",
                        lineHeight: 1.6,
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

      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <Link
          to="/guides"
          className="nav-quick-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            textDecoration: "none",
            fontSize: "0.92rem",
          }}
        >
          <span>Read Scam & Fraud Prevention Guides →</span>
        </Link>
      </div>
    </section>
  );
}

export default FaqSection;
