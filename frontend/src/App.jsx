// src/App.jsx
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
import Results from "./pages/Results.jsx";
import Help from "./pages/Help.jsx";
import Settings from "./pages/Settings.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function TopNav() {
  return (
    <header className="topnav">
      <div className="topnav__inner">
        <div className="brand">
          <div className="brand__icon">⚡</div>
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
            Home
          </NavLink>

          <NavLink
            to="/predict"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            Predict
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            Results
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            Help
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
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
