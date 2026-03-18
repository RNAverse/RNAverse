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
    () => ["Sequence Type", "Methylation Type", "Input Sequences", "Model Selection"],
    []
  );

  const [step, setStep] = useState(1);

  /* =========================
     STEP 1
     ========================= */
  const [sequenceType, setSequenceType] = useState("");

  /* =========================
     STEP 3 (INPUT SEQUENCES)
     ========================= */
  const [sequences, setSequences] = useState("");
  const fileInputRef = useRef(null);
  const [sequenceError, setSequenceError] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);

  /* =========================
     STEP 2 (METHYLATION)
     ========================= */
  const [methylation, setMethylation] = useState(""); // "m6A" | "m5C" | "m7G"

  /* =========================
     STEP 4 (MODEL)
     ========================= */
  const [selectedModel, setSelectedModel] = useState("");

  /* =========================
     Reset helpers
     ========================= */
  const resetSequenceInput = () => {
    setSequences("");
    setSequenceError([]);
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* =========================
     Reset sequence input when
     type or methylation changes
     ========================= */
  useEffect(() => {
    resetSequenceInput();
  }, [sequenceType]);

  useEffect(() => {
    resetSequenceInput();
  }, [methylation]);

  /* =========================
     Step 1 options
     ========================= */
  const types = [
    { id: "RNA", label: "RNA", description: "Valid characters: A, U, C, G" },
    { id: "DNA", label: "DNA", description: "Valid characters: A, C, G, T" },
  ];

  const validChars = sequenceType === "DNA" ? "A, C, G, T" : "A, U, C, G";
  const typeLabel = sequenceType || "RNA";

  const placeholderText = (() => {
    if (methylation === "m5C") {
      return `Paste sequences here. One or multiple sequences allowed.

Example:
>Sequence1
AUCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGC`;
    }

    if (methylation === "m6A") {
      return `Paste sequences here.

m6A requires a sequence of length 2001.
You can paste your full sequence directly or upload a .txt or .fasta file.`;
    }

    return `Paste sequences here. One or multiple sequences allowed.

Example:
>Sequence1
${(sequenceType || "RNA") === "DNA" ? "ACGTACGT" : "AUGCCAUG"}
>Sequence2
${(sequenceType || "RNA") === "DNA" ? "GATTACA" : "GCUAAUCGGA"}`;
  })();

  /* =========================
     Validation
     ========================= */
  const validateSequences = (text) => {
    if (!text.trim()) {
      setSequenceError([]);
      return;
    }

    const cleaned = text
      .split("\n")
      .filter((line) => !line.startsWith(">"))
      .join("")
      .replace(/\s+/g, "")
      .toUpperCase();

    const errors = [];

    // Validate displayed input rules first
    if (sequenceType === "RNA") {
      if (!/^[AUCG]*$/.test(cleaned)) {
        errors.push("Sequence can only contain A, U, C, and G.");
      }
    } else {
      if (!/^[ACTG]*$/.test(cleaned)) {
        errors.push("Sequence can only contain A, C, T, and G.");
      }
    }

    // Internal normalization for model
    const normalized = cleaned.replace(/U/g, "T");

    // Length validation
    if (methylation === "m5C" && normalized.length !== 41) {
      errors.push(
        normalized.length > 41
          ? "Sequence too long. Required length is 41."
          : "Sequence too short. Required length is 41."
      );
    }

    if (methylation === "m6A" && normalized.length !== 2001) {
      errors.push(
        normalized.length > 2001
          ? "Sequence too long. Required length is 2001."
          : "Sequence too short. Required length is 2001."
      );
    }

    setSequenceError(errors);
  };

  /* =========================
     Navigation rules
     ========================= */
  const canGoNext = () => {
    if (step === 1) return !!sequenceType;
    if (step === 2) return !!methylation;
    if (step === 3) return sequences.trim().length > 0 && sequenceError.length === 0;
    if (step === 4) return !!selectedModel;
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
     Sequence helpers
     ========================= */
  const loadExample = () => {
    let example = "";

    if (methylation === "m5C") {
      example = `>Sequence1\nAUCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGCGC`;
    } else if (methylation === "m6A") {
      example = `>Sequence1\n${"A".repeat(2001)}`;
    } else if (methylation === "m7G") {
      example =
        sequenceType === "DNA"
          ? `>Sequence1\nACGTTGCA\n>Sequence2\nGATTACA`
          : `>Sequence1\nAUGCCAUAG\n>Sequence2\nGCUAAUCGGA`;
    } else {
      example =
        sequenceType === "DNA"
          ? `>Sequence1\nACGTTGCA\n>Sequence2\nGATTACA`
          : `>Sequence1\nAUGCCAUAG\n>Sequence2\nGCUAAUCGGA`;
    }

    setSequences(example);
    validateSequences(example);
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const openFilePicker = () => fileInputRef.current?.click();

  const onFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedExt = [".fasta", ".fa", ".txt"];
    const ext = "." + file.name.split(".").pop().toLowerCase();

    if (!allowedExt.includes(ext)) {
      setSequenceError(["Invalid file type. Please upload .txt, .fasta, or .fa files."]);
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
    setSequenceError([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* =========================
     Step 2
     ========================= */
  const selectMethylation = (typeId) => {
    setMethylation(typeId);
  };

  const runPrediction = () => {
    const cleanedSequence = sequences
      .split("\n")
      .filter((line) => !line.startsWith(">"))
      .join("")
      .replace(/\s+/g, "")
      .toUpperCase()
      .replace(/U/g, "T");

    alert(
      `Run Prediction\nType: ${sequenceType}\nMethylation: ${methylation}\nModel: ${selectedModel}\nSequence: ${cleanedSequence}`
    );
  };

  /* =========================
     Render step
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
          <Step3Methylation
            methylation={methylation}
            selectMethylation={selectMethylation}
            canGoNext={canGoNext}
          />
        );

      case 3:
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
            methylation={methylation}
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