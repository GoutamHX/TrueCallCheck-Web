import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDatabase,
  FaLayerGroup,
  FaCodeBranch,
  FaStar,
  FaGithub,
  FaTelegram,
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
  );
}

export default ResultSection;
