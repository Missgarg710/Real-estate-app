// CircleConfirmation.js

import React from 'react';
import './CircleConfirmation.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const CircleConfirmation = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle Continue button click
  const handleContinueClick = () => {
    navigate('/thank-you'); // Navigate to the ThankYouScreen page
  };

  return (
    <div className="circle-confirmation">
      <div className="progress-bar">
        <div className="step">Setup Autopay</div>
        <div className="step">Setup Autopay</div>
        <div className="step active">KYC & Move-in</div>
      </div>

      <h2 className="heading">
        One step away <span className="emoji">✨</span>
      </h2>
      <p className="subheading">from your dream home</p>

      <div className="confirmation-details">
        <div className="icon-placeholder">
          <img src="/sucess-icon.png" alt="Success Icon" />
        </div>

        <p className="info-text">Rent converted to Zero-Cost EMI</p>

        <div className="rent-details">
          <p><strong>Co-living partner</strong> <span>Rent-OK</span></p>
          <p><strong>Payment Amount</strong> <span>INR XXXX.00</span></p>
          <p><strong>Monthly rent</strong> <span>10,000 INR/mo.</span></p>
          <p><strong>Rent cycle</strong> <span>5 Months</span></p>
        </div>

        <button className="emi-button">Zero COST EMI</button>
        
        <p className="agreement-text">
          By clicking on next, you acknowledge that you have read the 
          <a href="#">View Loan Agreement</a> & <a href="#">KFS</a> and agreed to the terms and conditions.
        </p>
      </div>

      <button className="continue-button" onClick={handleContinueClick}>
        Continue
      </button>
    </div>
  );
};

export default CircleConfirmation;
