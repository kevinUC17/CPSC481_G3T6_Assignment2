import React from 'react';
import { useNavigate } from 'react-router-dom';

function ViewPatientRequest({ patientRequests, setPatientRequests }) {
  const navigate = useNavigate();

  const onRemoveMedication = (index) => {
    const confirmed = window.confirm("Are you sure you want to remove this request?");
    if (confirmed) {
      setPatientRequests((prevPlans) => prevPlans.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="medication-plan-container">
      <div className="content-container">
        <div className="title">
            <h1>Upcoming Patient Requests</h1>
        </div>
        <div className="right-panel-medication">
          {patientRequests.length === 0 ? (
            <p>No Patient Requests.</p>
          ) : (
            patientRequests.map((plan, index) => (
              <div key={index} className="medication-info">
                <h2><strong>Patient: </strong> {plan.patientName}</h2>
                <h4><strong>Request</strong></h4>
                <h3><strong>{plan.request}</strong></h3>
              </div>
            ))
          )}
        </div>
      </div>
      {/* <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button> */}
    </div>
  );
}

export default ViewPatientRequest;
