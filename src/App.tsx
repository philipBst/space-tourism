import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Another from "./pages/Another";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/another" element={<Another />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
