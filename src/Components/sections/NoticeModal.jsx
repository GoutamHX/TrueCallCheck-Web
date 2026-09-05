import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTools, FaExclamationTriangle, FaTelegram, FaTimes } from "react-icons/fa";
import { SITE_CONFIG } from "../../data";

export function NoticeModal({ showNotice, notice, darkMode, onClose }) {
  useEffect(() => {
    if (!showNotice || !onClose) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showNotice, onClose]);

  return (
    <AnimatePresence>
      {showNotice && (
        <div
          className="maintenance-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="notice-modal-title"
        >
          <motion.div
            className={`maintenance-box ${darkMode ? "dark-maintenance" : "light-maintenance"}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {onClose && (
              <button
                type="button"
                className="modal-dismiss-btn"
                onClick={onClose}
                aria-label="Dismiss notice"
                title="Dismiss notice"
              >
                <FaTimes />
              </button>
            )}
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
              <span id="notice-modal-title" className="title-highlight">{notice?.title || "Notice"}</span>
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
                <a
                  className="admin-link"
                  href={SITE_CONFIG.author.adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  imgoutam
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default NoticeModal;
