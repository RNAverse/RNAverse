// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import "./Home.css";

// React Icons
import { FaDna, FaMicroscope, FaRobot, FaChartBar } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "DNA & RNA Support",
      desc: "Analyze both DNA (A C G T) and RNA (A U C G) sequences with specialized validation",
      icon: <FaDna />,
    },
    {
      title: "Multiple Methylation Types",
      desc: "Predict m6A m5C and m7G methylation sites with high accuracy",
      icon: <FaMicroscope />,
    },
    {
      title: "ML & Deep Learning",
      desc: "Choose from SVM Random Forest XGBoost MLP CNN and more",
      icon: <FaRobot />,
    },
    {
      title: "Visual Results & Export",
      desc: "Clear outputs and downloadable reports for your predictions",
      icon: <FaChartBar />,
    },
  ];


  return (
    <section className="home">
      <div className="home__hero">
        <h1 className="title">RNAverse</h1>

        <h2 className="subtitle">
          DNA &amp; RNA Methylation Prediction Platform
        </h2>

        <p className="desc">
          A web based system for predicting RNA and DNA methylation{" "}
          <span className="desc__highlight">(m6A m5C m7G)</span> using machine learning and deep learning models
        </p>

        <div className="heroActions">
          <button
            className="cta"
            type="button"
            onClick={() => navigate("/predict")}
          >
            Start Prediction <span className="cta__arrow">→</span>
          </button>

          <button
            className="cta ghost"
            type="button"
            onClick={() => {
              window.location.hash = "help";
            }}
          >
            Learn More
          </button>
        </div>

        <div className="dots" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="dot" />
          ))}
        </div>

        <div className="featuresHead">
          <h3 className="featuresTitle">Powerful Prediction Tools</h3>
          <p className="featuresSubtitle">
            Supporting biological and biomedical research through accessible RNA methylation analysis
          </p>
        </div>

        <div className="features">
          {features.map((f) => (
            <div
              key={f.title}
              className="featureCard"
              role="group"
              aria-label={f.title}
            >
              <div className="featureIcon">{f.icon}</div>
              <div className="featureTitle">{f.title}</div>
              <div className="featureDesc">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* ✅ How It Works section */}
        <div className="howHead">
          <h3 className="howTitle">How It Works</h3>
          <p className="howSubtitle">Simple five-step process to get methylation predictions</p>
        </div>

        <div className="howGrid">
          {howItWorks.map((s) => (
            <div key={s.num} className="howCard">
              <div className="howNum">{s.num}</div>
              <div className="howCardTitle">{s.title}</div>
              <div className="howCardDesc">{s.desc}</div>
            </div>
          ))}
        </div>

        <button className="tryBtn" onClick={() => navigate("/predict")}>
          Try It Now{" "} <span className="cta__arrow"><IoIosArrowForward /></span>
        </button>
      </div>
    </section>
  );
}
