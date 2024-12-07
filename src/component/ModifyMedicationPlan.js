import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModifyMedicationPlan.css';

function ModifyMedicationPlan({ medicationPlans, setMedicationPlans }) {
  const [patientName, setPatient] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedMedication, setSelectedMedication] = useState('');
  const navigate = useNavigate();


  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newMedication = { patientName, medication, dosage, notes };
    setMedicationPlans((prevPlans) => [...prevPlans, newMedication]);
    alert('Medication Added Successfully!');
    setPatient('');
    setMedication('');
    setDosage('');
    setNotes('');
    navigate('/doctor');
  };


  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    setMedicationPlans((prevPlans) => 
      prevPlans.filter((plan) => plan.medication !== selectedMedication)
    ); 
    alert('Medication Removed Successfully!');
    setSelectedMedication('');
    navigate('/doctor');
  };

  return (
    <div className="modify-medication-container">
      <h1>Modify Medication Plan</h1>

      <form onSubmit={handleAddSubmit}>
      <label>
          Patient Name:
          <select
            value={patientName}
            onChange={(e) => setPatient(e.target.value)}
            required
          >
            <option value="">Select a patient</option>
            <option value="Jack Smith">Jack Smith</option>
            <option value="Amy Semple">Amy Semple</option>
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
        <button type="submit">Add Medication</button>
      </form>

      <form onSubmit={handleRemoveSubmit}>
        <label>
          Select Medication to Remove:
          <select
            value={selectedMedication}
            onChange={(e) => setSelectedMedication(e.target.value)}
            required
          >
            <option value="">Select a medication</option>
            {medicationPlans.map((plan, index) => (
              <option key={index} value={plan.medication}>
                {plan.medication} (Patient: {plan.patientName})
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Remove Medication</button>
      </form>
      <br/>
      {/* <button
        type="button"
        className="back-button"
        onClick={() => navigate('/doctor')}
      >
        Back to Doctor's Home Page
      </button> */}
    </div>
  );
}

export default ModifyMedicationPlan;
