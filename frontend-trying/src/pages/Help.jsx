import "../styles/results.css";
import {
  FaBookOpen,
  FaPlayCircle,
  FaChartLine,
  FaDownload,
  FaQuestionCircle
} from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Help() {
    const navigate = useNavigate();
    return (
    <div className="results-page">
      <div className="results-container">

        {/* HEADER */}
       <div className="help-header-box help-header-flex">
        <div>
            <h1>Help & Documentation</h1>
            <p>
            Learn how to use RNAVerse to predict RNA methylation efficiently.
            </p>
        </div>

        <button
            className="btn-secondary"
            onClick={() => navigate("/settings")}
            >
            <FaCog />
            Settings
        </button>

        </div>

        {/* GRID */}
        <div className="help-grid">

          <div className="help-card">
            <FaBookOpen className="help-icon" />
            <h2>What is RNAVerse?</h2>
            <p>
              RNAVerse is a bioinformatics platform that predicts RNA methylation
              sites using machine learning models and presents results in a
              structured and interpretable format.
            </p>
          </div>

          <div className="help-card">
            <FaChartLine className="help-icon" />
            <h2>How to Run a Prediction</h2>
            <ol>
              <li>Go to the Predict page</li>
              <li>Enter or upload RNA sequences</li>
              <li>Select methylation type and model</li>
              <li>Run prediction</li>
              <li>View results instantly</li>
            </ol>
          </div>

          <div className="help-card">
            <FaDownload className="help-icon" />
            <h2>Understanding Results</h2>
            <p>
              The Results page shows predicted methylation type, probability
              score, model used, and final status for each sequence.
            </p>
          </div>

          <div className="help-card video-card">
            <FaPlayCircle className="help-icon video-icon" />
            <h2>Video Tutorial</h2>
            <p>
              A step by step walkthrough video will be added here soon to
              demonstrate how to use RNAVerse end to end.
            </p>
          </div>

          <div className="help-card">
            <FaQuestionCircle className="help-icon" />
            <h2>Need Help?</h2>
            <p>
              For questions or issues, please contact the RNAVerse development
              team or refer to official project documentation.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
