//This is just a copy of the original BookingAppointment.js

import React, { useState } from "react";
import "./BookingAppointment.css";
import {useNavigate } from "react-router-dom";

const BookingAppointment = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [reason, setReason] = useState("");
  const [doctor, setDoctor] = useState("");
  const [specificRequests, setSpecificRequests] = useState("");
  const navigate = useNavigate();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (!selectedTime || !reason || !doctor) {
      alert("Please fill in all fields and select a time slot.");
      return;
    }
    alert(
      `Appointment booked:\nTime: ${selectedTime}\nReason: ${reason}\nDoctor: ${doctor}\nRequests: ${specificRequests}`
    );
    navigate('/patient-booked')
  };

  return (
    <div className="timeblock-body">
    <div className="booking-container">
      <div className="schedule">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <div key={day} className="day-column">
            <h3>{day}</h3>
            <div className="time-column">
              {["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"].map(
                (time) => (
                  <div
                    key={`${day}-${time}`}
                    className={`time-slot ${
                      selectedTime === `${day} ${time}` ? "selected" : ""
                    }`}
                    onClick={() => handleTimeSelect(`${day} ${time}`)}
                  >
                    {selectedTime === `${day} ${time}` ? "Selected" : time}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

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
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
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
      </div>
    </div>
    </div>
  );
};

export default BookingAppointment;
