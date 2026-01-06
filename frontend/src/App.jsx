import { NavLink, Routes, Route } from "react-router-dom";

// Pages
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

function TopNav() {
  return (
    <header className="topnav">
      <div className="topnav__inner">
        <div className="brand">
          <div className="brand__icon">
            <FaDna />
          </div>
          <span className="brand__text">RNAverse</span>
        </div>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <FaHome style={{ marginRight: "6px" }} />
            Home
          </NavLink>

          <NavLink
            to="/predict"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <FaFlask style={{ marginRight: "6px" }} />
            Predict
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <FaChartBar style={{ marginRight: "6px" }} />
            Results
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <FaQuestionCircle style={{ marginRight: "6px" }} />
            Help
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <FaCog style={{ marginRight: "6px" }} />
            Settings
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="appShell">
      <TopNav />

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
