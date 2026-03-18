import "../styles/results.css";
import {
  FaBrain,
  FaTable,
  FaDownload,
  FaQuestionCircle
} from "react-icons/fa";

export default function Settings() {
  return (
    <div className="results-page">
      <div className="results-container">

        {/* HEADER */}
        <div className="help-header-box">
          <h1>Settings</h1>
          <p>
            Customize how RNAVerse runs predictions and displays results.
          </p>
        </div>

        <div className="help-grid">

          {/* PREDICTION DEFAULTS */}
          <div className="help-card">
            <FaBrain className="help-icon" />
            <h2>Prediction Defaults</h2>

            <div className="setting-row">
              <label>Default Methylation Type</label>
              <select>
                <option>m6A</option>
                <option>m5C</option>
                <option>m7G</option>
              </select>
            </div>

            <div className="setting-row">
              <label>Default Model</label>
              <select>
                <option>SVM</option>
                <option>Random Forest</option>
                <option>XGBoost</option>
              </select>
            </div>

            <div className="setting-row">
              <label>Auto-run prediction after upload</label>
              <input type="checkbox" />
            </div>
          </div>

          {/* RESULTS DISPLAY */}
          <div className="help-card">
            <FaTable className="help-icon" />
            <h2>Results Display</h2>

            <div className="setting-row">
              <label>Show only best prediction per sequence</label>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="setting-row">
              <label>Highlight high confidence scores</label>
              <input type="checkbox" />
            </div>

            <div className="setting-row">
              <label>Compact table layout</label>
              <input type="checkbox" />
            </div>
          </div>

          {/* DATA & EXPORT */}
          <div className="help-card">
            <FaDownload className="help-icon" />
            <h2>Data & Export</h2>

            <div className="setting-row">
              <label>Include probability score in CSV</label>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="setting-row">
              <label>Include model details in CSV</label>
              <input type="checkbox" defaultChecked />
            </div>

            <p className="setting-note">
              Export settings apply when downloading prediction results.
            </p>
          </div>

          {/* HELP */}
          <div className="help-card video-card">
            <FaQuestionCircle className="help-icon" />
            <h2>Help & Documentation</h2>
            <p>
              Need help understanding predictions or results? Visit the Help
              page for full documentation and tutorials.
            </p>

            <button className="btn-primary" style={{ marginTop: "12px" }}>
              Open Help Page
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
