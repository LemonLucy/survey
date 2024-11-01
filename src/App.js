// src/App.js
import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import SurveyForm from './pages/SurveyForm/SurveyForm';
import ThankYouPage from './pages/ThankYou/ThankYou';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
