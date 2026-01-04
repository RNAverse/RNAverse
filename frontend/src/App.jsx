import { Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import Help from "./pages/Help";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/results" element={<Results />} />
      <Route path="/help" element={<Help />} />
      <Route path="/settings" element={<Settings />} />

    </Routes>
  );
}

export default App;
