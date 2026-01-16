// src/App.jsx
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
import Results from "./pages/Results.jsx";
import Help from "./pages/Help.jsx";
import Settings from "./pages/Settings.jsx";

// Components
import Footer from "./components/Footer.jsx";

// React Icons
import {
  FaDna,
  FaHome,
  FaFlask,
  FaChartBar,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";

import "./App.css";

export default function App() {
  return (
    <div className="appShell">
      <Nav />

      <main className="appMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/results" element={<Results />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
