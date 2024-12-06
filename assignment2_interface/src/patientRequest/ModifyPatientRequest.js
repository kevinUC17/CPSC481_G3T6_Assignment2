import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ModifyPatientRequest({ patientRequests, setPatientRequests }) {
  const [patientName, setPatient] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedMedication, setSelectedMedication] = useState('');
  const navigate = useNavigate();


  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newMedication = { patientName, medication, dosage, notes };
    setPatientRequests((prevPlans) => [...prevPlans, newMedication]);
    alert('Medication Added Successfully!');
    setPatient('');
    setMedication('');
    setDosage('');
    setNotes('');
    navigate('/nurse');
  };


  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    setPatientRequests((prevPlans) => 
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
            <option value="John-Smith">Adam Smith</option>
            <option value="Craig Johnson">Jake Paul</option>
            <option value="Amanda Briggs">Aaron Smith</option>
          </select>
        </label>
        <label>
          New Requests:
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
            {patientRequests.map((plan, index) => (
              <option key={index} value={plan.medication}>
                {plan.medication} (Patient: {plan.patientName})
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Remove Medication</button>
      </form>

      <button
        type="button"
        className="back-button"
        onClick={() => navigate('/nurse')}
      >
        Back to Nurse's Home Page
      </button>
    </div>
  );
}

export default ModifyPatientRequest;
