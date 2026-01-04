import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResultsHeader() {
  return (
    <div className="results-header">
      <div>
        <h1 className="results-title">Prediction Results</h1>
        <p className="results-subtitle">
          Analysis complete • 3 unique predictions • 3 total model runs
        </p>
      </div>

      <div className="header-actions">
        <button className="btn-outline">← Back</button>
        <button className="btn-primary">Download CSV</button>
      </div>
    </div>
  );
}
