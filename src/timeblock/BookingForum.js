import React, { useState } from "react";
import "./BookingAppointment.css";
import {useNavigate } from "react-router-dom";

const BookingForum = (patientTime) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [reason, setReason] = useState("");
  const [doctor, setDoctor] = useState("");
  const [specificRequests, setSpecificRequests] = useState("");
  const navigate = useNavigate();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (!reason || !doctor) {
      alert("Please fill in all fields and select a time slot.");
      return;
    }
    // alert(
    //   `Appointment booked:\nTime: ${patientTime}\nReason: ${reason}\nDoctor: ${doctor}\nRequests: ${specificRequests}`
    // );
    navigate('/patient-booked')
  };

  return (
    <div className="timeblock-body">
    <div className="booking-container">
      <div className="appointment-form">
        <label>
          Reason for Appointment:
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="">Select</option>
            <option value="Checkup">Checkup</option>
            <option value="Consultation">Consultation</option>
          </select>
        </label>
        <label>
          Doctor:
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">Select</option>
            <option value="Dr. John">Dr. John</option>
            <option value="Dr. Andrew">Dr. Andrew</option>
            <option value="Dr. Angela">Dr. Angela</option>
          </select>
        </label>
        <label>
          Specific Requests:
          <textarea
            placeholder="Write down your request..."
            value={specificRequests}
            onChange={(e) => setSpecificRequests(e.target.value)}
          ></textarea>
        </label>
        <button onClick={handleSubmit}>Book</button>
        <button className = "profile-button" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
    </div>
  );
};

export default BookingForum;
