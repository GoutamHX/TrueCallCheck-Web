import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTelegram,
  FaCode,
  FaMobileAlt,
  FaHeart,
  FaAndroid,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FOOTER_SECTIONS_DATA,
  SOCIAL_LINKS_DATA,
  SITE_CONFIG,
} from "../data";
import "../Style/Footer.css";

const ICON_MAP = {
  android: <FaAndroid />,
  telegram: <FaTelegram />,
  web: <FaMobileAlt />,
  portfolio: <FaExternalLinkAlt />,
  github: <FaGithub />,
  code: <FaCode />,
};

const SOCIAL_ICON_MAP = {
  github: <FaGithub />,
  portfolio: <User />,
  instagram: <AiFillInstagram />,
};

const Footer = ({ darkMode }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const pos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - navbarHeight, behavior: "smooth" });
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
            <motion.div
              className="brand-logo"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMobileAlt className="brand-icon" aria-hidden="true" />
              <h3>{SITE_CONFIG.name}</h3>
            </motion.div>
            <p className="brand-description">
              An open-source developer project by Goutam Septa providing carrier details,
              geographical location, and caller identification.
            </p>
            <div className="social-links">
              {SOCIAL_LINKS_DATA.map((social, index) => (
                <motion.a
                  key={index}
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
            <h4 className="column-title">{FOOTER_SECTIONS_DATA[0].title}</h4>
            <ul className="footer-links">
              {FOOTER_SECTIONS_DATA[0].links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button
                    className="footer-section-link"
                    onClick={() => scrollToSection(link.sectionId)}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Platforms Column */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="column-title">{FOOTER_SECTIONS_DATA[1].title}</h4>
            <ul className="footer-features">
              {FOOTER_SECTIONS_DATA[1].items.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.url ? (
                    <Link
                      to={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={item.text}
                    >
                      {ICON_MAP[item.type]}
                      <span>{item.text}</span>
                    </Link>
                  ) : (
                    <>
                      {ICON_MAP[item.type]}
                      <span>{item.text}</span>
                    </>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Developer Column */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="column-title">{FOOTER_SECTIONS_DATA[2].title}</h4>
            <ul className="developer-links">
              {FOOTER_SECTIONS_DATA[2].links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.text}`}
                  >
                    {ICON_MAP[link.type]}
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="fs-6 fw-light">
            © {SITE_CONFIG.meta.year} {SITE_CONFIG.name}. All rights reserved.
            <span className="separator"> | </span>
            Designed and developed with <FaHeart className="heart-icon" aria-hidden="true" /> by{" "}
            <a
              href={SITE_CONFIG.author.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dev-portfolio-link"
              title="Goutam Septa Developer Portfolio"
            >
              Goutam シ
            </a>
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;