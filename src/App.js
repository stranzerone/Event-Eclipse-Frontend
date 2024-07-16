import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
// import ProtectedRoute from './components/ProtectedRoute';
import OTPVerification from './components/authentication/OtpVerify';
import AccountSetup from './components/authentication/AccountSetup';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Chat from "./components/Chat";
import History from "./components/History";
import './components/css/Star.css'
import  AddVenue  from './components/Venue/AddVenue';
import { AllVenue } from './components/Venue/AllVenue';
import { VenueDetails } from './components/Venue/VenueBooking/MainBookPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<ProtectedRoute component={Home} />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/auth" element={<AccountSetup />} />
        <Route path="/user/verify" element={<OTPVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/chat" exact element={<Chat />} />
        <Route path="/history" exact element={<History />} />
        <Route path='/addVenue' exact element={<AddVenue />} /> 
        <Route path='/allVenues' exact element={<AllVenue />} />  
        <Route path='/VenueDetails' exact element={<VenueDetails />} />   
      </Routes>
    </Router>
  );
}

export default App;
