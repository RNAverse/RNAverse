import { FaStar } from "react-icons/fa";

export default function ResultsInfoBox() {
  return (
    <div className="info-box">
      <div className="info-icon">
        <FaStar />
      </div>

      <div>
        <div className="info-title">Showing Best Predictions</div>
        <div className="info-text">
          Only the highest probability prediction from all models is shown.
        </div>
      </div>
    </div>
  );
}
