// src/components/Nav.jsx
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import { RiDnaFill } from "react-icons/ri";
import {
  HiOutlineHome,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

export default function Nav() {
  return (
    <header className="topnav">
      <div className="topnav__inner">
        <Link to="/" className="brand">
          <div className="brand__icon">
            <RiDnaFill />
          </div>
          <span className="brand__text">
            <span className="brand__rna">RNA</span>
            <span className="brand__verse">verse</span>
          </span>
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
