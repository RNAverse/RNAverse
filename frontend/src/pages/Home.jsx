// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "DNA & RNA Support",
      desc: "Analyze both DNA (A, C, G, T) and RNA (A, U, C, G) sequences with specialized validation",
      icon: "🧬",
    },
    {
      title: "Multiple Methylation Types",
      desc: "Predict m6A, m5C, and m7G methylation sites with high accuracy",
      icon: "⚗️",
    },
    {
      title: "ML & Deep Learning",
      desc: "Choose from SVM, Random Forest, XGBoost, MLP, CNN, and more",
      icon: "🤖",
    },
    {
      title: "Visual Results & Exports Results",
      desc: "Clear outputs and downloadable reports for your predictions",
      icon: "📊",
    },
  ];

  return (
    <section className="home">
      <div className="home__hero">
        <div className="pill">
          <span className="pill__spark">✦</span>
          Academic Research Platform
        </div>

        <h1 className="title">RNAverse</h1>

        <h2 className="subtitle">DNA &amp; RNA Methylation Prediction Platform</h2>

        <p className="desc">
          A web-based system for predicting RNA and DNA methylation{" "}
          <span className="desc__highlight">(m6A, m5C, m7G)</span> using machine learning and deep learning models.
        </p>

        {/* ✅ Buttons row (Start Prediction + Learn More) */}
        <div className="heroActions">
          <button className="cta" type="button" onClick={() => navigate("/predict")}>
            Start Prediction <span className="cta__arrow">→</span>
          </button>

          <button
            className="cta ghost"
            type="button"
            onClick={() => {
              // ✅ placeholder for now (your friend will connect real Help later)
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
         {/* Section heading */}
<div className="featuresHead">
  <h3 className="featuresTitle">Powerful Prediction Tools</h3>
  <p className="featuresSubtitle">
    Supporting biological and biomedical research through accessible RNA methylation analysis
  </p>
</div>

        {/* ✅ NEW: Feature cards section */}
        <div className="features">
          {features.map((f) => (
            <div key={f.title} className="featureCard" role="group" aria-label={f.title}>
              <div className="featureIcon" aria-hidden="true">{f.icon}</div>
              <div className="featureTitle">{f.title}</div>
              <div className="featureDesc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
