import React, { useState } from "react";
import "./BookingAppointment.css";
import {useNavigate } from "react-router-dom";
import BookingForum from "./BookingForum";

const BookingAppointment = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    navigate('/appointment-forum');
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
    </div>
    <BookingForum
        selectedTime={selectedTime}
      />
    </div>
  );
};

export default BookingAppointment;
