import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowDown, FaSearch } from "react-icons/fa";
import '../Style/Landing.css';

function LandingPage({ analyzerRef, darkMode }) {
  const scrollToAnalyzer = () => {
    analyzerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`landing-page ${darkMode ? 'dark' : 'light'}`}>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="stats-container">
          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>10M+</h2>
            <p>Numbers Analyzed</p>
          </motion.div>

          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2>200+</h2>
            <p>Countries Covered</p>
          </motion.div>

          <motion.div 
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2>99.9%</h2>
            <p>Accuracy Rate</p>
          </motion.div>
        </div>

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h1>Advanced<br />Phone Number Analysis Platform</h1>
          <p>
            Get detailed carrier information, geographical location, and caller identification 
            with our powerful reverse phone lookup technology.
          </p>
          
          <div className="cta-buttons">
            <motion.button
              className="primary-button"
              onClick={scrollToAnalyzer}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSearch /> Start Analyzing
            </motion.button>
            <button className="secondary-button">
            style={{
    borderColor: `var(--secondary)`,
    color: `var(--secondary)`
  }}

              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="scroll-hint"
          onClick={scrollToAnalyzer}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaArrowDown />
          <span>Explore Features</span>
        </motion.div>
      </section>
    </div>
  );
}

export default LandingPage;