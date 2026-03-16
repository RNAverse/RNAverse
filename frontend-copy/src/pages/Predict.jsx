// src/pages/Predict.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Step1SequenceType from "./predict/steps/Step1SequenceType";
import Step2SequenceInput from "./predict/steps/Step2SequenceInput";
import Step3Methylation from "./predict/steps/Step3Methylation";
import Step4ModelSelection from "./predict/steps/Step4ModelSelection";
import { HiCheck } from "react-icons/hi";

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
     STEP 3 ( SINGLE SELECT)
     ========================= */
  const [methylation, setMethylation] = useState(""); // "m6A" | "m5C" | "m7G"

  /* =========================
     STEP 4 ( SINGLE SELECT RADIO)
     ========================= */
  const [selectedModel, setSelectedModel] = useState(""); // "CNN" | "SVM" | ...

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
    if (step === 3) return !!methylation;      //  single select
    if (step === 4) return !!selectedModel;    // single select model
    return false;
  };

  const onNext = () => {
    if (!canGoNext()) return;
    setStep((s) => Math.min(4, s + 1));
  };

  const onBack = () => {
    if (step === 1) navigate("/");
    else setStep((s) => s - 1);
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
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const openFilePicker = () => fileInputRef.current?.click();

  const onFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    //  FASTA only
    const allowedExt = [".fasta", ".fa"];
    const ext = "." + file.name.split(".").pop().toLowerCase();

    if (!allowedExt.includes(ext)) {
      setSequenceError("Invalid file type. Please upload FASTA files (.fasta or .fa).");
      return;
    }

    setUploadedFile(file);

    const text = await file.text();
    setSequences(text);
    validateSequences(text);

    e.target.value = "";
  };

  const removeFile = () => {
    setUploadedFile(null);
    setSequences("");
    setSequenceError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* =========================
     Step 3 ( SINGLE SELECT)
     ========================= */
  const selectMethylation = (typeId) => {
    setMethylation(typeId);
  };

  const runPrediction = () => {
    alert(
      `Run Prediction\nType: ${sequenceType}\nMethylation: ${methylation}\nModel: ${selectedModel}`
    );
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
            selectMethylation={selectMethylation}
            canGoNext={canGoNext}
          />
        );

      case 4:
        return (
          <Step4ModelSelection
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
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
        <p className="predict__subtitle">Follow the steps to analyze your sequences</p>

        {/* Stepper */}
        <div className="stepper">
          {steps.map((label, idx) => {
            const n = idx + 1;
            const active = n === step;
            const done = n < step;

            return (
              <div className="step" key={label}>
                <div className={active ? "step__num active" : done ? "step__num done" : "step__num"}>
                  {done ? <HiCheck /> : n}

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
            <button className="primaryBtn" onClick={runPrediction} disabled={!canGoNext()}>
              Run Prediction
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
