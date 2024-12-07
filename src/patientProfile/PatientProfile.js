import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientProfile.css";

const PatientProfile = () => {
  const [logs, setLogs] = useState([
    {
      date: "October 20, 2024",
      reason: "Patient reports a sore shoulder from falling while playing basketball.",
      assessment: "Diagnosed with mild shoulder strain. Advised rest and ice application.",
      prescription: "Ibuprofen 400 mg as needed for pain.",
    },
    {
      date: "May 16, 2023",
      reason: "Routine checkup.",
      assessment: "No issues reported.",
      prescription: "None.",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [patientDetails, setPatientDetails] = useState({
    name: "Amy Semple",
    height: "178",
    weight: "80",
    bloodPressure: "140/90",
    allergies: "Dogs, Pollen",
    prescriptions: "none",
    conditions: "none",
  });

  const [newAssessment, setNewAssessment] = useState("");
  const [newPrescription, setNewPrescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const appointmentRequest = "Having frequent chest pain at night.";

  const navigate = useNavigate();

  const toggleLogDetails = (index) => {
    const log = document.getElementById(`log-details-${index}`);
    if (log) {
      log.style.display = log.style.display === "block" ? "none" : "block";
    }
  };

  const filteredLogs = logs.filter((log) =>
    log.reason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addLog = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setLogs([
      {
        date: currentDate,
        reason: appointmentRequest,
        assessment: newAssessment || "N/A",
        prescription: newPrescription || "N/A",
      },
      ...logs,
    ]);

    setNewAssessment("");
    setNewPrescription("");
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="profile-body">
    <h1>Patient Information</h1>
    <div className="patient-profile-container">
      <div className="patient-info">
        <div className="profile-patient-details">
          <h2>Patient: {patientDetails.name}</h2>
          {isEditing ? (
            <div>
              <label>
                Height:{" "}
                <input
                  type="text"
                  name="height"
                  value={patientDetails.height}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Weight:{" "}
                <input
                  type="text"
                  name="weight"
                  value={patientDetails.weight}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Blood Pressure:{" "}
                <input
                  type="text"
                  name="bloodPressure"
                  value={patientDetails.bloodPressure}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Allergies:{" "}
                <input
                  type="text"
                  name="allergies"
                  value={patientDetails.allergies}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Prescriptions:{" "}
                <input
                  type="text"
                  name="prescriptions"
                  value={patientDetails.prescriptions}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Underlying Conditions:{" "}
                <input
                  type="text"
                  name="conditions"
                  value={patientDetails.conditions}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          ) : (
            <ul className="profile-list">
              <li>Height: {patientDetails.height}cm</li>
              <li>Weight: {patientDetails.weight}lbs</li>
              <li>Blood Pressure: {patientDetails.bloodPressure}</li>
              <li>Allergies: {patientDetails.allergies}</li>
              <li>Prescriptions: {patientDetails.prescriptions}</li>
              <li>Underlying Conditions: {patientDetails.conditions}</li>
            </ul>
          )}
          <button className = "profile-button" onClick={handleEditToggle}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="profile-appointment-request">
          <h3>Patient Appointment Request</h3>
          <textarea className="profile-textarea" readOnly value={appointmentRequest}></textarea>
        </div>
      </div>

      <div className="logs">
        <div className="new-log">
          <h3>New Log</h3>
          <p className="reason-preview">Reason: {appointmentRequest}</p>
          <textarea
            placeholder="Assessment..."
            value={newAssessment}
            onChange={(e) => setNewAssessment(e.target.value)}
          />
          <textarea
            placeholder="Prescription..."
            value={newPrescription}
            onChange={(e) => setNewPrescription(e.target.value)}
          />
          <button className = "profile-button" onClick={addLog}>Submit</button>
        </div>

        <div className="log-history">
          <h3>Log History</h3>
          <input
            type="text"
            placeholder="Search logs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredLogs.map((log, index) => (
            <div
              key={index}
              className="log-entry"
              onClick={() => toggleLogDetails(index)}
            >
              <h4>{log.date}</h4>
              <p>Reason for Visit: {log.reason.substring(0, 50)}...</p>
              <div id={`log-details-${index}`} className="log-details">
                <p>Assessment: {log.assessment}</p>
                <p>Prescription: {log.prescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <button onClick={() => navigate(-1)} className = "profile-button">
        Go Back
      </button> */}
    </div>
    </div>
  );
};

export default PatientProfile;
