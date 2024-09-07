import React, { useState } from 'react';
import './PropertySearch.css';
import PropertyCard from './PropertyCard';
import PeriodSelection from './PeriodSelection'; // Import PeriodSelection component

const PropertySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Sky Dandelions Apartment',
      location: 'Sector 28, Gurgaon',
      rating: 4.9,
      rent: 22020, // Changed to integer for calculation
      image: '/image1.jpg' },
    {
      id: 2,
      name: 'Wings Tower',
      location: 'Sector 27, Gurgaon',
      rating: 4.9,
      rent: 17000,
      image: '/image2.png',
    },
    {
      id: 3,
      name: 'Wayside Modern House',
      location: 'MG Road, Delhi',
      rating: 4.4,
      rent: 18000,
      image: '/image3.png',
    },
  ]);
  
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="property-search">
      <h2>Search results</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="search-button">
          🔍
        </button>
      </div>

      <div className="property-list">
        {filteredProperties.map((property) => (
          <div key={property.id} onClick={() => setSelectedProperty(property)}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {selectedProperty && (
        <PeriodSelection property={selectedProperty} />
      )}
    </div>
  );
};

export default PropertySearch;
