import { FaFlask, FaCheckSquare, FaRegSquare } from "react-icons/fa";

export default function Step3Methylation({
  methylation,
  toggleMethyl,
  canGoNext,
}) {
  const options = [
    {
      id: "m6A",
      label: "m6A",
      fullName: "N6 methyladenosine",
      description: "Most abundant mRNA modification",
      available: true,
    },
    {
      id: "m5C",
      label: "m5C",
      fullName: "5 methylcytosine",
      description: "Found in both DNA and RNA",
      available: true,
    },
    {
      id: "m7G",
      label: "m7G",
      fullName: "7 methylguanosine",
      description: "Cap structure modification",
      available: true,
    },
  ];

  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">
          <FaFlask />
        </div>
        <div>
          <div className="card__title">Methylation Types</div>
          <div className="card__hint">
            Select one or more methylation types to predict
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

      <div className="mGrid">
        {options.map((t) => {
          const selected = methylation.includes(t.id);

          return (
            <button
              key={t.id}
              type="button"
              disabled={!t.available}
              className={`mCard ${
                selected ? "active" : ""
              } ${!t.available ? "disabled" : ""}`}
              onClick={() => t.available && toggleMethyl(t.id)}
            >
              <div className="mCard__top">
                <div className="mCard__label">{t.label}</div>
                <div className="mCard__check">
                  {selected ? <FaCheckSquare /> : <FaRegSquare />}
                </div>
              </div>

              <div className="mCard__full">{t.fullName}</div>
              <div className="mCard__desc">{t.description}</div>
            </button>
          );
        })}
      </div>

      {!canGoNext() && (
        <div className="warnBox">
          Please select at least one methylation type
        </div>
      )}
    </div>
  );
}
