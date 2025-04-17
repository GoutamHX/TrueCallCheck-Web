import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaSearch,
  FaTimes,
  FaPhoneAlt,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Navbar.css";

function Navbar({ darkMode, toggleDarkMode }) {
  // State variables
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("/TrueCallCheck-Web");

  // Handle scroll event
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set active link based on URL
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Navigation data
  const navLinks = React.useMemo(() => [
    { name: "Home", path: "/TrueCallCheck-Web" },
    {
      name: "Features",
      path: "#features",
      subLinks: [
        { name: "Caller ID", path: "#caller-id" },
        { name: "Spam Detection", path: "#spam" },
        { name: "Number Lookup", path: "#lookup" },
      ],
    },
    { name: "API", path: "#api" },
    { name: "Pricing", path: "#pricing" },
  ], []);
  // Handle dropdown menu on desktop
  function handleMouseEnter(index) {
    setActiveDropdown(index);
  }

  function handleMouseLeave() {
    setActiveDropdown(null);
  }

  // Toggle dropdown menu on mobile
  function toggleMobileDropdown(index) {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  }

  // Toggle search box
  function toggleSearch() {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      // Focus the input when opening
      setTimeout(() => {
        document.querySelector('.search-input')?.focus();
      }, 100);
    } else {
      // Clear search when closing
      setSearchQuery("");
    }
  }


  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top ${darkMode ? "dark" : "light"} ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* Logo */}
        <div className="brand d-flex align-items-center">
          <FaPhoneAlt className="logo-icon me-2" />
          <span className="logo">TrueCallCheck</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
        <span className={darkMode ? 'text-light' : ''}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </span>
        
        </button>

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link, index) => (
            <li
            className="nav-item dropdown"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            role="menu"
            aria-haspopup="true"
            aria-expanded={activeDropdown === index}
          >
                {/* Navigation Link */}
                <a
                  href={link.path}
                  className={`nav-link ${activeLink === link.path ? "active" : ""}`}
                  onClick={(e) => {
                    if (link.subLinks) e.preventDefault();
                    setActiveLink(link.path);
                  }}
                >
                  {link.name}
                  {link.subLinks && (
                    <FaChevronDown
                      className="dropdown-icon ms-1"
                      style={{
                        transform: activeDropdown === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <ul className={`dropdown-menu ${activeDropdown === index ? "show" : ""}`}>
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subLink.path}
                          className={`dropdown-item ${activeLink === subLink.path ? "active" : ""}`}
                          onClick={() => setActiveLink(subLink.path)}
                        >
                          {subLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search and Theme Controls */}
          <div className="d-flex align-items-center">
            {/* Search Box */}
            <div className={`search-container ${searchOpen ? "open" : ""}`}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input form-control"
              />
            </div>

            {/* Search Button */}
            <button
              className={`search-btn btn ms-2 ${searchOpen ? "active" : ""}`}
              onClick={toggleSearch}
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? <FaTimes /> : <FaSearch />}
            </button>

            {/* Theme Toggle Button */}
            <button
              className="theme-toggle btn ms-2"
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
          {/* Mobile Search */}
          <div className="mobile-search mb-3 w-100">
            <div className="input-group">
              <span className="input-group-text">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control mobile-search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="nav flex-column w-100">
            {navLinks.map((link, index) => (
              <li className="nav-item mobile-nav-item" key={index}>
                <a
                  href={link.path}
                  className={`nav-link mobile-nav-link d-flex justify-content-between align-items-center ${activeLink === link.path ? "active" : ""
                    }`}
                  onClick={(e) => {
                    if (!link.subLinks) {
                      setMobileMenuOpen(false);
                      setActiveLink(link.path);
                    } else {
                      e.preventDefault();
                      toggleMobileDropdown(index);
                    }
                  }}
                >
                  {link.name}
                  {link.subLinks && (
                    <FaChevronDown
                      className={`mobile-dropdown-icon ${activeDropdown === index ? "open" : ""}`}
                    />
                  )}
                </a>

                {/* Mobile Dropdown Menu */}
                {link.subLinks && activeDropdown === index && (
                  <ul className="mobile-submenu list-unstyled ps-3">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subLink.path}
                          className={`nav-link mobile-submenu-link ${activeLink === subLink.path ? "active" : ""
                            }`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveLink(subLink.path);
                          }}
                        >
                          {subLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Theme Toggle */}
          <button
            className="mobile-theme-toggle btn w-100 mt-3"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
            <span>Switch to {darkMode ? "Light" : "Dark"} Mode</span>
          </button>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
