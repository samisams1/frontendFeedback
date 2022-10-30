import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./pages/home";
import FeedbackForm from "./pages/FeedbackForm";
import { ThemeProvider } from "./ components/ThemeProvider";
import { Container, CssBaseline, Typography } from "@mui/material";
import ListFeedback from "./pages/admin/listFeedback";
  
function App() {
  return (
    <Router>
      <ThemeProvider>
      <CssBaseline>
      <Container maxWidth="sm">
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/feedback" element={<FeedbackForm />}/>
        <Route path="/viewFeedback" element={<ListFeedback />}/>
      </Routes>
       
      </Container>

    
      </CssBaseline>

     
      </ThemeProvider>
    
    </Router>
  );
}
  
export default App;