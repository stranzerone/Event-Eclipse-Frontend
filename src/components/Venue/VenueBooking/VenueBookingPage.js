import React from 'react';
import './Booking.css';
import { MdOutlineChair, MdLocationOn, MdEvent } from 'react-icons/md';

const VenueBooking = ({ data }) => {
  const { venueName, description, imageUrl, location, capacity, events } = data;

  const backgroundImageUrl = 'https://drive.google.com/uc?export=view&id=1mMcFKee51oHwz1tKH7JNmxT43tvNi_cQ';

  return (
    <div
      className="venueBookingContainer"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="venueCardBooking">
        <img src={imageUrl} alt={venueName} className="venueImage" />
        <div className="venueDetails">
          <h2 className="venueName">{venueName.toUpperCase()}</h2>
          <p className="venueLocation"><MdLocationOn /> {location}</p>
          <p className="venueCapacity"><MdOutlineChair /> Capacity: {capacity}</p>
          <p className="venueDescription">{description}</p>
        </div>
      </div>
      <div className="eventsContainer">
        <h3 className="eventsTitle">Events</h3>
        {events.map((event) => (
          <div key={event.uuid} className="eventCard">
            <h4 className="eventName"><MdEvent /> {event.name}</h4>
            <p className="eventDate">Date: {new Date(event.eventDate).toDateString()}</p>
            <p className="eventTime">Time: {new Date(event.startTime).toLocaleTimeString()} - {new Date(event.endTime).toLocaleTimeString()}</p>
            <p className="eventDescription">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueBooking;
