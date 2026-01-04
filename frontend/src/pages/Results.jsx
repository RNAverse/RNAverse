import { useState } from "react";
import "../styles/results.css";

import ResultsHeader from "../components/ResultsHeader";
import StatsCard from "../components/StatsCard";
import ResultsTabs from "../components/ResultsTabs";
import ResultsInfoBox from "../components/ResultsInfoBox";
import ResultsSearch from "../components/ResultsSearch";
import ResultsTable from "../components/ResultsTable";
import ResultsVisualizations from "../components/ResultsVisualizations";

import { FaDna, FaVial, FaRobot, FaChartBar } from "react-icons/fa";

export default function Results() {
  const [activeTab, setActiveTab] = useState("table");

  return (
    <div className="results-page">
      <div className="results-container">

        {/* HEADER */}
        <ResultsHeader />

        {/* STATS */}
        <div className="stats-grid">
          <StatsCard icon={FaDna} value={3} label="Sequences" bg="#e0e7ff" />
          <StatsCard icon={FaVial} value={1} label="Methylation Types" bg="#ede9fe" />
          <StatsCard icon={FaRobot} value={6} label="Models Used" bg="#dcfce7" />
          <StatsCard icon={FaChartBar} value={18} label="Total Predictions" bg="#fef3c7" />
        </div>

        {/* TABS */}
        <ResultsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* CONTENT */}
        {activeTab === "table" && (
          <>
            <ResultsInfoBox />
            <ResultsSearch />
            <ResultsTable />
          </>
        )}

        {activeTab === "visualizations" && <ResultsVisualizations />}

      </div>
    </div>
  );
}
