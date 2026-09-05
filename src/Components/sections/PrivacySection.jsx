import React from "react";
import { motion } from "framer-motion";
import {
  FaEyeSlash,
  FaUserCheck,
  FaCookieBite,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { PRIVACY_POINTS, SITE_CONFIG } from "../../data";

const PRIVACY_ICONS = {
  eyeSlash: <FaEyeSlash />,
  userCheck: <FaUserCheck />,
  cookieBite: <FaCookieBite />,
  heart: <FaHandHoldingHeart />,
};

export function PrivacySection() {
  return (
    <section id="privacy" className="privacy-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <span className="section-tag">Privacy Protocol</span>
        <h2 className="section-title">
          Transparent by <span className="highlight-text">Architecture</span>
        </h2>
        <p className="section-subtitle">
          Unlike conventional caller ID applications, {SITE_CONFIG.name} does not harvest your address book, sell search telemetry, or store lookup histories.
        </p>
      </motion.div>

      <div className="protocol-ledger">
        {PRIVACY_POINTS.map((item, index) => (
          <motion.div
            key={item.title}
            className="protocol-row"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.3 }}
          >
            <div className="protocol-meta">
              <span className="protocol-code mono-num">0{index + 1}</span>
              <div className="protocol-icon-cell" aria-hidden="true">
                {PRIVACY_ICONS[item.iconType]}
              </div>
            </div>
            <div className="protocol-details">
              <h3 className="protocol-title">{item.title}</h3>
              <p className="protocol-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PrivacySection;
