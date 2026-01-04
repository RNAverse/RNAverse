import { HiMiniCpuChip } from "react-icons/hi2";


export default function Step4ModelSelection({
  runAllModels,
  onRunAllModelsChange,
  selectedModels,
  toggleModel,
}) {
  const modelOptions = [
    { id: "SVM", name: "SVM", fullName: "Support Vector Machine", type: "ML", color: "blue" },
    { id: "RandomForest", name: "Random Forest", fullName: "Ensemble Learning", type: "ML", color: "green" },
    { id: "LogisticRegression", name: "Logistic Regression", fullName: "Statistical Model", type: "ML", color: "amber" },
    { id: "MLP", name: "MLP", fullName: "Multi-Layer Perceptron", type: "DL", color: "purple" },
    { id: "XGBoost", name: "XGBoost", fullName: "Gradient Boosting", type: "ML", color: "rose" },
    { id: "CNN", name: "CNN", fullName: "Convolutional Neural Net", type: "DL", color: "indigo" },
  ];

  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon"><HiMiniCpuChip /></div>
        <div>
          <div className="card__title">Model Selection</div>
          <div className="card__hint">Choose how you want to run prediction</div>
        </div>
      </div>

      <div className={`runAllBox ${runAllModels ? "active" : ""}`}>
        <div>
          <div className="runAllTitle"> Run All Models</div>
          <div className="runAllHint">Compare results across all available models</div>
        </div>

        <input
          type="checkbox"
          checked={runAllModels}
          onChange={(e) => onRunAllModelsChange(e.target.checked)}
        />
      </div>

      {!runAllModels && (
        <>
          <div className="modelsHint">Or select specific models to run</div>

          <div className="modelGrid">
            {modelOptions.map((m) => {
              const selected = selectedModels.includes(m.id);

              return (
                <button
                  key={m.id}
                  type="button"
                  className={`modelCard ${m.color} ${selected ? "active" : ""}`}
                  onClick={() => toggleModel(m.id)}
                >
                  <div className="modelTop">
                    <span className={`modelTag ${m.type === "DL" ? "dl" : "ml"}`}>
                      {m.type}
                    </span>
                    <input type="checkbox" checked={selected} readOnly />
                  </div>

                  <div className="modelName">{m.name}</div>
                  <div className="modelSub">{m.fullName}</div>
                </button>
              );
            })}
          </div>

          {selectedModels.length === 0 && (
            <div className="warnBox">
              Please select at least one model or enable "Run All Models"
            </div>
          )}
        </>
      )}
    </div>
  );
}
