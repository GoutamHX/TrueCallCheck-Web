import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaSearch,
  FaPhoneAlt,
  FaChartLine,
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
} from "react-icons/fa";
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
    // Validate Indian number format (10 digits)
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

        if (data.notice) {
          toast.info(data.notice, {
            autoClose: 9000,
          });
        }

        // Handle new API response structure
        const results =
          data?.result?.results ??
          data?.results?.records ??
          [];
        // console.log(results);
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
        toast.error("🔴 Server is currently down or busy. Try again later!");
      } else if (
        error.code === "ECONNABORTED" ||
        error.message === "Network Error"
      ) {
        toast.error("🔌 Website is currently offline. Check your connection.");
      } else {
        toast.error("❌ Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetNotice = async () => {
    try {
      const response = await axios.get(
        "https://true-call-check.vercel.app/web-notice"
      );
      const data = response.data;
      if (data.notice) {
        setNotice(data);
        setShowNotice(true);
      }
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  };
  const features = [
    {
      icon: <FaPhoneAlt />,
      title: "Number Lookup",
      description: "Get complete details about any phone number instantly",
    },
    // {
    //   icon: <FaGlobe />,
    //   title: "Global Coverage",
    //   description: "Works with numbers from over 200 countries worldwide"
    // },
    // {
    //   icon: <FaUserShield />,
    //   title: "Spam Protection",
    //   description: "Identify potential spam calls before answering"
    // },
    {
      icon: <FaChartLine />,
      title: "Call Analytics",
      description: "Track and analyze your call patterns",
    },
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
            className={`maintenance-box ${darkMode ? "dark-maintenance" : "light-maintenance"
              }`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Decorative elements */}
            <div className="maintenance-decoration">
              <div className="corner corner-tl"></div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              <div className="corner corner-br"></div>
            </div>

            {/* Main content */}
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
                <Link
                  className="admin-link"
                  to="https://t.me/MR_GOUTAM08"
                  target="_blank"
                >
                  @MR_GOUTAM08
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      )}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-title">
              <span className="gradient-text">TrueCallCheck</span>
              <span className="text"> - Advanced Phone Number Analysis</span>
            </h1>
            <p className="hero-subtitle">
              Uncover caller details, detect spam, and protect yourself from
              unwanted calls
            </p>

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
          </motion.div>
          {/* No Data State */}
          {noData && !loading && (
            <motion.div
              className="container mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="card shadow-sm border-0 text-center mx-auto" style={{ maxWidth: 420 }}>
                <div className="card-body py-5">
                  <div className="mb-3">
                    <FaSearch size={40} className="text-info" />
                  </div>

                  <h5 className="fw-semibold mb-2">
                    No Data Found
                  </h5>

                  <p className="text-muted mb-0">
                    We couldn't find any details for this number.
                    Please check the number and try again.
                  </p>
                </div>
              </div>
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
              {/* Search Meta Info */}
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
                  <div className="meta-divider"></div>
                  <div className="meta-item">
                    <div className={`status-badge ${searchMeta.status}`}>
                      {searchMeta.status}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Results Cards */}
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
                    {/* Card Header */}
                    <div className="result-card-header">
                      <div className="phone-avatar">
                        <FaPhoneAlt />
                      </div>
                      <div className="phone-info">
                        <h3 className="phone-number">+91 {result.mobile}</h3>
                        <span className="phone-circle">{result.circle}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="result-card-body">
                      {result.name && (
                        <div className="info-row">
                          <div className="info-icon-wrapper">
                            <FaUser className="info-icon" />
                          </div>
                          <div className="info-content">
                            <span className="info-label">Name</span>
                            <span className="info-value">{result.name}</span>
                          </div>
                        </div>
                      )}

                      {(result.fname || result.father_name) && (
                        <div className="info-row">
                          <div className="info-icon-wrapper">
                            <FaUser className="info-icon" />
                          </div>
                          <div className="info-content">
                            <span className="info-label">Father's Name</span>
                            <span className="info-value">{result.fname || result.father_name}</span>
                          </div>
                        </div>
                      )}

                      {result.address && (
                        <div className="info-row">
                          <div className="info-icon-wrapper">
                            <FaMapMarkerAlt className="info-icon" />
                          </div>
                          <div className="info-content">
                            <span className="info-label">Address</span>
                            <span className="info-value address">{result.address}</span>
                          </div>
                        </div>
                      )}

                      {(result.alt || result.alt_mobile) && (
                        <div className="info-row">
                          <div className="info-icon-wrapper">
                            <FaPhoneAlt className="info-icon" />
                          </div>
                          <div className="info-content">
                            <span className="info-label">Alternate Number</span>
                            <span className="info-value">{result.alt || result.alt_mobile}</span>
                          </div>
                        </div>
                      )}

                      {result.id && (
                        <div className="info-row">
                          <div className="info-icon-wrapper">
                            <FaIdCard className="info-icon" />
                          </div>
                          <div className="info-content">
                            <span className="info-label">ID</span>
                            <span className="info-value id-number">{result.id}</span>
                          </div>
                        </div>
                      )}

                      {result.email && (
                        <div className="info-row">
                          <div className="info-icon-wrapper">
                            <FaEnvelope className="info-icon" />
                          </div>
                          <div className="info-content">
                            <span className="info-label">Email</span>
                            <span className="info-value">{result.email}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="result-card-footer">
                      <FaNetworkWired className="carrier-icon" />
                      <span>{result.circle}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Developer Info */}
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

          {/* Stats Section */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="stat-card">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Numbers Analyzed</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">India</div>
              <div className="stat-label">Country</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Accuracy</div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="features-title"
          >
            Why Choose TrueCallCheck?
          </motion.h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
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
