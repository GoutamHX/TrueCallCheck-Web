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
import { FEATURES_LIST, SITE_CONFIG } from "../../data";

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Features</span>
        <h2 className="section-title">
          Why Choose <span className="gradient-text">{SITE_CONFIG.name}</span>?
        </h2>
        <p className="section-subtitle">
          Powerful tools to identify callers, verify numbers, and stay safe — completely free
        </p>
      </motion.div>

      <div className="features-grid">
        {FEATURES_LIST.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="feature-icon">{FEATURE_ICONS[feature.iconType]}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
