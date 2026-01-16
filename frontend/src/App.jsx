// src/App.jsx
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="appShell">
      <Nav />

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
