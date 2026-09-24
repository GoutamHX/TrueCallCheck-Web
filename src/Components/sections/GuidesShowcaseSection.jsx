import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBookOpen, FaClock, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { TELECOM_GUIDES_DATA } from "../../data/guidesData";

export function GuidesShowcaseSection() {
  const featuredGuides = TELECOM_GUIDES_DATA.slice(0, 3);

  return (
    <section id="guides" className="guides-preview-section" style={{ padding: "70px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
        <span className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <FaBookOpen /> Editorial & Research
        </span>
        <h2 className="section-title" style={{ marginTop: "12px", fontSize: "2rem" }}>
          Telecom Intelligence & <span className="highlight-text">Cyber Safety Guides</span>
        </h2>
        <p className="about-desc" style={{ maxWidth: "680px", margin: "12px auto 0" }}>
          In-depth educational articles, fraud defense strategies, and regulatory analysis written for Indian telecom users.
        </p>
      </div>

      <div
        className="guides-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {featuredGuides.map((guide, idx) => (
          <motion.article
            key={guide.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{
              borderRadius: "16px",
              border: "1px solid var(--border-primary, rgba(255,255,255,0.1))",
              background: "var(--card-bg, rgba(255,255,255,0.03))",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.82rem",
                  color: "var(--primary-color, #38bdf8)",
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                <span>{guide.category}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--text-secondary, #94a3b8)" }}>
                  <FaClock /> {guide.readTime}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.4,
                  marginBottom: "10px",
                  fontWeight: 700,
                  color: "inherit",
                }}
              >
                {guide.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary, #94a3b8)",
                  marginBottom: "20px",
                }}
              >
                {guide.excerpt.slice(0, 140)}...
              </p>
            </div>

            <Link
              to={`/guides/${guide.slug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--primary-color, #38bdf8)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              <span>Read Full Guide</span>
              <FaArrowRight size={12} />
            </Link>
          </motion.article>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <Link
          to="/guides"
          className="nav-quick-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            textDecoration: "none",
          }}
        >
          <FaShieldAlt />
          <span>View All Telecom Guides Hub</span>
        </Link>
      </div>
    </section>
  );
}

export default GuidesShowcaseSection;
