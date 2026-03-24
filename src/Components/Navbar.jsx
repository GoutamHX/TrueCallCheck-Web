import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Navbar.css";

function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Privacy", id: "privacy" },
    { name: "Platforms", id: "platforms" },
  ];

  // Smooth scroll to section
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
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
      setScrolled(window.scrollY > 10);

      const navbarHeight = 80;
      const sections = navLinks.map((link) => ({
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top ${darkMode ? "dark" : "light"} ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* Logo */}
        <div
          className="brand d-flex align-items-center"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <FaPhoneAlt className="logo-icon me-2" />
          <span className="logo">TrueCallCheck</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="d-flex align-items-center d-lg-none">
          <button
            className="theme-toggle btn me-2"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="navbar-toggler mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={darkMode ? "text-light" : ""}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <button
                  className={`nav-link nav-link-btn ${activeSection === link.id ? "active" : ""}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className="d-flex align-items-center">
            <button
              className="theme-toggle btn"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              <span className="theme-text d-none d-md-inline ms-1">
                {darkMode ? "Light" : "Dark"} Mode
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu container-fluid">
          <ul className="nav flex-column w-100">
            {navLinks.map((link) => (
              <li className="nav-item mobile-nav-item" key={link.id}>
                <button
                  className={`nav-link mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
