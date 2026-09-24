import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll to section or navigate to home with anchor
  const handleNavClick = useCallback(
    (link) => {
      setMobileMenuOpen(false);

      if (link.path) {
        navigate(link.path);
        return;
      }

      if (link.id) {
        if (location.pathname !== "/") {
          navigate(`/#${link.id}`);
          return;
        }

        const element = document.getElementById(link.id);
        if (element) {
          const navbarHeight = 84;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }
        setActiveSection(link.id);
      }
    },
    [location.pathname, navigate]
  );

  // Track scroll position to highlight active section when on homepage
  useEffect(() => {
    if (location.pathname !== "/") {
      if (location.pathname.startsWith("/guides")) setActiveSection("guides");
      else if (location.pathname === "/about") setActiveSection("about");
      else if (location.pathname === "/privacy-policy") setActiveSection("privacy");
      return;
    }

    function handleScroll() {
      setScrolled(window.scrollY > 16);

      const navbarHeight = 90;
      const sections = NAV_LINKS.filter((l) => l.id && !l.path).map((link) => ({
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
  }, [location.pathname]);

  return (
    <header className={`hallmark-nav-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="hallmark-nav-pill" aria-label="Main Navigation">
        {/* Brand Identity */}
        <Link
          to="/"
          className="nav-brand"
          aria-label="TrueCallCheck Home"
          style={{ textDecoration: "none" }}
        >
          <div className="nav-brand-icon">
            <FaPhoneAlt />
            <span className="brand-pulse-dot" aria-hidden="true" />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">{SITE_CONFIG.name}</span>
            <span className="nav-brand-badge mono-num">v{SITE_CONFIG.meta.version || "2.0"}</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-cluster">
          {NAV_LINKS.map((link) => {
            const isActive =
              (link.path && location.pathname === link.path) ||
              (!link.path && activeSection === link.id && location.pathname === "/");

            return (
              <li key={link.id || link.name} className="nav-item">
                <button
                  type="button"
                  className={`nav-pill-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => handleNavClick(link)}
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
            onClick={() => handleNavClick({ id: "home" })}
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
              {NAV_LINKS.map((link) => {
                const isActive =
                  (link.path && location.pathname === link.path) ||
                  (!link.path && activeSection === link.id && location.pathname === "/");

                return (
                  <li key={link.id || link.name}>
                    <button
                      type="button"
                      className={`mobile-sheet-item ${isActive ? "is-active" : ""}`}
                      onClick={() => handleNavClick(link)}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="mobile-active-dot mono-num">●</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-sheet-footer">
              <button
                type="button"
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
