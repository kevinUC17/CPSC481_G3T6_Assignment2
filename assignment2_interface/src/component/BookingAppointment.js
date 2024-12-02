import React from 'react';
import './BookingAppointment.css';
import GoBackButton from './GoBackButton';

function BookingAppointment() {
  return (
    <div className="booking-container">
      <GoBackButton />
      <h1>Booking an Appointment</h1>
      <p>To schedule an appointment, please fill in the details below.</p>
      {/* Add form or details for appointment booking */}
    </div>
  );
}

export default BookingAppointment;
