import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaNetworkWired,
  FaHandHoldingHeart,
  FaMobileAlt,
  FaBolt,
  FaGithub,
} from "react-icons/fa";
import { FEATURES_LIST } from "../../data";

const FEATURE_ICONS = {
  phone: <FaPhoneAlt />,
  carrier: <FaNetworkWired />,
  free: <FaHandHoldingHeart />,
  responsive: <FaMobileAlt />,
  fast: <FaBolt />,
  openSource: <FaGithub />,
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
        <span className="section-tag">Capabilities</span>
        <h2 className="section-title">
          Engineered for <span className="highlight-text">Speed &amp; Accuracy</span>
        </h2>
        <p className="section-subtitle">
          High-throughput telecom routing, zero telemetry persistence, and instant subscriber attribute resolution.
        </p>
      </motion.div>

      <div className="capability-matrix">
        {FEATURES_LIST.map((feature, index) => {
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
                  {FEATURE_ICONS[feature.iconType]}
                </div>
                <span className="tile-index mono-num">0{index + 1}</span>
              </div>
              <h3 className="tile-heading">{feature.title}</h3>
              <p className="tile-description">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturesSection;
