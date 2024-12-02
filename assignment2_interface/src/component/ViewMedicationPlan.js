import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewMedicationPlan.css';
import PrescriptionBottle from '../assets/prescription-bottle.png';

function ViewMedicationPlan() {
  const navigate = useNavigate();

  return (
    <div className="medication-plan-container">
      <div className="content-container">
        <div className="left-panel">
          <h1>Hi Jack, Welcome view your prescriptions</h1>
          <img src={PrescriptionBottle} alt="Prescription" className="prescription-image" />
        </div>
        <div className="right-panel">
          <h2>Medication Plan</h2>
          <div className="medication-info">
            <p><strong>Non-steroidal anti-inflammatory</strong></p>
            <p>twice a day for 7 days</p>
            <p>200mg</p>
          </div>
        </div>
      </div>
      <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ViewMedicationPlan;
