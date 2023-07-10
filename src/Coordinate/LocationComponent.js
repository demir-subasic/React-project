import React, { useState } from 'react';
import LocationFetcher from './LocationFetcher';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  const handleLocationFetched = (fetchedLocation) => {
    setLocation(fetchedLocation);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <LocationFetcher onLocationFetched={handleLocationFetched} />

        {location ? (
          <div>
            <h1 style={{ textAlign: 'center' }}>Coordinates</h1>
            <p style={{ textAlign: 'center', fontSize: '24px' }}>
              Latitude: {location.latitude}<br />
              Longitude: {location.longitude}
            </p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', fontSize: '24px' }}>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default LocationComponent;
