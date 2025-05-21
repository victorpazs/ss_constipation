import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import QuestionsPage from "./pages/Questions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/questionario" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
