import "../styles/results.css";

export default function ResultsVisualizations() {
  return (
    <div className="visual-grid">

      {/* LEFT CARD */}
      <div className="visual-card">
        <h3>Model Performance Comparison</h3>
        <p className="visual-subtitle">
          Average probability score by model
        </p>

        <div className="bar-chart">
          {[
            { name: "LogisticRegression", value: 82, color: "orange" },
            { name: "XGBoost", value: 76, color: "red" },
            { name: "SVM", value: 68, color: "blue" },
            { name: "CNN", value: 65, color: "purple" },
            { name: "RandomForest", value: 71, color: "green" },
            { name: "MLP", value: 59, color: "violet" }
          ].map((item) => (
            <div key={item.name} className="bar-row">
              <span className="bar-label">{item.name}</span>
              <div className="bar-track">
                <div
                  className={`bar-fill ${item.color}`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="bar-value">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="visual-card">
        <h3>Methylation Site Distribution</h3>
        <p className="visual-subtitle">
          Total predicted sites by methylation type
        </p>

        <div className="donut-wrapper">
          <svg width="180" height="180" viewBox="0 0 36 36" className="donut">
            <circle
              className="donut-bg"
              cx="18"
              cy="18"
              r="15.9155"
            />
            <circle
              className="donut-ring"
              cx="18"
              cy="18"
              r="15.9155"
              strokeDasharray="100 0"
            />
            <text x="18" y="20.35" className="donut-text">
              m6A
            </text>
          </svg>

          <div className="donut-legend">
            <span className="legend-dot"></span>
            <span>m6A</span>
          </div>
        </div>
      </div>

    </div>
  );
}
