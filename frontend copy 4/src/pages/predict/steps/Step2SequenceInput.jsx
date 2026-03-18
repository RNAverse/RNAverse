import { CgNotes } from "react-icons/cg";
import { CiSquareRemove } from "react-icons/ci";
import { LiaFileUploadSolid } from "react-icons/lia";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Step2SequenceInput({
  sequences,
  setSequences,
  validateSequences,
  sequenceError,
  placeholderText,
  typeLabel,
  validChars,
  loadExample,
  fileInputRef,
  openFilePicker,
  onFileChange,
  uploadedFile,
  removeFile,
  methylation,
}) {
  const navigate = useNavigate();

  const cleanedSequenceLength = sequences
    .split("\n")
    .filter((line) => !line.startsWith(">"))
    .join("")
    .replace(/\s+/g, "")
    .length;

  const getLengthRule = () => {
    if (methylation === "m5C") return "Required length: 41";
    if (methylation === "m6A") return "Required length: 2001";
    if (methylation === "m7G") return "Flexible length";
    return "Select a methylation type first";
  };

  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">
          <CgNotes />
        </div>

        <div>
          <div className="card__title">Input Sequences</div>
          <div className="card__hint">
            Paste your sequences or upload a file. Valid characters for {typeLabel}:{" "}
            <b>{validChars}</b>
          </div>
          <div className="card__hint">
            Selected methylation: <b>{methylation || "None"}</b>
          </div>
          <div className="card__hint">
            <b>{getLengthRule()}</b>
          </div>
          <div className="card__hint">
            Current sequence length: <b>{cleanedSequenceLength}</b>
          </div>
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

      <textarea
        className={`seqTextarea ${sequenceError.length > 0 ? "seqTextarea--error" : ""}`}
        placeholder={placeholderText}
        value={sequences}
        onChange={(e) => {
          const text = e.target.value;
          setSequences(text);
          validateSequences(text);
        }}
      />

      {sequenceError.length > 0 && (
        <div className="warnBox">
          {sequenceError.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}

      <button className="exampleBtn" onClick={loadExample}>
        Load Example {typeLabel} Sequences
      </button>

      <div className="orRow">
        <div className="orRow__line" />
        or
        <div className="orRow__line" />
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".fasta,.fa,.txt"
        className="hiddenFile"
        onChange={onFileChange}
      />

      {uploadedFile ? (
        <div className="uploadedRow">
          <div className="uploadedName">{uploadedFile.name}</div>
          <button
            type="button"
            className="removeFileBtn"
            onClick={removeFile}
          >
            <CiSquareRemove /> Remove
          </button>
        </div>
      ) : (
        <button className="uploadBox" onClick={openFilePicker}>
          <div className="uploadIcon">
            <LiaFileUploadSolid />
          </div>
          <div className="uploadTitle">Upload TXT or FASTA</div>
          <div className="uploadHint">Click to browse files</div>
        </button>
      )}
    </div>
  );
}