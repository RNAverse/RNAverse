import { HiMiniCpuChip, HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Step4ModelSelection({
  selectedModel,          
  setSelectedModel,       
}) {
  const navigate = useNavigate();

  //  CNN first  (Best Model)
  const modelOptions = [
    { id: "CNN", name: "CNN", fullName: "Convolutional Neural Net (Best Model)", type: "DL", color: "indigo" },
    { id: "SVM", name: "SVM", fullName: "Support Vector Machine", type: "ML", color: "blue" },
    { id: "RandomForest", name: "Random Forest", fullName: "Ensemble Learning", type: "ML", color: "green" },
    { id: "LogisticRegression", name: "Logistic Regression", fullName: "Statistical Model", type: "ML", color: "amber" },
    { id: "MLP", name: "MLP", fullName: "Multi-Layer Perceptron", type: "DL", color: "purple" },
    { id: "XGBoost", name: "XGBoost", fullName: "Gradient Boosting", type: "ML", color: "rose" },
  ];

  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">
          <HiMiniCpuChip />
        </div>

        <div style={{ flex: 1 }}>
          <div className="card__title">Model Selection</div>
          <div className="card__hint">Select one model to run prediction</div>
        </div>

        <button
          type="button"
          className="helpBtn"
          onClick={() => navigate("/help")}
          title="Help"
        >
          <HiOutlineQuestionMarkCircle />
        </button>
      </div>

      <div className="modelGrid">
        {modelOptions.map((m) => {
          const selected = selectedModel === m.id;

          return (
            <button
              key={m.id}
              type="button"
              className={`modelCard ${m.color} ${selected ? "active" : ""}`}
              onClick={() => setSelectedModel(m.id)} // ✅ radio behavior
            >
              <div className="modelTop">
                <span className={`modelTag ${m.type === "DL" ? "dl" : "ml"}`}>
                  {m.type}
                </span>

                {/* radio indicator */}
                <input type="radio" checked={selected} readOnly />
              </div>

              <div className="modelName">{m.name}</div>
              <div className="modelSub">{m.fullName}</div>
            </button>
          );
        })}
      </div>

      {!selectedModel && (
        <div className="warnBox">Please select one model to continue</div>
      )}
    </div>
  );
}
