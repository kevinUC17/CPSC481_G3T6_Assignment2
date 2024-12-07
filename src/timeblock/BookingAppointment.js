import React, { useState } from "react";
import "./BookingAppointment.css";
import {useNavigate } from "react-router-dom";
import BookingForum from "./BookingForum";

const BookingAppointment = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();
  const [unavailableTime, setUnavailableTime] = useState(["Tuesday 10am"]);

  const handleTimeSelect = (time) => {
    if (unavailableTime.includes(time)) {
      alert('Fully booked! Select another time block.');
    } else {
      setSelectedTime(time);
      navigate('/appointment-forum');
    }
  };

  
  return (
    <div className="timeblock-body">
    <div className="booking-container">
      <div className="schedule">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
          <div key={day} className="day-column">
            <h3>{day}</h3>
            <div className="time-column">
              {["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"].map((time) => {
                  const timeSlot = `${day} ${time}`;
                  const isUnavailable = unavailableTime.includes(timeSlot);        
                  return (
                  <div
                    key={timeSlot}
                    className={`time-slot ${
                      selectedTime === timeSlot ? "selected" : ""}${isUnavailable ? "booked" : ""}`}
                    onClick={() => handleTimeSelect(`${day} ${time}`)}
                    aria-label={isUnavailable ? `This time slot is fully booked` : `Select ${time} on ${day}`}
                  >
                    {isUnavailable ? "Fully Booked" : selectedTime === timeSlot ? "Selected" : time}
                  </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BookingAppointment;
