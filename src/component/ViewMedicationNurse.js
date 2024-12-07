import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewMedicationNurse.css';

function ViewMedicationNurse({ medicationPlans, setMedicationPlans }) {
  const navigate = useNavigate();

  // const onRemoveMedication = (index) => {
  //   const confirmed = window.confirm("Are you sure you want to remove this medication?");
  //   if (confirmed) {
  //     setMedicationPlans((prevPlans) => prevPlans.filter((_, i) => i !== index));
  //   }
  // };

  return (
    <div className="medication-plan-container">
      <div className="content-container">
        <div className="title">
            <h1>Medication Plan</h1>
        </div>
        <div className="right-panel-medication">
          {medicationPlans.length === 0 ? (
            <p>No medications added yet.</p>
          ) : (
            medicationPlans.map((plan, index) => (
              <div key={index} className="medication-info">
                <h2><strong>Patient: </strong> {plan.patientName}</h2>
                <h4><strong>Medication</strong></h4>
                <h3><strong>{plan.medication}</strong></h3>
                <h4><strong>Dosage</strong></h4>
                <p>{plan.dosage}</p>
                <h4><strong>Notes</strong></h4>
                <p>{plan.notes}</p>
                {/* <button
                  className="remove-button"
                  onClick={() => onRemoveMedication(index)}
                >
                  Remove
                </button> */}
              </div>
            ))
          )}
        </div>
      </div>
      {/* <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button> */}
    </div>
  );
}

export default ViewMedicationNurse;
