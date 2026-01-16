// src/pages/Predict.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Step1SequenceType from "./predict/steps/Step1SequenceType";
import Step2SequenceInput from "./predict/steps/Step2SequenceInput";
import Step3Methylation from "./predict/steps/Step3Methylation";
import Step4ModelSelection from "./predict/steps/Step4ModelSelection";

export default function Predict() {
  const navigate = useNavigate();

  const steps = useMemo(
    () => ["Sequence Type", "Input Sequences", "Methylation Type", "Model Selection"],
    []
  );

  const [step, setStep] = useState(1);

  /* =========================
     STEP 1
     ========================= */
  const [sequenceType, setSequenceType] = useState("");

  /* =========================
     STEP 2
     ========================= */
  const [sequences, setSequences] = useState("");
  const fileInputRef = useRef(null);
  const [sequenceError, setSequenceError] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  /* =========================
     STEP 3
     ========================= */
  const [methylation, setMethylation] = useState([]);

  /* =========================
     STEP 4
     ========================= */
  const [runAllModels, setRunAllModels] = useState(false);
  const [selectedModels, setSelectedModels] = useState([]);

  const ALL_MODELS = useMemo(
    () => ["SVM", "RandomForest", "LogisticRegression", "MLP", "XGBoost", "CNN"],
    []
  );

  /* =========================
     Reset Step 2 if type changes
     ========================= */
  useEffect(() => {
    setSequences("");
    setSequenceError(null);
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [sequenceType]);

  /* =========================
     Step 1 options
     ========================= */
  const types = [
    { id: "RNA", label: "RNA", description: "Valid characters: A, U, C, G" },
    { id: "DNA", label: "DNA", description: "Valid characters: A, C, G, T" },
  ];

  const validChars = sequenceType === "DNA" ? "A, C, G, T" : "A, U, C, G";
  const typeLabel = sequenceType || "RNA";

  const placeholderText = `Paste sequences here. One or multiple sequences allowed.

Example:
>Sequence1
${(sequenceType || "RNA") === "DNA" ? "ACGTACGT" : "AUGCCAUG"}
>Sequence2
${(sequenceType || "RNA") === "DNA" ? "GATTACA" : "GCUAAUCGGA"}`;

  /* =========================
     Validation
     ========================= */
  const validateSequences = (text) => {
    if (!text.trim()) {
      setSequenceError(null);
      return;
    }

    const allowed =
      sequenceType === "RNA" ? ["A", "U", "C", "G"] : ["A", "C", "G", "T"];

    for (const line of text.split("\n")) {
      if (line.startsWith(">")) continue;

      for (const ch of line.toUpperCase().replace(/\s/g, "")) {
        if (!allowed.includes(ch)) {
          setSequenceError(
            sequenceType === "RNA"
              ? "Invalid RNA sequence. Only A, U, C, G are allowed."
              : "Invalid DNA sequence. Only A, C, G, T are allowed."
          );
          return;
        }
      }
    }

    setSequenceError(null);
  };

  /* =========================
     Navigation rules
     ========================= */
  const canGoNext = () => {
    if (step === 1) return !!sequenceType;
    if (step === 2) return sequences.trim().length > 0 && !sequenceError;
    if (step === 3) return methylation.length > 0;
    if (step === 4) return runAllModels || selectedModels.length > 0;
    return false;
  };

  const onNext = () => {
    if (!canGoNext()) return;
    setStep((s) => Math.min(4, s + 1));
  };

  // ✅ FIXED BACK BUTTON
  const onBack = () => {
    if (step === 1) {
      navigate("/"); // go Home
    } else {
      setStep((s) => s - 1);
    }
  };

  /* =========================
     Step 2 helpers
     ========================= */
  const loadExample = () => {
    const example =
      sequenceType === "DNA"
        ? `>Sequence1\nACGTTGCA\n>Sequence2\nGATTACA`
        : `>Sequence1\nAUGCCAUAG\n>Sequence2\nGCUAAUCGGA`;

    setSequences(example);
    validateSequences(example);
    setUploadedFile(null);
  };

  const openFilePicker = () => fileInputRef.current?.click();

  const onFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedExt = [".fasta", ".fa", ".csv"];
    const ext = "." + file.name.split(".").pop().toLowerCase();

    if (!allowedExt.includes(ext)) {
      setSequenceError("Invalid file type. Please upload FASTA or CSV files.");
      return;
    }

    setUploadedFile(file);
    const text = await file.text();
    setSequences(text);
    validateSequences(text);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setSequences("");
    setSequenceError(null);
  };

  /* =========================
     Step 3
     ========================= */
  const toggleMethyl = (typeId) => {
    setMethylation((prev) =>
      prev.includes(typeId)
        ? prev.filter((x) => x !== typeId)
        : [...prev, typeId]
    );
  };

  /* =========================
     Step 4
     ========================= */
  const toggleModel = (modelId) => {
    setRunAllModels(false);
    setSelectedModels((prev) =>
      prev.includes(modelId)
        ? prev.filter((m) => m !== modelId)
        : [...prev, modelId]
    );
  };

  const onRunAllModelsChange = (checked) => {
    setRunAllModels(checked);
    if (checked) setSelectedModels(ALL_MODELS);
  };

  const runPrediction = () => {
    alert("Run Prediction (connect backend later)");
  };

  /* =========================
     Render step (SWITCH)
     ========================= */
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1SequenceType
            types={types}
            sequenceType={sequenceType}
            setSequenceType={setSequenceType}
          />
        );

      case 2:
        return (
          <Step2SequenceInput
            sequences={sequences}
            setSequences={setSequences}
            validateSequences={validateSequences}
            sequenceError={sequenceError}
            placeholderText={placeholderText}
            typeLabel={typeLabel}
            validChars={validChars}
            loadExample={loadExample}
            fileInputRef={fileInputRef}
            openFilePicker={openFilePicker}
            onFileChange={onFileChange}
            uploadedFile={uploadedFile}
            removeFile={removeFile}
          />
        );

      case 3:
        return (
          <Step3Methylation
            methylation={methylation}
            toggleMethyl={toggleMethyl}
            canGoNext={canGoNext}
          />
        );

      case 4:
        return (
          <Step4ModelSelection
            runAllModels={runAllModels}
            onRunAllModelsChange={onRunAllModelsChange}
            selectedModels={selectedModels}
            toggleModel={toggleModel}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section className="predict">
      <div className="predict__wrap">
        <h1 className="predict__title">Methylation Prediction</h1>
        <p className="predict__subtitle">
          Follow the steps to analyze your sequences
        </p>

        {/* Stepper */}
        <div className="stepper">
          {steps.map((label, idx) => {
            const n = idx + 1;
            const active = n === step;
            const done = n < step;

            return (
              <div className="step" key={label}>
                <div
                  className={
                    active ? "step__num active" : done ? "step__num done" : "step__num"
                  }
                >
                  {done ? "✔" : n}
                </div>
                <div className="step__label">{label}</div>
                {n !== steps.length && <div className="step__line" />}
              </div>
            );
          })}
        </div>

        {renderStep()}

        {/* Navigation */}
        <div className="actions">
          <button className="ghostBtn" onClick={onBack}>
             Back
          </button>

          {step < 4 ? (
            <button className="primaryBtn" onClick={onNext} disabled={!canGoNext()}>
              Next 
            </button>
          ) : (
            <button
              className="primaryBtn"
              onClick={runPrediction}
              disabled={!canGoNext()}
            >
               Run Prediction
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
