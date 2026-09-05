import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUser,
  FaMapMarkerAlt,
  FaNetworkWired,
  FaEnvelope,
  FaMobileAlt,
  FaIdCard,
} from "react-icons/fa";
import { ABOUT_HIGHLIGHTS, DATA_POINTS, SITE_CONFIG } from "../../data";

const ICON_MAP = {
  name: <FaUser />,
  address: <FaMapMarkerAlt />,
  carrier: <FaNetworkWired />,
  email: <FaEnvelope />,
  mobile: <FaMobileAlt />,
  id: <FaIdCard />,
};

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-layout">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-tag">About TrueCallCheck</span>
          <h2 className="section-title">
            What is <span className="highlight-text">{SITE_CONFIG.name}</span>?
          </h2>
          <p className="about-desc">
            {SITE_CONFIG.name} is a free, fast, and privacy-focused tool that helps users
            identify unknown phone numbers across Indian telecom circles without needing to login.
            It provides instant caller ID insights including name, address, carrier details, and
            linked contact records—helping you stay safe and informed when receiving unknown calls.
          </p>
          <div className="about-highlights">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <div key={item} className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="about-footer-note">
            <p className="about-provenance-text">
              Open-source project engineered and maintained by{" "}
              <a
                href={SITE_CONFIG.author.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-inline-link"
              >
                {SITE_CONFIG.author.name}
              </a>{" "}
              (imgoutam.dev). Public source repository hosted on{" "}
              <a
                href={SITE_CONFIG.author.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-inline-link"
              >
                GitHub (@GoutamHX)
              </a>
              .
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-data-card"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="data-card-title">What You Get</h3>
          <div className="data-points-grid">
            {DATA_POINTS.map((dp, i) => (
              <motion.div
                key={dp.key}
                className="data-point"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="data-point-icon">{ICON_MAP[dp.key]}</div>
                <span className="data-point-label">{dp.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="data-card-note">
            Currently supports Indian ({SITE_CONFIG.countryCode}) phone numbers only. More
            countries coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
