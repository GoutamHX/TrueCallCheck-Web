// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTelegram,
  FaCode,
  FaInfoCircle,
  FaMobileAlt,
  FaCheckCircle,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "../Style/Footer.css";

const Footer = ({ darkMode }) => {
  // Footer data embedded in component
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "#home" },
        { name: "Features", url: "#features" },
        { name: "API Docs", url: "#api" },
        { name: "Pricing", url: "#pricing" },
      ],
    },
    {
      title: "Features",
      items: [
        { icon: <FaCheckCircle />, text: "Carrier Identification" },
        { icon: <FaCheckCircle />, text: "Location Tracking" },
        { icon: <FaCheckCircle />, text: "Caller Name Detection" },
        { icon: <FaCheckCircle />, text: "Spam Detection" },
      ],
    },
    {
      title: "Developer",
      links: [
        { icon: <FaGithub />, text: "GitHub", url: "https://github.com/GoutamHX" },
        { icon: <FaTelegram />, text: "Telegram", url: "https://telegram.dog/TheAdvanceBots" },
        { icon: <FaCode />, text: "Source Code", url: "https://github.com/GoutamHX/TrueCallCheck-Web" },
        { icon: <FaInfoCircle />, text: "Contact", url: "https://tx.me/MR_GOUTAM08" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaGithub />, url: "https://github.com/GoutamHX", label: "GitHub" },
    { icon: <FaTelegram />, url: "https://telegram.me/MAXX_MODS", label: "Telegram" },
    { icon: <AiFillInstagram />, url: "https://instagram.com/ig.goutam_", label: "Instagram" },
  ];

  return (
    <motion.footer
      className={`footer ${darkMode ? "dark" : "light"}`}
      initial={{ opacity: 0 }}
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
              <h3>TrueCallCheck</h3>
            </motion.div>
            <p className="brand-description">
              Advanced phone number analysis platform providing carrier details,
              geographical location, and caller identification.
            </p>
            <div className="social-links">
              {socialIcons.map((social, index) => (
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
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="column-title">{footerLinks[0].title}</h4>
            <ul className="footer-links">
              {footerLinks[0].links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.url} aria-label={`Navigate to ${link.name}`}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="column-title">{footerLinks[1].title}</h4>
            <ul className="footer-features">
              {footerLinks[1].items.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Developer */}
          <motion.div
            className="footer-column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="column-title">{footerLinks[2].title}</h4>
            <ul className="developer-links">
              {footerLinks[2].links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.text}`}
                  >
                    {link.icon}
                    {link.text}
                  </a>
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
          <p>
            © {new Date().getFullYear()} TrueCallCheck. All rights reserved.
            <span className="separator"> | </span>
            Designed and developed with <FaHeart className="heart-icon" aria-hidden="true" /> by
            Goutam シ
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;