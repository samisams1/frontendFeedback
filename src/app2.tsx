import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./pages/home";
import FeedbackForm from "./pages/FeedbackForm";
  
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/feedback" element={<FeedbackForm />}/>
      </Routes>
    </Router>
  );
}
  
export default App;