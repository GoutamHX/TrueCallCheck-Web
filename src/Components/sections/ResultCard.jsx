import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaIdCard,
  FaPassport,
  FaCheckCircle,
  FaCopy,
  FaCheck,
  FaSignal,
} from "react-icons/fa";

export function ResultCard({ result, delay = 0 }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    if (!text) return;
    navigator.clipboard?.writeText(String(text));
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const fields = [
    result.name && { icon: <FaUser />, label: "Subscriber Name", value: result.name, copyable: true },
    (result.father_name || result.fname) && {
      icon: <FaUser />,
      label: "Father / Guardian",
      value: result.father_name || result.fname,
    },
    result.email && { icon: <FaEnvelope />, label: "Email Address", value: result.email, copyable: true, isMono: true },
    result.address && {
      icon: <FaMapMarkerAlt />,
      label: "Registered Address",
      value: result.address,
      cls: "address",
    },
    (result.alt_mobile || result.alt) && {
      icon: <FaPhoneAlt />,
      label: "Alternative Number",
      value: result.alt_mobile || result.alt,
      copyable: true,
      isMono: true,
    },
    (result.document_number || result.DocumentNumber) && {
      icon: <FaIdCard />,
      label: "Document Identifier",
      value: result.document_number || result.DocumentNumber,
      cls: "id-number",
      isMono: true,
      copyable: true,
    },
    result.passport_number && {
      icon: <FaPassport />,
      label: "Passport Number",
      value: result.passport_number,
      cls: "id-number",
      isMono: true,
    },
  ].filter(Boolean);

  return (
    <motion.div
      className={`dossier-card${result.is_searched_number ? " is-primary-target" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
    >
      {/* Dossier Card Header */}
      <div className="dossier-header">
        <div className="dossier-identity">
          <div className="telecom-avatar" aria-hidden="true">
            <FaPhoneAlt />
          </div>
          <div className="dossier-title-area">
            <div className="dossier-num-row">
              <h3 className="dossier-number mono-num">+91 {result.mobile}</h3>
              <button
                type="button"
                className="copy-chip-btn"
                onClick={() => copyToClipboard(`+91${result.mobile}`, "mobile")}
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedKey === "mobile" ? <FaCheck className="copied-icon" /> : <FaCopy />}
              </button>
            </div>
            {result.circle && (
              <div className="dossier-telecom-meta">
                <FaSignal className="signal-icon" aria-hidden="true" />
                <span className="telecom-circle-badge mono-num">{result.circle}</span>
              </div>
            )}
          </div>
        </div>

        <div className="dossier-badges">
          {result.is_searched_number && (
            <span className="target-badge">
              <FaCheckCircle className="badge-icon" />
              Direct Match
            </span>
          )}
        </div>
      </div>

      {/* Dossier Field Entries */}
      <div className="dossier-body">
        {fields.map((f, i) => (
          <div key={i} className={`dossier-row${f.cls ? ` ${f.cls}` : ""}`}>
            <div className="row-icon-cell" aria-hidden="true">
              {f.icon}
            </div>
            <div className="row-content-cell">
              <span className="row-label">{f.label}</span>
              <div className="row-value-group">
                <span className={`row-value${f.isMono ? " mono-num" : ""}`}>{f.value}</span>
                {f.copyable && (
                  <button
                    type="button"
                    className="inline-copy-btn"
                    onClick={() => copyToClipboard(f.value, `field-${i}`)}
                    title={`Copy ${f.label}`}
                    aria-label={`Copy ${f.label}`}
                  >
                    {copiedKey === `field-${i}` ? <FaCheck className="copied-icon" /> : <FaCopy />}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dossier Card Footer */}
      {result.circle && (
        <div className="dossier-footer">
          <span className="telemetry-stamp mono-num">TELECOM ROUTE · {result.circle.toUpperCase()}</span>
          <span className="status-verified-dot">
            <span className="pulse-point" /> Verified Directory Record
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default ResultCard;

