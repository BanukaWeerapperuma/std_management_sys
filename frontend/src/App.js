import AddStudent from "./components/addStudent";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/add" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
