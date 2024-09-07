import React, { useState } from 'react';
import './CircleApp.css';
import CircleConfirmation from './CircleConfirmation'; // Import CircleConfirmation


const CircleApp = ({ onGoBack }) => {
  const [showConfirmation, setShowConfirmation] = useState(false); // State to show CircleConfirmation

  // Handle Get Started button click
  const handleGetStartedClick = () => {
    setShowConfirmation(true); // Show CircleConfirmation
  };

  // Handle Continue click from CircleConfirmation
  const handleContinueClick = () => {
    setShowConfirmation(false); // Close CircleConfirmation
    // You can add any additional logic here if needed after confirmation
  };

  return (
    <div>
      {!showConfirmation ? (
        <div className="circle-app-container">
          <h1 className="circle-title">Circle App</h1>
          <p className="circle-subtitle">
  Rent at <span className="highlight-background highlight">Zero</span> security deposit
</p>


          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-details">
                <h4>Eligibility check</h4>
                <p>Basic Details: PAN & DOB</p>
                <p>Work Details: Employment details</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-details">
                <h4>Setup AutoPay</h4>
                <p>Bank Details: Salary account details</p>
                <p>Identity Verification: Selfie & Aadhaar KYC</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-details">
                <h4>Move-In</h4>
              </div>
            </div>
          </div>

          <div className="buttons-container">
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
            <button className="go-back-button" onClick={onGoBack}>
              Go Back
            </button>
          </div>

          <p className="terms">
            By clicking this, you approved to our <a href="#">terms and conditions</a> and{' '}
            <a href="#">privacy policy</a>
          </p>
        </div>
      ) : (
        <CircleConfirmation onContinue={handleContinueClick} /> // Show CircleConfirmation when Get Started is clicked
      )}
    </div>
  );
};

export default CircleApp;
