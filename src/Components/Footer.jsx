import React from 'react';
import { 
  FaGithub, FaTelegram, FaCode, FaInfoCircle,
  FaMobileAlt, FaCheckCircle, FaLinkedin, FaTwitter
} from "react-icons/fa";
import '../Style/Footer.css';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer mt-auto ${darkMode ? 'footer-background text-white' : 'bg-light text-dark'} pt-5 pb-4`}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <div className="footer-brand d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mb-3">
              <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 me-md-3 mb-3 mb-md-0">
                <FaMobileAlt className="text-primary fs-4" />
              </div>
              <h3 className="h5 mb-0">TrueCallCheck </h3>
            </div>
            <p className="small opacity-75 mb-3">
              Advanced phone number analysis platform providing carrier details, 
              geographical location, and caller identification.
            </p>
            <div className="social-links d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://github.com/GoutamHX" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub className="fs-5" />
              </a>
              <a href="https://t.me/TheAdvanceBots" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTelegram className="fs-5" />
              </a>
              <a href="https://instagram.com/ig.goutam_" target ="_blank"className="social-icon">
                <AiFillInstagram className="fs-5" />
              </a>
              {/* <a href="#" className="social-icon">
                <FaTwitter className="fs-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <h5 className="footer-heading mb-3 position-relative d-inline-block">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none hover-primary">Home</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none hover-primary">Features</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none hover-primary">API Docs</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none hover-primary">Pricing</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h5 className="footer-heading mb-3 position-relative d-inline-block">Features</h5>
            <ul className="feature-list list-unstyled">
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <FaCheckCircle className="text-primary me-2" /><span>Carrier Identification</span>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <FaCheckCircle className="text-primary me-2" /><span>Location Tracking</span>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <FaCheckCircle className="text-primary me-2" /><span>Caller Name Detection</span>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <FaCheckCircle className="text-primary me-2" /><span>Spam Detection</span>
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h5 className="footer-heading mb-3 position-relative d-inline-block">Developer</h5>
            <ul className="developer-info list-unstyled">
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <a href="https://github.com/GoutamHX" target="_blank" rel="noopener noreferrer" className="text-decoration-none hover-primary">
                  <FaGithub className="me-2" /><span>GitHub</span>
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <a href="https://t.me/TheAdvanceBots" target="_blank" rel="noopener noreferrer" className="text-decoration-none hover-primary">
                  <FaTelegram className="me-2" /><span>Telegram</span>
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <a href="https://github.com/GoutamHX/TrueCallCheck-Web" target="_blank" className="text-decoration-none hover-primary">
                  <FaCode className="me-2" /><span>Source Code</span>
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <a href="https://t.me/MR_GOUTAM08" target="_blank" className="text-decoration-none hover-primary">
                  <FaInfoCircle className="me-2" /><span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-5 pt-4 border-top border-light border-opacity-10">
          <p className="small mb-0 opacity-75">
            &copy; {new Date().getFullYear()} TrueCallCheck . All rights reserved.
            <span className="d-none d-sm-inline mx-1">|</span>
            <br className="d-sm-none" />
            Designed and developed by ❤️ Goutam シ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
