import React, { useState } from "react";
import "./DoctorTimeblock.css";

const DoctorTimeblock = () => {
  const bookings = {
    Tuesday: {
      "10am": [{ name: "Amy Semple", arrived: true, ready: true }],
      "1pm": [{ name: "Adam Smith", arrived: false, ready: false }],
    },
    Friday: {
      "2pm": [{ name: "John Doe", arrived: true, ready: false }],
    },
  };

  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (day, time) => {
    setSelectedTime({ day, time, patients: bookings[day]?.[time] || [] });
  };

  const toggleStatus = (index, field) => {
    setSelectedTime((prev) => {
      const updatedPatients = [...prev.patients];
      updatedPatients[index][field] = !updatedPatients[index][field];
      return { ...prev, patients: updatedPatients };
    });
  };

  return (
    <div className="doctor-container">
      <header className="doctor-header">
        <h1>Doctor's Timeblock Interface</h1>
        <div className="instructions">
          <p><strong>Time-block Tutorial:</strong></p>
          <ul>
            <li>Click on a blue block to see booking information.</li>
            <li><span className="block-info white"></span> White: Not booked</li>
            <li><span className="block-info blue"></span> Blue: Booked</li>
          </ul>
        </div>
      </header>
      <div className="schedule-grid">
        <div className="time-column">
          {["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"].map((time) => (
            <div key={time} className="time-slot time-label">{time}</div>
          ))}
        </div>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <div key={day} className="day-column">
            <div className="day-header">{day}</div>
            {["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"].map((time) => (
              <div
                key={`${day}-${time}`}
                className={`time-slot ${
                  bookings[day]?.[time] ? "booked" : ""
                }`}
                onClick={() =>
                  bookings[day]?.[time] && handleTimeSelect(day, time)
                }
              >
                {bookings[day]?.[time]?.length
                  ? `${bookings[day][time].length} Booking(s)`
                  : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedTime && (
        <div className="popup">
          <h3>
            {selectedTime.day}, {selectedTime.time}
          </h3>
          <ul>
            {selectedTime.patients.map((patient, index) => (
              <li key={index} className="patient-details">
                <span className="patient-name">{patient.name}</span>
                <button
                  className={patient.arrived ? "status active" : "status"}
                  onClick={() => toggleStatus(index, "arrived")}
                >
                  {patient.arrived ? "Patient has Arrived" : "Mark Arrived"}
                </button>
                <button
                  className={patient.ready ? "status active" : "status"}
                  onClick={() => toggleStatus(index, "ready")}
                >
                  {patient.ready ? "Patient is Ready" : "Mark Ready"}
                </button>
              </li>
            ))}
          </ul>
          <button className="close-popup" onClick={() => setSelectedTime(null)}>
            Close Popup
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorTimeblock;
