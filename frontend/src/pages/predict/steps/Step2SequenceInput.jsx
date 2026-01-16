import {
  FaFileAlt,
  FaUpload,
  FaTimes,
  FaExclamationTriangle,
} from "react-icons/fa";

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
}) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">
          <FaFileAlt />
        </div>
        <div>
          <div className="card__title">Input Sequences</div>
          <div className="card__hint">
            Paste your sequences or upload a file. Valid characters for{" "}
            {typeLabel}: <b>{validChars}</b>
          </div>
        </div>

        {/* ❓ Help button (same class, same CSS) */}
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
        className={`seqTextarea ${
          sequenceError ? "seqTextarea--error" : ""
        }`}
        placeholder={placeholderText}
        value={sequences}
        onChange={(e) => {
          const text = e.target.value;
          setSequences(text);
          validateSequences(text);
        }}
      />

      {sequenceError && (
        <div className="warnBox">
          <FaExclamationTriangle style={{ marginRight: "6px" }} />
          {sequenceError}
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
        accept=".fasta,.fa,.csv"
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
            <FaTimes style={{ marginRight: "6px" }} />
            Remove
          </button>
        </div>
      ) : (
        <button className="uploadBox" onClick={openFilePicker}>
          <div className="uploadIcon">
            <FaUpload />
          </div>
          <div className="uploadTitle">Upload FASTA or CSV</div>
          <div className="uploadHint">Click to browse files</div>
        </button>
      )}
    </div>
  );
}
