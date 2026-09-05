import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDatabase,
  FaCodeBranch,
  FaStar,
  FaGithub,
  FaTelegram,
  FaShieldAlt,
} from "react-icons/fa";
import ResultGroup from "./ResultGroup";

export function ResultSection({
  showResult,
  searchMeta,
  mainRecords,
  altRecords,
  developer,
  telegram,
}) {
  return (
    <AnimatePresence>
      {showResult && (
        <motion.section
          className="results-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Sleek, Compact Telemetry Bar */}
          {searchMeta && (
            <div className="telemetry-bar-shelf">
              <div className="telemetry-pill-group">
                <div className="telemetry-pill">
                  <FaDatabase className="pill-icon" aria-hidden="true" />
                  <span className="pill-title mono-num">TOTAL MATCHES</span>
                  <span className="pill-badge mono-num">{searchMeta.total}</span>
                </div>

                <div className="telemetry-pill is-primary">
                  <FaStar className="pill-icon primary" aria-hidden="true" />
                  <span className="pill-title mono-num">DIRECT TARGET</span>
                  <span className="pill-badge primary-badge mono-num">{searchMeta.main}</span>
                </div>

                <div className="telemetry-pill">
                  <FaCodeBranch className="pill-icon" aria-hidden="true" />
                  <span className="pill-title mono-num">ALTERNATIVE LINES</span>
                  <span className="pill-badge mono-num">{searchMeta.alt}</span>
                </div>
              </div>

              <div className="telemetry-route-tag">
                <FaShieldAlt className="route-icon" aria-hidden="true" />
                <span className="mono-num">200 OK · RESOLVED</span>
              </div>
            </div>
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
  );
}

export default ResultSection;
