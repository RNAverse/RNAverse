import { FaDna } from "react-icons/fa";

export default function Step1SequenceType({
  types,
  sequenceType,
  setSequenceType,
}) {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">
          <FaDna />
        </div>
        <div>
          <div className="card__title">Select Sequence Type</div>
          <div className="card__hint">
            Choose the type of sequence you want to analyze
          </div>
        </div>
      </div>

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
    </div>
  );
}
