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

  const isHomePage = location.pathname === "/";

  // Smooth scroll to an element by ID
  const scrollToElement = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 84;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - navbarHeight),
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  }, []);

  // Handle hash scroll after cross-page navigation
  useEffect(() => {
    if (isHomePage && location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        scrollToElement(targetId);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isHomePage, location.hash, scrollToElement]);

  // Click handler for navigation items
  const handleNavClick = useCallback(
    (link) => {
      setMobileMenuOpen(false);

      if (isHomePage) {
        // On homepage, always scroll smoothly to the section
        scrollToElement(link.id);
      } else {
        // On inner pages:
        // If clicking a section that only lives on homepage (e.g. features, faq), navigate to /#sectionId
        if (link.id === "home") {
          navigate("/");
        } else if (link.pageUrl && location.pathname.startsWith(link.pageUrl)) {
          // Already on this page, scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (link.pageUrl) {
          navigate(link.pageUrl);
        } else {
          navigate(`/#${link.id}`);
        }
      }
    },
    [isHomePage, location.pathname, navigate, scrollToElement]
  );

  // Active section tracking on scroll (for Homepage)
  useEffect(() => {
    if (!isHomePage) {
      // Set active indicator based on route when on inner pages
      if (location.pathname.startsWith("/guides")) {
        setActiveSection("guides");
      } else if (location.pathname === "/about") {
        setActiveSection("about");
      } else if (location.pathname === "/privacy-policy") {
        setActiveSection("privacy");
      } else {
        setActiveSection("");
      }
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 16);

      // If at top of the page, highlight 'home'
      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      const navbarOffset = 110;
      const sectionElements = NAV_LINKS.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      })).filter((item) => item.el !== null);

      // Check sections in reverse order to find the deepest visible one
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= navbarOffset) {
          setActiveSection(id);
          return;
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, location.pathname]);

  return (
    <header className={`hallmark-nav-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="hallmark-nav-pill" aria-label="Main Navigation">
        {/* Brand Identity */}
        <Link
          to="/"
          className="nav-brand"
          aria-label="TrueCallCheck Home"
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              scrollToElement("home");
            }
          }}
        >
          <div className="nav-brand-icon">
            <FaPhoneAlt />
            <span className="brand-pulse-dot" aria-hidden="true" />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">{SITE_CONFIG.name}</span>
            <span className="nav-brand-badge mono-num">
              v{SITE_CONFIG.meta.version || "2.0"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-cluster">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id} className="nav-item">
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
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
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
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FaSun className="theme-glyph sun" />
            ) : (
              <FaMoon className="theme-glyph moon" />
            )}
          </button>

          <button
            className="nav-quick-cta"
            onClick={() => {
              if (isHomePage) {
                scrollToElement("home");
              } else {
                navigate("/#home");
              }
            }}
            aria-label="Start number lookup"
          >
            <FaSearch className="cta-icon" />
            <span className="cta-label">Lookup</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
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
                const isActive = activeSection === link.id;

                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      className={`mobile-sheet-item ${
                        isActive ? "is-active" : ""
                      }`}
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
                <span>
                  {darkMode
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
