import { HiOutlineBeaker, HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Step3Methylation({
  methylation,
  selectMethylation,
  canGoNext,
}) {
  const navigate = useNavigate();

  const options = [
    {
      id: "m6A",
      label: "m⁶A",
      fullName: "N6-methyladenosine",
      description: "Most abundant mRNA modification",
    },
    {
      id: "m5C",
      label: "m⁵C",
      fullName: "5-methylcytosine",
      description: "Found in both DNA and RNA",
    },
    {
      id: "m7G",
      label: "m⁷G",
      fullName: "7-methylguanosine",
      description: "Cap structure modification",
    },
  ];

  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">
          <HiOutlineBeaker />
        </div>

        <div>
          <div className="card__title">Methylation Type</div>
          <div className="card__hint">
            Select exactly one methylation type to predict
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

      <div className="mGrid">
        {options.map((t) => {
          const selected = methylation === t.id;

          return (
            <button
              key={t.id}
              type="button"
              className={`mCard ${selected ? "active" : ""}`}
              onClick={() => selectMethylation(t.id)}
            >
              <div className="mCard__top">
                <div className="mCard__label">{t.label}</div>

                {/* Radio indicator */}
                <input
                  type="radio"
                  name="methylation"
                  checked={selected}
                  readOnly
                />
              </div>

              <div className="mCard__full">{t.fullName}</div>
              <div className="mCard__desc">{t.description}</div>
            </button>
          );
        })}
      </div>

      {!canGoNext() && (
        <div className="warnBox">
          Please select one methylation type
        </div>
      )}
    </div>
  );
}
