import React from "react";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaRobot,
  FaGlobe,
  FaDownload,
  FaTelegram,
  FaShieldAlt,
} from "react-icons/fa";
import { PLATFORMS_DATA } from "../../data";

export function PlatformsSection() {
  return (
    <section id="platforms" className="get-app-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <span className="section-tag">Client Ecosystem</span>
        <h2 className="section-title">
          Access Across <span className="highlight-text">Every Client</span>
        </h2>
        <p className="section-subtitle">
          Execute directory lookups across modern web browsers, native Android installations, or automated Telegram messaging bots.
        </p>
      </motion.div>

      <div className="platform-cards">
        {PLATFORMS_DATA.map((plat, idx) => {
          if (plat.isCurrent) {
            return (
              <motion.div
                key={plat.id}
                className="platform-card active-platform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1) }}
              >
                <div className="active-badge-ribbon">You are here</div>
                <div className="platform-icon-wrapper web-icon-bg">
                  <FaGlobe className="platform-icon" />
                </div>
                <div className="platform-info">
                  <span className="platform-badge">{plat.badge}</span>
                  <h3 className="platform-name">{plat.name}</h3>
                  <p className="platform-desc">{plat.desc}</p>
                </div>
                <div className="platform-cta">
                  <span className="cta-btn web-cta">
                    <FaShieldAlt /> {plat.ctaText}
                  </span>
                </div>
              </motion.div>
            );
          }

          const isAndroid = plat.id === "android";
          return (
            <motion.a
              key={plat.id}
              href={plat.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div
                className={`platform-icon-wrapper ${
                  isAndroid ? "android-icon-bg" : "telegram-icon-bg"
                }`}
              >
                {isAndroid ? (
                  <FaAndroid className="platform-icon" />
                ) : (
                  <FaRobot className="platform-icon" />
                )}
              </div>
              <div className="platform-info">
                <span className="platform-badge">{plat.badge}</span>
                <h3 className="platform-name">{plat.name}</h3>
                <p className="platform-desc">{plat.desc}</p>
              </div>
              <div className="platform-cta">
                <span className={`cta-btn ${isAndroid ? "android-cta" : "telegram-cta"}`}>
                  {isAndroid ? <FaDownload /> : <FaTelegram />}{" "}
                  {plat.ctaText}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

export default PlatformsSection;
