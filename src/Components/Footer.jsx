import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaAndroid,
  FaTelegram,
  FaExternalLinkAlt,
  FaCode,
  FaHeart,
  FaShieldAlt,
  FaChevronRight,
  FaBookOpen,
  FaEnvelope,
  FaRobot,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { User } from "lucide-react";
import {
  SOCIAL_LINKS_DATA,
  SITE_CONFIG,
} from "../data";
import { useAuthorAttestation } from "../hooks/useAuthorAttestation";
import "../Style/Footer.css";

const SOCIAL_ICON_MAP = {
  github: <FaCode />,
  portfolio: <User />,
  instagram: <AiFillInstagram />,
};

const Footer = ({ darkMode }) => {
  const verifiedAuthor = useAuthorAttestation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const pos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - navbarHeight, behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <motion.footer
      className={`footer ${darkMode ? "dark" : "light"}`}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="contentinfo"
    >
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <motion.div
            className="footer-brand"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="brand-logo" style={{ textDecoration: "none" }}>
              <FaMobileAlt className="brand-icon" aria-hidden="true" />
              <h3>{SITE_CONFIG.name}</h3>
            </Link>
            <p className="brand-description">
              An open-source telecom intelligence and caller identification directory for India. Zero contact harvesting, 100% privacy-first.
            </p>
            {/* Clean Social Links Only */}
            <div className="social-links">
              {SOCIAL_LINKS_DATA.map((social) => (
                <motion.a
                  key={social.type || social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Visit our ${social.label}`}
                >
                  {SOCIAL_ICON_MAP[social.type]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="column-title">Quick Links</h4>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>Number Lookup</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <button
                  type="button"
                  className="footer-section-link"
                  onClick={() => scrollToSection("features")}
                  aria-label="Features section"
                >
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>Features</span>
                </button>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/about" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>About Us</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/contact" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>Contact Support</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Telecom Guides Column */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="column-title">Telecom Research</h4>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/guides" className="footer-section-link">
                  <FaBookOpen className="section-chevron text-primary" aria-hidden="true" />
                  <span>All Telecom Guides</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/guides/identifying-spam-and-fraud-calls-india" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>Spam & Fraud Defense</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/guides/understanding-indian-telecom-circles-and-number-series" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>DoT Numbering Series</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/guides/trai-dnd-national-customer-preference-register" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>TRAI DND 1909 Guide</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="column-title">Compliance & Legal</h4>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/privacy-policy" className="footer-section-link">
                  <FaShieldAlt className="section-chevron text-info" aria-hidden="true" />
                  <span>Privacy Policy</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/terms" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>Terms of Service</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to="/disclaimer" className="footer-section-link">
                  <FaChevronRight className="section-chevron" aria-hidden="true" />
                  <span>Legal Disclaimer</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="mailto:hello@imgoutam.dev" className="footer-section-link">
                  <FaEnvelope className="section-chevron" aria-hidden="true" />
                  <span>hello@imgoutam.dev</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Platforms & Developer Column */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h4 className="column-title">Platforms & Code</h4>
            <ul className="developer-links">
              {/* Telegram Channel */}
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href={SITE_CONFIG.links.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram Channel"
                >
                  <FaTelegram className="text-info" />
                  <span>Telegram Channel</span>
                </a>
              </motion.li>
              {/* Telegram Bot */}
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href={SITE_CONFIG.links.telegramBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram Bot"
                >
                  <FaRobot />
                  <span>Telegram Bot</span>
                </a>
              </motion.li>
              {/* Android APK */}
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href={SITE_CONFIG.links.androidApk}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Android APK"
                >
                  <FaAndroid />
                  <span>Android App</span>
                </a>
              </motion.li>
              {/* Portfolio */}
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href={SITE_CONFIG.author.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Developer Portfolio"
                >
                  <User size={14} />
                  <span>Portfolio</span>
                </a>
              </motion.li>
              {/* Source Code */}
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href={SITE_CONFIG.links.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <FaCode />
                  <span>Source Code</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Modern Colophon Bottom Bar */}
        <motion.div
          className="footer-bottom-bar"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="bottom-bar-left">
            <span className="copyright-statement">
              © {SITE_CONFIG.meta.year} {SITE_CONFIG.name}. Licensed under MIT. Contact: <a href="mailto:hello@imgoutam.dev" className="text-secondary">hello@imgoutam.dev</a>
            </span>
            <div className="bottom-pills-row">
              <span className="bottom-meta-pill">
                <FaShieldAlt className="pill-icon" aria-hidden="true" />
                Zero Request Logging
              </span>
              <span className="bottom-meta-pill">
                <span className="live-route-dot" aria-hidden="true" />
                Direct Gateway Route (+91 IND)
              </span>
            </div>
          </div>

          <div className="bottom-bar-right">
            <div className="dev-signature-card" data-author-attestation="verified">
              <span className="dev-signature-label">
                Crafted with <FaHeart className="heart-icon" aria-hidden="true" /> by
              </span>
              <a
                href={verifiedAuthor.url || SITE_CONFIG.author.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dev-signature-link"
                title={`${verifiedAuthor.name || "Goutam Septa"} — Software Engineer Portfolio`}
              >
                <span className="dev-name">{verifiedAuthor.name || "Goutam Septa"}</span>
                <FaExternalLinkAlt className="dev-link-icon" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
