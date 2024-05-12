import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Information from './pages/Information/Information';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/information" element={<Information />} /> 
        <Route exact path="/contact" element={<Contact />} />    
      </Routes>
    </Router>
  );
}

export default App;
