import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientMainPage.css';
import PatientAvatar from '../assets/patient-avatar.png';

function PatientBookedPage() {
  const navigate = useNavigate();

  return (
    <div className="patient-main-container">
      <div className="content-container">
        <div className="left-menu">
          <img src={PatientAvatar} alt="Patient Avatar" className="avatar" />
          <button className="menu-button" onClick={() => navigate('/appointment')}>Booking an Appointment</button>
          <button className="menu-button" onClick={() => navigate('/view-doctor')}>View Available Doctor</button>
          <button className="menu-button" onClick={() => navigate('/medication-plan')}>Medication Plan</button>
        </div>
        <div className="right-panel">
          <h1>Hi Jack, Welcome back to SPCS</h1>
          <h3>Upcoming Appointments</h3>
          <div className="upcoming-visit">
            <p><strong>November 14th, 2024</strong></p>
            <p>General Checkup - 9:00 AM</p>
            <p>Duration: 30 minutes</p>
            <p>Prerequisites: Don’t stay up late, no hard work before visiting</p>
          </div>
          <div className="upcoming-visit">
            <p><strong>November 15th, 2024</strong></p>
            <p>Consultation - 11:00 AM</p>
            <p>Duration: 30 minutes</p>
            <p>Prerequisites: Don’t stay up late, no hard work before visiting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientBookedPage;
