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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Privacy</span>
        <h2 className="section-title">
          Privacy &amp; <span className="gradient-text">Transparency</span>
        </h2>
        <p className="section-subtitle">
          We take your privacy seriously. {SITE_CONFIG.name} is designed to be transparent
          and respectful of your personal data.
        </p>
      </motion.div>

      <div className="privacy-grid">
        {PRIVACY_POINTS.map((item, index) => (
          <motion.div
            key={item.title}
            className="privacy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="privacy-icon-wrapper">{PRIVACY_ICONS[item.iconType]}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PrivacySection;
