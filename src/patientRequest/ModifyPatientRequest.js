import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ModifyPatientRequest({ patientRequests, setPatientRequests }) {
  const [patientName, setPatient] = useState('');
  const [request, setRequest] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (patientName) {
      const selectedPatient = patientRequests.find(
        (patient) => patient.patientName === patientName
      );
      if (selectedPatient) {
        setRequest(selectedPatient.request); 
      } else {
        setRequest(''); 
      }
    }
  }, [patientName, patientRequests]);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    const updatedRequests = patientRequests.map((patient) => {
      if (patient.patientName === patientName) {
        return { ...patient, request }; 
      }
      return patient; 
    });

    setPatientRequests(updatedRequests);
    alert('Request Changed Successfully!');
    setPatient('');
    setRequest('');
    navigate('/nurse');
  };

  return (
    <div className="modify-medication-container">
      <h1>Modify Patient Request</h1>

      <form onSubmit={handleRequestSubmit}>
      <label>
          Patient Name:
          <select
            value={patientName}
            onChange={(e) => setPatient(e.target.value)}
            required
          >
            <option value="">Select a patient</option>
            {patientRequests.map((patient) => (
              <option key={patient.patientName} value={patient.patientName}>
                {patient.patientName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Request:
          <textarea
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="Click a patient's name to see their request"
          />
        </label>
        <button type="submit">Modify Request</button>
      </form>
      <br/>
      {/* <button
        type="button"
        className="back-button"
        onClick={() => navigate('/nurse')}
      >
        Back to Nurse's Home Page
      </button> */}
    </div>
  );
}

export default ModifyPatientRequest;
