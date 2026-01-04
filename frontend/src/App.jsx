// src/App.jsx
import Footer from "./components/Footer.jsx";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
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
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
            Home
          </NavLink>
          <NavLink to="/predict" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
            Predict
          </NavLink>
          <a className="nav__link" href="#results" onClick={(e) => e.preventDefault()}>
            Results
          </a>
          <a className="nav__link" href="#help" onClick={(e) => e.preventDefault()}>
            Help
          </a>
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
        </Routes>
      </main>

      <Footer />
    </div>
  );
}




   