import React, { useState } from "react";
import "./DoctorTimeBlock.css";
import {useNavigate } from "react-router-dom";

const DoctorTimeBlock = () => {
  const navigate = useNavigate();
  const bookings = {
    Tuesday: {
      "10am": [{ name: "Amy Semple", arrived: true, ready: true }],
      // "1pm": [{ name: "Adam Smith", arrived: false, ready: false }],
    },
    Friday: {
      // "2pm": [{ name: "John Doe", arrived: false, ready: false }],
    },
  };

  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (day, time) => {
    setSelectedTime({
      day,
      time,
      patients: bookings[day]?.[time] || [],
    });
  };

  const toggleStatus = (index, field) => {
    // setSelectedTime((prev) => {
    //   const updatedPatients = [...prev.patients];
    //   updatedPatients[index] = {
    //     ...updatedPatients[index],
    //     [field]: !updatedPatients[index][field],
    //   };
    //   return { ...prev, patients: updatedPatients };
    // });
    //removed toggle interaction for docter interface in order to follow design
  };

  return (
    <div className="timeblock-body">
      <div className="doctor-container">
        <header className="doctor-header">
          <div>
          <h1>Weekly Schedule</h1>
            {/* <button className = "profile-button" onClick={() => navigate('/doctor')}>Go Back</button> */}
          </div>
          <div className="instructions">
            <p><strong>Schedule Guide:</strong></p>
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
                  className={`time-slot ${bookings[day]?.[time] ? "booked" : ""}`}
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
            <h3>{selectedTime.day}, {selectedTime.time}</h3>
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
                  <button className="patient-info-button" onClick={() => navigate('/patient-information')}
                  >Patient Information</button>
                </li>
              ))}
            </ul>
            <button onClick={() => setSelectedTime(null)}>
              Close Popup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorTimeBlock;
