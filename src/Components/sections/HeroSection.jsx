import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaCheck,
  FaTimes,
  FaShieldAlt,
  FaRedo,
  FaTelegram,
} from "react-icons/fa";
import { TRUST_BADGES, SITE_CONFIG } from "../../data";

export function HeroSection({
  phoneNumber,
  setPhoneNumber,
  loading,
  onSearch,
  noData,
}) {
  const inputRef = useRef(null);
  const hasInput = Boolean(phoneNumber);

  const handleClear = () => {
    setPhoneNumber("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Telemetry Status Badge */}
        <div className="telecom-status-badge">
          <span className="live-ping-dot" aria-hidden="true" />
          <span className="badge-text">TELECOM DIRECTORY ENGINE · ZERO DATA LOGGING</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-brand-name">{SITE_CONFIG.name}</span>
          <span className="hero-title-sub">{SITE_CONFIG.tagline}</span>
        </h1>
        
        <p className="hero-subtitle">{SITE_CONFIG.description}</p>

        {/* Tactical Search Workbench Console */}
        <div className="search-console-wrapper">
          <form
            className="search-console-form"
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
            }}
          >
            <div className="country-prefix-tag" title="Country: India (+91)">
              <span className="country-flag-icon" aria-hidden="true">🇮🇳</span>
              <span className="mono-num country-code-num">{SITE_CONFIG.countryCode}</span>
            </div>

            <div className="input-field-container">
              <input
                ref={inputRef}
                type="tel"
                className="search-input mono-num"
                placeholder="Enter 10-digit mobile number"
                value={phoneNumber}
                maxLength={10}
                autoComplete="off"
                aria-label="10-digit Indian phone number"
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
              />

              {hasInput && (
                <button
                  type="button"
                  className="input-clear-btn"
                  onClick={handleClear}
                  aria-label="Clear input"
                  title="Clear"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="search-action-btn"
              disabled={loading}
              aria-label="Run phone lookup"
            >
              {loading ? (
                <span className="btn-spinner" aria-hidden="true" />
              ) : (
                <>
                  <FaSearch className="btn-icon" />
                  <span className="btn-label">Lookup</span>
                  <span className="shortcut-kbd mono-num d-none d-md-inline">↵</span>
                </>
              )}
            </button>
          </form>

          <div className="console-telemetry-bar">
            <div className="telemetry-item">
              <FaShieldAlt className="telemetry-icon" />
              <span>Direct Gateway Query</span>
            </div>
            <div className="telemetry-separator" />
            <div className="telemetry-item">
              <span className="telemetry-bullet">●</span>
              <span>10-Digit Mobile Numbers Only</span>
            </div>
          </div>
        </div>

        {/* Trust Badges - Crisp pill badges */}
        <div className="trust-strip">
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className="trust-pill">
              <FaCheck className="trust-pill-icon" />
              {badge}
            </span>
          ))}
        </div>
      </motion.div>

      {/* No Data Card */}
      <AnimatePresence>
        {Boolean(noData) && !loading && (
          <motion.div
            className="no-data-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="no-data-header">
              <div className="no-data-icon-box" aria-hidden="true">
                <FaSearch />
              </div>
              <div className="no-data-header-text">
                <h3 className="no-data-title">
                  {typeof noData === "object" && noData?.error
                    ? noData.error
                    : "No Records Found in Database"}
                </h3>
                <span className="no-data-meta mono-num">
                  TARGET: {SITE_CONFIG.countryCode} {phoneNumber}
                </span>
              </div>
            </div>

            <p className="no-data-text">
              Is number ka record filhal hamare database me uplabdh nahi hai. Kripya koi doosra number check karein, ya agar koi samasya/dikkat aaye toh admin se contact kar sakte hain.
            </p>

            {typeof noData === "object" && Boolean(noData?.notice) && (
              <div className="no-data-notice-banner">
                <span className="no-data-notice-icon" aria-hidden="true">📢</span>
                <span className="no-data-notice-text">{noData.notice}</span>
              </div>
            )}

            <div className="no-data-actions">
              <button
                type="button"
                className="no-data-btn-secondary"
                onClick={handleClear}
              >
                <FaRedo aria-hidden="true" />
                <span>Try Another Number</span>
              </button>

              <a
                href={
                  typeof noData === "object" && noData?.telegram
                    ? `https://t.me/${noData.telegram.replace("@", "")}`
                    : SITE_CONFIG.links.telegramBot
                }
                target="_blank"
                rel="noopener noreferrer"
                className="no-data-btn-primary"
              >
                <FaTelegram aria-hidden="true" />
                <span>Contact Admin {typeof noData === "object" && noData?.telegram ? `(${noData.telegram})` : ""}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HeroSection;