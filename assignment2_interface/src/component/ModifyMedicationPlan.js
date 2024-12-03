import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModifyMedicationPlan.css';

function ModifyMedicationPlan() {
  const [patientName, setPatient] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Plan:", { patientName, medication, dosage, notes });
    alert('Medication Plan Updated Successfully!');
    setPatient('');
    setMedication('');
    setDosage('');
    setNotes('');
    navigate('/doctor');
  };

  return (
    <div className="modify-medication-container">
      <h1>Modify Medication Plan</h1>
      <form onSubmit={handleSubmit}>
        <label>
            <select
            value={patientName}
            onChange={(e) => setPatient(e.target.value)}
            required>
                <option value="patient-1">John Smith</option>
                <option value="patient-2">Craig Johnson</option>
                <option value="patient-3">Amanda Briggs</option>
            </select>
        </label>
        <label>
          Medication Name:
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            required
          />
        </label>
        <label>
          Dosage:
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            required
          />
        </label>
        <label>
          Notes:
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>
            <button type="submit">Update Plan</button>
            <button
                type="button"
                className="back-button"
                onClick={() => navigate('/doctor')}
                >
                Back to Doctor's Home Page
            </button>
        </form>
    </div>
  );
}

export default ModifyMedicationPlan;
