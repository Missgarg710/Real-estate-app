// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import PropertySearch from './components/PropertySearch'; 
import CircleConfirmation from './components/CircleConfirmation'; 
import ThankYouScreen from  './components/ThankYouScreen'; 
import PeriodSelection from './components/PeriodSelection';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define the routes for the app */}
        <Routes>
          {/* Route for PropertySearch page */}
          <Route path="/" element={<PropertySearch />} />

          {/* Route for CircleConfirmation page */}
          <Route path="/confirmation" element={<CircleConfirmation />} />

          {/* Route for ThankYouScreen page */}
          <Route path="/thank-you" element={<ThankYouScreen />} />

          <Route path="/period-selection/:propertyId" element={<PeriodSelection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
