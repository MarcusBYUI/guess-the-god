import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quizpage from "./pages/quizpage/quizpage";
import Resultpage from "./pages/resultpage/resultpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quizpage />} />
      <Route path="/result" element={<Resultpage />}></Route>
    </Routes>
  );
}

export default App;
