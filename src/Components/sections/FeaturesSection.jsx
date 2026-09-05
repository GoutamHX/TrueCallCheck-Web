import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaNetworkWired,
  FaHandHoldingHeart,
  FaMobileAlt,
  FaBolt,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import { FEATURES_LIST } from "../../data";

const FEATURE_METAS = {
  phone: {
    icon: <FaPhoneAlt />,
    category: "IDENTITY MATRIX",
    badge: "Instant Dossier",
    chips: ["Full Name", "Father's Name", "Address", "Alt Numbers"],
  },
  carrier: {
    icon: <FaNetworkWired />,
    category: "TELECOM GATEWAY",
    badge: "22 Circles Mapped",
    chips: ["Jio", "Airtel", "Vi", "BSNL"],
  },
  free: {
    icon: <FaHandHoldingHeart />,
    category: "PUBLIC UTILITY",
    badge: "Zero Hidden Fees",
    chips: ["No Subscription", "Unlimited Lookups", "Always Free"],
  },
  responsive: {
    icon: <FaMobileAlt />,
    category: "CROSS-PLATFORM",
    badge: "Universal Web",
    chips: ["Mobile PWA", "Tablet View", "Desktop Console"],
  },
  fast: {
    icon: <FaBolt />,
    category: "PERFORMANCE",
    badge: "~140ms Latency",
    chips: ["Edge Ingestion", "Sub-Second Query", "Zero Lag"],
  },
  openSource: {
    icon: <FaGithub />,
    category: "TRANSPARENCY",
    badge: "MIT License",
    chips: ["Public Repo", "Community Audited", "Zero Tracking"],
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <span className="section-tag">System Capabilities</span>
        <h2 className="section-title">
          Engineered for <span className="highlight-text">Speed, Precision &amp; Trust</span>
        </h2>
        <p className="section-subtitle">
          Direct carrier gateway pipelines, multi-attribute subscriber resolution, and zero-telemetry ephemeral lookups.
        </p>
      </motion.div>

      <div className="capability-matrix">
        {FEATURES_LIST.map((feature, index) => {
          const meta = FEATURE_METAS[feature.iconType] || {
            icon: <FaCheckCircle />,
            category: "CAPABILITY",
            badge: "Verified",
            chips: [],
          };
          const isFeatured = index === 0 || index === 1;

          return (
            <motion.div
              key={feature.title}
              className={`capability-tile${isFeatured ? " is-prominent" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <div className="tile-top-bar">
                <div className="tile-icon-box" aria-hidden="true">
                  {meta.icon}
                </div>
                <div className="tile-meta-right">
                  <span className="tile-category-tag mono-num">{meta.category}</span>
                  <span className="tile-index mono-num">0{index + 1}</span>
                </div>
              </div>

              <div className="tile-body">
                <div className="tile-heading-row">
                  <h3 className="tile-heading">{feature.title}</h3>
                  <span className="tile-status-badge mono-num">{meta.badge}</span>
                </div>
                <p className="tile-description">{feature.description}</p>
              </div>

              {meta.chips && meta.chips.length > 0 && (
                <div className="tile-chips-strip">
                  {meta.chips.map((chip, ci) => (
                    <span key={ci} className="tile-chip">
                      <span className="chip-bullet">·</span> {chip}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturesSection;
