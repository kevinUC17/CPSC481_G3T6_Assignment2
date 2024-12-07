import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewDoctor.css';
import Doctor1 from '../assets/doctor1.jpg';
import Doctor2 from '../assets/doctor2.jpg';
import Doctor3 from '../assets/doctor3.jpg';

function ViewDoctor() {
  const navigate = useNavigate();

  return (
    <div className="view-doctor-container">
      <h1>Our Available Doctors</h1>
      <div className="doctor-list">
        <div className="doctor-card">
          <img src={Doctor1} alt="Dr. John" className="doctor-image" />
          <h2>Dr. John</h2>
          <p>Orthopedic Surgeon with over 20 years of experience specializing in sports medicine and joint replacement.</p>
        </div>
        <div className="doctor-card">
          <img src={Doctor2} alt="Dr. Andrew" className="doctor-image" />
          <h2>Dr. Andrew</h2>
          <p>Dermatologist specializing in cosmetic dermatology and skin cancer treatment, with 15 years of experience.</p>
        </div>
        <div className="doctor-card">
          <img src={Doctor3} alt="Dr. Angela" className="doctor-image" />
          <h2>Dr. Angela</h2>
          <p>Cardiologist with 15 years of experience specializing in international cardiology and advanced procedures.</p>
        </div>
      </div>
      {/* <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button> */}
    </div>
  );
}

export default ViewDoctor;
