import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewMedicationPlan.css';
import PrescriptionBottle from '../assets/prescription-bottle.png';

function ViewMedicationPlan({ medicationPlans }) {
  const navigate = useNavigate();

  return (
    <div className="medication-plan-container">
      <div className="content-container">
      {/* <button className="med-go-back-button" onClick={() => navigate(-1)}>Go Back</button> */}
        {/* <div className="left-panel">
          <h1>Welcome, View Your Medications</h1>
          <img src={PrescriptionBottle} alt="Prescription" className="prescription-image" />
        </div> */}
        <div className="right-panel">
          <h2>Medication Plan</h2>
          {medicationPlans.length === 0 ? (
            <p>No medications added yet.</p>
          ) : (
            medicationPlans.map((plan, index) => (
              <div key={index} className="medication-info">
                <h4><strong>Medication</strong></h4>
                <h3><strong>{plan.medication}</strong></h3>
                <h4><strong>Dosage</strong></h4>
                <p>{plan.dosage}</p>
                <h4><strong>Notes</strong></h4>
                <p>{plan.notes}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewMedicationPlan;
