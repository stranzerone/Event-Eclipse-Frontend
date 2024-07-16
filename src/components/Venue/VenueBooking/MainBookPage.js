import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VenueBooking from './VenueBookingPage';

export const VenueDetails = () => {
  const [venueData, setVenueData] = useState(null);

  const getVenues = async () => {
    try {
      const response = await axios.get('https://eventeclipsebackend.onrender.com/api/v1/venue/get_by_uuid?uuid=e66649d1-3a70-41dd-a1f9-1af386a5a449');
      console.log(response.data.venue.imageUrl);
      setVenueData(response.data.venue);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <div style={{backgroundImage:'url(https://drive.google.com/uc?export=view&id=1mMcFKee51oHwz1tKH7JNmxT43tvNi_cQ)'}}>
      {venueData ? <VenueBooking data={venueData} /> : <p>Loading...</p>}
    </div>
  );
};
