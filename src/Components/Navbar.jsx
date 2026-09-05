import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { NAV_LINKS, SITE_CONFIG } from "../data";
import "../Style/Navbar.css";

function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 84;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
    setActiveSection(id);
  }, []);

  // Track scroll position to highlight active section
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);

      const navbarHeight = 90;
      const sections = NAV_LINKS.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const top = section.el.getBoundingClientRect().top;
          if (top <= navbarHeight + 50) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`hallmark-nav-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="hallmark-nav-pill" aria-label="Main Navigation">
        {/* Brand Identity */}
        <div
          className="nav-brand"
          onClick={() => scrollToSection("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("home")}
          aria-label="TrueCallCheck Home"
        >
          <div className="nav-brand-icon">
            <FaPhoneAlt />
            <span className="brand-pulse-dot" aria-hidden="true" />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">{SITE_CONFIG.name}</span>
            <span className="nav-brand-badge mono-num">v{SITE_CONFIG.meta.version || "2.0"}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-cluster">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="nav-item">
                <button
                  className={`nav-pill-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  <span className="nav-pill-text">{link.name}</span>
                  {isActive && (
                    <motion.span
                      className="nav-active-pill"
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Action Cluster */}
        <div className="nav-controls">
          <button
            className="theme-switch-btn"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun className="theme-glyph sun" /> : <FaMoon className="theme-glyph moon" />}
          </button>

          <button
            className="nav-quick-cta"
            onClick={() => scrollToSection("home")}
            aria-label="Start number lookup"
          >
            <FaSearch className="cta-icon" />
            <span className="cta-label">Lookup</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="nav-mobile-sheet"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mobile-links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    className={`mobile-sheet-item ${activeSection === link.id ? "is-active" : ""}`}
                    onClick={() => scrollToSection(link.id)}
                  >
                    <span>{link.name}</span>
                    {activeSection === link.id && (
                      <span className="mobile-active-dot mono-num">●</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mobile-sheet-footer">
              <button
                className="mobile-theme-pill"
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                <span>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
