import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaIdCard,
  FaPassport,
  FaNetworkWired,
  FaStar,
} from "react-icons/fa";

export function ResultCard({ result, delay = 0 }) {
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

export default ResultCard;
