import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import JobListing from './component/Joblisting';
import NavBar from './component/NavBar'; // Make sure to adjust the import path

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job-listing" element={<JobListing />} />
      </Routes>
    </Router>
  );
}

export default App;
