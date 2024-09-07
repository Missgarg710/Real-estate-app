import React from 'react';
import './PerksScreen.css'; // CSS for styling the perks screen

const PerksScreen = ({ onProceed }) => {
  return (
    <div className="perks-modal">
      <div className="perks-content">
        <div className="perks-header">
          <h3>Rent at <span className="highlight">Zero</span> security deposit</h3>
          <span className="sparkles">✨</span>
        </div>

        <div className="approved-box">
          <img src="/checkmark-icon.png" alt="Approved" className="checkmark-icon" />
          <p className="approved-text">Approved</p>
        </div>

        <ul className="perks-list">
          <li><span className="check-icon">✔</span> New Rent Offer: ₹20,000</li>
          <li><span className="check-icon">✔</span> Zero security deposit <a href="#" className="link">move-in</a></li>
          <li><span className="check-icon">✔</span> 3-Months <a href="#" className="link">salary cover</a></li>
        </ul>

        {/* Proceed to Pay with Circle button */}
        <button className="pay-button" onClick={onProceed}>
          Pay with Circle <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default PerksScreen;
