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
  FaHeart,
  FaAndroid,
  FaRobot,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "../Style/Footer.css";
import { User, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  // Footer data embedded in component
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const pos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - navbarHeight, behavior: "smooth" });
    }
  };

  const footerLinks = [
    {
      title: "Sections",
      links: [
        { name: "Home", sectionId: "home" },
        { name: "About", sectionId: "about" },
        { name: "Features", sectionId: "features" },
        { name: "Privacy", sectionId: "privacy" },
        { name: "Platforms", sectionId: "platforms" },
      ],
    },
    {
      title: "Our Platforms",
      items: [
        { icon: <FaAndroid />, text: "Android App", url: "https://devuploads.com/w3thg0886brw" },
        { icon: <FaRobot />, text: "Telegram Bot", url: "https://t.me/AdvanceLookupBot" },
        { icon: <FaMobileAlt />, text: "Web App", url: "#home" },
        // { icon: <FaCheckCircle />, text: "Spam Detection" },
      ],
    },
    {
      title: "Developer",
      links: [
        { icon: <FaExternalLinkAlt />, text: "Portfolio", url: "https://www.imgoutam.dev/" },
        { icon: <FaGithub />, text: "GitHub", url: "https://github.com/GoutamHX" },
        { icon: <FaTelegram />, text: "Telegram", url: "https://telegram.dog/TheAdvanceBots" },
        { icon: <FaCode />, text: "Source Code", url: "https://github.com/GoutamHX/TrueCallCheck-Web" },
        // { icon: <FaInfoCircle />, text: "Contact", url: "https://t.me/MR_GOUTAM08" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaGithub />, url: "https://github.com/GoutamHX", label: "GitHub" },
    {icon : <User/>, url : "https://imgoutam.dev", label: "Portfolio" },
    { icon: <AiFillInstagram />, url: "https://instagram.com/ig.goutam_", label: "Instagram" },
  ];

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
                  {item.url ? (
                    <Link
                      to={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={item.text}
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </Link>
                  ) : (
                    <>
                      {item.icon}
                      <span>{item.text}</span>
                    </>
                  )}
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
                  <Link
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.text}`}
                  >
                    {link.icon}
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
          <p>
            © {new Date().getFullYear()} TrueCallCheck. All rights reserved.
            <span className="separator"> | </span>
            Designed and developed with <FaHeart className="heart-icon" aria-hidden="true" /> by{" "}
            <a href="https://www.imgoutam.dev/" target="_blank" rel="noopener noreferrer" className="dev-portfolio-link">Goutam シ</a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;