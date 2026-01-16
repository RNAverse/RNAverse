import { PiDnaFill, PiDnaThin } from "react-icons/pi";
import { GiDna2 } from "react-icons/gi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Step1SequenceType({ types, sequenceType, setSequenceType }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card__head help">
        <div className="card__icon">
          <PiDnaFill />
        </div>

        <div>
          <div className="card__title">Select Sequence Type</div>
          <div className="card__hint">
            Choose the type of sequence you want to analyze
          </div>
        </div>

        {/* ❓ Help button */}
        <button
          type="button"
          className="helpBtn"
          onClick={() => navigate("/help")}
          title="Help"
        >
          <HiOutlineQuestionMarkCircle />
        </button>
      </div>

      {/* RNA / DNA buttons */}
      <div className="grid2">
        {types.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`selectBox ${t.id.toLowerCase()} ${
              sequenceType === t.id ? "active" : ""
            }`}
            onClick={() => setSequenceType(t.id)}
          >
            <div className="selectBox__title">{t.label}</div>
            <div className="selectBox__sub">{t.description}</div>
          </button>
        ))}
      </div>

      {/* Illustration block */}
      <div className="illustrationBlock">
        <div className="illusItem">
          <span className="illusIcon"><PiDnaThin /></span>
          <span className="illusLabel">RNA</span>
        </div>

        <div className="illusDivider" />

        <div className="illusItem">
          <span className="illusIcon"><GiDna2 /></span>
          <span className="illusLabel">DNA</span>
        </div>
      </div>
    </div>
  );
}
