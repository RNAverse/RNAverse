
// src/App.jsx
import Footer from "./components/Footer.jsx";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
import "./App.css";
import { RiDnaFill } from "react-icons/ri";



// ✅ React Icons (Heroicons v2)
import {
  HiOutlineHome,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";


function TopNav() {
  return (
    <header className="topnav">
      <div className="topnav__inner">
        <Link to="/" className="brand">
         <div className="brand__icon">
           <RiDnaFill />
      </div>
      <span className="brand__text">RNAverse</span>
        </Link>


        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <HiOutlineHome className="nav__icon" />
            Home
          </NavLink>

          <NavLink
            to="/predict"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <HiOutlineBeaker className="nav__icon" />
            Predict
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <HiOutlineChartBar className="nav__icon" />
            Results
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <HiOutlineQuestionMarkCircle className="nav__icon" />
            Help
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
        </Routes>
      </main>

      <Footer />
    </div>
  );
}




   