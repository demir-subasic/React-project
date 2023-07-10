import React, { useEffect, useState } from 'react';

const LocationFetcher = ({ onLocationFetched }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationFetched({ latitude, longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, [onLocationFetched]);

  return null;
};

export default LocationFetcher;
