import React from 'react';
import './NurseMainPage.css';
import { useNavigate } from 'react-router-dom';

function NurseMainPage() {
  const navigate = useNavigate();

  return (
    <div className="nurse-main-container">
      <div className="content-container">
        <div className="left-menu">
          <button className="menu-button" onClick={() => navigate('/nurse-timeblock')}>Scheduling Appointments</button>
          <button className="menu-button">Modify Patient Requests</button>
          <button className="menu-button" onClick={() => navigate('/medication-plan-nurse')}>View Medication Plan</button>
        </div>
        <div className="right-panel">
          <h1>Hi Emily, Welcome back to SPCS</h1>
          <h3>Upcoming Appointments</h3>
          <div className="upcoming-appointments">
            <div className="appointment-card">
              <p><strong>October 10th, 2024</strong></p>
              <p>Jack's Mental Issue Check-In - 9:00 AM</p>
              <p>Doctor: Dr. Adams</p>
              <p>Duration: 30 mins</p>
            </div>
            <div className="appointment-card">
              <p><strong>October 10th, 2024</strong></p>
              <p>Amy's Chest Pain Check-In - 9:45 AM</p>
              <p>Doctor: Dr. Andrew</p>
              <p>Duration: 30 mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NurseMainPage;
