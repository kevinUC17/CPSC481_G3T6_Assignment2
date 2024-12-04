import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientProfile.css';

function PatientProfile() {
    const navigate = useNavigate();
    
    return (
        <div className="patient-profile-container">
            <h1>Patient Profile</h1>
        </div>
    );
}

export default PatientProfile;