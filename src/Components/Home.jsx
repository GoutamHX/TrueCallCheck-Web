import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaSearch,
  FaPhoneAlt,
  FaTelegram,
  FaTools,
  FaExclamationTriangle,
  FaUser,
  FaMapMarkerAlt,
  FaIdCard,
  FaEnvelope,
  FaNetworkWired,
  FaGithub,
  FaClock,
  FaDatabase,
  FaAndroid,
  FaDownload,
  FaRobot,
  FaGlobe,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaUserCheck,
  FaMobileAlt,
  FaEyeSlash,
  FaCookieBite,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Navbar from "./Navbar";
import "../Style/Home.css";
import { Link } from "react-router-dom";

function Home({ darkMode, toggleDarkMode }) {
  const [num, setNum] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [notice, setNotice] = useState(null);
  const [showNotice, setShowNotice] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchMeta, setSearchMeta] = useState(null);
  const [developer, setDeveloper] = useState("");
  const [telegram, setTelegram] = useState("");
  const [noData, setNoData] = useState(false);

  const handleGetDetails = async () => {
    if (!num) return toast.warn("Please enter a number!");
    if (!/^\d{10}$/.test(num)) {
      return toast.warn("Please enter a valid 10-digit Indian number!");
    }
    try {
      setLoading(true);
      setShowResult(false);
      const result = await axios.get(
        `https://true-call-check.vercel.app/api/truecaller?num=${num}`
      );

      if (result.status === 200) {
        const data = result.data;

        // if (data.notice) {
        //   toast.info(data.notice, { autoClose: 9000 });
        // }

        let records = [];
        if (data.data?.result?.results && Array.isArray(data.data.result.results)) {
          records = data.data.result.results;
        } else if (data.data?.results && Array.isArray(data.data.results)) {
          records = data.data.results;
        } else if (data.result?.results && Array.isArray(data.result.results)) {
          records = data.result.results;
        } else if (data.results?.records && Array.isArray(data.results.records)) {
          records = data.results.records;
        } else if (data.results && Array.isArray(data.results)) {
          records = data.results;
        } else if (data.data && Array.isArray(data.data)) {
          records = data.data;
        } else if (Array.isArray(data)) {
          records = data;
        } else if (typeof data === "object" && data !== null) {
          if (data.mobile || data.name || data.father_name || data.fname || data.address) {
            records = [data];
          }
        }

        const results = records;
        if (results.length > 0) {
          setSearchResults(results);
          setSearchMeta({
            status: data?.result?.status || (data?.status ? "success" : "failed"),
            count: data?.result?.count || data?.results?.total_records || results.length,
            searchTime: data?.result?.search_time || "N/A",
          });
          setShowResult(true);
          setNoData(false);
        } else {
          setSearchResults([]);
          setSearchMeta(null);
          setShowResult(false);
          setNoData(true);
        }

        setDeveloper(data?.developer || "Github:@GoutamHX");
        setTelegram(data?.Telegram || "@MR_GOUTAM08");
      }
    } catch (error) {
      const status = error.response?.status;
      const serverMsg = error.response?.data?.error;

      if (status === 400) {
        toast.error(serverMsg || "Bad request. Please try again.");
      } else if (status === 500) {
        toast.error("Server is currently down or busy. Try again later!");
      } else if (error.code === "ECONNABORTED" || error.message === "Network Error") {
        toast.error("Website is currently offline. Check your connection.");
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetNotice = async () => {
    try {
      const response = await axios.get("https://true-call-check.vercel.app/web-notice");
      const data = response.data;
      if (data.notice) {
        setNotice(data);
        setShowNotice(true);
      }
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  };

  const trustBadges = ["Free", "Instant", "No Login", "Private"];

  const features = [
    {
      icon: <FaPhoneAlt />,
      title: "Instant Number Lookup",
      description: "Just enter a number and get real-time info including name, father name, address, carrier, email and more.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Carrier & Location Info",
      description: "See the service provider and general region for any Indian mobile number instantly.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "100% Free Forever",
      description: "No charges, subscriptions, or hidden fees. TrueCallCheck is completely free to use.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Responsive",
      description: "Works seamlessly on both mobile and desktop browsers with a beautiful adaptive UI.",
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast Results",
      description: "Get accurate caller information in milliseconds with our high-speed lookup engine.",
    },
    {
      icon: <FaGithub />,
      title: "Open Source",
      description: "Community-supported, transparent, and fully customizable. Contribute on GitHub.",
    },
  ];

  const dataPoints = [
    { icon: <FaUser />, label: "Full Name & Father Name" },
    { icon: <FaMapMarkerAlt />, label: "Address Information" },
    { icon: <FaNetworkWired />, label: "Carrier & Circle Details" },
    { icon: <FaEnvelope />, label: "Email Address" },
    { icon: <FaMobileAlt />, label: "Mobile & Alternate Numbers" },
    { icon: <FaIdCard />, label: "Unique ID Details" },
  ];

  const privacyPoints = [
    { icon: <FaEyeSlash />, title: "No Data Storage", desc: "We do not store any user data or lookup history. Your searches remain private." },
    { icon: <FaUserCheck />, title: "No Login Required", desc: "No account or login is required to use TrueCallCheck. Just search and go." },
    { icon: <FaCookieBite />, title: "No Tracking", desc: "We don't use cookies, analytics trackers, or any form of user tracking." },
    { icon: <FaHandHoldingHeart />, title: "Free Forever", desc: "No charges, subscriptions, or hidden fees. Ever." },
  ];

  useEffect(() => {
    handleGetNotice();
  }, []);

  return (
    <div className="home-app">
      {/* Maintenance Mode Overlay */}
      {showNotice && (
        <div className="maintenance-overlay">
          <motion.div
            className={`maintenance-box ${darkMode ? "dark-maintenance" : "light-maintenance"}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="maintenance-decoration">
              <div className="corner corner-tl"></div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              <div className="corner corner-br"></div>
            </div>

            <div className="maintenance-icon-container">
              <div className="maintenance-icon-circle">
                <FaTools size={28} className="main-tool-icon" />
                <FaExclamationTriangle size={14} className="exclamation-icon" />
              </div>
              <div className="pulse-dots">
                <span className="dot dot-1"></span>
                <span className="dot dot-2"></span>
                <span className="dot dot-3"></span>
              </div>
            </div>

            <h2 className="maintenance-title">
              <span className="title-highlight">{notice?.title || "Notice"}</span>
            </h2>

            <div className="maintenance-message-container">
              <p className="maintenance-message">{notice?.message || ""}</p>
            </div>

            {notice?.button && notice?.button_url && (
              <motion.a
                href={notice.button_url}
                target="_blank"
                rel="noopener noreferrer"
                className="maintenance-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaTelegram className="button-icon" />
                <span>{notice.button}</span>
              </motion.a>
            )}

            <div className="maintenance-footer">
              <div className="footer-divider"></div>
              <p>
                Admin:{" "}
                <Link className="admin-link" to="https://imgoutam.dev" target="_blank">
                  imgoutam
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      )}

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="home-main">
        {/* ========== Hero Section ========== */}
        <section id="home" className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-badge">
              <HiOutlineStatusOnline className="badge-dot" />
              Free & Open Source Caller ID
            </span>

            <h1 className="hero-title">
              <span className="gradient-text">TrueCallCheck</span>
              <br />
              <span className="hero-title-sub">Advanced Phone Number Analysis</span>
            </h1>
            <p className="hero-subtitle">
              Search any Indian phone number to get instant caller details — name,
              father name, address, carrier, email and more.
            </p>

            {/* Trust Badges */}
            <div className="trust-badges">
              {trustBadges.map((badge, i) => (
                <span key={i} className="trust-badge">
                  <FaCheckCircle className="trust-icon" />
                  {badge}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="search-box">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={num}
                  maxLength={10}
                  onChange={(e) => setNum(e.target.value.replace(/\D/g, ""))}
                  onKeyPress={(e) => e.key === "Enter" && handleGetDetails()}
                />
                <motion.button
                  onClick={handleGetDetails}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      <FaSearch /> Search
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            <p className="hero-hint">
              Currently supports Indian (+91) phone numbers only. More countries coming soon.
            </p>
          </motion.div>

          {/* No Data State */}
          {noData && !loading && (
            <motion.div
              className="no-data-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="no-data-icon">
                <FaSearch />
              </div>
              <h3 className="no-data-title">No Data Found</h3>
              <p className="no-data-text">
                We couldn't find any details for this number. Please check the number and try again.
              </p>
            </motion.div>
          )}

          {/* Results Section */}
          {showResult && (
            <motion.section
              className="results-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {searchMeta && (
                <motion.div
                  className="search-meta-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="meta-item">
                    <FaDatabase className="meta-icon" />
                    <div className="meta-content">
                      <span className="meta-label">Results Found</span>
                      <span className="meta-value">{searchMeta.count}</span>
                    </div>
                  </div>
                  <div className="meta-divider"></div>
                  <div className="meta-item">
                    <FaClock className="meta-icon" />
                    <div className="meta-content">
                      <span className="meta-label">Search Time</span>
                      <span className="meta-value">{searchMeta.searchTime}</span>
                    </div>
                  </div>
                  {/* <div className="meta-divider"></div>
                  <div className="meta-item">
                    <div className={`status-badge ${searchMeta.status}`}>
                      {searchMeta.status}
                    </div>
                  </div> */}
                </motion.div>
              )}

              <div className="results-grid">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={index}
                    className="result-card-modern"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="result-card-header">
                      <div className="phone-avatar">
                        <FaPhoneAlt />
                      </div>
                      <div className="phone-info">
                        <h3 className="phone-number">+91 {result.mobile}</h3>
                        <span className="phone-circle">{result.circle}</span>
                      </div>
                    </div>

                    <div className="result-card-body">
                      {result.name && (
                        <div className="info-row">
                          <div className="info-icon-wrapper"><FaUser className="info-icon" /></div>
                          <div className="info-content">
                            <span className="info-label">Name</span>
                            <span className="info-value">{result.name}</span>
                          </div>
                        </div>
                      )}
                      {(result.fname || result.father_name) && (
                        <div className="info-row">
                          <div className="info-icon-wrapper"><FaUser className="info-icon" /></div>
                          <div className="info-content">
                            <span className="info-label">Father's Name</span>
                            <span className="info-value">{result.fname || result.father_name}</span>
                          </div>
                        </div>
                      )}
                      {result?.email && (
                        <div className="info-row">
                          <div className="info-icon-wrapper"><FaEnvelope className="info-icon" /></div>
                          <div className="info-content">
                            <span className="info-label">Email</span>
                            <span className="info-value">{result.email}</span>
                          </div>
                        </div>
                      )}
                      {result.address && (
                        <div className="info-row">
                          <div className="info-icon-wrapper"><FaMapMarkerAlt className="info-icon" /></div>
                          <div className="info-content">
                            <span className="info-label">Address</span>
                            <span className="info-value address">{result.address}</span>
                          </div>
                        </div>
                      )}
                      {(result.alt || result.alt_mobile) && (
                        <div className="info-row">
                          <div className="info-icon-wrapper"><FaPhoneAlt className="info-icon" /></div>
                          <div className="info-content">
                            <span className="info-label">Alternate Number</span>
                            <span className="info-value">{result.alt || result.alt_mobile}</span>
                          </div>
                        </div>
                      )}
                      {result.id && (
                        <div className="info-row">
                          <div className="info-icon-wrapper"><FaIdCard className="info-icon" /></div>
                          <div className="info-content">
                            <span className="info-label">ID</span>
                            <span className="info-value id-number">{result.id}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="result-card-footer">
                      <FaNetworkWired className="carrier-icon" />
                      <span>{result.circle}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="developer-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="dev-divider"></div>
                <div className="dev-content">
                  <FaGithub className="dev-icon" />
                  <span className="dev-text">{developer}</span>
                  {telegram && (
                    <>
                      <span className="dev-separator">|</span>
                      <FaTelegram className="dev-icon telegram" />
                      <span className="dev-text">{telegram}</span>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.section>
          )}
        </section>

        {/* ========== What is TrueCallCheck ========== */}
        <section id="about" className="about-section">
          <div className="about-layout">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">About</span>
              <h2 className="section-title">
                What is <span className="gradient-text">TrueCallCheck</span>?
              </h2>
              <p className="about-desc">
                TrueCallCheck is a free, fast, and privacy-focused tool that helps users
                identify unknown phone numbers — without needing to login. It provides caller
                ID info including name, address, carrier details, and more — helping users
                stay safe and informed when receiving unknown calls.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>Instant Number Lookup — Just enter a number and get real-time info</span>
                </div>
                <div className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>Carrier & Location Info — See the service provider and general region</span>
                </div>
                <div className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>100% Free — No charges, subscriptions, or hidden fees</span>
                </div>
                <div className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>Mobile Responsive — Works seamlessly on both mobile and desktop</span>
                </div>
                <div className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>Open Source — Community-supported, customizable project</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-data-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <h3 className="data-card-title">What You Get</h3>
              <div className="data-points-grid">
                {dataPoints.map((dp, i) => (
                  <motion.div
                    key={i}
                    className="data-point"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="data-point-icon">{dp.icon}</div>
                    <span className="data-point-label">{dp.label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="data-card-note">
                Currently supports Indian (+91) phone numbers only. More countries will be added soon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ========== Features Section ========== */}
        <section id="features" className="features-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Features</span>
            <h2 className="section-title">
              Why Choose <span className="gradient-text">TrueCallCheck</span>?
            </h2>
            <p className="section-subtitle">
              Powerful tools to identify callers, block spam, and stay safe — completely free
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== Privacy Section ========== */}
        <section id="privacy" className="privacy-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Privacy</span>
            <h2 className="section-title">
              Privacy & <span className="gradient-text">Transparency</span>
            </h2>
            <p className="section-subtitle">
              We take your privacy seriously. TrueCallCheck is designed to be transparent
              and respectful of your personal data.
            </p>
          </motion.div>

          <div className="privacy-grid">
            {privacyPoints.map((item, index) => (
              <motion.div
                key={index}
                className="privacy-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="privacy-icon-wrapper">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== Platforms Section ========== */}
        <section id="platforms" className="get-app-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Platforms</span>
            <h2 className="section-title">
              Use TrueCallCheck <span className="gradient-text">Everywhere</span>
            </h2>
            <p className="section-subtitle">
              Access our powerful phone lookup on your favorite platform
            </p>
          </motion.div>

          <div className="platform-cards">
            <motion.a
              href="https://devuploads.com/w3thg0886brw"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="platform-icon-wrapper android-icon-bg">
                <FaAndroid className="platform-icon" />
              </div>
              <div className="platform-info">
                <span className="platform-badge">Android App</span>
                <h3 className="platform-name">TrueCallCheck App</h3>
                <p className="platform-desc">
                  Download our Android app for on-the-go caller identification. Fast, lightweight, and works offline.
                </p>
              </div>
              <div className="platform-cta">
                <span className="cta-btn android-cta">
                  <FaDownload /> Download APK
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/advancelookupbot"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="platform-icon-wrapper telegram-icon-bg">
                <FaRobot className="platform-icon" />
              </div>
              <div className="platform-info">
                <span className="platform-badge">Telegram Bot</span>
                <h3 className="platform-name">Advance Lookup Bot</h3>
                <p className="platform-desc">
                  Send any phone number directly in Telegram and get instant caller details. No app install needed.
                </p>
              </div>
              <div className="platform-cta">
                <span className="cta-btn telegram-cta">
                  <FaTelegram /> Open in Telegram
                </span>
              </div>
            </motion.a>

            <motion.div
              className="platform-card active-platform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="active-badge-ribbon">You are here</div>
              <div className="platform-icon-wrapper web-icon-bg">
                <FaGlobe className="platform-icon" />
              </div>
              <div className="platform-info">
                <span className="platform-badge">Web App</span>
                <h3 className="platform-name">TrueCallCheck Web</h3>
                <p className="platform-desc">
                  Use right from your browser with full features. Dark mode, instant search, and detailed results.
                </p>
              </div>
              <div className="platform-cta">
                <span className="cta-btn web-cta">
                  <FaShieldAlt /> Currently Using
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default Home;
