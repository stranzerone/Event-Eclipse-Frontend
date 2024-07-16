// src/Form.js
import React, { useState, useEffect } from 'react';
import './Venue.css';
import Lottie from 'lottie-react';
import IsMobile from '../../helper/mobileDetection';
import log from "../assets/Log.json";
import axios from 'axios';

const AddVenue = () => {
  const [token, setToken] = useState('');
  const [formData, setFormData] = useState({
    venueName: '',
    location: '',
    capacity: '',
    description: '',
    imageUrl: ''
  });
  const [disableClass, setDisableClass] = useState('');
  const isMobile = IsMobile();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    setDisableClass(isMobile ? 'disableMe' : '');
  }, [isMobile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      alert('Token is missing. Please log in again.');
      return;
    }

    const dataToSend = { ...formData };
    
    try {
      const response = await axios.post(
        'https://eventeclipsebackend.onrender.com/api/v1/venues',
        dataToSend,
        {
          headers: {
            'event-token': token
          }
        }
      );
  
      console.log(response);
      if (response.status === 201) {
        alert('Venue added successfully');
      }
    } catch (error) {
      console.error(error);
      alert('Venue addition failed');
    }
  };

  return (
    <div className='venueContainer'>
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className='heading'>Add Venue</h2>
        <div className="form-group">
          <label>
            Venue Name:
            <input type="text" name="venueName" value={formData.venueName} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Image URL:
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Capacity:
            <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
     

      
      {!isMobile && (
        <div className={`animatedSvg ${disableClass} `}>
          <Lottie animationData={log} />
        </div>
      )}
      
    </div>
  );
};

export default AddVenue;
