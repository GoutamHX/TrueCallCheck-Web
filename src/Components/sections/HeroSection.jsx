import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCheck, FaTimes, FaShieldAlt } from "react-icons/fa";
import { TRUST_BADGES, SITE_CONFIG } from "../../data";

export function HeroSection({
  phoneNumber,
  setPhoneNumber,
  loading,
  onSearch,
  noData,
}) {
  const hasInput = Boolean(phoneNumber);

  const handleClear = () => {
    setPhoneNumber("");
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
          {TRUST_BADGES.map((badge, i) => (
            <span key={i} className="trust-pill">
              <FaCheck className="trust-pill-icon" />
              {badge}
            </span>
          ))}
        </div>
      </motion.div>

      {/* No Data Card */}
      <AnimatePresence>
        {noData && !loading && (
          <motion.div
            className="no-data-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="no-data-header">
              <div className="no-data-icon-box">
                <FaSearch />
              </div>
              <div>
                <h3 className="no-data-title">No Records Returned</h3>
                <span className="no-data-meta mono-num">TARGET: {SITE_CONFIG.countryCode} {phoneNumber}</span>
              </div>
            </div>
            <p className="no-data-text">
              Our registry lookup returned no verified matches for this number. Please ensure the 10-digit number is correct and currently active in India.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HeroSection;

