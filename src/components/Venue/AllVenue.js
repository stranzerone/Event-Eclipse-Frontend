import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllVenuesCard from './AllVenuesCard';

export const AllVenue = () => {
  const [venueData, setVenueData] = useState([]);

  const getVenues = async () => {
    try {
      const response = await axios.get('https://eventeclipsebackend.onrender.com/api/v1/venues/get_all');
      console.log(response.data.venues);
      setVenueData(response.data.venues);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <div>
      <AllVenuesCard data={venueData} />
    </div>
  );
};
