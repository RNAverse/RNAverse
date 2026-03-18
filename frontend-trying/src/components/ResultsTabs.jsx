export default function ResultsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="results-tabs">
      <button
        className={`results-tab ${activeTab === "table" ? "active" : ""}`}
        onClick={() => setActiveTab("table")}
      >
        Results Table
      </button>

      <button
        className={`results-tab ${activeTab === "visualizations" ? "active" : ""}`}
        onClick={() => setActiveTab("visualizations")}
      >
        Visualizations
      </button>
    </div>
  );
}
