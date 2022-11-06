import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./pages/home/home";
import FeedbackForm from "./pages/feedback/components/FeedbackForm";
import { ThemeProvider } from "./ components/ThemeProvider";
import { Container, CssBaseline } from "@mui/material";
//import ListFeedback from "./pages/feedback/components/listFeedback";

import  Feedback  from "./pages/feedback";

  
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
      </Routes>  
      </Container>
      </CssBaseline>
      </ThemeProvider>
    
    </Router>
  );
}
  
export default App;