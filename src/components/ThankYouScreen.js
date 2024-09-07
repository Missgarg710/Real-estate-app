import React from 'react';
import './ThankYouScreen.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ThankYouScreen = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle "Go to Home" button click
  const handleGoHome = () => {
    navigate('/'); // Navigate to the PropertySearch page (home page)
  };

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You! 🎉</h1>
        <p>Your submission has been received successfully.</p>
        <button className="back-button" onClick={handleGoHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouScreen;
