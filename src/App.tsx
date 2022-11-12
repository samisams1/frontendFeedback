import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./pages/home/home";
import FeedbackForm from "./pages/feedback/components/FeedbackForm";
import { ThemeProvider } from "./ components/ThemeProvider";
import { Container, CssBaseline } from "@mui/material";
import  Feedback  from "./pages/feedback";
import TutorialsList from "./pages/feedback/components/TutorialsList";
import { Employee } from "./pages/Employee";

  
function App() {
  return (
    <Router>
      <ThemeProvider>
      <CssBaseline>
      <Container maxWidth="sm">
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/feedback" element={<FeedbackForm />}/>
        <Route path="/viewFeedback" element={<Feedback.ListFeedback/>}/>
        <Route path="/sasaw" element={<TutorialsList/>}/>
        <Route path="/gashe" element={<Employee/>}/>
      </Routes>  
      </Container>
      </CssBaseline>
      </ThemeProvider>
    
    </Router>
  );
}
  
export default App;