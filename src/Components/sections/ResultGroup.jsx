import React from "react";
import ResultCard from "./ResultCard";

export function ResultGroup({ label, icon, count, records, colorClass, baseDelay = 0 }) {
  if (!records || records.length === 0) return null;

  return (
    <div className="result-group">
      <div className={`result-group-header ${colorClass}`}>
        <div className="rg-label">
          {icon}
          <span>{label}</span>
        </div>
        <span className="rg-count">
          {count} record{count !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="results-grid">
        {records.map((r, i) => (
          <ResultCard key={i} result={r} delay={baseDelay + i * 0.07} />
        ))}
      </div>
    </div>
  );
}

export default ResultGroup;
