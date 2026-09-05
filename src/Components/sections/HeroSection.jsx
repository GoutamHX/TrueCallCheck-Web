import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { TRUST_BADGES, SITE_CONFIG } from "../../data";

export function HeroSection({
  phoneNumber,
  setPhoneNumber,
  loading,
  onSearch,
  noData,
}) {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="hero-badge">
          <HiOutlineStatusOnline className="badge-dot" />
          Free &amp; Open Source Caller ID
        </span>

        <h1 className="hero-title">
          <span className="gradient-text">{SITE_CONFIG.name}</span>
          <br />
          <span className="hero-title-sub">{SITE_CONFIG.tagline}</span>
        </h1>
        <p className="hero-subtitle">{SITE_CONFIG.description}</p>

        {/* Trust Badges */}
        <div className="trust-badges">
          {TRUST_BADGES.map((badge, i) => (
            <span key={i} className="trust-badge">
              <FaCheckCircle className="trust-icon" />
              {badge}
            </span>
          ))}
        </div>

        {/* Search Input Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <form
            className="search-box"
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
            }}
          >
            <span className="country-code">{SITE_CONFIG.countryCode}</span>
            <input
              type="tel"
              placeholder="Enter 10-digit number"
              value={phoneNumber}
              maxLength={10}
              aria-label="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Search caller details"
            >
              {loading ? (
                <span className="spinner" />
              ) : (
                <>
                  <FaSearch /> Search
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <p className="hero-hint">
          Currently supports Indian ({SITE_CONFIG.countryCode}) phone numbers only.
        </p>
      </motion.div>

      {/* No Data Card */}
      <AnimatePresence>
        {noData && !loading && (
          <motion.div
            className="no-data-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="no-data-icon">
              <FaSearch />
            </div>
            <h3 className="no-data-title">No Data Found</h3>
            <p className="no-data-text">
              We couldn't find any records for{" "}
              <strong>
                {SITE_CONFIG.countryCode} {phoneNumber}
              </strong>
              . Please verify the number and try again.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HeroSection;
