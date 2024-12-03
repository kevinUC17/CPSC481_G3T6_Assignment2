import React from 'react';
import './DoctorMainPage.css';

import { useNavigate } from 'react-router-dom';

function DoctorMainPage() {
  const navigate = useNavigate();
  
  return (
    <div className="doctor-main-container">
      <div className="content-container">
        <div className="left-menu">
          <button 
            className="menu-button"
            onClick={() => navigate('/doctor-timeblock')}
          >View the Schedule
          </button>
          <button className="menu-button">View Patient Request</button>
          <button
            className="menu-button"
            onClick={() => navigate('/modify-medication')}
          >
            Modify Medication Plan
          </button>
        </div>
        <div className="right-panel">
          <h1>Hi Dr. John, Welcome back to SPCS</h1>
          <h3>Upcoming Patients</h3>
          <div className="upcoming-patients">
            <div className="patient-card">
              <p><strong>October 10th, 2024</strong></p>
              <p>Jack's Mental Issue Check-In - 9:00 AM</p>
              <p>Duration: 30 mins</p>
            </div>
            <div className="patient-card">
              <p><strong>October 10th, 2024</strong></p>
              <p>Amy's Chest Pain Check-In - 9:45 AM</p>
              <p>Duration: 30 mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorMainPage;
