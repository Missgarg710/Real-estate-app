import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <div className="property-card-content">
        <h3>{property.name}</h3>
        <p className="rating">⭐ {property.rating}</p>
        <p className="location">📍 {property.location}</p>
        <p className="rent">{property.rent}/month</p>
      </div>
    </div>
  );
};

export default PropertyCard;
