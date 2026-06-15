import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
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
  FaPassport,
  FaEnvelope,
  FaNetworkWired,
  FaGithub,
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
  FaStar,
  FaLayerGroup,
  FaCodeBranch,
} from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Navbar from "./Navbar";
import "../Style/Home.css";
import { Link } from "react-router-dom";

// ─── Result Card ──────────────────────────────────────────────────────────────
function ResultCard({ result, delay = 0 }) {
  const fields = [
    result.name && { icon: <FaUser />, label: "Name", value: result.name },
    (result.father_name || result.fname) && {
      icon: <FaUser />,
      label: "Father's Name",
      value: result.father_name || result.fname,
    },
    result.email && { icon: <FaEnvelope />, label: "Email", value: result.email },
    result.address && {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      value: result.address,
      cls: "address",
    },
    (result.alt_mobile || result.alt) && {
      icon: <FaPhoneAlt />,
      label: "Alternate Number",
      value: result.alt_mobile || result.alt,
    },
    (result.document_number || result.DocumentNumber) && {
      icon: <FaIdCard />,
      label: "Document No",
      value: result.document_number || result.DocumentNumber,
      cls: "id-number",
    },
    result.passport_number && {
      icon: <FaPassport />,
      label: "Passport No",
      value: result.passport_number,
      cls: "id-number",
    },
  ].filter(Boolean);

  return (
    <motion.div
      className={`result-card-modern${result.is_searched_number ? " card-primary" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="result-card-header">
        <div className="phone-avatar">
          <FaPhoneAlt />
        </div>
        <div className="phone-info">
          <h3 className="phone-number">+91 {result.mobile}</h3>
          {result.circle && <span className="phone-circle">{result.circle}</span>}
        </div>
        {result.is_searched_number && (
          <span className="searched-badge">
            <FaStar /> Searched
          </span>
        )}
      </div>

      <div className="result-card-body">
        {fields.map((f, i) => (
          <div key={i} className="info-row">
            <div className="info-icon-wrapper">{f.icon}</div>
            <div className="info-content">
              <span className="info-label">{f.label}</span>
              <span className={`info-value${f.cls ? ` ${f.cls}` : ""}`}>{f.value}</span>
            </div>
          </div>
        ))}
      </div>

      {result.circle && (
        <div className="result-card-footer">
          <FaNetworkWired className="carrier-icon" />
          <span>{result.circle}</span>
        </div>
      )}
    </motion.div>
  );
}

// ─── Result Section Group ────────────────────────────────────────────────────
function ResultGroup({ label, icon, count, records, colorClass, baseDelay = 0 }) {
  if (!records || records.length === 0) return null;
  return (
    <div className="result-group">
      <div className={`result-group-header ${colorClass}`}>
        <div className="rg-label">
          {icon}
          <span>{label}</span>
        </div>
        <span className="rg-count">{count} record{count !== 1 ? "s" : ""}</span>
      </div>
      <div className="results-grid">
        {records.map((r, i) => (
          <ResultCard key={i} result={r} delay={baseDelay + i * 0.07} />
        ))}
      </div>
    </div>
  );
}

// ─── Home ────────────────────────────────────────────────────────────────────
function Home({ darkMode, toggleDarkMode }) {
  const [num, setNum] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [notice, setNotice] = useState(null);
  const [showNotice, setShowNotice] = useState(false);
  const [mainRecords, setMainRecords] = useState([]);
  const [altRecords, setAltRecords] = useState([]);
  const [searchMeta, setSearchMeta] = useState(null);
  const [developer, setDeveloper] = useState("");
  const [telegram, setTelegram] = useState("");
  const [noData, setNoData] = useState(false);

  const resetResults = () => {
    setShowResult(false);
    setNoData(false);
    setMainRecords([]);
    setAltRecords([]);
    setSearchMeta(null);
  };

  const handleGetDetails = async () => {
    if (!num) return toast.warn("Please enter a phone number.");
    if (!/^\d{10}$/.test(num))
      return toast.warn("Please enter a valid 10-digit Indian number.");

    resetResults();
    setLoading(true);

    try {
      const res = await axios.get(
        `https://true-call-check.vercel.app/api/truecallcheckapi?newKey=${num}`
      );
      const data = res.data;

      const main = Array.isArray(data?.data?.main_records)
        ? data.data.main_records
        : [];
      const alt = Array.isArray(data?.data?.alternative_records)
        ? data.data.alternative_records
        : [];

      if (main.length === 0 && alt.length === 0) {
        setNoData(true);
      } else {
        setMainRecords(main);
        setAltRecords(alt);
        setSearchMeta({
          total: main.length + alt.length,
          main: main.length,
          alt: alt.length,
        });
        setShowResult(true);
      }

      setDeveloper(data?.developer || "Github:@GoutamHX");
      setTelegram(data?.Telegram || "@MR_GOUTAM08");
    } catch (error) {
      const status = error.response?.status;
      const serverMsg = error.response?.data?.error;

      if (status === 404) {
        setNoData(true);
      } else if (status === 400) {
        toast.error(serverMsg || "Bad request. Please check the number.");
      } else if (status === 408) {
        toast.error("Request timed out. The data server is slow. Try again.");
      } else if (status === 503) {
        toast.error("Data server unreachable. Please try again later.");
      } else if (status === 500) {
        toast.error("Server error. Please try again in a moment.");
      } else if (error.code === "ECONNABORTED" || error.message === "Network Error") {
        toast.error("Network error. Check your connection and try again.");
      } else {
        toast.error(serverMsg || "Something went wrong. Please try again.");
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
    } catch (_) {}
  };

  useEffect(() => {
    handleGetNotice();
  }, []);

  const trustBadges = ["Free", "Instant", "No Login", "Private"];

  const features = [
    {
      icon: <FaPhoneAlt />,
      title: "Instant Number Lookup",
      description:
        "Enter a number and get real-time info: name, father name, address, carrier, email, and more.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Carrier & Location Info",
      description:
        "See the telecom circle and service provider for any Indian mobile number instantly.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "100% Free Forever",
      description:
        "No charges, subscriptions, or hidden fees. TrueCallCheck is completely free to use.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Responsive",
      description:
        "Works seamlessly on both mobile and desktop browsers with a clean adaptive UI.",
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast Results",
      description:
        "Get accurate caller information in milliseconds with our high-speed lookup engine.",
    },
    {
      icon: <FaGithub />,
      title: "Open Source",
      description:
        "Community-supported, transparent, and fully customizable. Contribute on GitHub.",
    },
  ];

  const dataPoints = [
    { icon: <FaUser />, label: "Full Name & Father Name" },
    { icon: <FaMapMarkerAlt />, label: "Address Information" },
    { icon: <FaNetworkWired />, label: "Carrier & Circle Details" },
    { icon: <FaEnvelope />, label: "Email Address" },
    { icon: <FaMobileAlt />, label: "Mobile & Alternate Numbers" },
    { icon: <FaIdCard />, label: "Document & Passport No" },
  ];

  const privacyPoints = [
    {
      icon: <FaEyeSlash />,
      title: "No Data Storage",
      desc: "We do not store any user data or lookup history. Your searches remain private.",
    },
    {
      icon: <FaUserCheck />,
      title: "No Login Required",
      desc: "No account or login is required to use TrueCallCheck. Just search and go.",
    },
    {
      icon: <FaCookieBite />,
      title: "No Tracking",
      desc: "We don't use cookies, analytics trackers, or any form of user tracking.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Free Forever",
      desc: "No charges, subscriptions, or hidden fees. Ever.",
    },
  ];

  return (
    <div className="home-app">
      {/* ── Notice / Maintenance Overlay ── */}
      <AnimatePresence>
        {showNotice && (
          <div className="maintenance-overlay">
            <motion.div
              className={`maintenance-box ${darkMode ? "dark-maintenance" : "light-maintenance"}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="maintenance-decoration">
                <div className="corner corner-tl" />
                <div className="corner corner-tr" />
                <div className="corner corner-bl" />
                <div className="corner corner-br" />
              </div>

              <div className="maintenance-icon-container">
                <div className="maintenance-icon-circle">
                  <FaTools size={28} className="main-tool-icon" />
                  <FaExclamationTriangle size={14} className="exclamation-icon" />
                </div>
                <div className="pulse-dots">
                  <span className="dot dot-1" />
                  <span className="dot dot-2" />
                  <span className="dot dot-3" />
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
                <div className="footer-divider" />
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
      </AnimatePresence>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="home-main">
        {/* ── Hero ── */}
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
              <span className="gradient-text">TrueCallCheck</span>
              <br />
              <span className="hero-title-sub">Advanced Phone Number Analysis</span>
            </h1>
            <p className="hero-subtitle">
              Search any Indian phone number to get instant caller details — name, father
              name, address, carrier, email, and more.
            </p>

            <div className="trust-badges">
              {trustBadges.map((badge, i) => (
                <span key={i} className="trust-badge">
                  <FaCheckCircle className="trust-icon" />
                  {badge}
                </span>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="search-box">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={num}
                  maxLength={10}
                  onChange={(e) => setNum(e.target.value.replace(/\D/g, ""))}
                  onKeyDown={(e) => e.key === "Enter" && handleGetDetails()}
                />
                <motion.button
                  onClick={handleGetDetails}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <span className="spinner" />
                  ) : (
                    <>
                      <FaSearch /> Search
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            <p className="hero-hint">
              Currently supports Indian (+91) phone numbers only.
            </p>
          </motion.div>

          {/* ── No Data ── */}
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
                  <strong>+91 {num}</strong>. Please verify the number and try again.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Results ── */}
          <AnimatePresence>
            {showResult && (
              <motion.section
                className="results-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Meta bar */}
                {searchMeta && (
                  <motion.div
                    className="search-meta-card"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    <div className="meta-item">
                      <FaDatabase className="meta-icon" />
                      <div className="meta-content">
                        <span className="meta-label">Total Records</span>
                        <span className="meta-value">{searchMeta.total}</span>
                      </div>
                    </div>
                    <div className="meta-divider" />
                    <div className="meta-item">
                      <FaLayerGroup className="meta-icon" />
                      <div className="meta-content">
                        <span className="meta-label">Main</span>
                        <span className="meta-value">{searchMeta.main}</span>
                      </div>
                    </div>
                    <div className="meta-divider" />
                    <div className="meta-item">
                      <FaCodeBranch className="meta-icon" />
                      <div className="meta-content">
                        <span className="meta-label">Alternative</span>
                        <span className="meta-value">{searchMeta.alt}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Main Records */}
                <ResultGroup
                  label="Main Result"
                  icon={<FaStar />}
                  count={mainRecords.length}
                  records={mainRecords}
                  colorClass="rg-main"
                  baseDelay={0.1}
                />

                {/* Alternative Records */}
                <ResultGroup
                  label="Alternative Records"
                  icon={<FaCodeBranch />}
                  count={altRecords.length}
                  records={altRecords}
                  colorClass="rg-alt"
                  baseDelay={0.15}
                />

                {/* Developer footer */}
                <motion.div
                  className="developer-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="dev-divider" />
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
          </AnimatePresence>
        </section>

        {/* ── About ── */}
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
                {[
                  "Instant Number Lookup — Just enter a number and get real-time info",
                  "Carrier & Location Info — See the service provider and general region",
                  "100% Free — No charges, subscriptions, or hidden fees",
                  "Mobile Responsive — Works seamlessly on both mobile and desktop",
                  "Open Source — Community-supported, customizable project",
                ].map((item, i) => (
                  <div key={i} className="highlight-item">
                    <FaCheckCircle className="highlight-icon" />
                    <span>{item}</span>
                  </div>
                ))}
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
                Currently supports Indian (+91) phone numbers only. More countries coming soon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Features ── */}
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

        {/* ── Privacy ── */}
        <section id="privacy" className="privacy-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Privacy</span>
            <h2 className="section-title">
              Privacy &amp; <span className="gradient-text">Transparency</span>
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

        {/* ── Platforms ── */}
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
                  Download our Android app for on-the-go caller identification. Fast,
                  lightweight, and works offline.
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
                  Send any phone number directly in Telegram and get instant caller details.
                  No app install needed.
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
            >
              <div className="active-badge-ribbon">You are here</div>
              <div className="platform-icon-wrapper web-icon-bg">
                <FaGlobe className="platform-icon" />
              </div>
              <div className="platform-info">
                <span className="platform-badge">Web App</span>
                <h3 className="platform-name">TrueCallCheck Web</h3>
                <p className="platform-desc">
                  Use right from your browser with full features. Dark mode, instant search,
                  and detailed results.
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
        autoClose={3500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default Home;
