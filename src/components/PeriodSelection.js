import React, { useState } from 'react';
import './PeriodSelection.css';
import CircleApp from './CircleApp'; // Import CircleApp component
import PerksScreen from './PerksScreen'; // Import PerksScreen component

const PeriodSelection = ({ property }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(6);
  const [showPerks, setShowPerks] = useState(false); // State to show the perks screen
  const [showCircleApp, setShowCircleApp] = useState(false); // State to show the CircleApp component

  const periods = [3, 6, 9];
  const totalRent = selectedPeriod * property.rent;

  // Handle "Pay with Circle" button click in PeriodSelection
  const handlePayWithCircleClick = () => {
    setShowPerks(true); // Show the PerksScreen modal
  };

  // Handle "Proceed to Pay with Circle" from PerksScreen
  const handleProceedToCircleApp = () => {
    setShowPerks(false); // Close PerksScreen
    setShowCircleApp(true); // Show CircleApp component
  };

  // Handle "Go Back" button click from CircleApp
  const handleGoBackClick = () => {
    setShowCircleApp(false); // Return to period selection
  };

  return (
    <div className="period-selection">
      {/* Property details in blue with image on the left */}
      <div className="property-details">
        <img className="property-image" src={property.image} alt={property.name} />
        <div className="property-info">
          <h3>{property.name}</h3>
          <p>📍 {property.location}</p>
          <p>₹ {property.rent.toLocaleString()}/month</p>
        </div>
      </div>

      {/* Period selection */}
      <div className="period-options">
        <h4>Select Period</h4>
        <div className="period-buttons">
          {periods.map((period) => (
            <button
              key={period}
              className={`period-button ${selectedPeriod === period ? 'active' : ''}`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period} months
            </button>
          ))}
        </div>
      </div>

      {/* Payment details */}
      <div className="payment-details">
        <h4>Payment Detail</h4>
        <p>Period time: {selectedPeriod} month</p>
        <p>Monthly payment: ₹ {property.rent.toLocaleString()}</p>
        <p>Total: ₹ {totalRent.toLocaleString()}</p>
      </div>

      {/* Pay with Circle button */}
      <button className="pay-button" onClick={handlePayWithCircleClick}>
        Pay with Circle
      </button>

      {/* Show CircleApp and PerksScreen */}
      {showPerks && <PerksScreen onProceed={handleProceedToCircleApp} />}
      {showCircleApp && <CircleApp onGoBack={handleGoBackClick} />}
    </div>
  );
};

export default PeriodSelection;
