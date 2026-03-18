// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { LuDna } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import {
  
  HiOutlineBeaker,
  HiOutlineCpuChip,
  HiOutlineDocumentText,
} from "react-icons/hi2";



export default function Home() {
  const navigate = useNavigate();

  const features = [
  {
    title: "DNA & RNA Support",
    desc: "Analyze both DNA (A, C, G, T) and RNA (A, U, C, G) sequences with specialized validation",
    icon: LuDna,
  },
  {
    title: "Multiple Methylation Types",
    desc: "Predict m6A, m5C, and m7G methylation sites with high accuracy",
    icon: HiOutlineBeaker,
  },
  {
    title: "ML & Deep Learning",
    desc: "Choose from SVM, Random Forest, XGBoost, MLP, CNN, and more",
    icon: HiOutlineCpuChip,
  },
  {
    title: "Visual Results & Exports Results",
    desc: "Clear outputs and downloadable reports for your predictions",
    icon: HiOutlineDocumentText,
  },
];


  const howItWorks = [
    {
      num: "01",
      title: "Sequence Type",
      desc: "Choose whether your input is RNA or DNA so validation matches the correct bases.",
    },
    {
      num: "02",
      title: "Input Sequences",
      desc: "Paste sequences or upload a FASTA/CSV file to analyze one or multiple sequences.",
    },
    {
      num: "03",
      title: "Methylation Type",
      desc: "Select one or more methylation types (m6A, m5C, m7G) to predict.",
    },
    {
      num: "04",
      title: "Model Selection",
      desc: "Run all models or choose specific ML/DL models to compare predictions.",
    },
    
    {
    num: "05",
    title: "Get Results",
    desc: "View predictions with probability scores and download/export the results.",
  },
  ];

  return (
    <section className="home">
      <div className="home__hero">
        <h1 className="title">RNAverse</h1>

        <h2 className="subtitle">DNA &amp; RNA Methylation Prediction Platform</h2>

        <p className="desc">
          A web-based system for predicting RNA and DNA methylation{" "}
          <span className="desc__highlight">(m6A, m5C, m7G)</span> using machine learning and deep learning models.
        </p>

        <div className="heroBtns">
          <button className="cta" onClick={() => navigate("/predict")}>
            Start Prediction{" "} <span className="cta__arrow"><IoIosArrowForward /></span>
          </button>

          {/* ✅ Learn More goes to Help page/section later */}
          <button className="cta ghost" onClick={() => navigate("/help")}>
            Learn More
          </button>
        </div>

        <div className="pill">
          <span className="pill__spark"><LuDna /></span>
          Methylation Analysis Platform
        </div>

        {/*  gap + line + heading */}
        <div className="afterPill">
          <div className="sectionLine" />
        </div>

        {/* Section heading */}
        <div className="featuresHead">
          <h3 className="featuresTitle">Powerful Prediction Tools</h3>
          <p className="featuresSubtitle">
            Supporting biological and biomedical research through accessible RNA methylation analysis
          </p>
        </div>

        {/* Feature cards */}
        <div className="features">
          {features.map((f) => (
            <div key={f.title} className="featureCard" role="group" aria-label={f.title}>
              <div className="featureIcon" aria-hidden="true">
                 <f.icon />
              </div>
              <div className="featureTitle">{f.title}</div>
              <div className="featureDesc">{f.desc}</div>
            </div>
          ))}
        </div>

        {/*  How It Works section */}
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
