import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaSun, FaMoon, FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import Footer from "../Footer";
import { SITE_CONFIG } from "../../data";
import "../../Style/PageLayout.css";

export default function PageLayout({
  title,
  subtitle,
  category,
  badge = "Policy & Documentation",
  breadcrumbs = [],
  darkMode: propDarkMode,
  toggleDarkMode: propToggleDarkMode,
  children,
}) {
  const [internalDarkMode, setInternalDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : true;
  });

  const isDark = propDarkMode !== undefined ? propDarkMode : internalDarkMode;

  const handleToggle = () => {
    if (propToggleDarkMode) {
      propToggleDarkMode();
    } else {
      setInternalDarkMode((prev) => {
        const next = !prev;
        localStorage.setItem("darkMode", next);
        document.body.classList.remove(next ? "light-mode" : "dark-mode");
        document.body.classList.add(next ? "dark-mode" : "light-mode");
        return next;
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const displayBadge = category || badge;

  return (
    <div className={`tcc-page-layout ${isDark ? "dark" : "light"}`}>
      {/* Top Navbar */}
      <header className="tcc-page-header">
        <div className="tcc-page-nav-inner">
          <Link to="/" className="tcc-nav-brand" aria-label="TrueCallCheck Home">
            <div className="nav-brand-icon">
              <FaPhoneAlt />
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-name">{SITE_CONFIG.name}</span>
              <span className="nav-brand-badge mono-num">v{SITE_CONFIG.meta.version || "2.0"}</span>
            </div>
          </Link>

          <nav className="tcc-page-links" aria-label="Page navigation">
            <Link to="/" className="tcc-link-btn">
              <FaArrowLeft className="back-icon" /> Lookup Tool
            </Link>
            <Link to="/guides" className="tcc-link-btn">
              Guides
            </Link>
            <Link to="/about" className="tcc-link-btn">
              About
            </Link>
            <Link to="/privacy-policy" className="tcc-link-btn">
              Privacy
            </Link>
            <Link to="/contact" className="tcc-link-btn">
              Contact
            </Link>
          </nav>

          <div className="tcc-page-actions">
            <button
              type="button"
              className="theme-switch-btn"
              onClick={handleToggle}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaSun className="theme-glyph sun" /> : <FaMoon className="theme-glyph moon" />}
            </button>
            <Link to="/" className="tcc-lookup-cta">
              <FaShieldAlt /> Start Search
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="tcc-page-hero">
        <div className="tcc-page-hero-container">
          <nav aria-label="Breadcrumb" className="tcc-breadcrumbs">
            <Link to="/">Home</Link>
            {breadcrumbs.map((crumb, idx) => {
              const linkTarget = crumb.path || (crumb.href && crumb.href !== '#' ? crumb.href : null);
              return (
                <React.Fragment key={idx}>
                  <span className="crumb-sep">/</span>
                  {linkTarget && !crumb.active ? (
                    <Link to={linkTarget}>{crumb.label}</Link>
                  ) : (
                    <span className="crumb-current">{crumb.label}</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {displayBadge && <span className="tcc-hero-badge">{displayBadge}</span>}
          <h1 className="tcc-hero-title">{title}</h1>
          {subtitle && <p className="tcc-hero-subtitle">{subtitle}</p>}
        </div>
      </section>

      {/* Content Container */}
      <main className="tcc-page-content-wrapper">
        <article className="tcc-article-body">
          {children}
        </article>
      </main>

      {/* Reusable Footer */}
      <Footer darkMode={isDark} />
    </div>
  );
}
