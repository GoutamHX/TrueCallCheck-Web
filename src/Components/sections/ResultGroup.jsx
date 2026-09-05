import React from "react";
import ResultCard from "./ResultCard";

export function ResultGroup({ label, icon, count, records, colorClass, baseDelay = 0 }) {
  if (!records || records.length === 0) return null;

  return (
    <div className="result-group">
      <div className={`result-group-header ${colorClass}`}>
        <div className="rg-label">
          <span className="rg-icon-box">{icon}</span>
          <span className="rg-title">{label}</span>
        </div>
        <span className="rg-count mono-num">
          {count} {count !== 1 ? "records" : "record"}
        </span>
      </div>
      <div className="results-grid">
        {records.map((r, i) => (
          <ResultCard key={r.mobile ? `${r.mobile}-${i}` : i} result={r} delay={baseDelay + i * 0.05} />
        ))}
      </div>
    </div>
  );
}

export default ResultGroup;
